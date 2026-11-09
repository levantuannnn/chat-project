
/// <reference types="node" />
import "dotenv/config";
import { defineConfig } from "prisma/config";

function getDatabaseUrl(): string {
    const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
    if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASSWORD || !DB_NAME) {
        throw new Error("Missing database configuration in DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, or DB_NAME");
    }
    const url = new URL("mysql://localhost");
    url.hostname = DB_HOST;
    url.port = DB_PORT;
    url.username = DB_USER;
    url.password = DB_PASSWORD;
    url.pathname = `/${DB_NAME}`;
    return url.toString();
}

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations"
    },
    datasource: {
        url: getDatabaseUrl()
    }
});
