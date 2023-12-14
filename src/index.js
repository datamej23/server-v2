const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const { sendEmailController } = require("./controllers/emailController");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());


// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST endpoint for sending emails with file upload
app.post("/send-email", upload.single("pdfFile"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    await sendEmailController(req, res);
  } catch (error) {
    console.error("Error handling the request:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
