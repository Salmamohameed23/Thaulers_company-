import express from "express";
import {
  getContactMessages,
  getBuildRequests,
  updateBuildRequestStatus,
  updateContactMessageStatus,
} from "../controllers/adminController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/contact-messages", protectAdmin, getContactMessages);

router.patch(
  "/contact-messages/:id/status",
  protectAdmin,
  updateContactMessageStatus,
);

router.get("/build-requests", protectAdmin, getBuildRequests);

router.patch(
  "/build-requests/:id/status",
  protectAdmin,
  updateBuildRequestStatus,
);

export default router;
