const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const PORT = 8000;
const PropertiesReader = require('properties-reader');
// Send Email
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const upload = multer({
  storage: multer.memoryStorage(),   // keeps file in RAM (best for forwarding to AI)
  limits: { fileSize: 20 * 1024 * 1024 } // 20MB limit
});

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 25,
    secure: false,     // port 25 = not SSL
    auth: {
        user: 'mail@damicoishima.com',
        pass: 'P@ssw0rd7115'
    },
    tls: {
        ciphers: 'SSLv3'
    }
    // host: "139.28.232.136",
    // port: 25,
    // secure: false,     // port 25 = not SSL
    // tls: {
    //     rejectUnauthorized: false   // important for internal SMTP
    // }
});

app.use(cors());
app.use(express.json());
app.use(helmet());
// Handle file upload
app.post("/api/sendmail", upload.single('attachment'), async(req, res) => {
    try{
        const {name, subject, to, cc, bcc, body, attachment} = req.body;
        // console.log('Sent:',subject, to, cc, body);
        const info = await transporter.sendMail({
            from: 'mail@damicoishima.com',
            to: to,
            subject: subject,
            cc: cc,
            // text: body
            html: '<div>'+body+'</div>', 

            attachments: [
                {
                    filename: req.file.originalname,
                    path: req.file.path
                }
            ]
        });
        console.log('Sent:', info.messageId);
        res.status(200).json({status: true});
    }catch(err){
        console.log("sendMail error: ",err);
        res.status(500).json({ error: err.message, status: false });
    }
    //sendMail(subject, to, cc, body);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});