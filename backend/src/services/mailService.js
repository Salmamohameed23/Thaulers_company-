import nodemailer from "nodemailer";

const smtpConfigured = () =>
  Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.COMPANY_EMAIL,
  );

export const sendCompanyMail = async (options) => {
  if (!smtpConfigured()) {
    console.warn("Email skipped: SMTP environment variables are incomplete");
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });

  await transporter.sendMail({
    from: `"TOUGH HAULERS Website" <${process.env.SMTP_USER}>`,
    to: process.env.COMPANY_EMAIL,
    ...options,
  });

  return true;
};

export const sendCompanyMailSafely = async (options) => {
  try {
    return await sendCompanyMail(options);
  } catch (error) {
    console.error("Notification email failed:", error.message);
    return false;
  }
};
