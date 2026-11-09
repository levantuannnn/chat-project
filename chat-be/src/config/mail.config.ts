import nodemailer from "nodemailer"
import "dotenv/config"


const transporter = nodemailer.createTransport({ //Tạo một đối tượng chịu trách nhiệm kết nối đến SMTP Server.
    host: process.env.SMTP_HOST, //Địa chỉ máy chủ gửi email.
    port: Number(process.env.SMTP_PORT), //port ket noi den smtp
    secure: true,//Sử dụng kết nối TLS ngay từ đầu (phù hợp với port 465).

    auth: { //Thông tin xác thực tài khoản Gmail.
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

export default transporter;