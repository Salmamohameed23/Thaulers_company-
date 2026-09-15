import ProjectBrief from "../models/ProjectBrief.js";
import { sendCompanyMailSafely } from "../services/mailService.js";
import cloudinary from "../config/cloudinary.js";

const uploadAttachment = (file, folder) => new Promise((resolve, reject) => {
  const stream = cloudinary.uploader.upload_stream(
    { folder, resource_type: "auto", use_filename: true, unique_filename: true },
    (error, result) => error ? reject(error) : resolve({
      publicId: result.public_id,
      url: result.secure_url,
      name: file.originalname,
      mimeType: file.mimetype,
      bytes: result.bytes || file.size,
      resourceType: result.resource_type,
    }),
  );
  stream.end(file.buffer);
});

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const createProjectBrief = async (req, res) => {
  const input = req.validated.body;
  const referenceCode = `PL-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const attachments = req.files?.length
    ? await Promise.all(req.files.map((file) => uploadAttachment(file, `tough-haulers/project-briefs/${referenceCode}`)))
    : [];
  const brief = await ProjectBrief.create({ ...input, attachments, referenceCode });

  void sendCompanyMailSafely({
    replyTo: input.email,
    subject: `New Production Line Brief - ${referenceCode}`,
    html: `<h2>Production Line Project Brief</h2>
      <p><strong>Reference:</strong> ${referenceCode}</p>
      <p><strong>Client:</strong> ${escapeHtml(input.fullName)}</p>
      <p><strong>Company:</strong> ${escapeHtml(input.company || "Not provided")}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(input.phone)}</p>
      <p><strong>Destination:</strong> ${escapeHtml(input.country)} / ${escapeHtml(input.city)}</p>
      <p><strong>Production line:</strong> ${escapeHtml(input.productionLineType)}</p>
      <p><strong>Capacity:</strong> ${escapeHtml(input.capacity || "Not provided")}</p>
      <p><strong>Budget:</strong> ${escapeHtml(input.budget || "Not provided")}</p>
      <p><strong>Raw material:</strong> ${escapeHtml(input.rawMaterial || "Not provided")}</p>
      <p><strong>Final product:</strong> ${escapeHtml(input.finalProduct || "Not provided")}</p>
      <p><strong>Factory space:</strong> ${escapeHtml(input.factorySpace || "Not provided")}</p>
      <p><strong>Target date:</strong> ${escapeHtml(input.targetDate || "Not provided")}</p>
      <p><strong>Details:</strong><br>${escapeHtml(input.projectDetails || "No details").replaceAll("\n", "<br>")}</p>`,
  });

  res.status(201).json({
    success: true,
    message: "Project brief submitted successfully",
    referenceCode,
    notificationQueued: true,
    data: brief,
  });
};
