import express from "express";
import { createBuildRequest } from "../controllers/buildRequestController.js";
import { publicFormLimiter } from "../middleware/rateLimiters.js";
import { validate } from "../middleware/validate.js";
import { buildRequestCreateSchema } from "../validators/publicFormValidators.js";

const router = express.Router();

router.post("/", publicFormLimiter, validate(buildRequestCreateSchema), createBuildRequest);

export default router;
