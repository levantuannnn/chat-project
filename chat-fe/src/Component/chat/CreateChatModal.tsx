import type { FormEvent } from "react";

interface CreateChatModalProps {
    isOpen: boolean;
    onClose: () => void;
    newChatName: string;
    onNameChange: (val: string) => void;
    isNewGroup: boolean;
    onGroupChange: (val: boolean) => void;
    onSubmit: (e: FormEvent) => void;
}

export default function CreateChatModal({
    isOpen,
    onClose,
    newChatName,
    onNameChange,
    isNewGroup,
    onGroupChange,
    onSubmit
}: CreateChatModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-base font-bold text-gray-900">Tạo cuộc trò chuyện mới</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Tên cuộc trò chuyện / Người nhận
                        </label>
                        <input
                            type="text"
                            value={newChatName}
                            onChange={(e) => onNameChange(e.target.value)}
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
                            onChange={(e) => onGroupChange(e.target.checked)}
                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 accent-indigo-600 cursor-pointer"
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
    );
}

