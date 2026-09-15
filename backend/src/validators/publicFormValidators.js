import { z } from "zod";

const emptyParamsAndQuery = {
  params: z.object({}),
  query: z.object({}),
};
const requiredText = (max = 500) => z.string().trim().min(1).max(max);
const optionalText = (max = 500) => z.string().trim().max(max).optional().default("");
const email = z.string().trim().email().max(254);

export const contactCreateSchema = z.object({
  body: z.object({
    name: requiredText(120),
    email,
    company: optionalText(160),
    message: requiredText(5000),
  }).strict(),
  ...emptyParamsAndQuery,
});

export const buildRequestCreateSchema = z.object({
  body: z.object({
    projectType: requiredText(160),
    solutions: z.array(requiredText(160)).min(1).max(30),
    size: requiredText(120),
    timeline: requiredText(120),
    location: requiredText(300),
    latitude: z.coerce.number().min(-90).max(90).optional(),
    longitude: z.coerce.number().min(-180).max(180).optional(),
    timezone: optionalText(100),
    monthlyTemperatures: z.array(z.object({
      month: requiredText(20),
      temp: z.coerce.number().min(-100).max(100),
    })).max(12).optional().default([]),
    name: requiredText(120),
    company: optionalText(160),
    email,
    phone: requiredText(60),
    notes: optionalText(5000),
  }).strict(),
  ...emptyParamsAndQuery,
});

export const projectBriefCreateSchema = z.object({
  body: z.object({
    fullName: requiredText(120),
    company: optionalText(160),
    email,
    phone: requiredText(60),
    country: requiredText(120),
    countryCode: optionalText(10),
    city: requiredText(120),
    targetDate: optionalText(120),
    productionLineType: requiredText(200),
    capacity: optionalText(160),
    budget: optionalText(160),
    rawMaterial: optionalText(500),
    finalProduct: optionalText(500),
    factorySpace: optionalText(120),
    projectDetails: optionalText(8000),
  }).strict(),
  ...emptyParamsAndQuery,
});
