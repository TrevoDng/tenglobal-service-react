
//import nodemailer from 'nodemailer';
//require('dotenv').config();
var nodemailer = require('nodemailer');

export const nodeEmailSender=(senderEmail, receiverEmail, clientEmailSubject, clientEmailMessage)=> {
    /*
  FIREBASE_API_KEY="AIzaSyCIPQCp4kWOjlHbx2l4HuzPlOl1ZBZBOm4",
FIREBASE_AUTH_DOMAIN="tenglobal-2a34b.firebaseapp.com",
FIREBASE_PROJECT_ID="tenglobal-2a34b",
FIREBASEBASE_STORAGE_BUCKET="tenglobal-2a34b.appspot.com",
FIREBASE_MESSAGING_SENDER_ID="468150163647",
FIREBASE_API_ID="1:468150163647:web:2fe6287aa5e96e35600e0a"

USER_EMAIL="trevor279@live.com";
USER_PASSWORD="Trevor@1684716!";
SERVICE="@outlook.com";
    */
  //const userEmail = process.env.USER_EMAIL
  //const userPassword = process.env.USER_PASSWORD
  //const emailService = process.env.USER_PASSWORD

  var transporter = nodemailer.createTransport({
        service: "@outlook.com",
        auth: {
          user: "trevor279@live.com",
          pass: "Trevor@1684716!"
        }
      });
      
      var mailOptions = {
        from: `${senderEmail}`,
        to: `${receiverEmail}`,
        subject: `${clientEmailSubject}`,
        text: `${clientEmailMessage}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}
   
    
  