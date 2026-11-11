import { Request, Response, NextFunction } from "express";
import transporter from "../config/mail.config.js";
import { saveOtp, verifyOtp as verifyOtpModel } from "../model/model.otp.js";

export const sendMail = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Test SMTP",
            html: `
                <h1>Hello!</h1>
                <p>This is a test email from Node.js TypeScript.</p>
            `,
        });

        return res.status(200).json({
            success: true,
            message: "Email sent successfully",
        });

    } catch (error) {
        next(error);
    }
};

export const sendOtp = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || typeof email !== "string" || !emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Email không hợp lệ"
            });
        }

        // Tạo mã 6 chữ số ngẫu nhiên
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        await saveOtp(email, otp, 5);

        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Mã xác thực OTP của bạn - NovaChat",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 24px; max-width: 480px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                    <h2 style="color: #4f46e5; margin-top: 0;">Xác thực tài khoản NovaChat</h2>
                    <p style="color: #334155; font-size: 15px;">Chào bạn, mã xác thực OTP của bạn là:</p>
                    <div style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #4f46e5; margin: 24px 0; padding: 14px; background: #eef2ff; text-align: center; border-radius: 10px;">
                        ${otp}
                    </div>
                    <p style="color: #64748b; font-size: 13px; line-height: 1.5;">
                        Mã này có hiệu lực trong vòng <strong>5 phút</strong>. Vui lòng không chia sẻ mã cho bất kỳ ai khác.
                    </p>
                </div>
            `,
        });

        return res.status(200).json({
            success: true,
            message: "Mã OTP đã được gửi thành công đến email của bạn",
        });

    } catch (error) {
        next(error);
    }
};

export const verifyOtpController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                success: false,
                message: "Vui lòng nhập đầy đủ email và mã OTP",
            });
        }

        const isValid = await verifyOtpModel(email, String(otp).trim());
        if (!isValid) {
            return res.status(400).json({
                success: false,
                message: "Mã OTP không chính xác hoặc đã hết hạn",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Xác thực OTP thành công!",
        });

    } catch (error) {
        next(error);
    }
};