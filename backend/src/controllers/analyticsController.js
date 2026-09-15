import crypto from "crypto";
import SiteVisitor from "../models/SiteVisitor.js";
import asyncHandler from "../middleware/asyncHandler.js";

const clientIp = (req) => String(req.headers["x-forwarded-for"] || req.ip || "unknown").split(",")[0].trim();

export const recordVisit = asyncHandler(async (req, res) => {
  const salt = process.env.VISITOR_HASH_SALT || process.env.JWT_SECRET;
  const ipHash = crypto.createHash("sha256").update(`${salt}:${clientIp(req)}`).digest("hex");
  await SiteVisitor.updateOne(
    { ipHash },
    { $set: { lastVisitAt: new Date() }, $setOnInsert: { firstVisitAt: new Date() }, $inc: { visits: 1 } },
    { upsert: true },
  );
  res.status(204).end();
});
