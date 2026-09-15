import express from "express";
import { createContactMessage } from "../controllers/contactController.js";
import { publicFormLimiter } from "../middleware/rateLimiters.js";
import { validate } from "../middleware/validate.js";
import { contactCreateSchema } from "../validators/publicFormValidators.js";

const router = express.Router();

router.post("/", publicFormLimiter, validate(contactCreateSchema), createContactMessage);

export default router;
