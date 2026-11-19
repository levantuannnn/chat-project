import { useEffect, useReducer, useRef, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { io, type Socket } from "socket.io-client";
import type { ConversationItem, MessageItem } from "../types/chat.types.js";
import { chatReducer, initialChatState } from "./chatReducer.js";

export default function useChat() {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(chatReducer, initialChatState);

    // Socket Refs
    const socketRef = useRef<Socket | null>(null);
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const activeConversation =
        state.conversations.find(c => c.id === state.activeConversationId) ??
        state.conversations[0];

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
                    dispatch({
                        type: "SET_USER_PROFILE",
                        payload: {
                            currentUserId:
                                data.user.id || data.user.userId
                                    ? Number(data.user.id || data.user.userId)
                                    : undefined,
                            userEmail: data.user.email,
                            isVerified:
                                typeof data.user.isVerified === "boolean"
                                    ? data.user.isVerified
                                    : undefined
                        }
                    });
                }
            } catch (err) {
                console.error("Không thể lấy thông tin user:", err);
            }
        }
        fetchUserProfile();
    }, []);

    // 3. Kết nối Socket.IO Real-time
    useEffect(() => {
        const socket = io({
            withCredentials: true,
            transports: ["websocket", "polling"],
            reconnectionAttempts: 10,
            reconnectionDelay: 1000
        });
        socketRef.current = socket;

        socket.on("connect", () => {
            dispatch({ type: "SET_CONNECTED", payload: true });
            socket.emit("join_room", state.activeConversationId);
        });

        socket.on("disconnect", () => {
            dispatch({ type: "SET_CONNECTED", payload: false });
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
            const isMe = Number(message.senderId) === state.currentUserId;
            const senderName = isMe ? "Tôi" : (message.sender?.name || message.sender?.email || "Người dùng");

            const newMsgItem: MessageItem = {
                id: message.id || Date.now(),
                sender: senderName,
                text: message.content,
                isMe,
                time: new Date(message.createdAt || Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                reactions: []
            };

            dispatch({
                type: "RECEIVE_MESSAGE",
                payload: {
                    conversationId: convId,
                    message: newMsgItem
                }
            });
        });

        // Lắng nghe trạng thái đang gõ (typing)
        socket.on("user_typing", (data: { conversationId: number; userName: string }) => {
            if (Number(data.conversationId) === state.activeConversationId) {
                dispatch({ type: "SET_TYPING_USER", payload: data.userName });
            }
        });

        socket.on("user_stop_typing", (data: { conversationId: number }) => {
            if (Number(data.conversationId) === state.activeConversationId) {
                dispatch({ type: "SET_TYPING_USER", payload: null });
            }
        });

        // Lắng nghe cập nhật cảm xúc (Reaction) Real-time
        socket.on("reaction_updated", (data: {
            messageId: number;
            conversationId: number;
            reactions: Array<{ id?: number; userId: number; emoji: string }>;
        }) => {
            dispatch({
                type: "UPDATE_REACTIONS",
                payload: {
                    conversationId: Number(data.conversationId),
                    messageId: Number(data.messageId),
                    reactions: data.reactions
                }
            });
        });

        return () => {
            socket.disconnect();
        };
    }, [state.currentUserId, state.activeConversationId]);

    // 4. Tự động tải 20 tin nhắn từ database khi vào phòng hoặc đổi phòng chat
    useEffect(() => {
        async function fetchRoomMessages() {
            try {
                const res = await fetch(`/chat/message/${state.activeConversationId}`, {
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
                        reactions?: Array<{ id?: number; userId: number; emoji: string }>;
                    }) => ({
                        id: msg.id,
                        sender: Number(msg.senderId) === state.currentUserId ? "Tôi" : (msg.sender?.name || msg.sender?.email || "Người dùng"),
                        text: msg.content,
                        isMe: Number(msg.senderId) === state.currentUserId,
                        time: new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                        reactions: msg.reactions || []
                    }));

                    dispatch({
                        type: "SET_ROOM_MESSAGES",
                        payload: {
                            conversationId: state.activeConversationId,
                            messages: formattedMessages
                        }
                    });
                }
            } catch (error) {
                console.error("Lỗi khi tải lịch sử tin nhắn:", error);
            }
        }

        if (state.activeConversationId) {
            fetchRoomMessages();
        }
    }, [state.activeConversationId, state.currentUserId]);

    // 5. Chọn phòng chat khác
    function handleSelectConversation(id: number) {
        if (socketRef.current && socketRef.current.connected) {
            socketRef.current.emit("leave_room", state.activeConversationId);
            socketRef.current.emit("join_room", id);
        }
        dispatch({ type: "SELECT_CONVERSATION", payload: id });
    }

    // 6. Xử lý gõ phím
    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "SET_INPUT_MESSAGE", payload: e.target.value });

        if (socketRef.current && socketRef.current.connected) {
            const displayName = state.userEmail.split("@")[0] || "Người dùng";
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

    // 7. Gửi tin nhắn Real-time
    function handleSendMessage(e: FormEvent) {
        e.preventDefault();
        const content = state.inputMessage.trim();
        if (!content) return;

        dispatch({ type: "SET_INPUT_MESSAGE", payload: "" });
        const displayName = state.userEmail.split("@")[0] || "Người dùng";

        if (socketRef.current && socketRef.current.connected) {
            socketRef.current.emit("stop_typing", {
                conversationId: activeConversation.id,
                userName: displayName
            });

            socketRef.current.emit("send_message", {
                conversationId: activeConversation.id,
                senderId: state.currentUserId,
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
            dispatch({
                type: "ADD_FALLBACK_MESSAGE",
                payload: {
                    conversationId: activeConversation.id,
                    message: fallbackMsg
                }
            });
        }
    }

    // 8. Tạo phòng chat mới
    function handleCreateConversation(e: FormEvent) {
        e.preventDefault();
        const trimmedName = state.newChatName.trim();
        if (!trimmedName) return;

        const newId = Date.now();
        const newConv: ConversationItem = {
            id: newId,
            name: trimmedName,
            isGroup: state.isNewGroup,
            lastMessage: "Cuộc trò chuyện mới vừa được tạo",
            messages: [
                {
                    id: Date.now(),
                    sender: "Hệ thống",
                    text: `Cuộc trò chuyện "${trimmedName}" đã được tạo thành công!`,
                    isMe: false,
                    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                }
            ]
        };

        if (socketRef.current && socketRef.current.connected) {
            socketRef.current.emit("leave_room", state.activeConversationId);
            socketRef.current.emit("join_room", newId);
        }

        dispatch({ type: "CREATE_CONVERSATION", payload: newConv });
    }

    // 9. Đăng xuất
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

    // 10. Thả / Gỡ cảm xúc (Reaction)
    function handleReactMessage(messageId: number, emoji: string) {
        if (socketRef.current && socketRef.current.connected) {
            socketRef.current.emit("send_reaction", {
                messageId,
                conversationId: activeConversation.id,
                userId: state.currentUserId,
                emoji
            });
        }
    }

    // 11. Chèn Emoji vào ô nhập tin nhắn
    function handleInsertEmoji(emoji: string) {
        dispatch({ type: "APPEND_INPUT_MESSAGE", payload: emoji });
    }

    // Helpers cập nhật state nhỏ tương thích component con
    const setIsMobileSidebarOpen = (val: boolean | ((prev: boolean) => boolean)) =>
        dispatch({ type: "SET_MOBILE_SIDEBAR", payload: val });

    const setSearchTerm = (term: string) =>
        dispatch({ type: "SET_SEARCH_TERM", payload: term });

    const setShowNewChatModal = (show: boolean) =>
        dispatch({ type: "SET_SHOW_NEW_CHAT_MODAL", payload: show });

    const setNewChatName = (name: string) =>
        dispatch({ type: "SET_NEW_CHAT_NAME", payload: name });

    const setIsNewGroup = (isGroup: boolean) =>
        dispatch({ type: "SET_IS_NEW_GROUP", payload: isGroup });

    const actions = {
        setIsMobileSidebarOpen,
        setSearchTerm,
        setShowNewChatModal,
        setNewChatName,
        setIsNewGroup,
        handleSelectConversation,
        handleInputChange,
        handleSendMessage,
        handleCreateConversation,
        handleReactMessage,
        handleInsertEmoji,
        handleLogout
    };

    return {
        state,
        activeConversation,
        refs: { messagesEndRef },
        actions
    };
}
