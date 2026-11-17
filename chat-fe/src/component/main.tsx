import { useReducer, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { authFetch } from "../utils/authFetch.js";
import {
    authReducer, authInitial,
    otpReducer, otpInitial,
    readJsonResponse,
    type AuthResponse,
    type CurrentUserResponse,
} from "./auth/authTypes.js";
import AuthCard from "./auth/AuthCard.js";
import OtpModal from "./auth/OtpModal.js";

export default function Main() {
    const [auth, dispatchAuth] = useReducer(authReducer, authInitial);
    const [otp, dispatchOtp] = useReducer(otpReducer, otpInitial);
    const navigate = useNavigate();

    // ── Handlers ──────────────────────────────────────────────────────────────

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        dispatchAuth({ type: "SET_RESULT", message: "", isSuccess: false });

        if (auth.isRegistering && auth.password !== auth.passwordConfirmation) {
            dispatchAuth({ type: "SET_RESULT", message: "Mật khẩu nhập lại không khớp.", isSuccess: false });
            return;
        }

        dispatchAuth({ type: "SET_SUBMITTING", value: true });
        try {
            const response = await fetch(
                auth.isRegistering ? "/auth/register" : "/auth/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: auth.email, password: auth.password }),
                    credentials: "same-origin",
                }
            );
            const data = await readJsonResponse<AuthResponse>(response);
            if (!response.ok) throw new Error(data.message ?? "Yêu cầu không thành công.");

            if (auth.isRegistering) {
                dispatchAuth({ type: "SET_RESULT", message: data.message ?? "Đăng ký thành công! Hãy xác thực OTP để kích hoạt tài khoản.", isSuccess: true });
                dispatchOtp({ type: "OPEN_MODAL", email: auth.email });
                handleSendOtp(auth.email);
                return;
            }

            const profileResponse = await authFetch("/auth/me");
            const profile = await readJsonResponse<CurrentUserResponse>(profileResponse);
            if (!profileResponse.ok) throw new Error(profile.message ?? "Access token không hợp lệ.");

            dispatchAuth({ type: "SET_RESULT", message: "Đăng nhập thành công! Đang chuyển hướng...", isSuccess: true });
            setTimeout(() => navigate("/home"), 500);
        } catch (error: unknown) {
            dispatchAuth({
                type: "SET_RESULT",
                message: error instanceof Error ? error.message : "Không thể kết nối đến máy chủ.",
                isSuccess: false,
            });
        } finally {
            dispatchAuth({ type: "SET_SUBMITTING", value: false });
        }
    }

    async function handleSendOtp(targetEmail?: string) {
        const mailToSend = targetEmail ?? otp.otpEmail;
        if (!mailToSend) {
            dispatchOtp({ type: "SET_STATUS", message: "Vui lòng nhập email trước khi gửi OTP.", isSuccess: false });
            return;
        }
        dispatchOtp({ type: "SET_SENDING", value: true });
        dispatchOtp({ type: "CLEAR_STATUS" });
        try {
            const res = await fetch("/auth/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: mailToSend }),
            });
            const data = await readJsonResponse<AuthResponse>(res);
            if (!res.ok) throw new Error(data.message ?? "Không thể gửi OTP.");
            dispatchOtp({ type: "SET_STATUS", message: data.message ?? "Mã OTP đã được gửi đến email của bạn.", isSuccess: true });
        } catch (err) {
            dispatchOtp({ type: "SET_STATUS", message: err instanceof Error ? err.message : "Lỗi khi gửi OTP.", isSuccess: false });
        } finally {
            dispatchOtp({ type: "SET_SENDING", value: false });
        }
    }

    async function handleVerifyOtp(e: React.FormEvent) {
        e.preventDefault();
        if (!otp.otpEmail || !otp.otpCode) {
            dispatchOtp({ type: "SET_STATUS", message: "Vui lòng nhập đầy đủ email và mã OTP.", isSuccess: false });
            return;
        }
        dispatchOtp({ type: "SET_VERIFYING", value: true });
        dispatchOtp({ type: "CLEAR_STATUS" });
        try {
            const res = await fetch("/auth/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: otp.otpEmail, otp: otp.otpCode }),
            });
            const data = await readJsonResponse<AuthResponse>(res);
            if (!res.ok) throw new Error(data.message ?? "Mã OTP không hợp lệ.");
            dispatchOtp({ type: "SET_STATUS", message: data.message ?? "Xác thực email thành công! Bạn có thể đăng nhập ngay.", isSuccess: true });
            setTimeout(() => {
                dispatchOtp({ type: "CLOSE_MODAL" });
                dispatchAuth({ type: "CLEAR_CREDENTIALS" });
            }, 1200);
        } catch (err) {
            dispatchOtp({ type: "SET_STATUS", message: err instanceof Error ? err.message : "Xác thực OTP thất bại.", isSuccess: false });
        } finally {
            dispatchOtp({ type: "SET_VERIFYING", value: false });
        }
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/50 overflow-hidden text-left">
            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

            <AuthCard
                auth={auth}
                dispatchAuth={dispatchAuth}
                onSubmit={handleSubmit}
                onToggleMode={() => dispatchAuth({ type: "TOGGLE_MODE" })}
                onOpenOtp={() => dispatchOtp({ type: "OPEN_MODAL", email: auth.email })}
            />

            {otp.showOtpModal && (
                <OtpModal
                    otp={otp}
                    dispatchOtp={dispatchOtp}
                    onSendOtp={handleSendOtp}
                    onVerifyOtp={handleVerifyOtp}
                />
            )}
        </div>
    );
}
