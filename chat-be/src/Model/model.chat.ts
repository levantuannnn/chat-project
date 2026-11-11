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
            }
        }
    });
}

