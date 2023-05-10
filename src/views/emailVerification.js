const nodemailer = require('nodemailer');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
    apiKey: 'AIzaSyDtHDqAiZSBSSe5S5U4FLQxcoStC6jW8FI',
    authDomain: 'cardiomyopathy-ada0f.firebaseapp.com',
    projectId: 'cardiomyopathy-ada0f',
    storageBucket: 'cardiomyopathy-ada0f.appspot.com',
    messagingSenderId: '66124791357',
    appId: '1:66124791357:web:7dd55dbc50febdda77b454',
    measurementId: 'G-X03WBZWS2B'
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
exports.sendMail = functions.auth.user().onCreate(async (user)=> {

const transporter = nodemailer.createTransport({
    // host: "sandbox.smtp.mailtrap.io",
    // port: 2525,
    service: "Gmail",
    auth: {
        user: "advancewebd007@gmail.com",
        pass: "Password-007",
        },
      });

const mailOptions = {
    from: "advancewebd007@gmail.com",
    to: user.email,
    subject: 'Welcome to your Cardiomyopathy Records! Verify your email.',
    html: `<b><h1>Thank you for registering an account with us!</h1></b> <br>
        <p>First things first, let us get you verified</p>
        <p> Click the verificaton link below </p>
        <a href= "${user.emailVerificationLink}">Verify Your Account</a><br>
        <p>Many thanks,</p>' 
        <p>Group 6 Devlopment Team</p>`,
}; 

transporter.sendMail(mailOptions, (error,info) => {
    if(error){
        console.log(error);
    } else {
        console.log('Verification Email sent to the Email Address you provided'+ info.response);
    }
});
});