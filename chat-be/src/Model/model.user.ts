import prisma from "../db/db.user.js";

export async function searchUser(email: string) {
    return prisma.usetime.findUnique({
        where: { email }
    });
}

export async function addUser(email: string, usePassword: string) {
    return prisma.usetime.create({
        data: { email, usePassword }
    });
}

export async function getRefreshToken(
    userId: number
) {
    return prisma.refestoken.findFirst({
        where: { userId },
        orderBy: { createdAt: "desc" },
        select: { token: true }
    });
}

export async function replaceRefreshToken(
    userId: number,
    token: string,
    createAt: Date,
    expiresAt: Date
): Promise<void> {
    const existingToken = await prisma.refestoken.findFirst({
        where: { userId }
    });

    if (existingToken) {
        await prisma.refestoken.update({
            where: { id: existingToken.id },
            data: {
                token,
                createdAt: createAt,
                expiresAt
            }
        });
    } else {
        await prisma.refestoken.create({
            data: {
                userId,
                token,
                createdAt: createAt,
                expiresAt
            }
        });
    }
}
