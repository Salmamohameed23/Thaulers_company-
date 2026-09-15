import "dotenv/config";
import mongoose from "mongoose";
import Category from "../models/Category.js";

const categories = [
  {
    slug: "cookware-sets", order: 1,
    name: { en: "Cookware Sets", ar: "أطقم أواني الطهي", zh: "炊具套装", ru: "Наборы посуды", de: "Kochgeschirr-Sets" },
    description: {
      en: "Coordinated cookware collections engineered for dependable performance and everyday versatility.",
      ar: "مجموعات متناسقة تجمع بين الأداء الموثوق والمرونة التي تتطلبها الاستخدامات اليومية.",
      zh: "兼顾可靠性能与日常多场景使用需求的协调化炊具系列。",
      ru: "Согласованные коллекции для стабильного результата и универсального ежедневного использования.",
      de: "Aufeinander abgestimmte Kollektionen für zuverlässige Leistung und vielseitigen täglichen Einsatz.",
    },
  },
  {
    slug: "drinkware-bottles", order: 2,
    name: { en: "Drinkware & Bottles", ar: "أدوات الشرب والزجاجات", zh: "饮具与水瓶", ru: "Посуда для напитков и бутылки", de: "Trinkgefäße & Flaschen" },
    description: {
      en: "Thoughtfully designed drinkware and reusable bottles for home, travel, hospitality, and retail.",
      ar: "تصميمات عملية وأنيقة للمنزل والسفر وقطاع الضيافة ومتاجر التجزئة.",
      zh: "适用于家居、出行、酒店餐饮及零售渠道的实用设计。",
      ru: "Продуманные решения для дома, путешествий, гостиничного бизнеса и розничной торговли.",
      de: "Durchdachte Lösungen für Zuhause, Reisen, Hotellerie und Einzelhandel.",
    },
  },
  {
    slug: "electric-kitchen-appliances", order: 3,
    name: { en: "Electric Kitchen Appliances", ar: "أجهزة المطبخ الكهربائية", zh: "厨房小家电", ru: "Малая кухонная техника", de: "Elektrische Küchengeräte" },
    description: {
      en: "Efficient countertop appliances that bring convenience and consistent performance to modern kitchens.",
      ar: "أجهزة عملية وفعالة توفر سهولة الاستخدام وأداءً ثابتًا في المطابخ العصرية.",
      zh: "以高效、便捷和稳定表现提升现代厨房体验。",
      ru: "Эффективная техника для удобства и стабильной работы современной кухни.",
      de: "Effiziente Kleingeräte für mehr Komfort und konstante Leistung in modernen Küchen.",
    },
  },
  {
    slug: "kitchen-tools-utensils", order: 4,
    name: { en: "Kitchen Tools & Utensils", ar: "أدوات ومستلزمات المطبخ", zh: "厨房工具与用具", ru: "Кухонные инструменты и принадлежности", de: "Küchenwerkzeuge & Utensilien" },
    description: {
      en: "Essential tools for preparation, cooking, and serving—designed for comfort, precision, and durability.",
      ar: "أدوات أساسية للتحضير والطهي والتقديم، مصممة للراحة والدقة وطول العمر.",
      zh: "覆盖备餐、烹饪与上菜，兼具舒适性、精准度与耐用性。",
      ru: "Надёжные решения для подготовки, приготовления и сервировки — удобные, точные и долговечные.",
      de: "Unverzichtbare Helfer zum Vorbereiten, Kochen und Servieren – komfortabel, präzise und langlebig.",
    },
  },
  {
    slug: "major-home-appliances", order: 5,
    name: { en: "Major Home Appliances", ar: "الأجهزة المنزلية الرئيسية", zh: "大型家用电器", ru: "Крупная бытовая техника", de: "Große Haushaltsgeräte" },
    description: {
      en: "Reliable large-scale appliances selected to support complete residential kitchen solutions.",
      ar: "أجهزة كبيرة موثوقة لتجهيز المطابخ المنزلية بحلول متكاملة وعملية.",
      zh: "为完整住宅厨房方案甄选的可靠大型电器。",
      ru: "Надёжная техника для комплексного оснащения домашней кухни.",
      de: "Zuverlässige Großgeräte für ganzheitliche Küchenlösungen im Wohnbereich.",
    },
  },
  {
    slug: "private-label-kitchen-sets", order: 6,
    name: { en: "Private Label Kitchen Sets", ar: "أطقم مطابخ بعلامتك التجارية", zh: "自有品牌厨房套装", ru: "Кухонные наборы под СТМ", de: "Private-Label-Küchensets" },
    description: {
      en: "Market-ready kitchenware collections tailored to your brand, positioning, and commercial requirements.",
      ar: "مجموعات جاهزة للسوق ومطورة بما يتوافق مع هوية علامتك ومتطلباتك التجارية.",
      zh: "围绕品牌定位与商业需求打造可直接进入市场的定制系列。",
      ru: "Готовые к рынку коллекции, адаптированные под ваш бренд и коммерческие задачи.",
      de: "Marktreife Kollektionen, abgestimmt auf Ihre Marke, Positionierung und geschäftlichen Anforderungen.",
    },
  },
  {
    slug: "storage-organization", order: 7,
    name: { en: "Storage & Organization", ar: "حلول التخزين والتنظيم", zh: "收纳与整理", ru: "Хранение и организация", de: "Aufbewahrung & Organisation" },
    description: {
      en: "Practical, space-efficient solutions that bring order, accessibility, and style to every kitchen.",
      ar: "حلول ذكية وموفرة للمساحة تجعل المطبخ أكثر ترتيبًا وسهولة وأناقة.",
      zh: "节省空间的实用方案，让厨房更整洁、易用且富有美感。",
      ru: "Практичные решения, экономящие пространство и поддерживающие порядок и удобство.",
      de: "Praktische, platzsparende Lösungen für mehr Ordnung, Übersicht und Stil in jeder Küche.",
    },
  },
];

const seedCategories = async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error("Missing MONGO_URI in .env");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");

    for (const category of categories) {
      const existing = await Category.findOne({ slug: category.slug });
      const image = existing?.image?.url ? existing.image : null;

      await Category.findOneAndUpdate(
        { slug: category.slug },
        {
          $set: {
            name: category.name,
            description: category.description,
            section: "kitchenware",
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

    console.log("Kitchenware categories seeded successfully");
  } catch (error) {
    console.error("Seeding failed:", error?.message || error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedCategories();
