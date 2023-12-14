const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
        user: 'mejpaystub@gmail.com',
        pass: 'MEJ@1969',
    },
});

module.exports = transporter;
