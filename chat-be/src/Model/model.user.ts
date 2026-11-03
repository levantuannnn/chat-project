import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import pool from "../db/db.user.js";

interface UserRow extends RowDataPacket {
    id: number;
    email: string;
    usePassword: string;
}
interface RefreshTokenRow extends RowDataPacket {
    token: string,
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
export async function getRefreshToken(userId: number): Promise<RefreshTokenRow | null> {
    const sql = "SELECT token FROM refestoken WHERE userId = ? ORDER BY createdAt DESC LIMIT 1";
    const [result] = await pool.query<RefreshTokenRow[]>(sql, [userId]);
    return result[0] ?? null;
}

export async function replaceRefreshToken(
    userId: number,
    token: string,
    createAt: Date,
    expiresAt: Date
): Promise<void> {
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        await connection.query("DELETE FROM refestoken WHERE userId = ?", [userId]);
        await connection.query(
            "INSERT INTO refestoken (userId, token, expiresAt, createdAt) VALUES (?, ?, ?, ?)",
            [userId, token, expiresAt, createAt]
        );
        await connection.commit();
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
}
