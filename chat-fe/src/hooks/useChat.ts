import { useEffect, useState, useRef, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { io, type Socket } from "socket.io-client";
import type { ConversationItem, MessageItem } from "../types/chat.types.js";
import { initialConversations } from "../data/mockChat.js";

export default function useChat() {
    const navigate = useNavigate();
    const [currentUserId, setCurrentUserId] = useState<number>(1);
    const [userEmail, setUserEmail] = useState<string>("user@example.com");
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [typingUser, setTypingUser] = useState<string | null>(null);

    // Modal tạo cuộc trò chuyện
    const [showNewChatModal, setShowNewChatModal] = useState(false);
    const [newChatName, setNewChatName] = useState("");
    const [isNewGroup, setIsNewGroup] = useState(false);

    // Socket Refs
    const socketRef = useRef<Socket | null>(null);
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    // State danh sách cuộc trò chuyện
    const [conversations, setConversations] = useState<ConversationItem[]>(initialConversations);
    const [activeConversationId, setActiveConversationId] = useState<number>(1);
    const [inputMessage, setInputMessage] = useState("");

    const activeConversation = conversations.find(c => c.id === activeConversationId) ?? conversations[0];

    // 1. Tự động cuộn xuống cuối tin nhắn mới
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [activeConversation?.messages]);

    // 2. Lấy thông tin user hiện tại từ API
    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const res = await fetch("/auth/check", {
                    method: "GET",
                    credentials: "same-origin"
                });
                const data = await res.json();
                if (data.success && data.user) {
                    if (data.user.id || data.user.userId) {
                        setCurrentUserId(Number(data.user.id || data.user.userId));
                    }
                    if (data.user.email) {
                        setUserEmail(data.user.email);
                    }
                    if (typeof data.user.isVerified === "boolean") {
                        setIsVerified(data.user.isVerified);
                    }
                }
            } catch (err) {
                console.error("Không thể lấy thông tin user:", err);
            }
        }
        fetchUserProfile();
    }, []);

    // 3. Kết nối Socket.IO Real-time (hỗ trợ cả dev proxy và Nginx production)
    useEffect(() => {
        const socket = io({
            withCredentials: true,
            transports: ["websocket", "polling"],
            reconnectionAttempts: 10,
            reconnectionDelay: 1000
        });
        socketRef.current = socket;

        socket.on("connect", () => {
            setIsConnected(true);
            socket.emit("join_room", activeConversationId);
        });

        socket.on("disconnect", () => {
            setIsConnected(false);
        });

        // Lắng nghe tin nhắn mới
        socket.on("receive_message", (message: {
            id?: number;
            conversationId: number;
            senderId: number;
            content: string;
            createdAt?: string;
            sender?: { name?: string; email?: string };
        }) => {
            const convId = Number(message.conversationId);
            const isMe = Number(message.senderId) === currentUserId;
            const senderName = isMe ? "Tôi" : (message.sender?.name || message.sender?.email || "Người dùng");

            const newMsgItem: MessageItem = {
                id: message.id || Date.now(),
                sender: senderName,
                text: message.content,
                isMe,
                time: new Date(message.createdAt || Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            };

            setConversations(prev => prev.map(conv => {
                if (conv.id === convId) {
                    if (conv.messages.some(m => m.id === newMsgItem.id)) return conv;
                    return {
                        ...conv,
                        lastMessage: newMsgItem.text,
                        messages: [...conv.messages, newMsgItem]
                    };
                }
                return conv;
            }));
        });

        // Lắng nghe trạng thái đang gõ (typing)
        socket.on("user_typing", (data: { conversationId: number; userName: string }) => {
            if (Number(data.conversationId) === activeConversationId) {
                setTypingUser(data.userName);
            }
        });

        socket.on("user_stop_typing", (data: { conversationId: number }) => {
            if (Number(data.conversationId) === activeConversationId) {
                setTypingUser(null);
            }
        });

        return () => {
            socket.disconnect();
        };
    }, [currentUserId, activeConversationId]);

    // 4. Tự động tải 20 tin nhắn từ database khi vào phòng hoặc đổi phòng chat
    useEffect(() => {
        async function fetchRoomMessages() {
            try {
                const res = await fetch(`/chat/message/${activeConversationId}`, {
                    method: "GET",
                    credentials: "same-origin"
                });
                const data = await res.json();

                if (data.success && Array.isArray(data.data) && data.data.length > 0) {
                    const formattedMessages: MessageItem[] = data.data.map((msg: {
                        id: number;
                        senderId: number;
                        content: string;
                        createdAt: string;
                        sender?: { name?: string; email?: string };
                    }) => ({
                        id: msg.id,
                        sender: Number(msg.senderId) === currentUserId ? "Tôi" : (msg.sender?.name || msg.sender?.email || "Người dùng"),
                        text: msg.content,
                        isMe: Number(msg.senderId) === currentUserId,
                        time: new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                    }));

                    setConversations(prev => prev.map(conv => {
                        if (conv.id === activeConversationId) {
                            return {
                                ...conv,
                                lastMessage: formattedMessages[formattedMessages.length - 1]?.text || conv.lastMessage,
                                messages: formattedMessages
                            };
                        }
                        return conv;
                    }));
                }
            } catch (error) {
                console.error("Lỗi khi tải lịch sử tin nhắn:", error);
            }
        }

        if (activeConversationId) {
            fetchRoomMessages();
        }
    }, [activeConversationId, currentUserId]);

    // 5. Chọn phòng chat khác
    function handleSelectConversation(id: number) {
        if (socketRef.current && socketRef.current.connected) {
            socketRef.current.emit("leave_room", activeConversationId);
            socketRef.current.emit("join_room", id);
        }
        setActiveConversationId(id);
        setIsMobileSidebarOpen(false);
        setTypingUser(null);
    }

    // 5. Xử lý gõ phím
    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        setInputMessage(e.target.value);

        if (socketRef.current && socketRef.current.connected) {
            const displayName = userEmail.split("@")[0] || "Người dùng";
            socketRef.current.emit("typing", {
                conversationId: activeConversation.id,
                userName: displayName
            });

            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
            typingTimeoutRef.current = setTimeout(() => {
                socketRef.current?.emit("stop_typing", {
                    conversationId: activeConversation.id,
                    userName: displayName
                });
            }, 1800);
        }
    }

    // 6. Gửi tin nhắn Real-time
    function handleSendMessage(e: FormEvent) {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const content = inputMessage.trim();
        setInputMessage("");

        const displayName = userEmail.split("@")[0] || "Người dùng";

        if (socketRef.current && socketRef.current.connected) {
            socketRef.current.emit("stop_typing", {
                conversationId: activeConversation.id,
                userName: displayName
            });

            socketRef.current.emit("send_message", {
                conversationId: activeConversation.id,
                senderId: currentUserId,
                content
            });
        } else {
            // Fallback khi mất kết nối socket
            const fallbackMsg: MessageItem = {
                id: Date.now(),
                sender: "Tôi",
                text: content,
                isMe: true,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            };
            setConversations(prev => prev.map(conv => conv.id === activeConversation.id ? {
                ...conv,
                lastMessage: fallbackMsg.text,
                messages: [...conv.messages, fallbackMsg]
            } : conv));
        }
    }

    // 7. Tạo phòng chat mới
    function handleCreateConversation(e: FormEvent) {
        e.preventDefault();
        if (!newChatName.trim()) return;

        const newId = Date.now();
        const newConv: ConversationItem = {
            id: newId,
            name: newChatName.trim(),
            isGroup: isNewGroup,
            lastMessage: "Cuộc trò chuyện mới vừa được tạo",
            messages: [
                {
                    id: Date.now(),
                    sender: "Hệ thống",
                    text: `Cuộc trò chuyện "${newChatName.trim()}" đã được tạo thành công!`,
                    isMe: false,
                    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                }
            ]
        };

        setConversations(prev => [newConv, ...prev]);
        handleSelectConversation(newId);
        setNewChatName("");
        setIsNewGroup(false);
        setShowNewChatModal(false);
    }

    // 8. Đăng xuất
    async function handleLogout() {
        try {
            await fetch("/auth/logout", {
                method: "POST",
                credentials: "same-origin"
            });
        } catch (error) {
            console.error("Lỗi khi đăng xuất:", error);
        } finally {
            navigate("/main");
        }
    }

    return {
        userEmail,
        isVerified,
        isConnected,
        isMobileSidebarOpen,
        setIsMobileSidebarOpen,
        conversations,
        activeConversation,
        searchTerm,
        setSearchTerm,
        typingUser,
        inputMessage,
        messagesEndRef,
        showNewChatModal,
        setShowNewChatModal,
        newChatName,
        setNewChatName,
        isNewGroup,
        setIsNewGroup,
        handleSelectConversation,
        handleInputChange,
        handleSendMessage,
        handleCreateConversation,
        handleLogout
    };
}

