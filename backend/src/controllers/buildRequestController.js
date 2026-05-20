import BuildRequest from "../models/BuildRequest.js";
import nodemailer from "nodemailer";

export const createBuildRequest = async (req, res) => {
  try {
    const {
      projectType,
      solutions,
      size,
      timeline,
      location,
      latitude,
      longitude,
      timezone,
      monthlyTemperatures,
      name,
      company,
      email,
      phone,
      notes,
    } = req.body;

    const referenceCode = `THL-${Date.now().toString().slice(-6)}`;

    const newRequest = await BuildRequest.create({
      projectType,
      solutions,
      size,
      timeline,
      location,
      latitude,
      longitude,
      timezone,
      monthlyTemperatures,
      name,
      company,
      email,
      phone,
      notes,
      referenceCode,
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

    await transporter.sendMail({
      from: `"TOUGH HAULERS Website" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL,
      replyTo: email,
      subject: `New Let's Build Request - ${referenceCode}`,
      html: `
        <div style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,sans-serif;color:#18181b;">
          <div style="max-width:760px;margin:0 auto;padding:28px 16px;">
            <div style="background:#ffffff;border-radius:16px;border:1px solid #e5e7eb;overflow:hidden;">
              
              <div style="background:#0a0a0a;padding:22px 26px;border-bottom:4px solid #dc2626;">
                <h1 style="margin:0;color:#ffffff;font-size:22px;">TOUGH HAULERS</h1>
                <p style="margin:6px 0 0;color:#d4d4d8;font-size:13px;">
                  New Let's Build / RFQ Request
                </p>
              </div>

              <div style="padding:26px;">
                <h2 style="margin:0 0 18px;font-size:20px;">Request Details</h2>

                <p><strong>Reference:</strong> ${referenceCode}</p>
                <p><strong>Project Type:</strong> ${projectType}</p>
                <p><strong>Solutions:</strong> ${(solutions || []).join(", ")}</p>
                <p><strong>System Size:</strong> ${size}</p>
                <p><strong>Timeline:</strong> ${timeline}</p>
                <p><strong>Location:</strong> ${location}</p>

                <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company || "Not provided"}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#dc2626;">${email}</a></p>
                <p><strong>Phone:</strong> ${phone}</p>

                <div style="margin-top:20px;padding:18px;background:#fafafa;border:1px solid #e5e7eb;border-radius:12px;">
                  <p style="margin:0 0 8px;"><strong>Notes</strong></p>
                  <p style="margin:0;line-height:1.7;white-space:pre-line;">${notes || "No notes provided"}</p>
                </div>

                ${
                  monthlyTemperatures?.length
                    ? `
    <div style="margin-top:24px;">
      <h3 style="margin:0 0 6px;font-size:17px;color:#18181b;">
        Monthly Temperature Overview
      </h3>
      <p style="margin:0 0 18px;color:#71717a;font-size:13px;">
        Average monthly temperature for ${location || "selected location"}
      </p>

      <div style="padding:18px 14px;background:#fafafa;border:1px solid #e5e7eb;border-radius:14px;">
        <table style="width:100%;border-collapse:collapse;text-align:center;">
          <tr>
            ${monthlyTemperatures
              .map((item) => {
                const temp = Number(item.temp) || 0;
                const height = Math.max(26, Math.min(80, temp * 2.4));

                return `
                  <td style="vertical-align:bottom;padding:6px 4px;">
                    <div style="height:90px;display:flex;align-items:flex-end;justify-content:center;">
                      <div style="
                        width:18px;
                        height:${height}px;
                        background:#dc2626;
                        border-radius:999px;
                        display:inline-block;
                      "></div>
                    </div>
                    <div style="margin-top:8px;color:#9ca3af;font-size:11px;font-weight:bold;">
                      ${item.month}
                    </div>
                    <div style="margin-top:6px;color:#18181b;font-size:12px;font-weight:bold;">
                      ${item.temp}°
                    </div>
                  </td>
                `;
              })
              .join("")}
          </tr>
        </table>
      </div>
    </div>
    `
                    : ""
                
                }
              </div>

              <div style="padding:16px 26px;background:#fafafa;border-top:1px solid #e5e7eb;">
                <p style="margin:0;color:#71717a;font-size:12px;">
                  This request was submitted through the TOUGH HAULERS Let's Build wizard.
                </p>
              </div>

            </div>
          </div>
        </div>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Build request saved and email sent successfully",
      referenceCode,
      data: newRequest,
    });
  } catch (error) {
    console.error("Build request error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
