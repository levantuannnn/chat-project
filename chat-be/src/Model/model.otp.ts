import prisma from "../db/db.user.js";

export async function saveOtp(email: string, otp: string, expiresMinutes = 5) {
    const expiresAt = new Date(Date.now() + expiresMinutes * 60 * 1000);

    // Xóa OTP cũ nếu có của email này
    await prisma.emailOtp.deleteMany({
        where: { email }
    });

    // Lưu mã OTP mới
    return prisma.emailOtp.create({
        data: {
            email,
            otp,
            expiresAt
        }
    });
}

export async function verifyOtp(email: string, otp: string): Promise<boolean> {
    const record = await prisma.emailOtp.findFirst({
        where: {
            email,
            otp,
            expiresAt: {
                gt: new Date() // Chưa hết hạn
            }
        }
    });

    if (!record) {
        return false;
    }

    // Xác thực xong thì xóa OTP để không thể tái sử dụng
    await prisma.emailOtp.delete({
        where: { id: record.id }
    });

    // Cập nhật trạng thái xác thực cho user
    await prisma.usetime.updateMany({
        where: { email },
        data: { isVerified: true }
    });

    return true;
}

