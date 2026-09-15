import mongoose from "mongoose";

const localizedTextSchema = new mongoose.Schema({
  en: { type: String, required: true, trim: true },
  ar: { type: String, required: true, trim: true },
  zh: { type: String, required: true, trim: true },
  ru: { type: String, required: true, trim: true },
  de: { type: String, required: true, trim: true },
  pl: { type: String, trim: true, default: "" },
}, { _id: false });

const categorySchema = new mongoose.Schema({
  name: { type: localizedTextSchema, required: true },
  slug: { type: String, required: true, unique: true, trim: true, lowercase: true, index: true },
  section: {
    type: String,
    required: true,
    enum: ["kitchenware", "hotel-supplies", "tools-hardware", "electric-scooters", "production-lines", "smart-storage"],
    index: true,
  },
  description: { type: localizedTextSchema, default: () => ({ en: "", ar: "", zh: "", ru: "", de: "", pl: "" }) },
  image: { publicId: String, url: String, alt: localizedTextSchema },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Category", default: null, index: true },
  order: { type: Number, default: 0, min: 0 },
  status: { type: String, enum: ["active", "draft", "archived"], default: "active", index: true },
  statusBeforeArchive: { type: String, enum: ["active", "draft"], default: "active" },
  archivedAt: { type: Date, default: null, index: true },
}, { timestamps: true });

categorySchema.index({ section: 1, status: 1, order: 1 });

export default mongoose.model("Category", categorySchema);
