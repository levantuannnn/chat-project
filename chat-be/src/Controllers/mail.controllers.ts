import transporter from "../config/mail.config.js";
interface SendMailData {
    to: string;
    subject: string;
    content: string;
}
export const sendMail = async (data: SendMailData) => {
    const result = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: data.to,
        subject: data.subject,
        html: data.content
    });

    return result;
};