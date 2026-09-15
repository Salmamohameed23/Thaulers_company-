import express from "express";
import { recordVisit } from "../controllers/analyticsController.js";
import { publicFormLimiter } from "../middleware/rateLimiters.js";

const router = express.Router();
router.post("/visit", publicFormLimiter, recordVisit);
export default router;
