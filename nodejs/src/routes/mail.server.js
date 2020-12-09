import express from 'express'
import MailServer from '../mail.server/mail.server.js'
const route = express.Router()

route.get('/sendmail', async (req, res) => {
    let sendMail = new MailServer("leductoan16397@gmail.com", "send by nodejs")
    try {
        let send = await sendMail.sendEmail()
        res.json({ message: "sent mail successfully" })
    } catch (error) {
        res.json({ error })
    }

})

export default route;