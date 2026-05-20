import mongoose from "mongoose";

const climateCacheSchema = new mongoose.Schema(
  {
    locationKey: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: String,
    country: String,
    countryCode: String,
    latitude: Number,
    longitude: Number,
    timezone: String,
    monthlyTemperatures: [
      {
        month: String,
        temp: Number,
      },
    ],
    source: {
      type: String,
      default: "open-meteo",
    },
    lastFetchedAt: Date,
  },
  { timestamps: true },
);

export default mongoose.model("ClimateCache", climateCacheSchema);
