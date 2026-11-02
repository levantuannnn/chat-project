import type {
    ResultSetHeader,
    RowDataPacket
} from "mysql2/promise";
import pool from "../db/db.user.js";

interface UserRow extends RowDataPacket {
    id: number;
    email: string;
    usePassword: string;
}

export async function searchUser(email: string): Promise<UserRow | null> {
    const sql = "SELECT id, email, usePassword FROM usetime WHERE email = ?";
    const [rows] = await pool.query<UserRow[]>(sql, [email]);
    return rows[0] ?? null;
}

export async function addUser(email: string, usePassword: string): Promise<ResultSetHeader> {
    const sql = "INSERT INTO usetime (email, usePassword) VALUES (?, ?)";
    const [result] = await pool.query<ResultSetHeader>(sql, [email, usePassword]);
    return result;
}
export async function addrefeshToken(
    userId: number,
    token: string,
    createAt: Date,
    expiresAt: Date
): Promise<ResultSetHeader> {
    const sql = "INSERT INTO refestoken (userId, token, expiresAt, createdAt) VALUES (?, ?, ?, ?)";
    const [result] = await pool.query<ResultSetHeader>(sql, [
        userId,
        token,
        expiresAt,
        createAt
    ]);
    return result;
}
