import nodemailer from "nodemailer";
import { json } from "@sveltejs/kit";

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "contact@tech.q-matters.com",
    pass: "QMatters@01",
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

export async function POST({ request }) {
  try {
    const { body } = await request.json();

    const mailOptions = {
      from: "contact@tech.q-matters.com",
      to: "info@tech.q-matters.com",
      bcc: "contact@q-matters.com",
      subject: "New Quote Request",
      text: body,
    };

    await transporter.sendMail(mailOptions);

    return json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return json(
      { success: false, message: "Failed to send email" },
      { status: 500 },
    );
  }
}
