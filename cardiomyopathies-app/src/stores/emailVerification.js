// admin.initializeApp()

const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'advancewebd007@gmail.com',
    pass: 'Password-007'
  }
})

async function generateEmailVerificationLink(user) {
  const actionCodeSettings = {
    url: '/login',
    handleCodeInApp: true
  }
  const link = await admin.auth().generateEmailVerificationLink(user.email, actionCodeSettings)
  return link
}

export const emailSender = functions.auth.user().onCreate(async (user) => {
  const link = await generateEmailVerificationLink(user)

  const mailOptions = {
    from: 'advancewebd007@gmail.com',
    to: user.email,
    subject: 'Welcome to your Cardiomyopathy Records! Verify your email',
    html:
      '<b><h1>Thank you for registering an account with us!</h1></b> <br>' +
      '<p>First things first, let us get you verified</p>' +
      '<p> Click the verification link below </p>' +
      `<a href="${await generateEmailVerificationLink(user)}">Verify Your Account</a><br>` +
      '<p>Many thanks,</p>' +
      '<p>Group 6 Development Team</p>'
  }

  try {
    await transport.sendMail(mailOptions)
    console.log('Email sent successfully')
  } catch (error) {
    console.error('Error sending email', error)
  }
})
