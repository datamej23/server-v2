const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'mejpaystub@gmail.com',
        pass: 'kafrstgluijkylrk',
    },
});

module.exports = transporter;
