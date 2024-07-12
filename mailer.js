/* File that send the mail using Nodemailer and contains the configurations */

import nodemailer from "nodemailer";
import dotenv from "dotenv";
// Use environment variables
dotenv.config();

const transporter = nodemailer.createTransport({
    pool: true,
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    maxConnections: 10,
    maxMessages: Infinity,
    auth: {
        // Save your sender email and password inside your environment vairables
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD
    }
});

const SENDMAIL = async (mailDetails, callback) => {
    try{
        const info = await transporter.sendMail(mailDetails);
        callback(info);
    } catch(err){
        console.log(err);
    }
};

export default SENDMAIL;