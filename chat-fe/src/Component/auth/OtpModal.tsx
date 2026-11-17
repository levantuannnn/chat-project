import type { OtpState, OtpAction } from "./authTypes.js";

interface OtpModalProps {
    otp: OtpState;
    dispatchOtp: React.Dispatch<OtpAction>;
    onSendOtp: (email?: string) => void;
    onVerifyOtp: (e: React.FormEvent) => void;
}

export default function OtpModal({ otp, dispatchOtp, onSendOtp, onVerifyOtp }: OtpModalProps) {
    const { otpEmail, otpCode, otpStatusMsg, isOtpSuccess, isSendingOtp, isVerifyingOtp } = otp;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Xác thực mã OTP</h3>
                            <p className="text-xs text-gray-500">Nhập mã 6 chữ số đã gửi về email</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => dispatchOtp({ type: "CLOSE_MODAL" })}
                        className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Status message */}
                {otpStatusMsg && (
                    <div className={`mb-4 p-3 rounded-xl text-xs font-medium ${
                        isOtpSuccess
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            : "bg-rose-50 text-rose-800 border border-rose-200"
                    }`}>
                        {otpStatusMsg}
                    </div>
                )}

                <form onSubmit={onVerifyOtp} className="space-y-4">
                    {/* Email field */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Email cần xác thực
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                value={otpEmail}
                                onChange={(e) => dispatchOtp({ type: "SET_EMAIL", value: e.target.value })}
                                placeholder="user@example.com"
                                className="flex-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-500 focus:outline-none"
                                required
                            />
                            <button
                                type="button"
                                disabled={isSendingOtp}
                                onClick={() => onSendOtp()}
                                className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors cursor-pointer shrink-0 disabled:opacity-60"
                            >
                                {isSendingOtp ? "Đang gửi..." : "Gửi mã"}
                            </button>
                        </div>
                    </div>

                    {/* OTP code field */}
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                            Mã OTP (6 chữ số)
                        </label>
                        <input
                            type="text"
                            maxLength={6}
                            value={otpCode}
                            onChange={(e) => dispatchOtp({ type: "SET_CODE", value: e.target.value.replace(/\D/g, "") })}
                            placeholder="123456"
                            className="w-full text-center tracking-[8px] font-bold text-lg px-4 py-3 rounded-xl border border-gray-200 text-indigo-700 bg-slate-50 focus:bg-white focus:border-indigo-500 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isVerifyingOtp}
                        className="w-full py-3 px-4 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/20 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60"
                    >
                        {isVerifyingOtp ? "Đang kiểm tra..." : "Xác nhận mã OTP"}
                    </button>
                </form>
            </div>
        </div>
    );
}

