module.exports = {
    SMTP_HOST: process.env.MAILGUN_SMTP_HOST,                 // Mailgun SMTP host
    SMTP_PORT: process.env.MAILGUN_SMTP_PORT,                 // SMTP port
    SMTP_USER: process.env.MAILGUN_SMTP_USER,                 // Mailgun username from environment variables
    SMTP_PASS: process.env.MAILGUN_SMTP_PASS,                 // Mailgun password from environment variables
    RECEIVER_EMAIL: 'ramiyan.gangatharan@dcmail.ca',          // Email recipient
    DEFAULT_SUBJECT: 'WDF FORM',                              // Default subject for the email
};


// SMTP CREDENTIALS
// SMTP hostname: smtp.mailgun.org
// Port: 587 (recommended)
// Username: postmaster@sandbox61061269fa4e4aec8af244d252e25be3.mailgun.org
// Default password:
// ceaa0dde086f21cd90d68a383cb56c66-f55d7446-026f9353

// # Swaks is an smtp of CURL, install it first:
//   curl http://www.jetmore.org/john/code/swaks/files/swaks-20130209.0/swaks -o swaks
  
//   # Set the permissions for the script so you can run it
//   chmod +x swaks
  
//   # It's based on perl, so install perl
//   sudo apt-get -y install perl
  
//   # Now send!
//   ./swaks --auth \
//   	--server smtp.mailgun.org \
//   	--au postmaster@sandbox61061269fa4e4aec8af244d252e25be3.mailgun.org \
//   	--ap 3kh9umujora5 \
//   	--to bar@example.com \
//   	--h-Subject: "Hello" \
//   	--body 'Testing some Mailgun awesomness!'