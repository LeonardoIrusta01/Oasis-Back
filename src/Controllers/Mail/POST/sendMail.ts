import { RequestHandler } from "express";
import { contactEmail } from "../../../utils/nodemailer";

export const sendMail: RequestHandler = (req, res) => {
    const { name, email, subject, message } = req.body
    const { EMAIL_USER } = process.env

    const mail = {
        from: name,
        to: EMAIL_USER,
        subject,
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>`
    }
    contactEmail.sendMail(mail, (error) => {
        if (error) {
          res.status(400).json({status: "Rejected", payload: error.message});
        } else {
          res.status(200).json({ status: "Success", payload: "Message Sent" });
        }
      });
}