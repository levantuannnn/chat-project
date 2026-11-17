import type { Server, Socket } from "socket.io";
import { sendMessage, toggleReaction, getMessageReactions } from "../model/model.chat.js";

interface SendMessagePayload {
    conversationId: number;
    senderId: number;
    content: string;
}

interface TypingPayload {
    conversationId: number;
    userName: string;
}

interface ReactionPayload {
    messageId: number;
    conversationId: number;
    userId: number;
    emoji: string;
}

export function registerSocketHandlers(io: Server) {
    io.on("connection", (socket: Socket) => {
        console.log(`[Socket.io] Client đã kết nối: ${socket.id}`);

        // 1. Tham gia phòng trò chuyện (Join room)
        socket.on("join_room", (conversationId: number | string) => {
            const roomName = `room_${conversationId}`;
            socket.join(roomName);
            console.log(`[Socket.io] Socket ${socket.id} đã vào phòng: ${roomName}`);
        });

        // 2. Rời phòng trò chuyện (Leave room)
        socket.on("leave_room", (conversationId: number | string) => {
            const roomName = `room_${conversationId}`;
            socket.leave(roomName);
            console.log(`[Socket.io] Socket ${socket.id} đã rời phòng: ${roomName}`);
        });

        // 3. Xử lý gửi tin nhắn Real-time & lưu vào database
        socket.on("send_message", async (
            payload: SendMessagePayload,
            callback?: (res: { success: boolean; data?: unknown; error?: string }) => void
        ) => {
            try {
                const { conversationId, senderId, content } = payload;
                if (!conversationId || !senderId || !content?.trim()) {
                    if (callback) callback({ success: false, error: "Dữ liệu tin nhắn không hợp lệ" });
                    return;
                }

                // Lưu tin nhắn vào MySQL qua hàm sendMessage trong model.chat
                const savedMessage = await sendMessage(
                    Number(conversationId),
                    Number(senderId),
                    content.trim()
                );

                const roomName = `room_${conversationId}`;

                // Phát tin nhắn đến tất cả thành viên trong phòng trò chuyện đó
                io.to(roomName).emit("receive_message", savedMessage);

                if (callback) {
                    callback({ success: true, data: savedMessage });
                }
            } catch (error) {
                console.error("[Socket.io] Lỗi khi xử lý send_message:", error);
                if (callback) {
                    callback({ success: false, error: "Không thể lưu và gửi tin nhắn" });
                }
            }
        });

        // 4. Sự kiện người dùng đang nhập tin nhắn (Typing indicator)
        socket.on("typing", (payload: TypingPayload) => {
            const roomName = `room_${payload.conversationId}`;
            socket.to(roomName).emit("user_typing", payload);
        });

        // 5. Sự kiện dừng nhập tin nhắn (Stop typing)
        socket.on("stop_typing", (payload: TypingPayload) => {
            const roomName = `room_${payload.conversationId}`;
            socket.to(roomName).emit("user_stop_typing", payload);
        });

        // 6. Xử lý thả cảm xúc (Reaction) Real-time
        socket.on("send_reaction", async (payload: ReactionPayload) => {
            try {
                const { messageId, conversationId, userId, emoji } = payload;
                if (!messageId || !conversationId || !userId || !emoji) return;

                await toggleReaction(Number(messageId), Number(userId), emoji);
                const updatedReactions = await getMessageReactions(Number(messageId));

                const roomName = `room_${conversationId}`;
                io.to(roomName).emit("reaction_updated", {
                    messageId: Number(messageId),
                    conversationId: Number(conversationId),
                    reactions: updatedReactions
                });
            } catch (err) {
                console.error("[Socket.io] Lỗi xử lý reaction:", err);
            }
        });

        // 7. Ngắt kết nối
        socket.on("disconnect", () => {
            console.log(`[Socket.io] Client đã ngắt kết nối: ${socket.id}`);
        });
    });
}

