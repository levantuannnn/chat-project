import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState<string>("user@example.com");
    const [inputMessage, setInputMessage] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, sender: "Antigravity Bot", text: "Xin chào! Chào mừng bạn đã đăng nhập thành công vào hệ thống Chat 🎉", isMe: false, time: "11:20 AM" },
        { id: 2, sender: "Tôi", text: "Giao diện mới trông rất hiện đại và mượt mà!", isMe: true, time: "11:22 AM" }
    ]);

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

        const newMsg = {
            id: Date.now(),
            sender: "Tôi",
            text: inputMessage.trim(),
            isMe: true,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        setMessages((prev) => [...prev, newMsg]);
        setInputMessage("");
    }

    return (
        <div className="h-screen w-full bg-slate-50 flex flex-col overflow-hidden font-sans">
            {/* Top Navigation Bar */}
            <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 flex items-center justify-between shadow-xs shrink-0 z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-base font-bold text-gray-900 leading-tight">NovaChat Workspace</h1>
                        <p className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Online
                        </p>
                    </div>
                </div>

                {/* Right Profile & Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-100/80 text-xs font-medium text-slate-700">
                        <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">
                            {userEmail[0]?.toUpperCase() ?? "U"}
                        </div>
                        <span className="max-w-[150px] truncate">{userEmail}</span>
                    </div>

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200/80 transition-all active:scale-[0.98] cursor-pointer"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Đăng xuất</span>
                    </button>
                </div>
            </header>

            {/* Chat Body Workspace */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Channels / Friends Sidebar */}
                <aside className="w-72 bg-white border-r border-slate-200/80 hidden md:flex flex-col">
                    <div className="p-4 border-b border-slate-100">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm đoạn chat..."
                                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 text-xs outline-none focus:ring-2 focus:ring-indigo-500/20 text-gray-800 placeholder:text-gray-400"
                            />
                            <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3 space-y-1">
                        <div className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Phòng chat chung
                        </div>
                        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50/80 text-indigo-900 font-semibold text-xs transition-colors cursor-pointer">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                                #
                            </div>
                            <div className="text-left flex-1 truncate">
                                <p className="truncate">Phòng Chat Chung</p>
                                <span className="text-[10px] text-indigo-500 font-normal">Đang hoạt động</span>
                            </div>
                        </button>
                    </div>
                </aside>

                {/* Main Chat Feed */}
                <main className="flex-1 flex flex-col bg-slate-50/50">
                    {/* Message List */}
                    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex flex-col ${msg.isMe ? "items-end" : "items-start"}`}
                            >
                                <div className="flex items-center gap-2 mb-1">
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
                    <div className="p-4 bg-white/90 backdrop-blur-md border-t border-slate-200/80">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2 max-w-4xl mx-auto">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Nhập tin nhắn của bạn..."
                                className="flex-1 px-4 py-3 rounded-xl bg-slate-100 border border-transparent focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 text-sm outline-none transition-all placeholder:text-gray-400"
                            />
                            <button
                                type="submit"
                                className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-sm shadow-md shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
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
        </div>
    );
}
