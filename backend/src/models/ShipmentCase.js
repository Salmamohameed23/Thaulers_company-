import mongoose from "mongoose";

const localizedTextSchema = new mongoose.Schema({
  en: { type: String, required: true, trim: true },
  ar: { type: String, required: true, trim: true },
  zh: { type: String, required: true, trim: true },
  ru: { type: String, required: true, trim: true },
  de: { type: String, required: true, trim: true },
  pl: { type: String, trim: true, default: "" },
}, { _id: false });

const shipmentImageSchema = new mongoose.Schema({
  publicId: { type: String, trim: true },
  url: { type: String, required: true, trim: true },
}, { _id: false });

const shipmentCaseSchema = new mongoose.Schema({
  product: { type: localizedTextSchema, required: true },
  origin: { type: localizedTextSchema, required: true },
  destination: { type: localizedTextSchema, required: true },
  scope: { type: localizedTextSchema, required: true },
  shipmentStatus: { type: localizedTextSchema, required: true },
  details: { type: localizedTextSchema, required: true },
  container: { type: String, required: true, trim: true, maxlength: 40 },
  images: {
    type: [shipmentImageSchema],
    validate: {
      validator: (images) => images.length === 3,
      message: "Each shipment case must contain exactly 3 images",
    },
  },
  order: { type: Number, default: 1, min: 1 },
  status: { type: String, enum: ["active", "draft", "archived"], default: "active", index: true },
}, { timestamps: true });

shipmentCaseSchema.index({ status: 1, order: 1, createdAt: -1 });

export default mongoose.model("ShipmentCase", shipmentCaseSchema);
