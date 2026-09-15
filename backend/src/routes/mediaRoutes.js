import express from "express";
import { deleteCatalogImage, uploadCatalogImages } from "../controllers/mediaController.js";
import { protectAdmin, requireAnyPermission } from "../middleware/authMiddleware.js";
import { uploadImages } from "../middleware/uploadMiddleware.js";

const router = express.Router();
router.post("/images", protectAdmin, requireAnyPermission("categories", "products", "shipments"), uploadImages, uploadCatalogImages);
router.delete("/images", protectAdmin, requireAnyPermission("categories", "products", "shipments"), deleteCatalogImage);
export default router;
