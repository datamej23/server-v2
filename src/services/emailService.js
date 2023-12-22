const transporter = require("../config/email");

const sendEmail = async (emailData) => {
  try {
    const { to, subject, text, attachment } = emailData;

    if (!to) {
      throw new Error('Missing "to" address');
    }

    if (!subject) {
      throw new Error("Missing email subject");
    }

    if (!text) {
      throw new Error("Missing email body text");
    }

    if (!attachment) {
      throw new Error("Missing email attachment");
    }

    const mailOptions = {
      from: "mejpaystub@gmail.com",
      to,
      subject,
      html: text,
      attachments: [
        {
          filename: "paystub.pdf",
          content: attachment,
          encoding: "binary",
          ...(emailData.originalname && { filename: emailData.originalname }),
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent to ", to);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = { sendEmail };
