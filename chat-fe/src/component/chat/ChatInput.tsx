import { useState, useRef, useEffect, type ChangeEvent, type FormEvent } from "react";

const EMOJI_LIST = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😍",
    "🥰", "😘", "😎", "🤩", "🥳", "🤔", "🙄", "😭", "😤", "😡",
    "😱", "😴", "👍", "👎", "👏", "🙌", "🤝", "🙏", "✌️", "💪",
    "❤️", "🧡", "💛", "💚", "💙", "💜", "🔥", "✨", "🎉", "💯"
];

interface ChatInputProps {
    inputMessage: string;
    activeConversationName: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSendMessage: (e: FormEvent) => void;
    onSelectEmoji?: (emoji: string) => void;
}

export default function ChatInput({
    inputMessage,
    activeConversationName,
    onInputChange,
    onSendMessage,
    onSelectEmoji
}: ChatInputProps) {
    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef<HTMLDivElement | null>(null);

    // Đóng picker khi click ra ngoài
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setShowPicker(false);
            }
        }
        if (showPicker) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPicker]);

    function handlePickEmoji(emoji: string) {
        onSelectEmoji?.(emoji);
    }

    return (
        <div className="p-3 sm:p-4 bg-white/90 backdrop-blur-md border-t border-slate-200/80 relative">
            {/* Popup bảng chọn biểu tượng cảm xúc (Emoji Picker) */}
            {showPicker && (
                <div
                    ref={pickerRef}
                    className="absolute bottom-16 sm:bottom-20 left-4 sm:left-8 z-30 w-72 sm:w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 p-3 animate-fade-in text-left"
                >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                        <span className="text-xs font-bold text-slate-700">Biểu tượng cảm xúc</span>
                        <button
                            type="button"
                            onClick={() => setShowPicker(false)}
                            className="text-slate-400 hover:text-slate-600 text-xs p-1"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="grid grid-cols-8 gap-1.5 max-h-48 overflow-y-auto p-1">
                        {EMOJI_LIST.map((emoji) => (
                            <button
                                key={emoji}
                                type="button"
                                onClick={() => handlePickEmoji(emoji)}
                                className="w-8 h-8 flex items-center justify-center text-lg hover:bg-slate-100 rounded-lg hover:scale-125 transition-transform cursor-pointer leading-none active:scale-95"
                            >
                                {emoji}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <form onSubmit={onSendMessage} className="flex items-center gap-2 max-w-4xl mx-auto">
                {/* Nút mở Emoji Picker */}
                <button
                    type="button"
                    onClick={() => setShowPicker(prev => !prev)}
                    title="Chọn biểu tượng cảm xúc"
                    className="p-2 sm:p-2.5 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/70 transition-colors cursor-pointer shrink-0"
                >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

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

