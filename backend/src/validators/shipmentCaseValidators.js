import { z } from "zod";

const id = z.string().regex(/^[a-f\d]{24}$/i, "Invalid id");
const localizedText = z.object({
  en: z.string().trim().min(1).max(180),
  ar: z.string().trim().min(1).max(180),
  zh: z.string().trim().min(1).max(180),
  ru: z.string().trim().min(1).max(180),
  de: z.string().trim().min(1).max(180),
  pl: z.string().trim().min(1).max(180),
});
const image = z.object({
  publicId: z.string().trim().optional(),
  url: z.string().url(),
});

const shipmentBody = z.object({
  product: localizedText,
  origin: localizedText,
  destination: localizedText,
  scope: localizedText,
  shipmentStatus: localizedText,
  details: localizedText,
  container: z.string().trim().min(1).max(40),
  images: z.array(image).length(3, "Exactly 3 images are required"),
  order: z.coerce.number().int().min(1).optional(),
  status: z.enum(["active", "draft", "archived"]).optional(),
}).strict();

export const shipmentCaseCreateSchema = z.object({
  body: shipmentBody,
  params: z.object({}),
  query: z.object({}),
});

export const shipmentCaseUpdateSchema = z.object({
  body: shipmentBody.partial(),
  params: z.object({ id }),
  query: z.object({}),
});
