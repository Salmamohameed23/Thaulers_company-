import cloudinary from "../config/cloudinary.js";
import asyncHandler from "../middleware/asyncHandler.js";

const uploadBuffer = (buffer) => new Promise((resolve, reject) => {
  const stream = cloudinary.uploader.upload_stream({
    folder: "tough-haulers/catalog",
    resource_type: "image",
    transformation: [{ quality: "auto", fetch_format: "auto" }],
  }, (error, result) => error ? reject(error) : resolve(result));
  stream.end(buffer);
});

export const uploadCatalogImages = asyncHandler(async (req, res) => {
  if (!req.files?.length) return res.status(400).json({ success: false, message: "Select at least one image" });
  const uploaded = await Promise.all(req.files.map((file) => uploadBuffer(file.buffer)));
  res.status(201).json({
    success: true,
    data: uploaded.map((item) => ({ publicId: item.public_id, url: item.secure_url, width: item.width, height: item.height })),
  });
});

export const deleteCatalogImage = asyncHandler(async (req, res) => {
  const publicId = req.body.publicId;
  if (!publicId || !publicId.startsWith("tough-haulers/catalog/")) return res.status(400).json({ success: false, message: "Invalid image id" });
  await cloudinary.uploader.destroy(publicId, { resource_type: "image", invalidate: true });
  res.json({ success: true, message: "Image deleted" });
});

