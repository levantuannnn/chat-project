import type { RefObject } from "react";
import type { MessageItem } from "../../types/chat.types.js";

interface ChatMessageListProps {
    messages: MessageItem[];
    activeConversationName: string;
    isGroup: boolean;
    typingUser: string | null;
    messagesEndRef: RefObject<HTMLDivElement | null>;
}

export default function ChatMessageList({
    messages,
    activeConversationName,
    isGroup,
    typingUser,
    messagesEndRef
}: ChatMessageListProps) {
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
                {messages.map((msg) => (
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

