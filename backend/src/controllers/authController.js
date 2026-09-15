import jwt from "jsonwebtoken";
import AdminUser from "../models/AdminUser.js";

const signToken = (admin) => {
  return jwt.sign(
    {
      id: admin._id,
      email: admin.email,
      role: admin.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    },
  );
};

const cookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  maxAge: Number(process.env.COOKIE_EXPIRES_HOURS || 2) * 60 * 60 * 1000,
  path: "/",
});

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const admin = await AdminUser.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await admin.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    if (admin.isActive === false) return res.status(403).json({ success: false, message: "This admin account is disabled" });

    const token = signToken(admin);
    admin.lastLoginAt = new Date();
    await admin.save({ validateBeforeSave: false });
    res.cookie("admin_token", token, cookieOptions());

    res.json({
      success: true,
      message: "Login successful",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        permissions: admin.permissions || [],
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCurrentAdmin = (req, res) => {
  res.json({ success: true, admin: { id: req.admin._id, name: req.admin.name, email: req.admin.email, role: req.admin.role, permissions: req.admin.permissions || [] } });
};

export const logoutAdmin = (req, res) => {
  res.clearCookie("admin_token", { ...cookieOptions(), maxAge: undefined });
  res.json({ success: true, message: "Logged out successfully" });
};
