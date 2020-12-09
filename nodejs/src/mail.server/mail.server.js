import nodemailer from 'nodemailer'

export default class MailServer {
    constructor(mailto, subject, text) {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: '15110334@student.hcmute.edu.vn', //Tài khoản gmail vừa tạo
                pass: '***************' //Mật khẩu tài khoản gmail vừa tạo
            }
        })
        let content = text || `
            <div style="padding: 10px; background-color: #003375">
                <div style="padding: 10px; background-color: white;">
                    <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
                    <span style="color: black">Đây là mail test</span>
                </div>
            </div>
        `;
        this.mainOptions = { // thiết lập đối tượng, nội dung gửi mail
            to: mailto,
            subject: subject,
            html: content //Nội dung html mình đã tạo trên kia :))
        }
    }

    sendEmail() {
        return this.transporter.sendMail(this.mainOptions);
    }

}