import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface MessageItem {
    id: number;
    sender: string;
    text: string;
    isMe: boolean;
    time: string;
}

interface ConversationItem {
    id: number;
    name: string;
    isGroup: boolean;
    lastMessage: string;
    unreadCount?: number;
    messages: MessageItem[];
}

export default function Home() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState<string>("user@example.com");
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    // Modal tạo cuộc trò chuyện
    const [showNewChatModal, setShowNewChatModal] = useState(false);
    const [newChatName, setNewChatName] = useState("");
    const [isNewGroup, setIsNewGroup] = useState(false);

    // Danh sách cuộc trò chuyện
    const [conversations, setConversations] = useState<ConversationItem[]>([
        {
            id: 1,
            name: "Phòng Chat Chung",
            isGroup: true,
            lastMessage: "Chào mừng bạn đến với NovaChat!",
            messages: [
                {
                    id: 1,
                    sender: "NovaChat Bot",
                    text: "Xin chào! Chào mừng bạn đã đăng nhập thành công vào hệ thống Chat 🎉",
                    isMe: false,
                    time: "10:30 AM"
                },
                {
                    id: 2,
                    sender: "Tôi",
                    text: "Giao diện mới trông rất hiện đại và mượt mà!",
                    isMe: true,
                    time: "10:32 AM"
                }
            ]
        },
        {
            id: 2,
            name: "Team Frontend Dev",
            isGroup: true,
            lastMessage: "Tailwind CSS và Glassmorphism nhìn rất đẹp.",
            messages: [
                {
                    id: 101,
                    sender: "Trưởng nhóm",
                    text: "Chào mọi người, dự án đã đồng bộ Prisma Client và OTP thành công!",
                    isMe: false,
                    time: "11:00 AM"
                },
                {
                    id: 102,
                    sender: "Tôi",
                    text: "Đã cập nhật giao diện và sẵn sàng trải nghiệm.",
                    isMe: true,
                    time: "11:05 AM"
                }
            ]
        },
        {
            id: 3,
            name: "Hỗ Trợ Kỹ Thuật (1:1)",
            isGroup: false,
            lastMessage: "Bạn cần hỗ trợ thêm thông tin gì không?",
            messages: [
                {
                    id: 201,
                    sender: "Support",
                    text: "Chào bạn, hệ thống gửi email OTP qua SMTP đã sẵn sàng hoạt động.",
                    isMe: false,
                    time: "09:15 AM"
                }
            ]
        }
    ]);

    const [activeConversationId, setActiveConversationId] = useState<number>(1);
    const [inputMessage, setInputMessage] = useState("");

    const activeConversation = conversations.find(c => c.id === activeConversationId) ?? conversations[0];

    useEffect(() => {
        async function fetchUserProfile() {
            try {
                const res = await fetch("/auth/check", {
                    method: "GET",
                    credentials: "same-origin"
                });
                const data = await res.json();
                if (data.success && data.user) {
                    if (data.user.email) {
                        setUserEmail(data.user.email);
                    } else if (data.user.userId) {
                        setUserEmail(`User #${data.user.userId}`);
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

    function handleSendMessage(e: React.FormEvent) {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const newMsg: MessageItem = {
            id: Date.now(),
            sender: "Tôi",
            text: inputMessage.trim(),
            isMe: true,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };

        setConversations(prev =>
            prev.map(conv => {
                if (conv.id === activeConversation.id) {
                    return {
                        ...conv,
                        lastMessage: newMsg.text,
                        messages: [...conv.messages, newMsg]
                    };
                }
                return conv;
            })
        );
        setInputMessage("");
    }

    function handleCreateConversation(e: React.FormEvent) {
        e.preventDefault();
        if (!newChatName.trim()) return;

        const newConv: ConversationItem = {
            id: Date.now(),
            name: newChatName.trim(),
            isGroup: isNewGroup,
            lastMessage: "Cuộc trò chuyện mới vừa được tạo",
            messages: [
                {
                    id: Date.now(),
                    sender: "Hệ thống",
                    text: `Cuộc trò chuyện "${newChatName.trim()}" đã bắt đầu!`,
                    isMe: false,
                    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                }
            ]
        };

        setConversations(prev => [newConv, ...prev]);
        setActiveConversationId(newConv.id);
        setNewChatName("");
        setIsNewGroup(false);
        setShowNewChatModal(false);
    }

    const filteredConversations = conversations.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="h-screen w-full bg-slate-50 flex flex-col overflow-hidden font-sans text-left">
            {/* Top Navigation Bar */}
            <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 flex items-center justify-between shadow-xs shrink-0 z-20">
                <div className="flex items-center gap-3">
                    {/* Mobile Menu Hamburger */}
                    <button
                        type="button"
                        onClick={() => setIsMobileSidebarOpen(prev => !prev)}
                        className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 cursor-pointer"
                        aria-label="Toggle sidebar"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-base font-bold text-gray-900 leading-tight">NovaChat Workspace</h1>
                        <div className="flex items-center gap-2">
                            <p className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Online
                            </p>
                            {isVerified && (
                                <span className="text-[10px] bg-indigo-50 text-indigo-600 font-semibold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                                    ✓ Đã xác thực
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Profile & Actions */}
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100/80 text-xs font-medium text-slate-700">
                        <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">
                            {userEmail[0]?.toUpperCase() ?? "U"}
                        </div>
                        <span className="max-w-[140px] truncate">{userEmail}</span>
                    </div>

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200/80 transition-all active:scale-[0.98] cursor-pointer"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Đăng xuất</span>
                    </button>
                </div>
            </header>

            {/* Chat Body Workspace */}
            <div className="flex-1 flex overflow-hidden relative">
                {/* Left Channels / Friends Sidebar */}
                <aside
                    className={`
                        w-72 sm:w-80 bg-white border-r border-slate-200/80 flex flex-col shrink-0 transition-transform duration-200 ease-in-out
                        fixed inset-y-16 left-0 z-30 md:static md:translate-x-0
                        ${isMobileSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"}
                    `}
                >
                    {/* Header Sidebar & Add Chat button */}
                    <div className="p-3.5 border-b border-slate-100 flex items-center justify-between gap-2">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Tìm kiếm cuộc trò chuyện..."
                                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-100 text-xs outline-none focus:ring-2 focus:ring-indigo-500/20 text-gray-800 placeholder:text-gray-400"
                            />
                            <svg className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowNewChatModal(true)}
                            title="Tạo cuộc trò chuyện mới"
                            className="p-1.5 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors cursor-pointer shrink-0"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>

                    {/* Conversations List */}
                    <div className="flex-1 overflow-y-auto p-2 space-y-1">
                        <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Hộp thư ({filteredConversations.length})
                        </div>

                        {filteredConversations.map((conv) => {
                            const isActive = conv.id === activeConversation.id;
                            return (
                                <button
                                    key={conv.id}
                                    type="button"
                                    onClick={() => {
                                        setActiveConversationId(conv.id);
                                        setIsMobileSidebarOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                                        isActive
                                            ? "bg-indigo-50/90 text-indigo-950 font-medium shadow-xs"
                                            : "hover:bg-slate-50 text-slate-700 font-normal"
                                    }`}
                                >
                                    <div
                                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs ${
                                            conv.isGroup
                                                ? "bg-gradient-to-tr from-indigo-500 to-purple-600 text-white"
                                                : "bg-slate-200 text-slate-700"
                                        }`}
                                    >
                                        {conv.isGroup ? "#" : conv.name[0]?.toUpperCase()}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-center">
                                            <p className="text-xs font-semibold truncate text-gray-900">{conv.name}</p>
                                        </div>
                                        <p className="text-[11px] text-gray-500 truncate mt-0.5">{conv.lastMessage}</p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                {/* Mobile Backdrop */}
                {isMobileSidebarOpen && (
                    <div
                        onClick={() => setIsMobileSidebarOpen(false)}
                        className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-20 md:hidden"
                    />
                )}

                {/* Main Chat Feed */}
                <main className="flex-1 flex flex-col bg-slate-50/50 min-w-0">
                    {/* Active Chat Header */}
                    <div className="h-14 bg-white border-b border-slate-200/80 px-4 sm:px-6 flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                                {activeConversation.isGroup ? "#" : activeConversation.name[0]?.toUpperCase()}
                            </div>
                            <div>
                                <h2 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                                    {activeConversation.name}
                                </h2>
                                <span className="text-[10px] text-emerald-600 font-medium">
                                    {activeConversation.isGroup ? "Nhóm trò chuyện" : "Trực tuyến"}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-slate-400">
                            <span className="text-xs font-medium text-slate-500">
                                {activeConversation.messages.length} tin nhắn
                            </span>
                        </div>
                    </div>

                    {/* Message List */}
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                        {activeConversation.messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex flex-col ${msg.isMe ? "items-end" : "items-start"}`}
                            >
                                <div className="flex items-center gap-2 mb-1 px-1">
                                    <span className="text-xs font-semibold text-slate-600">{msg.sender}</span>
                                    <span className="text-[10px] text-slate-400">{msg.time}</span>
                                </div>
                                <div
                                    className={`max-w-md px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-xs ${
                                        msg.isMe
                                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-none"
                                            : "bg-white text-slate-800 border border-slate-200/70 rounded-bl-none"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chat Input Bar */}
                    <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-md border-t border-slate-200/80">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2 max-w-4xl mx-auto">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder={`Nhắn tin vào ${activeConversation.name}...`}
                                className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl bg-slate-100 border border-transparent focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 text-sm outline-none transition-all placeholder:text-gray-400"
                            />
                            <button
                                type="submit"
                                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm shadow-md shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer flex items-center gap-2 shrink-0"
                            >
                                <span>Gửi</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </main>
            </div>

            {/* Modal Tạo Cuộc Trò Chuyện Mới */}
            {showNewChatModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
                    <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-base font-bold text-gray-900">Tạo cuộc trò chuyện mới</h3>
                            <button
                                type="button"
                                onClick={() => setShowNewChatModal(false)}
                                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form onSubmit={handleCreateConversation} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                                    Tên cuộc trò chuyện / Người nhận
                                </label>
                                <input
                                    type="text"
                                    value={newChatName}
                                    onChange={(e) => setNewChatName(e.target.value)}
                                    placeholder="Ví dụ: Team Backend, Bạn A..."
                                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="isGroupCheck"
                                    checked={isNewGroup}
                                    onChange={(e) => setIsNewGroup(e.target.checked)}
                                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 accent-indigo-600"
                                />
                                <label htmlFor="isGroupCheck" className="text-xs text-gray-700 cursor-pointer select-none">
                                    Đây là nhóm trò chuyện (Group Chat)
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2.5 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/20 active:scale-[0.99] transition-all cursor-pointer"
                            >
                                Bắt đầu trò chuyện
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
