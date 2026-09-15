import express from "express";
import { createProjectBrief } from "../controllers/projectBriefController.js";
import { publicFormLimiter } from "../middleware/rateLimiters.js";
import { validate } from "../middleware/validate.js";
import { projectBriefCreateSchema } from "../validators/publicFormValidators.js";
import { parseProjectBriefPayload, uploadProjectAttachments } from "../middleware/uploadMiddleware.js";

const router = express.Router();
router.post(
  "/",
  publicFormLimiter,
  uploadProjectAttachments,
  parseProjectBriefPayload,
  validate(projectBriefCreateSchema),
  createProjectBrief,
);
export default router;
