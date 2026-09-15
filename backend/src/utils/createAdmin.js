import dotenv from "dotenv";
import mongoose from "mongoose";
import AdminUser from "../models/AdminUser.js";

dotenv.config();

const createAdmin = async () => {
  try {
    const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password || password.length < 12) {
      throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD (minimum 12 characters) in .env first");
    }

    await mongoose.connect(process.env.MONGO_URI);

    const existingAdmin = await AdminUser.findOne({
      email,
    }).select("+password");

    if (existingAdmin) {
      existingAdmin.password = password;
      existingAdmin.role = "super_admin";
      existingAdmin.isActive = true;
      await existingAdmin.save();
      console.log("Admin password updated successfully");
      process.exit();
    }

    await AdminUser.create({
      name: "TOUGH HAULERS Admin",
      email,
      password,
      role: "super_admin",
    });

    console.log("Admin created successfully");
    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

createAdmin();
