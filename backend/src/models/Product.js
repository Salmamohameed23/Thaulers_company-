import mongoose from "mongoose";

const localizedTextSchema = new mongoose.Schema({
  en: { type: String, trim: true }, ar: { type: String, trim: true },
  zh: { type: String, trim: true }, ru: { type: String, trim: true }, de: { type: String, trim: true },
  pl: { type: String, trim: true, default: "" },
}, { _id: false });
const imageSchema = new mongoose.Schema({ publicId: String, url: { type: String, required: true }, alt: localizedTextSchema, order: { type: Number, default: 0 } }, { _id: false });

const productSchema = new mongoose.Schema({
  name: { type: localizedTextSchema, required: true },
  slug: { type: String, required: true, unique: true, trim: true, lowercase: true, index: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true, index: true },
  shortDescription: { type: localizedTextSchema, default: () => ({ en: "", ar: "", zh: "", ru: "", de: "", pl: "" }) },
  description: { type: localizedTextSchema, default: () => ({ en: "", ar: "", zh: "", ru: "", de: "", pl: "" }) },
  images: { type: [imageSchema], default: [] },
  specifications: [{ key: localizedTextSchema, value: localizedTextSchema }],
  order: { type: Number, default: 0, min: 0 },
  featured: { type: Boolean, default: false, index: true },
  status: { type: String, enum: ["active", "draft", "archived"], default: "active", index: true },
  statusBeforeArchive: { type: String, enum: ["active", "draft"], default: "active" },
  archivedAt: { type: Date, default: null, index: true },
  archivedByCategory: { type: Boolean, default: false, index: true },
}, { timestamps: true });

productSchema.index({ category: 1, status: 1, order: 1 });
productSchema.index({ "name.en": "text", "name.ar": "text", "name.zh": "text", "name.ru": "text", "name.de": "text", "name.pl": "text" });

export default mongoose.model("Product", productSchema);
