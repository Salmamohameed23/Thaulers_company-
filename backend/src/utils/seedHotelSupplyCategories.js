import "dotenv/config";
import mongoose from "mongoose";
import Category from "../models/Category.js";

const categories = [
  {
    "slug": "amenities-guest-room",
    "order": 1,
    "name": {
      "en": "Guest Room Amenities",
      "ar": "مستلزمات غرف النزلاء",
      "zh": "客房用品",
      "ru": "Принадлежности для номеров",
      "de": "Gästezimmer-Ausstattung"
    },
    "description": {
      "en": "Thoughtfully selected essentials that enhance comfort and elevate the guest experience.",
      "ar": "أساسيات مختارة بعناية لتعزيز الراحة والارتقاء بتجربة الضيف.",
      "zh": "精心甄选的必备用品，提升舒适度与宾客体验。",
      "ru": "Тщательно подобранные изделия для комфорта и высокого уровня обслуживания гостей.",
      "de": "Sorgfältig ausgewählte Produkte für mehr Komfort und ein hochwertiges Gästeerlebnis."
    }
  },
  {
    "slug": "bathroom-accessories",
    "order": 2,
    "name": {
      "en": "Bathroom Accessories",
      "ar": "إكسسوارات الحمامات",
      "zh": "浴室配件",
      "ru": "Аксессуары для ванных комнат",
      "de": "Badezimmer-Accessoires"
    },
    "description": {
      "en": "Refined, functional accessories designed for modern hospitality bathrooms.",
      "ar": "إكسسوارات عملية وراقية مصممة لحمامات منشآت الضيافة الحديثة.",
      "zh": "兼具质感与功能性的配件，适用于现代酒店浴室。",
      "ru": "Функциональные и элегантные решения для современных гостиничных ванных.",
      "de": "Stilvolle, funktionale Accessoires für moderne Hotelbäder."
    }
  },
  {
    "slug": "bedding-linen",
    "order": 3,
    "name": {
      "en": "Bedding & Linen",
      "ar": "المفروشات وبياضات الأسرّة",
      "zh": "床品与布草",
      "ru": "Постельное бельё",
      "de": "Bettwäsche & Hoteltextilien"
    },
    "description": {
      "en": "Premium bedding and linen collections created for lasting comfort and presentation.",
      "ar": "مجموعات عالية الجودة تجمع بين الراحة الدائمة والمظهر الأنيق.",
      "zh": "注重持久舒适与精致呈现的高品质床品系列。",
      "ru": "Премиальные коллекции для длительного комфорта и безупречной презентации.",
      "de": "Premium-Kollektionen für dauerhaften Komfort und eine makellose Präsentation."
    }
  },
  {
    "slug": "front-office-stationery",
    "order": 4,
    "name": {
      "en": "Front Office Stationery",
      "ar": "مستلزمات الاستقبال والقرطاسية",
      "zh": "前台文具",
      "ru": "Канцелярия для стойки приёма",
      "de": "Rezeptionsbedarf & Schreibwaren"
    },
    "description": {
      "en": "Professional stationery and desk accessories that support polished guest services.",
      "ar": "قرطاسية وإكسسوارات مكتبية احترافية تدعم خدمة ضيوف أكثر تميزًا.",
      "zh": "提升专业服务形象的文具及桌面配套用品。",
      "ru": "Профессиональные принадлежности для качественного обслуживания гостей.",
      "de": "Professionelle Schreib- und Tischwaren für einen gepflegten Gästeservice."
    }
  },
  {
    "slug": "housekeeping-supplies",
    "order": 5,
    "name": {
      "en": "Housekeeping Supplies",
      "ar": "مستلزمات التدبير الفندقي",
      "zh": "客房清洁用品",
      "ru": "Хозяйственные принадлежности",
      "de": "Housekeeping-Bedarf"
    },
    "description": {
      "en": "Reliable products for efficient daily operations and consistently high standards.",
      "ar": "منتجات موثوقة لرفع كفاءة التشغيل اليومي والحفاظ على مستوى ثابت من الجودة.",
      "zh": "支持高效日常运营与稳定服务标准的可靠产品。",
      "ru": "Надёжные товары для эффективной ежедневной работы и стабильных стандартов.",
      "de": "Zuverlässige Produkte für effiziente Abläufe und konstant hohe Standards."
    }
  },
  {
    "slug": "mattress-protectors",
    "order": 6,
    "name": {
      "en": "Mattress Protectors",
      "ar": "واقيات المراتب",
      "zh": "床垫保护套",
      "ru": "Наматрасники",
      "de": "Matratzenschoner"
    },
    "description": {
      "en": "Durable protection designed to preserve hygiene, comfort, and mattress quality.",
      "ar": "حلول متينة للحفاظ على النظافة والراحة وجودة المراتب لفترة أطول.",
      "zh": "兼顾卫生、舒适与床垫长期保护的耐用方案。",
      "ru": "Долговечная защита для сохранения гигиены, комфорта и качества матраса.",
      "de": "Langlebiger Schutz für Hygiene, Komfort und den Werterhalt der Matratze."
    }
  },
  {
    "slug": "packaging-branding",
    "order": 7,
    "name": {
      "en": "Packaging & Branding",
      "ar": "التغليف والعلامة التجارية",
      "zh": "包装与品牌定制",
      "ru": "Упаковка и брендинг",
      "de": "Verpackung & Branding"
    },
    "description": {
      "en": "Custom packaging and branded presentation tailored to your hotel identity.",
      "ar": "عبوات وتصميمات مخصصة تعكس هوية الفندق وتدعم حضوره الاحترافي.",
      "zh": "根据酒店品牌形象定制包装及产品呈现。",
      "ru": "Индивидуальная упаковка и оформление в соответствии с фирменным стилем отеля.",
      "de": "Individuelle Verpackungs- und Präsentationslösungen passend zu Ihrer Hotelmarke."
    }
  },
  {
    "slug": "pillows-duvets",
    "order": 8,
    "name": {
      "en": "Pillows & Duvets",
      "ar": "الوسائد والألحفة",
      "zh": "枕头与羽绒被",
      "ru": "Подушки и одеяла",
      "de": "Kissen & Bettdecken"
    },
    "description": {
      "en": "Comfort-focused pillows and duvets engineered for restful, memorable stays.",
      "ar": "منتجات مصممة للراحة تساعد على توفير إقامة هادئة وتجربة لا تُنسى.",
      "zh": "以舒适为核心，为宾客打造安稳难忘的住宿体验。",
      "ru": "Комфортные изделия для спокойного сна и запоминающегося пребывания.",
      "de": "Komfortorientierte Produkte für erholsame und unvergessliche Aufenthalte."
    }
  },
  {
    "slug": "restaurant-buffet-supplies",
    "order": 9,
    "name": {
      "en": "Restaurant & Buffet Supplies",
      "ar": "مستلزمات المطاعم والبوفيه",
      "zh": "餐厅与自助餐用品",
      "ru": "Оснащение ресторанов и буфетов",
      "de": "Restaurant- & Buffetbedarf"
    },
    "description": {
      "en": "Elegant, dependable solutions for professional dining and buffet presentation.",
      "ar": "حلول أنيقة وموثوقة لخدمة الطعام والعرض الاحترافي للبوفيهات.",
      "zh": "适用于专业餐饮服务与自助餐展示的精致可靠方案。",
      "ru": "Элегантные и надёжные решения для профессиональной подачи блюд.",
      "de": "Elegante, zuverlässige Lösungen für professionelle Gastronomie und Präsentation."
    }
  },
  {
    "slug": "room-slippers",
    "order": 10,
    "name": {
      "en": "Room Slippers",
      "ar": "نعال غرف الفنادق",
      "zh": "客房拖鞋",
      "ru": "Гостиничные тапочки",
      "de": "Hotel-Hausschuhe"
    },
    "description": {
      "en": "Comfortable guest slippers available in hospitality-ready styles and finishes.",
      "ar": "نعال مريحة بتصميمات وتشطيبات مناسبة لقطاع الضيافة.",
      "zh": "提供符合酒店需求的舒适款式与多种工艺选择。",
      "ru": "Комфортные модели и варианты отделки, готовые для гостиничного использования.",
      "de": "Komfortable Gästepantoffeln in hotelgerechten Ausführungen und Veredelungen."
    }
  },
  {
    "slug": "towels-bath-textiles",
    "order": 11,
    "name": {
      "en": "Towels & Bath Textiles",
      "ar": "المناشف ومنسوجات الحمام",
      "zh": "毛巾与浴室纺织品",
      "ru": "Полотенца и текстиль для ванной",
      "de": "Handtücher & Badtextilien"
    },
    "description": {
      "en": "Soft, absorbent textiles developed for reliable everyday hospitality performance.",
      "ar": "منسوجات ناعمة وعالية الامتصاص مصممة للاستخدام الفندقي اليومي.",
      "zh": "柔软吸水，为酒店日常高频使用而设计。",
      "ru": "Мягкий впитывающий текстиль для интенсивной ежедневной эксплуатации.",
      "de": "Weiche, saugfähige Textilien für zuverlässige tägliche Nutzung im Hotelbetrieb."
    }
  }
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
            section: "hotel-supplies",
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
    console.log("Hotel supply categories seeded successfully");
  } catch (error) {
    console.error("Seeding failed:", error?.message || error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedCategories();

