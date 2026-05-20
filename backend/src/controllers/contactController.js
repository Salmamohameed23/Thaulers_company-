import ContactMessage from "../models/ContactMessage.js";
import nodemailer from "nodemailer";

export const createContactMessage = async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    const newMessage = await ContactMessage.create({
      name,
      email,
      company,
      message,
    });

 const transporter = nodemailer.createTransport({
   host: process.env.SMTP_HOST,
   port: Number(process.env.SMTP_PORT),
   secure: Number(process.env.SMTP_PORT) === 465,
   auth: {
     user: process.env.SMTP_USER,
     pass: process.env.SMTP_PASS,
   },
   connectionTimeout: 15000,
   greetingTimeout: 15000,
   socketTimeout: 20000,
 });

    await transporter.verify();
    console.log("SMTP is ready");

    await transporter.sendMail({
      from: `"TOUGH HAULERS Website" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL,
      replyTo: email,
      subject: `New Contact Enquiry - ${name}`,
      html: `
        <div style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;color:#18181b;">
          <div style="max-width:680px;margin:0 auto;padding:28px 16px;">
            <div style="background:#ffffff;border-radius:16px;border:1px solid #e5e7eb;overflow:hidden;">
              
              <div style="background:#0a0a0a;padding:22px 26px;border-bottom:4px solid #dc2626;">
                <h1 style="margin:0;color:#ffffff;font-size:22px;letter-spacing:0.5px;">
                  TOUGH HAULERS
                </h1>
                <p style="margin:6px 0 0;color:#d4d4d8;font-size:13px;">
                  New website contact enquiry
                </p>
              </div>

              <div style="padding:26px;">
                <h2 style="margin:0 0 18px;color:#18181b;font-size:20px;">
                  Contact Request Details
                </h2>

                <div style="margin-bottom:14px;">
                  <p style="margin:0;color:#71717a;font-size:13px;font-weight:bold;">Name</p>
                  <p style="margin:5px 0 0;font-size:15px;">${name}</p>
                </div>

                <div style="margin-bottom:14px;">
                  <p style="margin:0;color:#71717a;font-size:13px;font-weight:bold;">Email</p>
                  <p style="margin:5px 0 0;font-size:15px;">
                    <a href="mailto:${email}" style="color:#dc2626;text-decoration:none;">${email}</a>
                  </p>
                </div>

                <div style="margin-bottom:14px;">
                  <p style="margin:0;color:#71717a;font-size:13px;font-weight:bold;">Company</p>
                  <p style="margin:5px 0 0;font-size:15px;">${company || "Not provided"}</p>
                </div>

                <div style="margin-top:20px;padding:18px;background:#fafafa;border:1px solid #e5e7eb;border-radius:12px;">
                  <p style="margin:0 0 8px;color:#71717a;font-size:13px;font-weight:bold;">Message</p>
                  <p style="margin:0;font-size:15px;line-height:1.7;white-space:pre-line;">
                    ${message}
                  </p>
                </div>
              </div>

              <div style="padding:16px 26px;background:#fafafa;border-top:1px solid #e5e7eb;">
                <p style="margin:0;color:#71717a;font-size:12px;line-height:1.5;">
                  This enquiry was submitted through the TOUGH HAULERS website contact form.
                </p>
              </div>

            </div>
          </div>
        </div>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message saved and email sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Contact email error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
