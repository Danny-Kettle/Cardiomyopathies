const functions = require('firebase-functions');
const emailjs = require('emailjs-com');
const admin = require('firebase-admin');

admin.initializeApp();

exports.sendEmail = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'You must be authenticated to send a verification email.'
    );
  }

  const userEmail = context.auth.token.email;
  const emailServiceId = 'service_69t65zr'; // replace with your EmailJS email service ID
  const emailjsUserId = 'advancewebd007@gmail.com'; // replace with your EmailJS user ID
  let emailTemplateId = ''; // replace with your EmailJS email template ID

  let templateParams = {};
  let subject = '';
  let recipientEmail = '';

  if (data.role === 'doctor') {
    emailTemplateId = 'template_5xm83id';
    subject = 'Verification Email for Doctor Account';
    recipientEmail = userEmail;
    templateParams = {
      verificationUrl: admin.auth().generateEmailVerificationLink(context.auth.token.email),
    };
  } else {
    emailTemplateId = 'template_3e5kr29';
    subject = 'Verification Email';
    recipientEmail = data.email;
    templateParams = {
      verificationUrl: admin.auth().generateEmailVerificationLink(data.email), // replace with your verification URL
      userEmail: data.email,
    };
  }

  emailjs
    .send(
      emailServiceId,
      emailTemplateId,
      {
        ...templateParams,
        to_email: recipientEmail,
        subject: subject,
      },
      emailjsUserId
    )
    .then(() => {
      console.log('Verification email sent successfully');
      return {
        success: true,
        message: 'Verification email sent successfully',
      };
    })
    .catch((error) => {
      console.error('Error sending verification email:', error);
      throw new functions.https.HttpsError('internal', 'Error sending verification email');
    });
});
