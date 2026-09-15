import jwt from "jsonwebtoken";
import AdminUser from "../models/AdminUser.js";

export const protectAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const bearerToken = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
    const token = req.cookies?.admin_token || bearerToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, no token",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await AdminUser.findById(decoded.id);

    if (!admin || admin.isActive === false) {
      return res.status(401).json({
        success: false,
        message: "Admin user no longer exists",
      });
    }

    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, token failed",
    });
  }
};

export const optionalAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = req.cookies?.admin_token || (authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null);
  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await AdminUser.findById(decoded.id);
  } catch {
    req.admin = null;
  }
  next();
};

export const requireRole = (...roles) => (req, res, next) => {
  if (!req.admin || !roles.includes(req.admin.role)) {
    return res.status(403).json({ success: false, message: "You do not have permission for this action" });
  }
  next();
};

export const requirePermission = (permission) => (req, res, next) => {
  if (!req.admin) return res.status(401).json({ success: false, message: "Not authorized" });
  if (["super_admin", "admin"].includes(req.admin.role) || req.admin.permissions?.includes(permission)) return next();
  return res.status(403).json({ success: false, message: "You do not have permission to access this section" });
};

export const requireAnyPermission = (...permissions) => (req, res, next) => {
  if (!req.admin) return res.status(401).json({ success: false, message: "Not authorized" });
  if (["super_admin", "admin"].includes(req.admin.role) || permissions.some((permission) => req.admin.permissions?.includes(permission))) return next();
  return res.status(403).json({ success: false, message: "You do not have permission for this action" });
};
