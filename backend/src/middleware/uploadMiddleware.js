import multer from "multer";

const allowedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);

export const uploadImages = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024, files: 12 },
  fileFilter: (req, file, callback) => {
    if (!allowedTypes.has(file.mimetype)) return callback(new Error("Only JPEG, PNG, WebP and AVIF images are allowed"));
    callback(null, true);
  },
}).array("images", 12);

const projectAttachmentTypes = new Set([
  "image/jpeg", "image/png", "image/webp", "image/avif", "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
]);

export const uploadProjectAttachments = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024, files: 5 },
  fileFilter: (req, file, callback) => {
    if (!projectAttachmentTypes.has(file.mimetype)) {
      return callback(new Error("Only images, PDF, Word and Excel files are allowed"));
    }
    callback(null, true);
  },
}).array("attachments", 5);

export const parseProjectBriefPayload = (req, res, next) => {
  if (!req.body.payload) return next();
  try {
    req.body = JSON.parse(req.body.payload);
    next();
  } catch {
    res.status(400).json({ success: false, message: "Invalid project brief payload" });
  }
};
