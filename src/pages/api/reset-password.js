// pages/api/reset-password.js

import nodemailer from "nodemailer";
import crypto from "crypto";

// Simpan informasi user sementara (ini sebaiknya diganti dengan database)
let users = [
  { email: "user@example.com", password: "password123", resetToken: null, resetTokenExpiry: null }
];

export default async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;

    // Cari user berdasarkan email
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Buat token reset password
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 jam dari sekarang

    // Simpan token dan expiry di user
    user.resetToken = resetToken;
    user.resetTokenExpiry = resetTokenExpiry;

    // Buat transporter email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME, // ganti dengan email Anda
        pass: process.env.EMAIL_PASSWORD, // ganti dengan password email Anda
      },
    });

    // Buat email reset password
    const resetUrl = `http://localhost:3000/reset-password?token=${resetToken}`;
    const mailOptions = {
      from: process.env.EMAIL_USERNAME, // ganti dengan email Anda
      to: email,
      subject: "Reset Password",
      text: `Klik tautan berikut untuk mereset password Anda: ${resetUrl}`,
    };

    // Kirim email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email" });
      } else {
        console.log("Email sent:", info.response);
        return res.status(200).json({ message: "Email sent" });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
