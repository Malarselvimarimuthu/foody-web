const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors({ origin: 'http://localhost:5001' })); // Update this to your frontend's URL
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

app.post('/sendlink', (req, res) => {
  const { email } = req.body;
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Download our app',
    text: 'Click on this link to download the app: http://example.com/download',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ success: false, message: 'Error sending email' });
    }
    res.status(200).send({ success: true, message: 'Email sent: ' + info.response });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
