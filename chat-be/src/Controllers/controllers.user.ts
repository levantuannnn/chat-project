import bcrypt from "bcrypt";
import type { NextFunction, Request, Response } from "express";
import jwt, { type Algorithm, type JwtPayload } from "jsonwebtoken";
import {
    addUser,
    searchUser,
    getRefreshToken,
    replaceRefreshToken
} from "../model/model.user.js";

interface RegisterBody {
    email?: string;
    password?: string;
}

interface LoginBody {
    email?: string;
    password?: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload | string;
        }
    }
}
export function checkAuth(req: Request, res: Response) {
    return res.status(200).json({
        success: true,
        message: "Xác thực token thành công",
        user: req.user
    });
}
function getJwtConfig(): { secret: string; algorithm: Algorithm } {
    const secret = process.env.SECRET_KEY;
    const algorithm = process.env.KEY;

    if (!secret || !algorithm) {
        throw new Error("Missing JWT configuration");
    }

    return { secret, algorithm: algorithm as Algorithm };
}

function getErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : "Unknown error";
}

export function myInfo(req: Request, res: Response, next: NextFunction): void {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
        res.status(401).json({ message: "Thiếu access token" });
        return;
    }

    try {
        const { secret, algorithm } = getJwtConfig();
        req.user = jwt.verify(accessToken, secret, { algorithms: [algorithm] });
        next();
    } catch {
        res.status(401).json({ message: "Token không hợp lệ hoặc đã hết hạn" });
    }
}
export async function verifyRefreshToken(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    const refreshToken = req.cookies.refreshToken;

    if (typeof refreshToken !== "string" || !refreshToken) {
        res.status(401).json({ message: "Thiếu refresh token" });
        return;
    }

    let decoded: string | JwtPayload;

    try {
        const { secret, algorithm } = getJwtConfig();
        decoded = jwt.verify(refreshToken, secret, {
            algorithms: [algorithm]
        });
    } catch {
        res.status(401).json({ message: "Refresh token không hợp lệ hoặc đã hết hạn" });
        return;
    }

    if (
        typeof decoded === "string" ||
        typeof decoded.userId !== "number"
    ) {
        res.status(401).json({ message: "Payload refresh token không hợp lệ" });
        return;
    }

    try {
        const savedToken = await getRefreshToken(decoded.userId);

        if (!savedToken) {
            res.status(401).json({ message: "Không tìm thấy refresh token" });
            return;
        }

        const isMatch = await bcrypt.compare(refreshToken, savedToken.token);
        if (!isMatch) {
            res.status(401).json({ message: "Refresh token không hợp lệ" });
            return;
        }

        req.user = decoded;
        next();
    } catch (error) {
        next(error);
    }
}
export async function register(
    req: Request<Record<string, string>, unknown, RegisterBody>,
    res: Response
) {
    console.log("da chay vao");
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Vui lòng nhập đầy đủ email và password!"
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const result = await addUser(email, hashedPassword);

        return res.status(201).json({
            message: "Đăng ký thành công!",
            userId: result.id
        });
    } catch (error: unknown) {
        console.error("Lỗi đăng ký:", error);
        if (
            typeof error === "object" &&
            error !== null &&
            "code" in error &&
            error.code === "ER_DUP_ENTRY"
        ) {
            return res.status(400).json({ message: "Email này đã được sử dụng!" });
        }
        return res.status(500).json({
            message: "Lỗi server",
            error: getErrorMessage(error)
        });
    }
}
export function getAccessToken(req: Request, res: Response): void {
    const user = req.user;
    if (
        !user ||
        typeof user === "string" ||
        typeof user.userId !== "number" ||
        typeof user.role !== "string"
    ) {
        res.status(401).json({ message: "Không tìm thấy user hợp lệ" });
        return;
    }

    const { secret, algorithm } = getJwtConfig();
    const token = jwt.sign(
        {
            userId: user.userId,
            role: user.role
        },
        secret,
        {
            algorithm,
            expiresIn: "15m"
        }
    );
    res.cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 15 * 60 * 1000
    });
    res.cookie("refreshToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 15 * 60 * 1000
    });
    res.status(200).json({ message: "Đã cấp access token mới" });
}
//ham dang nhap vao sinh ra 2 token accesstoken va refrestoken de luu cookie
export async function login(
    req: Request<Record<string, string>, unknown, LoginBody>,
    res: Response
) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Vui lòng nhập đầy đủ email và password!"
            });
        }
        const user = await searchUser(email);
        if (!user || !(await bcrypt.compare(password, user.usePassword))) {
            return res.status(401).json({
                message: "Email hoặc mật khẩu không chính xác!"
            });
        }

        const { secret, algorithm } = getJwtConfig();
        const claims = { userId: user.id, role: "user" };
        const token = jwt.sign(claims, secret, {
            expiresIn: "15m",
            algorithm
        });
        const rawRefreshToken = jwt.sign(claims, secret, {
            expiresIn: "7d",
            algorithm
        });
        const hashedRefreshToken = await bcrypt.hash(rawRefreshToken, 10);
        const createAt = new Date();
        const expiresAt = new Date();
        expiresAt.setDate(createAt.getDate() + 7);
        await replaceRefreshToken(user.id, hashedRefreshToken, createAt, expiresAt);

        res.cookie("accessToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 15 * 60 * 1000
        });

        return res.status(200).json({
            message: "Đăng nhập thành công!",
            data: {
                id: user.id,
                email: user.email
            }
        });
    } catch (error: unknown) {
        console.error("Lỗi đăng nhập:", error);
        return res.status(500).json({
            message: "Lỗi server",
            error: getErrorMessage(error)
        });
    }
}

export function loginSystem(req: Request, res: Response) {
    return res.status(200).json({
        message: "Truy cập hệ thống thành công",
        user: req.user
    });
}

export function logout(_req: Request, res: Response) {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    });
    return res.status(200).json({ message: "Đăng xuất thành công" });
}
