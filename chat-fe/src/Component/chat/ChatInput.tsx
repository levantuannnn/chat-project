import type { ChangeEvent, FormEvent } from "react";

interface ChatInputProps {
    inputMessage: string;
    activeConversationName: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSendMessage: (e: FormEvent) => void;
}

export default function ChatInput({
    inputMessage,
    activeConversationName,
    onInputChange,
    onSendMessage
}: ChatInputProps) {
    return (
        <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-md border-t border-slate-200/80">
            <form onSubmit={onSendMessage} className="flex items-center gap-2 max-w-4xl mx-auto">
                <input
                    type="text"
                    value={inputMessage}
                    onChange={onInputChange}
                    placeholder={`Nhắn tin vào ${activeConversationName}...`}
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
    );
}

