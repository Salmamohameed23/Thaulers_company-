import express from "express";
import {
  archiveShipmentCase,
  createShipmentCase,
  listShipmentCases,
  updateShipmentCase,
} from "../controllers/shipmentCaseController.js";
import { optionalAdmin, protectAdmin, requirePermission } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validate.js";
import {
  shipmentCaseCreateSchema,
  shipmentCaseUpdateSchema,
} from "../validators/shipmentCaseValidators.js";

const router = express.Router();

router.get("/", optionalAdmin, listShipmentCases);
router.post("/", protectAdmin, requirePermission("shipments"), validate(shipmentCaseCreateSchema), createShipmentCase);
router.patch("/:id", protectAdmin, requirePermission("shipments"), validate(shipmentCaseUpdateSchema), updateShipmentCase);
router.delete("/:id", protectAdmin, requirePermission("shipments"), archiveShipmentCase);

export default router;
