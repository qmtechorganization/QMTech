// @ts-nocheck
import nodemailer from "nodemailer";
import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export async function POST({ request }) {
  try {
    if (!env.SMTP_USER || !env.SMTP_PASSWORD) {
      return json({ success: false, message: "Email service is not configured" }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST || "smtp.titan.email",
      port: Number(env.SMTP_PORT || 587),
      secure: env.SMTP_SECURE === "true",
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASSWORD,
      },
    });
    const { body } = await request.json();

    const mailOptions = {
      from: env.SMTP_FROM || env.SMTP_USER,
      to: env.SMTP_TO || "info@tech.q-matters.com",
      bcc: env.SMTP_BCC || "contact@q-matters.com",
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
