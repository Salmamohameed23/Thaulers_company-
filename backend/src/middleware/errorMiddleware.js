export const notFound = (req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
};

export const errorHandler = (error, req, res, next) => {
  if (res.headersSent) return next(error);

  const status = error.statusCode
    || (error.code === 11000 ? 409 : null)
    || (["ValidationError", "CastError", "MulterError"].includes(error.name) ? 400 : 500);
  const message = process.env.NODE_ENV === "production" && status === 500
    ? "Internal server error"
    : error.message || "Internal server error";

  res.status(status).json({ success: false, message });
};
