import ShipmentCase from "../models/ShipmentCase.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const listShipmentCases = asyncHandler(async (req, res) => {
  const filter = req.admin && req.query.status ? { status: req.query.status } : {};
  if (!req.admin) filter.status = "active";
  const data = await ShipmentCase.find(filter).sort({ order: 1, createdAt: -1 }).lean();
  res.json({ success: true, count: data.length, data });
});

export const createShipmentCase = asyncHandler(async (req, res) => {
  const data = await ShipmentCase.create(req.validated.body);
  res.status(201).json({ success: true, data });
});

export const updateShipmentCase = asyncHandler(async (req, res) => {
  const data = await ShipmentCase.findByIdAndUpdate(req.params.id, req.validated.body, {
    new: true,
    runValidators: true,
  });
  if (!data) return res.status(404).json({ success: false, message: "Shipment case not found" });
  res.json({ success: true, data });
});

export const archiveShipmentCase = asyncHandler(async (req, res) => {
  const data = await ShipmentCase.findByIdAndUpdate(
    req.params.id,
    { status: "archived" },
    { new: true, runValidators: true },
  );
  if (!data) return res.status(404).json({ success: false, message: "Shipment case not found" });
  res.json({ success: true, message: "Shipment case archived", data });
});
