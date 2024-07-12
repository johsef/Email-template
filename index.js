/* Starting point of mail sender; */

import HTML_TEMPLATE from "./mail-template.js";
import SENDMAIL from "./mailer.js";
import USERS from "./users.js";
import dotenv from "dotenv";
dotenv.config();

//Subject of the email
const subject = '';

//Sample emails to be used for tessing
const SAMPLE_EMAILS = [
];

//Change SAMPLE EMAILS to USERS when needed
SAMPLE_EMAILS.forEach((user, index) => {
    const options = {
        from: process.env.APP_EMAIL,
        to: user.email,
        subject: subject,
        //HTML_TEMPLATE contains argument if needed for customization like firstname
        html: HTML_TEMPLATE(user.name)
    }

    //Timer used for interval between mail if sending to a large number of users - bulk mail
    setTimeout(() => {
        sendmail();            
    }, 1000 * index);
   
    //send mail with defined transport and mail options
    function sendmail() {
        SENDMAIL(options, (info)=>{
            // If mail was rejected, display emails not sent
            if (info.rejected.length) console.log("Rejected mail: ", info.rejected);
            //Display accepted emails
            if(info.accepted.length) console.log("Email successfully sent to ",info.accepted[0]);
            
        })
    }
})



