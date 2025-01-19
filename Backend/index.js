const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route for contact form
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Configure nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email service provider
            auth: {
                user: 'saurabhband1234@gmail.com', // Replace with your email
                pass: 'abkk lsbk nzvy qieo', // Replace with your email password or app-specific password
            },
        });

        // Email options
        const mailOptions = {
            from: email,
            to: 'saurabhband1234@gmail.com', // Your email
            subject: `Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
