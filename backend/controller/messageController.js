import nodemailer from "nodemailer";
import { Message } from "../models/messageSchema.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const sendMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                error: "All fields are required",
            });
        }

        // Save to Database
        const newMessage = await Message.create({ name, email, subject, message });

        // Configure Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,   // Your Gmail
                pass: process.env.SMTP_PASSWORD, // Your App Password
            },
        });

        // Email Options
        const mailOptions = {
            from: process.env.SMTP_EMAIL, // Sender email
            to: process.env.TO_EMAIL, // Your email to receive messages
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <h2>New Message Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Message sent successfully, and email notification sent!",
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
