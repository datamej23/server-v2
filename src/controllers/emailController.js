const { sendEmail } = require("../services/emailService");
const fs = require("fs");

const sendEmailController = async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    const pdfFile = req.file;

    if (!to || !subject || !pdfFile) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    await sendEmail({
      to,
      subject,
      text,
      attachment: pdfFile.buffer,
      originalname: pdfFile.originalname,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error handling the request:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { sendEmailController };
