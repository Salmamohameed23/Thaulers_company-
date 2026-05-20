import mongoose from "mongoose";

const buildRequestSchema = new mongoose.Schema(
  {
    projectType: String,
    solutions: [String],
    size: String,
    timeline: String,

    location: String,
    latitude: Number,
    longitude: Number,
    timezone: String,
    monthlyTemperatures: [
      {
        month: String,
        temp: Number,
      },
    ],

    name: String,
    company: String,
    email: String,
    phone: String,
    notes: String,

    status: {
      type: String,
      default: "new",
    },

    referenceCode: String,
  },
  { timestamps: true },
);

export default mongoose.model("BuildRequest", buildRequestSchema);
