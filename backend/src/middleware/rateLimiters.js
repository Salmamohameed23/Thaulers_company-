import rateLimit from "express-rate-limit";

const base = { standardHeaders: true, legacyHeaders: false };

export const loginLimiter = rateLimit({
  ...base,
  windowMs: 15 * 60 * 1000,
  limit: 10,
  message: { success: false, message: "Too many login attempts. Try again later." },
});

export const publicFormLimiter = rateLimit({
  ...base,
  windowMs: 15 * 60 * 1000,
  limit: 20,
  message: { success: false, message: "Too many submissions. Try again later." },
});

