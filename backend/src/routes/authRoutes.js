import express from "express";
import { getCurrentAdmin, loginAdmin, logoutAdmin } from "../controllers/authController.js";
import { protectAdmin } from "../middleware/authMiddleware.js";
import { loginLimiter } from "../middleware/rateLimiters.js";

const router = express.Router();

router.post("/login", loginLimiter, loginAdmin);
router.get("/me", protectAdmin, getCurrentAdmin);
router.post("/logout", logoutAdmin);

export default router;
