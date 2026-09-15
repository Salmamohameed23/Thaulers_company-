import { z } from "zod";

const id = z.string().regex(/^[a-f\d]{24}$/i, "Invalid id");
const localizedRequired = z.object({
  en: z.string().trim().min(1).max(160), ar: z.string().trim().min(1).max(160),
  zh: z.string().trim().min(1).max(160), ru: z.string().trim().min(1).max(160), de: z.string().trim().min(1).max(160),
  pl: z.string().trim().min(1).max(160),
});
const localizedOptional = z.object({
  en: z.string().trim().max(5000).default(""), ar: z.string().trim().max(5000).default(""),
  zh: z.string().trim().max(5000).default(""), ru: z.string().trim().max(5000).default(""), de: z.string().trim().max(5000).default(""),
  pl: z.string().trim().max(5000).default(""),
}).optional();
const status = z.enum(["active", "draft", "archived"]);

export const categoryCreateSchema = z.object({ body: z.object({
  name: localizedRequired,
  slug: z.string().trim().min(1).max(180).optional(),
  section: z.enum(["kitchenware", "hotel-supplies", "tools-hardware", "electric-scooters", "production-lines", "smart-storage"]),
  description: localizedOptional,
  image: z.object({ publicId: z.string().optional(), url: z.string().url(), alt: localizedRequired.optional() }).optional(),
  parent: id.nullable().optional(),
  order: z.coerce.number().int().min(0).optional(),
  status: status.optional(),
}).strict(), params: z.object({}), query: z.object({}) });

export const categoryUpdateSchema = z.object({ body: categoryCreateSchema.shape.body.partial(), params: z.object({ id }), query: z.object({}) });

const image = z.object({ publicId: z.string().optional(), url: z.string().url(), alt: localizedRequired.optional(), order: z.coerce.number().int().min(0).optional() });
const specification = z.object({ key: localizedRequired, value: localizedRequired });

export const productCreateSchema = z.object({ body: z.object({
  name: localizedRequired,
  slug: z.string().trim().min(1).max(180).optional(),
  category: id,
  shortDescription: localizedOptional,
  description: localizedOptional,
  images: z.array(image).max(12).optional(),
  specifications: z.array(specification).max(50).optional(),
  order: z.coerce.number().int().min(0).optional(),
  featured: z.boolean().optional(),
  status: status.optional(),
}).strict(), params: z.object({}), query: z.object({}) });

export const productUpdateSchema = z.object({ body: productCreateSchema.shape.body.partial(), params: z.object({ id }), query: z.object({}) });
