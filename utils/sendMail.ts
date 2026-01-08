import nodemailer from 'nodemailer'
import { emailTemplate } from '../services/emailTemplates'


const {EMAIL_USER, EMAIL_PASS, BASE_URL} = process.env


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {user: EMAIL_USER, pass: EMAIL_PASS}
})

export const sendMail = async (email: string, token: string) => {
    const link = `${BASE_URL}/dashboard?token=${token}`

    await transporter.sendMail(
        {
            from: EMAIL_USER,
            to: email,
            subject: "MAGIC APP Authentication Link",
            html: emailTemplate(email, link)
        }
    )
}