import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { authFetch } from "../utils/authFetch.js";

interface AuthResponse {
    message?: string;
    success?: boolean;
}

interface CurrentUserResponse {
    user?: {
        userId?: number;
        role?: string;
    };
    message?: string;
}

async function readJsonResponse<T>(response: Response): Promise<T> {
    const body = await response.text();
    if (!body.trim()) {
        throw new Error(`Máy chủ trả về phản hồi rỗng (HTTP ${response.status}).`);
    }

    try {
        return JSON.parse(body) as T;
    } catch {
        throw new Error(
            `Máy chủ trả về dữ liệu không phải JSON (HTTP ${response.status}).`
        );
    }
}

export default function Main() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    // OTP Modal states
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [otpEmail, setOtpEmail] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [otpStatusMsg, setOtpStatusMsg] = useState("");
    const [isOtpSuccess, setIsOtpSuccess] = useState(false);
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMessage("");
        setIsSuccess(false);

        if (isRegistering && password !== passwordConfirmation) {
            setMessage("Mật khẩu nhập lại không khớp.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(
                isRegistering ? "/auth/register" : "/auth/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                    credentials: "same-origin"
                }
            );
            const data = await readJsonResponse<AuthResponse>(response);

            if (!response.ok) {
                throw new Error(data.message ?? "Yêu cầu không thành công.");
            }

            if (isRegistering) {
                setIsSuccess(true);
                setMessage(data.message ?? "Đăng ký thành công! Hãy xác thực OTP để kích hoạt tài khoản.");
                // Tự động mở modal OTP và gửi mã xác thực
                setOtpEmail(email);
                setShowOtpModal(true);
                handleSendOtp(email);
                return;
            }

            const profileResponse = await authFetch("/auth/me");
            const profile = await readJsonResponse<CurrentUserResponse>(profileResponse);

            if (!profileResponse.ok) {
                throw new Error(profile.message ?? "Access token không hợp lệ.");
            }

            setIsSuccess(true);
            setMessage("Đăng nhập thành công! Đang chuyển hướng...");
            setTimeout(() => {
                navigate("/home");
            }, 500);

        } catch (error: unknown) {
            setIsSuccess(false);
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Không thể kết nối đến máy chủ."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    async function handleSendOtp(targetEmail?: string) {
        const mailToSend = targetEmail ?? otpEmail;
        if (!mailToSend) {
            setOtpStatusMsg("Vui lòng nhập email trước khi gửi OTP.");
            return;
        }
        setIsSendingOtp(true);
        setOtpStatusMsg("");
        try {
            const res = await fetch("/auth/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: mailToSend })
            });
            const data = await readJsonResponse<AuthResponse>(res);
            if (!res.ok) throw new Error(data.message ?? "Không thể gửi OTP.");
            setIsOtpSuccess(true);
            setOtpStatusMsg(data.message ?? "Mã OTP đã được gửi đến email của bạn.");
        } catch (err) {
            setIsOtpSuccess(false);
            setOtpStatusMsg(err instanceof Error ? err.message : "Lỗi khi gửi OTP.");
        } finally {
            setIsSendingOtp(false);
        }
    }

    async function handleVerifyOtp(e: React.FormEvent) {
        e.preventDefault();
        if (!otpEmail || !otpCode) {
            setOtpStatusMsg("Vui lòng nhập đầy đủ email và mã OTP.");
            return;
        }
        setIsVerifyingOtp(true);
        setOtpStatusMsg("");
        try {
            const res = await fetch("/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: otpEmail, otp: otpCode })
            });
            const data = await readJsonResponse<AuthResponse>(res);
            if (!res.ok) throw new Error(data.message ?? "Mã OTP không hợp lệ.");
            setIsOtpSuccess(true);
            setOtpStatusMsg(data.message ?? "Xác thực email thành công! Bạn có thể đăng nhập ngay.");
            setTimeout(() => {
                setShowOtpModal(false);
                setIsRegistering(false);
                setPassword("");
                setPasswordConfirmation("");
            }, 1200);
        } catch (err) {
            setIsOtpSuccess(false);
            setOtpStatusMsg(err instanceof Error ? err.message : "Xác thực OTP thất bại.");
        } finally {
            setIsVerifyingOtp(false);
        }
    }

    function toggleMode() {
        setIsRegistering((current) => !current);
        setMessage("");
        setPassword("");
        setPasswordConfirmation("");
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/50 overflow-hidden text-left">
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

            {/* Glassmorphism Card */}
            <div className="relative w-full max-w-[440px] bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-indigo-500/10 transition-all duration-300 z-10">
                {/* Brand & Header */}
                <div className="flex flex-col items-center text-center mb-8">
                    {/* Brand Logo */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-4 transition-transform hover:scale-105 duration-200">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                        {isRegistering ? "Tạo tài khoản mới" : "Welcome Back"}
                    </h1>
                    <p className="text-sm text-gray-500 mt-1.5 font-normal">
                        {isRegistering
                            ? "Sign up to start your journey"
                            : "Sign in to continue your journey"}
                    </p>
                </div>

                {/* Google Sign-in Button */}
                <button
                    type="button"
                    onClick={() => setMessage("Đăng nhập bằng Google hiện đang được cập nhật!")}
                    className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-gray-200 bg-white/90 hover:bg-gray-50/90 text-gray-700 font-medium text-sm transition-all shadow-xs hover:border-gray-300 hover:shadow-sm active:scale-[0.99] cursor-pointer mb-6"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.26-2.09 3.57-5.17 3.57-8.15z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.15C3.26 21.36 7.34 24 12 24z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.27 14.24A7.18 7.18 0 0 1 4.9 12c0-.78.14-1.54.37-2.24V6.61H1.28A11.96 11.96 0 0 0 0 12c0 1.92.45 3.74 1.28 5.39l3.99-3.15z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.28 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
                        />
                    </svg>
                    <span>{isRegistering ? "Sign up with Google" : "Sign in with Google"}</span>
                </button>

                {/* Divider */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200/80" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white/95 px-3 text-gray-400 font-medium tracking-wider">
                            Or continue with
                        </span>
                    </div>
                </div>

                {/* Message Alert */}
                {message && (
                    <div
                        className={`mb-5 p-3.5 rounded-xl text-sm flex items-start gap-2.5 transition-all ${
                            isSuccess
                                ? "bg-emerald-50 border border-emerald-200/80 text-emerald-800"
                                : "bg-rose-50 border border-rose-200/80 text-rose-800"
                        }`}
                    >
                        {isSuccess ? (
                            <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )}
                        <span className="flex-1 leading-snug">{message}</span>
                    </div>
                )}

                {/* Main Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input */}
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                            Email address
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                            <input
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50/80 border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                type="email"
                                autoComplete="email"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                            Password
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input
                                className="w-full pl-10 pr-11 py-2.5 rounded-xl bg-gray-50/80 border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                type={showPassword ? "text" : "password"}
                                autoComplete={isRegistering ? "new-password" : "current-password"}
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password (Register mode) */}
                    {isRegistering && (
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                                Confirm Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-600 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <input
                                    className="w-full pl-10 pr-11 py-2.5 rounded-xl bg-gray-50/80 border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200"
                                    value={passwordConfirmation}
                                    onChange={(event) => setPasswordConfirmation(event.target.value)}
                                    type={showConfirmPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                >
                                    {showConfirmPassword ? (
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Remember Me & Forgot Password & OTP Trigger */}
                    {!isRegistering ? (
                        <div className="flex items-center justify-between pt-1">
                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded text-indigo-600 border-gray-300 focus:ring-indigo-500 accent-indigo-600 transition-colors"
                                />
                                <span className="text-xs sm:text-sm text-gray-600 font-normal">
                                    Remember Me
                                </span>
                            </label>

                            <button
                                type="button"
                                onClick={() => {
                                    setOtpEmail(email);
                                    setShowOtpModal(true);
                                    setOtpStatusMsg("");
                                }}
                                className="text-xs sm:text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors hover:underline cursor-pointer"
                            >
                                Xác thực OTP?
                            </button>
                        </div>
                    ) : null}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 py-3 px-4 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-[0.99] shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>
                                <span>Đang xử lý...</span>
                            </>
                        ) : (
                            <span>{isRegistering ? "Sign Up" : "Sign In"}</span>
                        )}
                    </button>
                </form>

                {/* Footer Switcher */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    {isRegistering ? (
                        <p>
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={toggleMode}
                                className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline cursor-pointer"
                            >
                                Sign In
                            </button>
                        </p>
                    ) : (
                        <p>
                            Don't have an account?{" "}
                            <button
                                type="button"
                                onClick={toggleMode}
                                className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline cursor-pointer"
                            >
                                Sign Up
                            </button>
                        </p>
                    )}
                </div>
            </div>

            {/* OTP Verification Modal */}
            {showOtpModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
                    <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
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
                                onClick={() => setShowOtpModal(false)}
                                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {otpStatusMsg && (
                            <div className={`mb-4 p-3 rounded-xl text-xs font-medium ${isOtpSuccess ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-rose-50 text-rose-800 border border-rose-200"}`}>
                                {otpStatusMsg}
                            </div>
                        )}

                        <form onSubmit={handleVerifyOtp} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Email cần xác thực</label>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        value={otpEmail}
                                        onChange={(e) => setOtpEmail(e.target.value)}
                                        placeholder="user@example.com"
                                        className="flex-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-500 focus:outline-none"
                                        required
                                    />
                                    <button
                                        type="button"
                                        disabled={isSendingOtp}
                                        onClick={() => handleSendOtp()}
                                        className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors cursor-pointer shrink-0 disabled:opacity-60"
                                    >
                                        {isSendingOtp ? "Đang gửi..." : "Gửi mã"}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Mã OTP (6 chữ số)</label>
                                <input
                                    type="text"
                                    maxLength={6}
                                    value={otpCode}
                                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ""))}
                                    placeholder="123456"
                                    className="w-full text-center tracking-[8px] font-bold text-lg px-4 py-3 rounded-xl border border-gray-200 text-indigo-700 bg-slate-50 focus:bg-white focus:border-indigo-500 focus:outline-none"
                                    required
                                />
                            </div>

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
            )}
        </div>
    );
}
