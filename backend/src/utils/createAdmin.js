import dotenv from "dotenv";
import mongoose from "mongoose";
import AdminUser from "../models/AdminUser.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existingAdmin = await AdminUser.findOne({
      email: "admin@toughhaulers.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit();
    }

    await AdminUser.create({
      name: "TOUGH HAULERS Admin",
      email: "admin@toughhaulers.com",
      password: "Admin@123456",
    });

    console.log("Admin created successfully");
    process.exit();
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

createAdmin();
