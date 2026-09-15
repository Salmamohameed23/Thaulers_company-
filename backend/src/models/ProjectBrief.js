import mongoose from "mongoose";

const projectBriefSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    company: { type: String, trim: true, default: "" },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    countryCode: { type: String, trim: true, default: "" },
    city: { type: String, required: true, trim: true },
    targetDate: { type: String, trim: true, default: "" },
    productionLineType: { type: String, required: true, trim: true },
    capacity: { type: String, trim: true, default: "" },
    budget: { type: String, trim: true, default: "" },
    rawMaterial: { type: String, trim: true, default: "" },
    finalProduct: { type: String, trim: true, default: "" },
    factorySpace: { type: String, trim: true, default: "" },
    projectDetails: { type: String, trim: true, default: "" },
    attachments: [{
      publicId: { type: String, required: true },
      url: { type: String, required: true },
      name: { type: String, required: true },
      mimeType: { type: String, required: true },
      bytes: { type: Number, required: true },
      resourceType: { type: String, default: "raw" },
    }],
    referenceCode: { type: String, required: true, unique: true, index: true },
    status: {
      type: String,
      enum: ["new", "reviewed", "contacted", "closed", "removed"],
      default: "new",
    },
  },
  { timestamps: true },
);

export default mongoose.model("ProjectBrief", projectBriefSchema);
