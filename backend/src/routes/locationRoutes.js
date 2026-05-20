import express from "express";
import {
  searchLocations,
  getMonthlyClimate,
} from "../controllers/locationController.js";

const router = express.Router();

router.get("/search", searchLocations);
router.get("/climate/monthly", getMonthlyClimate);

export default router;
