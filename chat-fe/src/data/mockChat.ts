import type { ConversationItem } from "../types/chat.types.js";

export const initialConversations: ConversationItem[] = [
    {
        id: 1,
        name: "Phòng Chat Chung",
        isGroup: true,
        lastMessage: "Chào mừng bạn đến với NovaChat Real-time!",
        messages: [
            {
                id: 1,
                sender: "NovaChat Bot",
                text: "Xin chào! Phòng chat Real-time qua Socket.IO đã sẵn sàng hoạt động 🚀",
                isMe: false,
                time: "10:30 AM"
            }
        ]
    },
    {
        id: 2,
        name: "Team Frontend & Backend",
        isGroup: true,
        lastMessage: "Code đã được tách gọn gàng.",
        messages: [
            {
                id: 101,
                sender: "Tech Lead",
                text: "Code đã được chia nhỏ theo Custom Hook và Component riêng biệt, rất dễ đọc!",
                isMe: false,
                time: "11:00 AM"
            }
        ]
    },
    {
        id: 3,
        name: "Hỗ Trợ Kỹ Thuật (1:1)",
        isGroup: false,
        lastMessage: "Bạn cần hỗ trợ gì thêm không?",
        messages: [
            {
                id: 201,
                sender: "Support",
                text: "Chào bạn, tin nhắn gửi ở đây sẽ lập tức truyền sang máy khác qua WebSocket.",
                isMe: false,
                time: "09:15 AM"
            }
        ]
    }
];

