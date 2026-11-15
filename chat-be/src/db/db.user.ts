import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/index.js";

function getRequiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing database configuration: ${name}`);
    }
    return value;
}

const port = Number(getRequiredEnv("DB_PORT"));
if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("DB_PORT must be an integer between 1 and 65535");
}

function createPrismaClient() {
    const adapter = new PrismaMariaDb({
        host: getRequiredEnv("DB_HOST"),
        port,
        user: getRequiredEnv("DB_USER"),
        password: getRequiredEnv("DB_PASSWORD"),
        database: getRequiredEnv("DB_NAME"),
        connectionLimit: 10
    });

    return new PrismaClient({ adapter });
}

declare global {
    // eslint-disable-next-line no-var
    var prismaGlobal: ReturnType<typeof createPrismaClient> | undefined;
}

// Singleton Pattern: Tái sử dụng kết nối trong môi trường dev với tsx watch
const prisma = globalThis.prismaGlobal ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalThis.prismaGlobal = prisma;
}

export default prisma;
