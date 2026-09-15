import express from "express";
import { archiveCategory, createCategory, deleteCategoryPermanently, listCategories, restoreCategory, updateCategory } from "../controllers/categoryController.js";
import { optionalAdmin, protectAdmin, requirePermission } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validate.js";
import { categoryCreateSchema, categoryUpdateSchema } from "../validators/catalogValidators.js";

const router = express.Router();
router.get("/", optionalAdmin, listCategories);
router.post("/", protectAdmin, requirePermission("categories"), validate(categoryCreateSchema), createCategory);
router.patch("/:id", protectAdmin, requirePermission("categories"), validate(categoryUpdateSchema), updateCategory);
router.patch("/:id/restore", protectAdmin, requirePermission("archive"), restoreCategory);
router.delete("/:id/permanent", protectAdmin, requirePermission("archive"), deleteCategoryPermanently);
router.delete("/:id", protectAdmin, requirePermission("categories"), archiveCategory);
export default router;
