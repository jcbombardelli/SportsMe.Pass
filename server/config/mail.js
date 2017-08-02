var nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
        user: 'jc.bombardelli@live.com',
        pass: 'k41yps0980498'
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

var mailOptions = {
    from: 'jc.bombardelli@live.com',
    to: 'jc@bombardelli.ninja',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

module.exports = transporter;