import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";

import contactRoutes from "./routes/contactRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";
import buildRequestRoutes from "./routes/buildRequestRoutes.js";



dotenv.config();

const app = express();

app.use(helmet());

const allowedOrigins = [
  "http://localhost:5173",
  "https://thaulers-company.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TOUGH HAULERS API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "OK",
    service: "TOUGH HAULERS Backend",
  });
});

app.use("/api/contact", contactRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/build-requests", buildRequestRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
