import ContactMessage from "../models/ContactMessage.js";
import BuildRequest from "../models/BuildRequest.js";
import ProjectBrief from "../models/ProjectBrief.js";
import AdminUser from "../models/AdminUser.js";
import SiteVisitor from "../models/SiteVisitor.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";
import ShipmentCase from "../models/ShipmentCase.js";

export const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const updateContactMessageStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = ["new", "reviewed", "contacted", "closed", "removed"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const message = await ContactMessage.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: "Contact message not found",
      });
    }

    res.json({
      success: true,
      message: "Contact message status updated successfully",
      data: message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getBuildRequests = async (req, res) => {
  try {
    const requests = await BuildRequest.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: requests.length,
      data: requests,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBuildRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = ["new", "reviewed", "contacted", "closed", "removed"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const request = await BuildRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Build request not found",
      });
    }

    res.json({
      success: true,
      message: "Status updated successfully",
      data: request,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProjectBriefs = async (req, res) => {
  try {
    const briefs = await ProjectBrief.find().sort({ createdAt: -1 });
    res.json({ success: true, count: briefs.length, data: briefs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProjectBriefStatus = async (req, res) => {
  try {
    const allowedStatuses = ["new", "reviewed", "contacted", "closed", "removed"];
    if (!allowedStatuses.includes(req.body.status)) {
      return res.status(400).json({ success: false, message: "Invalid status value" });
    }

    const brief = await ProjectBrief.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true },
    );
    if (!brief) {
      return res.status(404).json({ success: false, message: "Project brief not found" });
    }
    res.json({ success: true, message: "Status updated successfully", data: brief });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const permanentlyDelete = (Model, label) => async (req, res) => {
  const item = await Model.findOneAndDelete({ _id: req.params.id, status: "removed" });
  if (!item) return res.status(404).json({ success: false, message: `Removed ${label} not found` });
  res.json({ success: true, message: `${label} permanently deleted` });
};

export const deleteContactMessagePermanently = permanentlyDelete(ContactMessage, "message");
export const deleteBuildRequestPermanently = permanentlyDelete(BuildRequest, "build request");
export const deleteProjectBriefPermanently = permanentlyDelete(ProjectBrief, "project brief");

export const getDashboardStats = async (req, res) => {
  const start = new Date(); start.setHours(0, 0, 0, 0);
  const [messages, builds, briefs, categories, products, shipments, visitors, visitorsToday] = await Promise.all([
    ContactMessage.countDocuments(), BuildRequest.countDocuments(), ProjectBrief.countDocuments(),
    Category.countDocuments({ status: { $ne: "archived" } }), Product.countDocuments({ status: { $ne: "archived" } }),
    ShipmentCase.countDocuments({ status: { $ne: "archived" } }), SiteVisitor.countDocuments(), SiteVisitor.countDocuments({ firstVisitAt: { $gte: start } }),
  ]);
  res.json({ success: true, data: { messages, builds, briefs, categories, products, shipments, visitors, visitorsToday } });
};

const publicUser = (user) => ({ id: user._id, name: user.name, email: user.email, role: user.role, permissions: user.permissions || [], isActive: user.isActive, lastLoginAt: user.lastLoginAt, createdAt: user.createdAt });

export const listAdminUsers = async (req, res) => {
  const users = await AdminUser.find().sort({ createdAt: -1 });
  res.json({ success: true, data: users.map(publicUser) });
};

export const createAdminUser = async (req, res) => {
  const { name, email, password, role = "employee", permissions = [] } = req.body;
  if (!name || !email || !password || password.length < 8) return res.status(400).json({ success: false, message: "Name, email and a password of at least 8 characters are required" });
  if (await AdminUser.exists({ email: email.toLowerCase() })) return res.status(409).json({ success: false, message: "Email is already registered" });
  const user = await AdminUser.create({ name, email, password, role: role === "admin" ? "admin" : "employee", permissions: role === "admin" ? [] : permissions });
  res.status(201).json({ success: true, data: publicUser(user) });
};

export const updateAdminUser = async (req, res) => {
  const user = await AdminUser.findById(req.params.id).select("+password");
  if (!user) return res.status(404).json({ success: false, message: "User not found" });
  if (user.role === "super_admin" && String(user._id) !== String(req.admin._id)) return res.status(403).json({ success: false, message: "The owner account cannot be changed" });
  const { name, email, password, role, permissions, isActive } = req.body;
  if (name !== undefined) user.name = name;
  if (email !== undefined) user.email = email.toLowerCase();
  if (password) { if (password.length < 8) return res.status(400).json({ success: false, message: "Password must be at least 8 characters" }); user.password = password; }
  if (role !== undefined && user.role !== "super_admin") user.role = role === "admin" ? "admin" : "employee";
  if (permissions !== undefined) user.permissions = user.role === "admin" ? [] : permissions;
  if (isActive !== undefined && String(user._id) !== String(req.admin._id)) user.isActive = Boolean(isActive);
  await user.save();
  res.json({ success: true, data: publicUser(user) });
};

export const deleteAdminUser = async (req, res) => {
  if (String(req.params.id) === String(req.admin._id)) return res.status(400).json({ success: false, message: "You cannot delete your own account" });
  const user = await AdminUser.findById(req.params.id);
  if (!user) return res.status(404).json({ success: false, message: "User not found" });
  if (user.role === "super_admin") return res.status(403).json({ success: false, message: "The owner account cannot be deleted" });
  await user.deleteOne();
  res.json({ success: true, message: "User deleted" });
};
