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

  exports.emailSender = functions.auth.user().onCreate(async (user) => {
    const mailOptions = {
        from: 'advancewebd007@gmail.com',
        to: user.email,
        subject: 'Welcome to your Cardiomyopathy Records! Verify your email',
        html: '<b><h1>Thank you for regisitering an account with us!</h1></b> <br>' +
            '<p>First things first, let us get you verified</p>' +
            '<p> Click the verificaton link below </p>' +
            '<a href= "${await generateEmailVerificationLink(user)}">Verify Your Account</a><br>' +
            '<p>Many thanks,</p>' +
            '<p>Group 6 Devlopment Team</p>',
        };

    try {
        await transport.sendMail(mailOptions);
        console.log('Email sent successfully');
    } 
        catch(error){
            console.error('Error sending Email', error);
        }
    });

async function generateEmailVerificationLink(user){
    const actionCodeSettings = {
        url: '/Users/andreareilly/Cardiomyopathies/cardiomyopathies-app/cardiomyopathies-app/cardiomyopathies-app/src/views/LoginView.vue',
        handleCodeInApp: true,
    };

    const link = await admin.auth().generateEmailVerificationLink(user.email, actionCodeSettings);
    return link;
}