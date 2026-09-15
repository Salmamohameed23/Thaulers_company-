import mongoose from "mongoose";

const siteVisitorSchema = new mongoose.Schema({
  ipHash: { type: String, required: true, unique: true, index: true },
  firstVisitAt: { type: Date, default: Date.now },
  lastVisitAt: { type: Date, default: Date.now, index: true },
  visits: { type: Number, default: 1 },
}, { timestamps: true });

export default mongoose.model("SiteVisitor", siteVisitorSchema);
