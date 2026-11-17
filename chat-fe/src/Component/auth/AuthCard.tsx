import type { AuthState, AuthAction } from "./authTypes.js";
import AuthForm from "./AuthForm.js";

interface AuthCardProps {
    auth: AuthState;
    dispatchAuth: React.Dispatch<AuthAction>;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onToggleMode: () => void;
    onOpenOtp: () => void;
}

export default function AuthCard({ auth, dispatchAuth, onSubmit, onToggleMode, onOpenOtp }: AuthCardProps) {
    const { isRegistering, message, isSuccess } = auth;

    return (
        <div className="relative w-full max-w-[440px] bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-indigo-500/10 transition-all duration-300 z-10">
            {/* Brand & Header */}
            <div className="flex flex-col items-center text-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-4 transition-transform hover:scale-105 duration-200">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                    {isRegistering ? "Tạo tài khoản mới" : "Welcome Back"}
                </h1>
                <p className="text-sm text-gray-500 mt-1.5 font-normal">
                    {isRegistering ? "Sign up to start your journey" : "Sign in to continue your journey"}
                </p>
            </div>

            {/* Google Sign-in Button */}
            <button
                type="button"
                onClick={() => dispatchAuth({ type: "SET_RESULT", message: "Đăng nhập bằng Google hiện đang được cập nhật!", isSuccess: false })}
                className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-gray-200 bg-white/90 hover:bg-gray-50/90 text-gray-700 font-medium text-sm transition-all shadow-xs hover:border-gray-300 hover:shadow-sm active:scale-[0.99] cursor-pointer mb-6"
            >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.26-2.09 3.57-5.17 3.57-8.15z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.15C3.26 21.36 7.34 24 12 24z" />
                    <path fill="#FBBC05" d="M5.27 14.24A7.18 7.18 0 0 1 4.9 12c0-.78.14-1.54.37-2.24V6.61H1.28A11.96 11.96 0 0 0 0 12c0 1.92.45 3.74 1.28 5.39l3.99-3.15z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.28 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.73-4.96z" />
                </svg>
                <span>{isRegistering ? "Sign up with Google" : "Sign in with Google"}</span>
            </button>

            {/* Divider */}
            <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200/80" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white/95 px-3 text-gray-400 font-medium tracking-wider">Or continue with</span>
                </div>
            </div>

            {/* Message Alert */}
            {message && (
                <div className={`mb-5 p-3.5 rounded-xl text-sm flex items-start gap-2.5 transition-all ${
                    isSuccess
                        ? "bg-emerald-50 border border-emerald-200/80 text-emerald-800"
                        : "bg-rose-50 border border-rose-200/80 text-rose-800"
                }`}>
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

            {/* Form */}
            <AuthForm
                auth={auth}
                dispatchAuth={dispatchAuth}
                onSubmit={onSubmit}
                onOpenOtp={onOpenOtp}
            />

            {/* Footer Switcher */}
            <div className="mt-8 text-center text-sm text-gray-500">
                {isRegistering ? (
                    <p>
                        Already have an account?{" "}
                        <button type="button" onClick={onToggleMode} className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline cursor-pointer">
                            Sign In
                        </button>
                    </p>
                ) : (
                    <p>
                        Don't have an account?{" "}
                        <button type="button" onClick={onToggleMode} className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors hover:underline cursor-pointer">
                            Sign Up
                        </button>
                    </p>
                )}
            </div>
        </div>
    );
}

