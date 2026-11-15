import type { ConversationItem } from "../../types/chat.types.js";

interface ChatSidebarProps {
    conversations: ConversationItem[];
    activeConversationId: number;
    searchTerm: string;
    onSearchChange: (val: string) => void;
    onSelectConversation: (id: number) => void;
    onOpenNewChatModal: () => void;
    isMobileSidebarOpen: boolean;
    onCloseMobileSidebar: () => void;
}

export default function ChatSidebar({
    conversations,
    activeConversationId,
    searchTerm,
    onSearchChange,
    onSelectConversation,
    onOpenNewChatModal,
    isMobileSidebarOpen,
    onCloseMobileSidebar
}: ChatSidebarProps) {
    const filteredConversations = conversations.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <aside
                className={`
                    w-72 sm:w-80 bg-white border-r border-slate-200/80 flex flex-col shrink-0 transition-transform duration-200 ease-in-out
                    fixed inset-y-16 left-0 z-30 md:static md:translate-x-0
                    ${isMobileSidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"}
                `}
            >
                {/* Search Bar & Create Chat Button */}
                <div className="p-3.5 border-b border-slate-100 flex items-center justify-between gap-2">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Tìm kiếm cuộc trò chuyện..."
                            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-100 text-xs outline-none focus:ring-2 focus:ring-indigo-500/20 text-gray-800 placeholder:text-gray-400"
                        />
                        <svg className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <button
                        type="button"
                        onClick={onOpenNewChatModal}
                        title="Tạo cuộc trò chuyện mới"
                        className="p-1.5 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors cursor-pointer shrink-0"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>

                {/* Conversation List */}
                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Phòng chat ({filteredConversations.length})
                    </div>

                    {filteredConversations.map((conv) => {
                        const isActive = conv.id === activeConversationId;
                        return (
                            <button
                                key={conv.id}
                                type="button"
                                onClick={() => onSelectConversation(conv.id)}
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
                    onClick={onCloseMobileSidebar}
                    className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-20 md:hidden"
                />
            )}
        </>
    );
}

