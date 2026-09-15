import Product from "../models/Product.js";
import Category from "../models/Category.js";
import asyncHandler from "../middleware/asyncHandler.js";
import slugify from "../utils/slugify.js";

const uniqueSlug = async (requested, fallback, excludeId) => {
  const base = slugify(requested || fallback) || `product-${Date.now()}`;
  let slug = base;
  let suffix = 2;
  while (await Product.exists({ slug, ...(excludeId ? { _id: { $ne: excludeId } } : {}) })) slug = `${base}-${suffix++}`;
  return slug;
};

export const listProducts = asyncHandler(async (req, res) => {
  const page = Math.max(Number(req.query.page) || 1, 1);
  const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 100);
  const filter = {};
  if (req.query.category) filter.category = req.query.category;
  if (req.admin && req.query.status) filter.status = req.query.status;
  else if (req.admin) filter.status = { $ne: "archived" };
  else if (!req.admin) filter.status = "active";
  if (req.query.featured !== undefined) filter.featured = req.query.featured === "true";
  if (req.query.search) filter.$text = { $search: req.query.search };

  const [data, total] = await Promise.all([
    Product.find(filter).populate("category", "name slug section").sort({ order: 1, createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
    Product.countDocuments(filter),
  ]);
  res.json({ success: true, data, pagination: { page, limit, total, pages: Math.ceil(total / limit) } });
});

export const getProduct = asyncHandler(async (req, res) => {
  const query = /^[a-f\d]{24}$/i.test(req.params.identifier) ? { _id: req.params.identifier } : { slug: req.params.identifier };
  if (!req.admin) query.status = "active";
  const data = await Product.findOne(query).populate("category", "name slug section").lean();
  if (!data) return res.status(404).json({ success: false, message: "Product not found" });
  res.json({ success: true, data });
});

export const createProduct = asyncHandler(async (req, res) => {
  const input = req.validated.body;
  if (!await Category.exists({ _id: input.category, status: { $ne: "archived" } })) return res.status(400).json({ success: false, message: "Category not found or archived" });
  const data = await Product.create({ ...input, slug: await uniqueSlug(input.slug, input.name.en) });
  res.status(201).json({ success: true, data });
});

export const updateProduct = asyncHandler(async (req, res) => {
  const input = { ...req.validated.body };
  if (input.category && !await Category.exists({ _id: input.category, status: { $ne: "archived" } })) return res.status(400).json({ success: false, message: "Category not found or archived" });
  if (input.slug || input.name?.en) input.slug = await uniqueSlug(input.slug, input.name?.en, req.params.id);
  const data = await Product.findByIdAndUpdate(req.params.id, input, { new: true, runValidators: true });
  if (!data) return res.status(404).json({ success: false, message: "Product not found" });
  res.json({ success: true, data });
});

export const archiveProduct = asyncHandler(async (req, res) => {
  const data = await Product.findById(req.params.id);
  if (!data) return res.status(404).json({ success: false, message: "Product not found" });
  if (data.status !== "archived") {
    data.statusBeforeArchive = data.status === "draft" ? "draft" : "active";
    data.status = "archived";
    data.archivedAt = new Date();
    data.archivedByCategory = false;
    await data.save();
  }
  res.json({ success: true, message: "Product archived", data });
});

export const restoreProduct = asyncHandler(async (req, res) => {
  const data = await Product.findOne({ _id: req.params.id, status: "archived" });
  if (!data) return res.status(404).json({ success: false, message: "Archived product not found" });
  const category = await Category.findById(data.category);
  if (!category || category.status === "archived") {
    return res.status(409).json({ success: false, message: "Restore the product category first" });
  }
  data.status = data.statusBeforeArchive || "active";
  data.archivedAt = null;
  data.archivedByCategory = false;
  await data.save();
  res.json({ success: true, message: "Product restored", data });
});

export const deleteProductPermanently = asyncHandler(async (req, res) => {
  const data = await Product.findOneAndDelete({ _id: req.params.id, status: "archived" });
  if (!data) return res.status(404).json({ success: false, message: "Archived product not found" });
  res.json({ success: true, message: "Product permanently deleted" });
});
