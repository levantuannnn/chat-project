import mysql from "mysql2/promise";
import "dotenv/config";

async function fix() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "123456",
        database: process.env.DB_NAME || "ChatRealTime"
    });

    console.log("Đã kết nối thành công tới MySQL!");

    try {
        // Tìm tất cả các khóa ngoại trên bảng refestoken
        const [rows] = await connection.query(`
            SELECT CONSTRAINT_NAME 
            FROM information_schema.TABLE_CONSTRAINTS 
            WHERE TABLE_SCHEMA = ? 
              AND TABLE_NAME = 'refestoken' 
              AND CONSTRAINT_TYPE = 'FOREIGN KEY'
        `, [process.env.DB_NAME || "ChatRealTime"]);

        console.log("Danh sách khóa ngoại hiện tại trên bảng refestoken:", rows);

        for (const row of rows) {
            const fkName = row.CONSTRAINT_NAME;
            console.log(`Đang xóa khóa ngoại bị kẹt: ${fkName}...`);
            await connection.query(`ALTER TABLE \`refestoken\` DROP FOREIGN KEY \`${fkName}\``);
            console.log(`✓ Đã xóa xong ${fkName}!`);
        }

        console.log("\n🎉 HOÀN TẤT! Bạn có thể chạy lại: npx prisma db push");
    } catch (err) {
        console.error("Lỗi:", err.message);
    } finally {
        await connection.end();
    }
}

fix();

