import Category from "../models/Category.js";
import Product from "../models/Product.js";
import asyncHandler from "../middleware/asyncHandler.js";
import slugify from "../utils/slugify.js";

const uniqueSlug = async (requested, fallback, excludeId) => {
  const base = slugify(requested || fallback) || `category-${Date.now()}`;
  let slug = base;
  let suffix = 2;
  while (await Category.exists({ slug, ...(excludeId ? { _id: { $ne: excludeId } } : {}) })) slug = `${base}-${suffix++}`;
  return slug;
};

export const listCategories = asyncHandler(async (req, res) => {
  const filter = {};
  if (req.query.section) filter.section = req.query.section;
  if (req.admin && req.query.status) filter.status = req.query.status;
  else if (req.admin) filter.status = { $ne: "archived" };
  else if (!req.admin) filter.status = "active";
  if (req.query.parent === "root") filter.parent = null;

  const data = await Category.find(filter).populate("parent", "name slug").sort({ order: 1, createdAt: -1 }).lean();
  res.json({ success: true, count: data.length, data });
});

export const createCategory = asyncHandler(async (req, res) => {
  const input = req.validated.body;
  if (input.parent && !await Category.exists({ _id: input.parent })) return res.status(400).json({ success: false, message: "Parent category not found" });
  const data = await Category.create({ ...input, slug: await uniqueSlug(input.slug, input.name.en) });
  res.status(201).json({ success: true, data });
});

export const updateCategory = asyncHandler(async (req, res) => {
  const input = { ...req.validated.body };
  if (input.parent === req.params.id) return res.status(400).json({ success: false, message: "A category cannot be its own parent" });
  if (input.slug || input.name?.en) input.slug = await uniqueSlug(input.slug, input.name?.en, req.params.id);
  const data = await Category.findByIdAndUpdate(req.params.id, input, { new: true, runValidators: true });
  if (!data) return res.status(404).json({ success: false, message: "Category not found" });
  res.json({ success: true, data });
});

export const archiveCategory = asyncHandler(async (req, res) => {
  const data = await Category.findById(req.params.id);
  if (!data) return res.status(404).json({ success: false, message: "Category not found" });
  if (data.status === "archived") return res.json({ success: true, message: "Category is already archived", data });
  data.statusBeforeArchive = data.status === "draft" ? "draft" : "active";
  data.status = "archived";
  data.archivedAt = new Date();
  await data.save();
  const products = await Product.find({ category: data._id, status: { $ne: "archived" } }).select("_id status");
  if (products.length) await Product.bulkWrite(products.map((product) => ({
    updateOne: { filter: { _id: product._id }, update: { $set: { statusBeforeArchive: product.status, status: "archived", archivedAt: new Date(), archivedByCategory: true } } },
  })));
  res.json({ success: true, message: "Category and its products archived", data });
});

export const restoreCategory = asyncHandler(async (req, res) => {
  const data = await Category.findOne({ _id: req.params.id, status: "archived" });
  if (!data) return res.status(404).json({ success: false, message: "Archived category not found" });
  data.status = data.statusBeforeArchive || "active";
  data.archivedAt = null;
  await data.save();
  const products = await Product.find({ category: data._id, status: "archived", archivedByCategory: true }).select("_id statusBeforeArchive");
  if (products.length) await Product.bulkWrite(products.map((product) => ({
    updateOne: { filter: { _id: product._id }, update: { $set: { status: product.statusBeforeArchive || "active", archivedAt: null, archivedByCategory: false } } },
  })));
  res.json({ success: true, message: "Category and its products restored", data });
});

export const deleteCategoryPermanently = asyncHandler(async (req, res) => {
  const data = await Category.findOne({ _id: req.params.id, status: "archived" });
  if (!data) return res.status(404).json({ success: false, message: "Archived category not found" });
  const products = await Product.deleteMany({ category: data._id });
  await data.deleteOne();
  res.json({ success: true, message: "Category permanently deleted", deletedProducts: products.deletedCount });
});
