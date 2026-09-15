import "dotenv/config";
import mongoose from "mongoose";
import Category from "../models/Category.js";

const categories = [
  {
    slug: "city-scooters",
    imageFile: "city-scooters.jpg",
    order: 1,
    name: {
      en: "City Scooters",
      ar: "سكوترات المدن",
      zh: "城市踏板车",
      ru: "Городские электроскутеры",
      de: "City-Elektroroller",
    },
    description: {
      en: "Efficient, comfortable models designed for everyday travel across modern urban environments.",
      ar: "موديلات مريحة وموفرة مصممة للتنقل اليومي داخل البيئات الحضرية الحديثة.",
      zh: "高效舒适，专为现代城市环境中的日常通勤而设计。",
      ru: "Эффективные и комфортные модели для повседневного передвижения по городу.",
      de: "Effiziente und komfortable Modelle für den täglichen Einsatz im modernen Stadtverkehr.",
    },
  },
  {
    slug: "delivery-scooters",
    imageFile: "delivery-scooters.jpg",
    order: 2,
    name: {
      en: "Delivery Scooters",
      ar: "سكوترات التوصيل",
      zh: "配送踏板车",
      ru: "Электроскутеры для доставки",
      de: "Liefer-Elektroroller",
    },
    description: {
      en: "Practical commercial models engineered for dependable, high-frequency last-mile operations.",
      ar: "موديلات تجارية عملية مصممة لعمليات التوصيل اليومية المكثفة والموثوقة.",
      zh: "适合高频末端配送作业的实用可靠商用车型。",
      ru: "Практичные коммерческие модели для надёжной интенсивной доставки последней мили.",
      de: "Praxisgerechte Nutzmodelle für zuverlässige und intensive Zustellfahrten.",
    },
  },
  {
    slug: "high-performance-scooters",
    imageFile: "high-performance-scooters.png",
    order: 3,
    name: {
      en: "High-Performance Scooters",
      ar: "سكوترات عالية الأداء",
      zh: "高性能踏板车",
      ru: "Высокопроизводительные электроскутеры",
      de: "Hochleistungs-Elektroroller",
    },
    description: {
      en: "Powerful models combining responsive acceleration, extended range, and confident road presence.",
      ar: "موديلات قوية تجمع بين التسارع السريع والمدى الممتد والحضور المميز على الطريق.",
      zh: "兼具强劲加速、长续航与鲜明道路表现。",
      ru: "Мощные модели с быстрым разгоном, увеличенным запасом хода и выразительным дизайном.",
      de: "Kraftvolle Modelle mit direkter Beschleunigung, hoher Reichweite und markantem Auftritt.",
    },
  },
  {
    slug: "adventure-scooters",
    imageFile: "adventure-scooters.png",
    order: 4,
    name: {
      en: "Adventure Scooters",
      ar: "سكوترات المغامرات",
      zh: "探险电动踏板车",
      ru: "Приключенческие электроскутеры",
      de: "Adventure-Elektroroller",
    },
    description: {
      en: "Rugged models built for rough roads, outdoor journeys, and confident all-terrain mobility.",
      ar: "موديلات قوية مصممة للطرق الوعرة والرحلات الخارجية، وتوفر ثباتًا وأداءً موثوقًا على مختلف التضاريس.",
      zh: "坚固耐用，适合崎岖路况与户外出行，在多种地形下提供稳定可靠的驾乘体验。",
      ru: "Прочные модели для неровных дорог и поездок на природе, обеспечивающие устойчивость и надёжность на разных покрытиях.",
      de: "Robuste Modelle für unebene Straßen und Outdoor-Touren mit zuverlässiger Stabilität auf unterschiedlichen Untergründen.",
    },
  },
  {
    slug: "classic-scooters",
    imageFile: "classic-scooters.png",
    order: 5,
    name: {
      en: "Classic Scooters",
      ar: "السكوترات الكلاسيكية",
      zh: "经典电动踏板车",
      ru: "Классические электроскутеры",
      de: "Klassische Elektroroller",
    },
    description: {
      en: "Retro-inspired models combining elegant design, comfortable seating, and reliable everyday performance.",
      ar: "موديلات مستوحاة من الطابع الكلاسيكي، تجمع بين التصميم الأنيق والمقاعد المريحة والأداء الموثوق للتنقل اليومي.",
      zh: "复古灵感设计，兼具优雅外观、舒适座椅与可靠的日常出行性能。",
      ru: "Модели в ретро-стиле, сочетающие элегантный дизайн, комфортную посадку и надёжность для ежедневных поездок.",
      de: "Retro-inspirierte Modelle mit elegantem Design, komfortabler Sitzposition und zuverlässiger Leistung im Alltag.",
    },
  },
  {
    slug: "utility-scooters",
    imageFile: "utility-scooters.png",
    order: 6,
    name: {
      en: "Utility Scooters",
      ar: "سكوترات الاستخدام العملي",
      zh: "实用型电动踏板车",
      ru: "Утилитарные электроскутеры",
      de: "Utility-Elektroroller",
    },
    description: {
      en: "Versatile, durable models designed for daily tasks with stability, strength, and practical features.",
      ar: "موديلات متعددة الاستخدامات ومتينة، مصممة للمهام اليومية وتجمع بين الثبات والقوة والتجهيزات العملية.",
      zh: "多功能耐用车型，为日常任务而设计，兼具稳定性、强度与实用配置。",
      ru: "Универсальные и долговечные модели для повседневных задач, сочетающие устойчивость, прочность и практичное оснащение.",
      de: "Vielseitige, langlebige Modelle für tägliche Aufgaben mit Stabilität, Belastbarkeit und praktischer Ausstattung.",
    },
  },
];

const seedCategories = async () => {
  try {
    const requiredVariables = ["MONGO_URI"];
    const missingVariables = requiredVariables.filter(
      (variable) => !process.env[variable],
    );

    if (missingVariables.length) {
      throw new Error(`Missing .env variables: ${missingVariables.join(", ")}`);
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");

    for (const category of categories) {
      const existingCategory = await Category.findOne({ slug: category.slug });
      const image = existingCategory?.image?.url ? existingCategory.image : null;

      await Category.findOneAndUpdate(
        { slug: category.slug },
        {
          $set: {
            name: category.name,
            description: category.description,
            section: "electric-scooters",
            order: category.order,
            status: "active",
            ...(image ? { image } : {}),
          },
          $setOnInsert: { slug: category.slug },
        },
        { upsert: true, returnDocument: "after", runValidators: true },
      );

      console.log(`✓ ${category.order}. ${category.name.en}`);
    }

    console.log("Electric scooter categories seeded successfully");
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedCategories();
