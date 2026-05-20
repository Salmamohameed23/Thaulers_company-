import express from "express";
import { createBuildRequest } from "../controllers/buildRequestController.js";

const router = express.Router();

router.post("/", createBuildRequest);

export default router;
