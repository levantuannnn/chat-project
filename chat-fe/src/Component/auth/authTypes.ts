// ─── Shared API types ────────────────────────────────────────────────────────
export interface AuthResponse {
    message?: string;
    success?: boolean;
}

export interface CurrentUserResponse {
    user?: {
        userId?: number;
        role?: string;
    };
    message?: string;
}

export async function readJsonResponse<T>(response: Response): Promise<T> {
    const body = await response.text();
    if (!body.trim()) {
        throw new Error(`Máy chủ trả về phản hồi rỗng (HTTP ${response.status}).`);
    }
    try {
        return JSON.parse(body) as T;
    } catch {
        throw new Error(`Máy chủ trả về dữ liệu không phải JSON (HTTP ${response.status}).`);
    }
}

// ─── Auth Reducer ─────────────────────────────────────────────────────────────
export interface AuthState {
    email: string;
    password: string;
    passwordConfirmation: string;
    showPassword: boolean;
    showConfirmPassword: boolean;
    rememberMe: boolean;
    isRegistering: boolean;
    isSubmitting: boolean;
    message: string;
    isSuccess: boolean;
}

export type AuthAction =
    | { type: "SET_FIELD"; field: keyof Pick<AuthState, "email" | "password" | "passwordConfirmation" | "message">; value: string }
    | { type: "TOGGLE"; field: keyof Pick<AuthState, "showPassword" | "showConfirmPassword" | "rememberMe" | "isRegistering"> }
    | { type: "SET_SUBMITTING"; value: boolean }
    | { type: "SET_RESULT"; message: string; isSuccess: boolean }
    | { type: "TOGGLE_MODE" }
    | { type: "CLEAR_CREDENTIALS" };

export const authInitial: AuthState = {
    email: "",
    password: "",
    passwordConfirmation: "",
    showPassword: false,
    showConfirmPassword: false,
    rememberMe: false,
    isRegistering: false,
    isSubmitting: false,
    message: "",
    isSuccess: false,
};

export function authReducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case "SET_FIELD":
            return { ...state, [action.field]: action.value };
        case "TOGGLE":
            return { ...state, [action.field]: !state[action.field] };
        case "SET_SUBMITTING":
            return { ...state, isSubmitting: action.value };
        case "SET_RESULT":
            return { ...state, message: action.message, isSuccess: action.isSuccess };
        case "TOGGLE_MODE":
            return { ...state, isRegistering: !state.isRegistering, message: "", password: "", passwordConfirmation: "" };
        case "CLEAR_CREDENTIALS":
            return { ...state, password: "", passwordConfirmation: "", isRegistering: false };
        default:
            return state;
    }
}

// ─── OTP Reducer ──────────────────────────────────────────────────────────────
export interface OtpState {
    showOtpModal: boolean;
    otpEmail: string;
    otpCode: string;
    otpStatusMsg: string;
    isOtpSuccess: boolean;
    isSendingOtp: boolean;
    isVerifyingOtp: boolean;
}

export type OtpAction =
    | { type: "OPEN_MODAL"; email: string }
    | { type: "CLOSE_MODAL" }
    | { type: "SET_EMAIL"; value: string }
    | { type: "SET_CODE"; value: string }
    | { type: "SET_SENDING"; value: boolean }
    | { type: "SET_VERIFYING"; value: boolean }
    | { type: "SET_STATUS"; message: string; isSuccess: boolean }
    | { type: "CLEAR_STATUS" };

export const otpInitial: OtpState = {
    showOtpModal: false,
    otpEmail: "",
    otpCode: "",
    otpStatusMsg: "",
    isOtpSuccess: false,
    isSendingOtp: false,
    isVerifyingOtp: false,
};

export function otpReducer(state: OtpState, action: OtpAction): OtpState {
    switch (action.type) {
        case "OPEN_MODAL":
            return { ...state, showOtpModal: true, otpEmail: action.email, otpStatusMsg: "" };
        case "CLOSE_MODAL":
            return { ...state, showOtpModal: false };
        case "SET_EMAIL":
            return { ...state, otpEmail: action.value };
        case "SET_CODE":
            return { ...state, otpCode: action.value };
        case "SET_SENDING":
            return { ...state, isSendingOtp: action.value };
        case "SET_VERIFYING":
            return { ...state, isVerifyingOtp: action.value };
        case "SET_STATUS":
            return { ...state, otpStatusMsg: action.message, isOtpSuccess: action.isSuccess };
        case "CLEAR_STATUS":
            return { ...state, otpStatusMsg: "" };
        default:
            return state;
    }
}

