import express from "express";
import { archiveProduct, createProduct, deleteProductPermanently, getProduct, listProducts, restoreProduct, updateProduct } from "../controllers/productController.js";
import { optionalAdmin, protectAdmin, requirePermission } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validate.js";
import { productCreateSchema, productUpdateSchema } from "../validators/catalogValidators.js";

const router = express.Router();
router.get("/", optionalAdmin, listProducts);
router.get("/:identifier", optionalAdmin, getProduct);
router.post("/", protectAdmin, requirePermission("products"), validate(productCreateSchema), createProduct);
router.patch("/:id", protectAdmin, requirePermission("products"), validate(productUpdateSchema), updateProduct);
router.patch("/:id/restore", protectAdmin, requirePermission("archive"), restoreProduct);
router.delete("/:id/permanent", protectAdmin, requirePermission("archive"), deleteProductPermanently);
router.delete("/:id", protectAdmin, requirePermission("products"), archiveProduct);
export default router;
