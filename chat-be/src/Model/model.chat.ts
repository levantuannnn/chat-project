import prisma from "../db/db.user.js";

export async function createConversation(memberUserIds: number[], isGroup = false, name?: string) {
    return prisma.conversation.create({
        data: {
            name,
            isGroup,
            members: {
                create: memberUserIds.map((userId) => ({
                    userId
                }))
            }
        },
        include: {
            members: {
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            name: true,
                            avatar: true
                        }
                    }
                }
            }
        }
    });
}

export async function getUserConversations(userId: number) {
    return prisma.conversation.findMany({
        where: {
            members: {
                some: { userId }
            }
        },
        include: {
            members: {
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            name: true,
                            avatar: true
                        }
                    }
                }
            },
            messages: {
                orderBy: { createdAt: "desc" },
                take: 1
            }
        },
        orderBy: { updatedAt: "desc" }
    });
}

export async function sendMessage(conversationId: number, senderId: number, content: string) {
    return prisma.$transaction(async (tx) => {
        const message = await tx.message.create({
            data: {
                conversationId,
                senderId,
                content
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                        avatar: true
                    }
                }
            }
        });

        // Cập nhật updatedAt của cuộc trò chuyện để đẩy lên đầu
        await tx.conversation.update({
            where: { id: conversationId },
            data: { updatedAt: new Date() }
        });

        return message;
    });
}
export async function loadMesage(conversationId: number, limit: number = 20, check?: number) {
    const messages = await prisma.message.findMany({
        where: {
            conversationId,
            ...(check ? { id: { lt: check } } : {}) // Nhỏ hơn số check (id < check)
        },
        orderBy: { id: "desc" }, // Sắp xếp giảm dần để lấy 20 tin nhắn ngay liền kề trước mốc check
        take: limit,             // Giới hạn số lượng tin nhắn (LIMIT)
        include: {
            sender: {
                select: {
                    id: true,
                    email: true,
                    name: true,
                    avatar: true
                }
            },
            reactions: {
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            avatar: true
                        }
                    }
                }
            }
        }
    });

    // Đảo ngược lại theo chiều tăng dần để hiển thị theo thứ tự thời gian từ cũ -> mới
    return messages.reverse();
}
export async function getMessages(conversationId: number, take = 50) {
    return prisma.message.findMany({
        where: { conversationId },
        orderBy: { createdAt: "asc" },
        take,
        include: {
            sender: {
                select: {
                    id: true,
                    email: true,
                    name: true,
                    avatar: true
                }
            },
            reactions: {
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            avatar: true
                        }
                    }
                }
            }
        }
    });
}

/**
 * 1. Thêm hoặc cập nhật Reaction (Thả cảm xúc)
 * Nếu người dùng đã thả cảm xúc cho tin nhắn này trước đó thì sẽ đổi sang emoji mới.
 */
export async function addReaction(messageId: number, userId: number, emoji: string) {
    return prisma.reaction.upsert({
        where: {
            messageId_userId: {
                messageId,
                userId
            }
        },
        update: {
            emoji
        },
        create: {
            messageId,
            userId,
            emoji
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    avatar: true
                }
            }
        }
    });
}

/**
 * 2. Lấy danh sách Reaction của 1 tin nhắn (Trả về)
 */
export async function getMessageReactions(messageId: number) {
    return prisma.reaction.findMany({
        where: { messageId },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    avatar: true
                }
            }
        },
        orderBy: { createdAt: "asc" }
    });
}

/**
 * 3. Thả/Gỡ cảm xúc thông minh kiểu Messenger (Toggle Reaction)
 * - Nếu bấm lại đúng emoji đã thả -> Gỡ bỏ reaction (Delete).
 * - Nếu bấm emoji khác hoặc chưa thả -> Thêm mới hoặc đổi sang emoji đó (Upsert).
 */
export async function toggleReaction(messageId: number, userId: number, emoji: string) {
    const existing = await prisma.reaction.findUnique({
        where: {
            messageId_userId: {
                messageId,
                userId
            }
        }
    });

    if (existing && existing.emoji === emoji) {
        // Gỡ bỏ reaction nếu bấm lại icon cũ
        await prisma.reaction.delete({
            where: {
                messageId_userId: {
                    messageId,
                    userId
                }
            }
        });
        return { action: "removed", messageId, userId, emoji };
    }

    // Thả mới hoặc đổi sang icon khác
    const reaction = await addReaction(messageId, userId, emoji);
    return { action: "added", reaction };
}

/**
 * 4. Xóa cảm xúc của người dùng trên tin nhắn
 */
export async function removeReaction(messageId: number, userId: number) {
    return prisma.reaction.deleteMany({
        where: { messageId, userId }
    });
}

