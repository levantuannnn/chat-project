import type { AuthState, AuthAction } from "./authTypes.js";

interface AuthFormProps {
    auth: AuthState;
    dispatchAuth: React.Dispatch<AuthAction>;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onOpenOtp: () => void;
}

export default function AuthForm({ auth, dispatchAuth, onSubmit, onOpenOtp }: AuthFormProps) {
    const {
        email, password, passwordConfirmation,
        showPassword, showConfirmPassword,
        rememberMe, isRegistering, isSubmitting,
    } = auth;

    return (
        <form onSubmit={onSubmit} className="space-y-4">
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
                        onChange={(e) => dispatchAuth({ type: "SET_FIELD", field: "email", value: e.target.value })}
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
                        onChange={(e) => dispatchAuth({ type: "SET_FIELD", field: "password", value: e.target.value })}
                        type={showPassword ? "text" : "password"}
                        autoComplete={isRegistering ? "new-password" : "current-password"}
                        placeholder="••••••••"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => dispatchAuth({ type: "TOGGLE", field: "showPassword" })}
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

            {/* Confirm Password (Register mode only) */}
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
                            onChange={(e) => dispatchAuth({ type: "SET_FIELD", field: "passwordConfirmation", value: e.target.value })}
                            type={showConfirmPassword ? "text" : "password"}
                            autoComplete="new-password"
                            placeholder="••••••••"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => dispatchAuth({ type: "TOGGLE", field: "showConfirmPassword" })}
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

            {/* Remember Me & OTP trigger (Login mode only) */}
            {!isRegistering && (
                <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => dispatchAuth({ type: "TOGGLE", field: "rememberMe" })}
                            className="w-4 h-4 rounded text-indigo-600 border-gray-300 focus:ring-indigo-500 accent-indigo-600 transition-colors"
                        />
                        <span className="text-xs sm:text-sm text-gray-600 font-normal">Remember Me</span>
                    </label>
                    <button
                        type="button"
                        onClick={onOpenOtp}
                        className="text-xs sm:text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors hover:underline cursor-pointer"
                    >
                        Xác thực OTP?
                    </button>
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 px-4 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-[0.99] shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        <span>Đang xử lý...</span>
                    </>
                ) : (
                    <span>{isRegistering ? "Sign Up" : "Sign In"}</span>
                )}
            </button>
        </form>
    );
}

