import "dotenv/config";
import mongoose from "mongoose";
import Category from "../models/Category.js";

const categories = [
  {
    "slug": "cutting-tools",
    "order": 1,
    "name": {
      "en": "Cutting Tools",
      "ar": "أدوات القطع",
      "zh": "切削工具",
      "ru": "Режущие инструменты",
      "de": "Schneidwerkzeuge"
    },
    "description": {
      "en": "Precision cutting solutions for professional workshops and industrial applications.",
      "ar": "حلول قطع دقيقة للورش الاحترافية والتطبيقات الصناعية.",
      "zh": "适用于专业车间与工业场景的精密切削解决方案。",
      "ru": "Точные решения для профессиональных мастерских и промышленного применения.",
      "de": "Präzise Schneidlösungen für professionelle Werkstätten und industrielle Anwendungen."
    }
  },
  {
    "slug": "drilling-accessories",
    "order": 2,
    "name": {
      "en": "Drilling Accessories",
      "ar": "ملحقات الحفر",
      "zh": "钻孔附件",
      "ru": "Оснастка для сверления",
      "de": "Bohrzubehör"
    },
    "description": {
      "en": "Reliable drill bits, attachments, and accessories for accurate, efficient work.",
      "ar": "ريش وملحقات حفر موثوقة لتنفيذ الأعمال بكفاءة ودقة.",
      "zh": "可靠的钻头、附件及配件，确保作业精准高效。",
      "ru": "Надёжные свёрла, насадки и принадлежности для точной и эффективной работы.",
      "de": "Zuverlässige Bohrer, Aufsätze und Zubehörteile für präzises, effizientes Arbeiten."
    }
  },
  {
    "slug": "forklifts-material-handling",
    "order": 3,
    "name": {
      "en": "Forklifts & Material Handling",
      "ar": "الرافعات ومناولة المواد",
      "zh": "叉车与物料搬运",
      "ru": "Погрузчики и грузообработка",
      "de": "Gabelstapler & Materialtransport"
    },
    "description": {
      "en": "Practical equipment for safe, efficient lifting, movement, and handling operations.",
      "ar": "معدات عملية لعمليات الرفع والنقل والمناولة بأمان وكفاءة.",
      "zh": "面向安全高效的起重、移动和搬运作业的实用设备。",
      "ru": "Практичное оборудование для безопасного и эффективного подъёма и перемещения грузов.",
      "de": "Praxisgerechte Ausrüstung für sicheres und effizientes Heben und Bewegen."
    }
  },
  {
    "slug": "garden-tools",
    "order": 4,
    "name": {
      "en": "Garden Tools",
      "ar": "أدوات الحدائق",
      "zh": "园林工具",
      "ru": "Садовые инструменты",
      "de": "Gartenwerkzeuge"
    },
    "description": {
      "en": "Durable tools designed for landscaping, gardening, and outdoor maintenance.",
      "ar": "أدوات متينة لأعمال تنسيق الحدائق والعناية بالمساحات الخارجية.",
      "zh": "适用于园林绿化、种植与户外维护的耐用工具。",
      "ru": "Долговечные инструменты для ландшафтных работ и ухода за территорией.",
      "de": "Langlebige Werkzeuge für Landschaftsbau, Gartenarbeit und Außenpflege."
    }
  },
  {
    "slug": "hand-tools",
    "order": 5,
    "name": {
      "en": "Hand Tools",
      "ar": "الأدوات اليدوية",
      "zh": "手动工具",
      "ru": "Ручные инструменты",
      "de": "Handwerkzeuge"
    },
    "description": {
      "en": "Dependable everyday tools built for control, comfort, and lasting performance.",
      "ar": "أدوات يومية موثوقة توفر التحكم والراحة وعمر الاستخدام الطويل.",
      "zh": "兼具操控性、舒适度与持久性能的可靠日常工具。",
      "ru": "Надёжные инструменты для контроля, комфорта и длительной эксплуатации.",
      "de": "Zuverlässige Alltagswerkzeuge für Kontrolle, Komfort und dauerhafte Leistung."
    }
  },
  {
    "slug": "hardware-fasteners",
    "order": 6,
    "name": {
      "en": "Hardware & Fasteners",
      "ar": "المهمات ووسائل التثبيت",
      "zh": "五金与紧固件",
      "ru": "Крепёж и метизы",
      "de": "Beschläge & Befestigungselemente"
    },
    "description": {
      "en": "Essential hardware and fastening solutions for construction and assembly requirements.",
      "ar": "حلول أساسية للتثبيت تناسب متطلبات البناء والتجميع.",
      "zh": "满足建筑与装配需求的基础五金及紧固解决方案。",
      "ru": "Основные крепёжные решения для строительства и сборочных работ.",
      "de": "Wesentliche Befestigungslösungen für Bau- und Montageanforderungen."
    }
  },
  {
    "slug": "industrial-tools",
    "order": 7,
    "name": {
      "en": "Industrial Tools",
      "ar": "الأدوات الصناعية",
      "zh": "工业工具",
      "ru": "Промышленные инструменты",
      "de": "Industriewerkzeuge"
    },
    "description": {
      "en": "Heavy-duty tools engineered for demanding production and maintenance environments.",
      "ar": "أدوات شديدة التحمل لبيئات الإنتاج والصيانة عالية المتطلبات.",
      "zh": "为严苛生产和维护环境打造的重型工具。",
      "ru": "Мощные инструменты для сложных производственных и ремонтных условий.",
      "de": "Robuste Werkzeuge für anspruchsvolle Produktions- und Wartungsumgebungen."
    }
  },
  {
    "slug": "machinery-tools",
    "order": 8,
    "name": {
      "en": "Machinery & Tools",
      "ar": "الماكينات ومعدات الورش",
      "zh": "机械与工具",
      "ru": "Станки и оборудование",
      "de": "Maschinen & Werkzeuge"
    },
    "description": {
      "en": "Professional machinery and workshop equipment for efficient, consistent output.",
      "ar": "ماكينات ومعدات احترافية لتحقيق إنتاج منتظم وأكثر كفاءة.",
      "zh": "提高效率并确保稳定产出的专业机械与车间设备。",
      "ru": "Профессиональное оснащение для эффективного и стабильного выпуска продукции.",
      "de": "Professionelle Maschinen und Werkstattausrüstung für effiziente, konstante Ergebnisse."
    }
  },
  {
    "slug": "measuring-tools",
    "order": 9,
    "name": {
      "en": "Measuring Tools",
      "ar": "أدوات القياس",
      "zh": "测量工具",
      "ru": "Измерительные инструменты",
      "de": "Messwerkzeuge"
    },
    "description": {
      "en": "Accurate measuring and inspection instruments for confident professional results.",
      "ar": "أجهزة قياس وفحص دقيقة تمنح المحترفين نتائج موثوقة.",
      "zh": "精准的测量与检测仪器，助力专业人员获得可靠结果。",
      "ru": "Точные приборы для измерения, контроля и уверенных профессиональных результатов.",
      "de": "Präzise Mess- und Prüfgeräte für verlässliche professionelle Resultate."
    }
  },
  {
    "slug": "power-tools",
    "order": 10,
    "name": {
      "en": "Power Tools",
      "ar": "الأدوات الكهربائية",
      "zh": "电动工具",
      "ru": "Электроинструменты",
      "de": "Elektrowerkzeuge"
    },
    "description": {
      "en": "High-performance electric and cordless tools for construction and professional use.",
      "ar": "أدوات كهربائية ولاسلكية عالية الأداء للبناء والاستخدام المهني.",
      "zh": "适用于建筑与专业作业的高性能有线及无线工具。",
      "ru": "Высокопроизводительные сетевые и аккумуляторные инструменты для профессиональных задач.",
      "de": "Leistungsstarke kabelgebundene und kabellose Werkzeuge für Bau und Gewerbe."
    }
  },
  {
    "slug": "safety-equipment",
    "order": 11,
    "name": {
      "en": "Safety Equipment",
      "ar": "معدات السلامة",
      "zh": "安全防护设备",
      "ru": "Средства защиты",
      "de": "Sicherheitsausrüstung"
    },
    "description": {
      "en": "Protective equipment designed to support safer workplaces and daily operations.",
      "ar": "معدات وقاية مصممة لتعزيز السلامة في مواقع العمل والعمليات اليومية.",
      "zh": "为更安全的工作环境与日常运营而设计的防护设备。",
      "ru": "Защитное оснащение для повышения безопасности рабочих мест и операций.",
      "de": "Schutzausrüstung für sicherere Arbeitsplätze und tägliche Abläufe."
    }
  },
  {
    "slug": "smart-ai-machinery",
    "order": 12,
    "name": {
      "en": "Smart & AI Machinery",
      "ar": "الماكينات الذكية والذكاء الاصطناعي",
      "zh": "智能与AI机械",
      "ru": "Умное оборудование и ИИ",
      "de": "Smarte & KI-Maschinen"
    },
    "description": {
      "en": "Intelligent machinery that advances automation, precision, and productivity.",
      "ar": "حلول ذكية ترتقي بالأتمتة والدقة والإنتاجية.",
      "zh": "提升自动化水平、精度与生产效率的智能机械解决方案。",
      "ru": "Интеллектуальные решения для автоматизации, точности и роста производительности.",
      "de": "Intelligente Maschinenlösungen für mehr Automatisierung, Präzision und Produktivität."
    }
  },
  {
    "slug": "storage-organizers",
    "order": 13,
    "name": {
      "en": "Storage & Organizers",
      "ar": "حلول التخزين والتنظيم",
      "zh": "工具收纳与整理",
      "ru": "Хранение и организация",
      "de": "Aufbewahrung & Organisation"
    },
    "description": {
      "en": "Smart storage systems that keep tools protected, visible, and easy to access.",
      "ar": "أنظمة ذكية تحافظ على الأدوات وتبقيها منظمة وسهلة الوصول.",
      "zh": "保护工具并使其清晰可见、取用便捷的智能收纳系统。",
      "ru": "Умные системы для защиты, упорядочивания и удобного доступа к инструментам.",
      "de": "Intelligente Systeme, die Werkzeuge schützen, ordnen und leicht zugänglich machen."
    }
  },
  {
    "slug": "warehouse-automation",
    "order": 14,
    "name": {
      "en": "Warehouse Automation",
      "ar": "أتمتة المستودعات",
      "zh": "仓储自动化",
      "ru": "Автоматизация складов",
      "de": "Lagerautomatisierung"
    },
    "description": {
      "en": "Scalable automation solutions for faster, safer, and more efficient material flow.",
      "ar": "حلول قابلة للتوسع لتدفق المواد بسرعة وأمان وكفاءة أكبر.",
      "zh": "实现更快、更安全、更高效物料流转的可扩展自动化方案。",
      "ru": "Масштабируемые решения для быстрого, безопасного и эффективного движения материалов.",
      "de": "Skalierbare Lösungen für einen schnelleren, sichereren und effizienteren Materialfluss."
    }
  },
  {
    "slug": "welding-tools",
    "order": 15,
    "name": {
      "en": "Welding Tools",
      "ar": "معدات اللحام",
      "zh": "焊接工具",
      "ru": "Сварочное оборудование",
      "de": "Schweißwerkzeuge"
    },
    "description": {
      "en": "Reliable welding equipment and accessories for fabrication, repair, and production.",
      "ar": "معدات وملحقات موثوقة للتصنيع والإصلاح وعمليات الإنتاج.",
      "zh": "适用于制造、维修与生产的可靠焊接设备及附件。",
      "ru": "Надёжное оборудование и оснастка для изготовления, ремонта и производства.",
      "de": "Zuverlässige Schweißtechnik und Zubehör für Fertigung, Reparatur und Produktion."
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
            section: "tools-hardware",
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
    console.log("Tools and hardware categories seeded successfully");
  } catch (error) {
    console.error("Seeding failed:", error?.message || error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedCategories();

