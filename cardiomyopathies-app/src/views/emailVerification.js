const nodemailer = require('nodemailer');
const functions = require('firebase-fuctions');
const admin = require('firebase-admin');
admin.initializeApp();


const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "advancewebd007@gmail.com",
        pass: "Password-007",
   // host: "sandbox.smtp.mailtrap.io",
   // port: 2525,
    },
  });

  exports.emailSender = functions.auth.user().onCreate((user)=>{
    const mailOptions = {
        from: 'from@example.com',
        to: user.email,
        subject: 'Welcome to your Cardiomyopathy Records! Verify your email.',
        html: 
        '<b><h1>Thank you for regisitering an account with us!</h1></b> <br>' +
            '<p>First things first, let us get you verified</p>' +
            '<p> Click the verificaton link below </p>' +
            '<a href= "${user.emailVerificationLink}">Verify Your Account</a><br>' +
            '<p>Many thanks,</p>' +
            '<p>Group 6 Devlopment Team</p>',
    };

    return transporter.sendMail(mailOptions, (err, info)=> {
        if(err){
            return res.send(err.toString());
        }
        return res.send('Email sent successfully');
    });
 });
   


