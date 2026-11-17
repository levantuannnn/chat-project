import { useState, type RefObject } from "react";
import type { MessageItem, ReactionItem } from "../../types/chat.types.js";

const POPULAR_REACTIONS = ["❤️", "👍", "😂", "😮", "😢", "😡"];

interface ChatMessageListProps {
    messages: MessageItem[];
    activeConversationName: string;
    isGroup: boolean;
    typingUser: string | null;
    messagesEndRef: RefObject<HTMLDivElement | null>;
    currentUserId?: number;
    onReactMessage?: (messageId: number, emoji: string) => void;
}

function groupReactions(reactions?: ReactionItem[]) {
    if (!reactions || reactions.length === 0) return [];
    const counts: Record<string, { count: number; userIds: number[] }> = {};
    for (const r of reactions) {
        if (!counts[r.emoji]) {
            counts[r.emoji] = { count: 0, userIds: [] };
        }
        counts[r.emoji].count += 1;
        counts[r.emoji].userIds.push(r.userId);
    }
    return Object.entries(counts).map(([emoji, data]) => ({
        emoji,
        count: data.count,
        userIds: data.userIds
    }));
}

export default function ChatMessageList({
    messages,
    activeConversationName,
    isGroup,
    typingUser,
    messagesEndRef,
    currentUserId,
    onReactMessage
}: ChatMessageListProps) {
    // Lưu ID tin nhắn đang mở thanh chọn reaction trên mobile
    const [activeReactionMsgId, setActiveReactionMsgId] = useState<number | null>(null);

    return (
        <div className="flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden bg-slate-50/50">
            {/* Header of Active Chat Window */}
            <div className="h-14 bg-white border-b border-slate-200/80 px-4 sm:px-6 flex items-center justify-between shadow-2xs shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                        {isGroup ? "#" : activeConversationName[0]?.toUpperCase()}
                    </div>
                    <div>
                        <h2 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                            {activeConversationName}
                        </h2>
                        <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {isGroup ? "Nhóm Real-time" : "Trực tuyến"}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-xs font-medium text-slate-500">
                        {messages.length} tin nhắn
                    </span>
                </div>
            </div>

            {/* Message Bubble Feed */}
            <div className="flex-1 overflow-y-auto min-h-0 p-4 sm:p-6 space-y-4 overscroll-contain">
                {messages.map((msg) => {
                    const reactionGroups = groupReactions(msg.reactions);
                    const isPickerOpen = activeReactionMsgId === msg.id;

                    return (
                        <div
                            key={msg.id}
                            className={`flex flex-col group relative ${msg.isMe ? "items-end" : "items-start"}`}
                        >
                            <div className="flex items-center gap-2 mb-1 px-1">
                                <span className="text-xs font-semibold text-slate-600">{msg.sender}</span>
                                <span className="text-[10px] text-slate-400">{msg.time}</span>
                            </div>

                            {/* Bubble Container */}
                            <div className="relative max-w-md">
                                {/* Thanh chọn cảm xúc kiểu Messenger (hiện khi hover hoặc bấm nút 😄) */}
                                <div
                                    className={`
                                        absolute -top-10 z-20 flex items-center gap-1 px-2.5 py-1
                                        bg-white/95 backdrop-blur-xl rounded-full shadow-xl border border-slate-200/90
                                        animate-fade-in text-base select-none transition-all duration-150
                                        ${isPickerOpen ? "flex" : "hidden group-hover:flex"}
                                        ${msg.isMe ? "right-0" : "left-0"}
                                    `}
                                >
                                    {POPULAR_REACTIONS.map((emoji) => (
                                        <button
                                            key={emoji}
                                            type="button"
                                            onClick={() => {
                                                onReactMessage?.(msg.id, emoji);
                                                setActiveReactionMsgId(null);
                                            }}
                                            className="hover:scale-135 active:scale-90 transition-transform p-1 cursor-pointer leading-none"
                                            title={`Thả ${emoji}`}
                                        >
                                            {emoji}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex items-center gap-1.5">
                                    {/* Nút thả cảm xúc cho tin nhắn của người khác (bên phải bubble) */}
                                    {!msg.isMe && (
                                        <button
                                            type="button"
                                            onClick={() => setActiveReactionMsgId(prev => prev === msg.id ? null : msg.id)}
                                            title="Thả cảm xúc"
                                            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full text-slate-400 hover:text-indigo-600 hover:bg-slate-100 cursor-pointer order-last"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                    )}

                                    {/* Bong bóng tin nhắn */}
                                    <div
                                        className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-xs ${
                                            msg.isMe
                                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-none"
                                                : "bg-white text-slate-800 border border-slate-200/70 rounded-bl-none"
                                        }`}
                                    >
                                        {msg.text}
                                    </div>

                                    {/* Nút thả cảm xúc cho tin nhắn của chính mình (bên trái bubble) */}
                                    {msg.isMe && (
                                        <button
                                            type="button"
                                            onClick={() => setActiveReactionMsgId(prev => prev === msg.id ? null : msg.id)}
                                            title="Thả cảm xúc"
                                            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full text-slate-400 hover:text-indigo-600 hover:bg-slate-100 cursor-pointer order-first"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                {/* Danh sách Reaction đã thả bên dưới tin nhắn */}
                                {reactionGroups.length > 0 && (
                                    <div
                                        className={`flex flex-wrap items-center gap-1 mt-1 ${
                                            msg.isMe ? "justify-end" : "justify-start"
                                        }`}
                                    >
                                        {reactionGroups.map(({ emoji, count, userIds }) => {
                                            const hasMyReaction = currentUserId ? userIds.includes(currentUserId) : false;

                                            return (
                                                <button
                                                    key={emoji}
                                                    type="button"
                                                    onClick={() => onReactMessage?.(msg.id, emoji)}
                                                    title={hasMyReaction ? "Bấm để gỡ cảm xúc" : "Bấm để thả cảm xúc"}
                                                    className={`
                                                        flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold
                                                        shadow-2xs transition-all cursor-pointer active:scale-95
                                                        ${
                                                            hasMyReaction
                                                                ? "bg-indigo-50 border border-indigo-400 text-indigo-700"
                                                                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                                                        }
                                                    `}
                                                >
                                                    <span>{emoji}</span>
                                                    <span className="text-[11px] font-bold">{count}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}

                {/* Typing Indicator */}
                {typingUser && (
                    <div className="flex items-center gap-2 text-xs text-indigo-600 italic px-2 animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce" />
                        <span>{typingUser} đang soạn tin nhắn...</span>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>
        </div>
    );
}

