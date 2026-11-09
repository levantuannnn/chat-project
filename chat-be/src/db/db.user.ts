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

const adapter = new PrismaMariaDb({
    host: getRequiredEnv("DB_HOST"),
    port,
    user: getRequiredEnv("DB_USER"),
    password: getRequiredEnv("DB_PASSWORD"),
    database: getRequiredEnv("DB_NAME")
});

const prisma = new PrismaClient({ adapter });

export default prisma;
