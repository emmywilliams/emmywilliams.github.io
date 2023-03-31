const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Replace with your email credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "emmywilliams74@gmail.com",
      pass: "William@1618",
    },
  });

  const mailOptions = {
    from: email,
    to: "emmywilliams74@gmail.com",
    subject: subject || "New contact form submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
