interface ChatNavbarProps {
    userEmail: string;
    isVerified: boolean;
    isConnected: boolean;
    onToggleMobileSidebar: () => void;
    onLogout: () => void;
}

export default function ChatNavbar({
    userEmail,
    isVerified,
    isConnected,
    onToggleMobileSidebar,
    onLogout
}: ChatNavbarProps) {
    return (
        <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 flex items-center justify-between shadow-xs shrink-0 z-20">
            <div className="flex items-center gap-3">
                {/* Mobile Menu Hamburger */}
                <button
                    type="button"
                    onClick={onToggleMobileSidebar}
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
                    <h1 className="text-base font-bold text-gray-900 leading-tight">NovaChat Real-Time</h1>
                    <div className="flex items-center gap-2">
                        {isConnected ? (
                            <p className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                Real-time Sync
                            </p>
                        ) : (
                            <p className="text-xs text-amber-500 flex items-center gap-1 font-medium">
                                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                Đang kết nối Socket...
                            </p>
                        )}
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
                    onClick={onLogout}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200/80 transition-all active:scale-[0.98] cursor-pointer"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Đăng xuất</span>
                </button>
            </div>
        </header>
    );
}

