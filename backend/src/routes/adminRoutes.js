import express from "express";
import {
  getContactMessages,
  getBuildRequests,
  updateBuildRequestStatus,
  updateContactMessageStatus,
  getProjectBriefs,
  updateProjectBriefStatus,
  deleteContactMessagePermanently,
  deleteBuildRequestPermanently,
  deleteProjectBriefPermanently,
  getDashboardStats,
  listAdminUsers,
  createAdminUser,
  updateAdminUser,
  deleteAdminUser,
} from "../controllers/adminController.js";
import { protectAdmin, requirePermission, requireRole } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/stats", protectAdmin, requirePermission("dashboard"), getDashboardStats);
router.get("/contact-messages", protectAdmin, requirePermission("messages"), getContactMessages);

router.patch(
  "/contact-messages/:id/status",
  protectAdmin,
  requirePermission("messages"),
  updateContactMessageStatus,
);
router.delete("/contact-messages/:id", protectAdmin, requireRole("super_admin", "admin"), deleteContactMessagePermanently);

router.get("/project-briefs", protectAdmin, requirePermission("project_briefs"), getProjectBriefs);
router.patch("/project-briefs/:id/status", protectAdmin, requirePermission("project_briefs"), updateProjectBriefStatus);
router.delete("/project-briefs/:id", protectAdmin, requireRole("super_admin", "admin"), deleteProjectBriefPermanently);

router.get("/build-requests", protectAdmin, requirePermission("build_requests"), getBuildRequests);

router.patch(
  "/build-requests/:id/status",
  protectAdmin,
  requirePermission("build_requests"),
  updateBuildRequestStatus,
);
router.delete("/build-requests/:id", protectAdmin, requireRole("super_admin", "admin"), deleteBuildRequestPermanently);

router.get("/users", protectAdmin, requireRole("super_admin", "admin"), listAdminUsers);
router.post("/users", protectAdmin, requireRole("super_admin", "admin"), createAdminUser);
router.patch("/users/:id", protectAdmin, requireRole("super_admin", "admin"), updateAdminUser);
router.delete("/users/:id", protectAdmin, requireRole("super_admin", "admin"), deleteAdminUser);

export default router;
