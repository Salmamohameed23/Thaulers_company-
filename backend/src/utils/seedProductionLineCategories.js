import "dotenv/config";
import mongoose from "mongoose";
import Category from "../models/Category.js";

const categories = [
  {
    "slug": "municipal-solid-waste-sorting-line",
    "order": 1,
    "name": {
      "en": "Municipal Solid Waste Sorting Line",
      "ar": "خط فرز النفايات البلدية الصلبة",
      "zh": "城市固体废弃物分选线",
      "ru": "Линия сортировки твёрдых бытовых отходов",
      "de": "Sortierlinie für kommunale Feststoffe"
    },
    "description": {
      "en": "Sorting city waste, recovering recyclables, and reducing landfill volumes.",
      "ar": "لفرز مخلفات المدن واستعادة المواد القابلة لإعادة التدوير وتقليل الطمر.",
      "zh": "用于城市垃圾分选、再生资源回收及减少填埋量。",
      "ru": "Сортировка городских отходов, извлечение вторсырья и снижение объёма захоронения.",
      "de": "Sortierung städtischer Abfälle, Wertstoffrückgewinnung und Reduzierung der Deponiemenge."
    }
  },
  {
    "slug": "food-waste-compost-production-line",
    "order": 2,
    "name": {
      "en": "Food Waste Compost Production Line",
      "ar": "خط إنتاج السماد من مخلفات الطعام",
      "zh": "餐厨垃圾堆肥生产线",
      "ru": "Линия компостирования пищевых отходов",
      "de": "Kompostieranlage für Lebensmittelabfälle"
    },
    "description": {
      "en": "Processing organic waste from municipalities, hotels, restaurants, and markets.",
      "ar": "لمعالجة المخلفات العضوية من المدن والفنادق والمطاعم والأسواق.",
      "zh": "处理市政、酒店、餐厅和市场产生的有机废弃物。",
      "ru": "Переработка органических отходов городов, отелей, ресторанов и рынков.",
      "de": "Verarbeitung organischer Abfälle aus Kommunen, Hotels, Restaurants und Märkten."
    }
  },
  {
    "slug": "centralized-city-waste-processing-line",
    "order": 3,
    "name": {
      "en": "Centralized City Waste Processing Line",
      "ar": "خط مركزي لمعالجة مخلفات المدن",
      "zh": "城市垃圾集中处理线",
      "ru": "Централизованная линия переработки городских отходов",
      "de": "Zentrale Stadtmüll-Aufbereitungslinie"
    },
    "description": {
      "en": "Integrated transfer and processing solutions for city-wide waste operations.",
      "ar": "حل متكامل لنقل ومعالجة المخلفات على مستوى المدن والمناطق الكبرى.",
      "zh": "面向城市级垃圾转运与集中处理的一体化方案。",
      "ru": "Комплексное решение для перегрузки и переработки отходов на уровне города.",
      "de": "Integrierte Lösung für Umschlag und Verarbeitung kommunaler Abfallströme."
    }
  },
  {
    "slug": "medical-waste-incinerator-line",
    "order": 4,
    "name": {
      "en": "Medical Waste Incinerator Line",
      "ar": "خط محرقة النفايات الطبية",
      "zh": "医疗废物焚烧处理线",
      "ru": "Линия сжигания медицинских отходов",
      "de": "Verbrennungslinie für medizinische Abfälle"
    },
    "description": {
      "en": "Controlled treatment solutions for hospitals, clinics, and medical waste facilities.",
      "ar": "حلول معالجة محكمة للمستشفيات والعيادات ومراكز النفايات الطبية.",
      "zh": "适用于医院、诊所及医疗废物处理机构的可控处理方案。",
      "ru": "Контролируемая утилизация отходов больниц, клиник и медицинских центров.",
      "de": "Kontrollierte Behandlung für Krankenhäuser, Kliniken und Entsorgungszentren."
    }
  },
  {
    "slug": "recycled-polyester-staple-fiber-production-line",
    "order": 5,
    "name": {
      "en": "Recycled Polyester Staple Fiber Production Line",
      "ar": "خط إنتاج ألياف البوليستر المعاد تدويرها",
      "zh": "再生涤纶短纤维生产线",
      "ru": "Линия производства вторичного полиэфирного волокна",
      "de": "Produktionslinie für recycelte Polyester-Stapelfasern"
    },
    "description": {
      "en": "Converting recycled PET into fiber for textiles, bedding, and non-woven products.",
      "ar": "لتحويل PET المعاد تدويره إلى ألياف للمنسوجات والمفروشات والمنتجات غير المنسوجة.",
      "zh": "将再生PET转化为纺织、填充及无纺制品用纤维。",
      "ru": "Переработка ПЭТ во волокно для текстиля, наполнителей и нетканых изделий.",
      "de": "Umwandlung von Recycling-PET in Fasern für Textilien, Bettwaren und Vliesprodukte."
    }
  },
  {
    "slug": "aluminum-recycling-to-cable-production-line",
    "order": 6,
    "name": {
      "en": "Aluminum Recycling to Cable Production Line",
      "ar": "خط إعادة تدوير الألومنيوم وإنتاج الكابلات",
      "zh": "铝回收及电缆生产线",
      "ru": "Линия переработки алюминия и производства кабеля",
      "de": "Aluminium-Recycling- und Kabelproduktionslinie"
    },
    "description": {
      "en": "Transforming aluminum material into wire and cable products.",
      "ar": "لتحويل خامات الألومنيوم إلى أسلاك وموصلات ومنتجات كابلات.",
      "zh": "将铝原料加工为铝线、导体及电缆产品。",
      "ru": "Преобразование алюминиевого сырья в проволоку, проводники и кабель.",
      "de": "Verarbeitung von Aluminium zu Draht-, Leiter- und Kabelprodukten."
    }
  },
  {
    "slug": "metal-pipe-production-line",
    "order": 7,
    "name": {
      "en": "Metal Pipe Production Line",
      "ar": "خط إنتاج المواسير المعدنية",
      "zh": "金属管材生产线",
      "ru": "Линия производства металлических труб",
      "de": "Metallrohr-Produktionslinie"
    },
    "description": {
      "en": "Producing industrial pipes for construction, furniture, and steel structures.",
      "ar": "لإنتاج المواسير المستخدمة في البناء والأثاث والهياكل والتطبيقات الصناعية.",
      "zh": "生产建筑、家具、钢结构及工业用途管材。",
      "ru": "Выпуск труб для строительства, мебели, металлоконструкций и промышленности.",
      "de": "Herstellung von Rohren für Bau, Möbel, Stahlkonstruktionen und Industrie."
    }
  },
  {
    "slug": "steel-coil-slitting-line",
    "order": 8,
    "name": {
      "en": "Steel Coil Slitting Line",
      "ar": "خط تقطيع لفائف الصلب",
      "zh": "钢卷纵剪生产线",
      "ru": "Линия продольной резки стального рулона",
      "de": "Stahlcoil-Spaltanlage"
    },
    "description": {
      "en": "Precision coil processing for pipe making, forming, stamping, and cable trays.",
      "ar": "لمعالجة اللفائف بدقة لصناعة المواسير والتشكيل والكبس وحوامل الكابلات.",
      "zh": "为制管、辊压成型、冲压及桥架生产提供精密分条。",
      "ru": "Точная обработка рулонов для труб, профилирования, штамповки и кабельных лотков.",
      "de": "Präzise Bandverarbeitung für Rohrfertigung, Profilieren, Stanzen und Kabeltrassen."
    }
  },
  {
    "slug": "automatic-filling-packing-line",
    "order": 9,
    "name": {
      "en": "Automatic Filling & Packing Line",
      "ar": "خط التعبئة والتغليف الأوتوماتيكي",
      "zh": "自动灌装包装线",
      "ru": "Автоматическая линия розлива и упаковки",
      "de": "Automatische Abfüll- und Verpackungslinie"
    },
    "description": {
      "en": "Automated filling and packing for food, cosmetics, chemicals, and beverages.",
      "ar": "لتعبئة وتغليف الأغذية ومستحضرات التجميل والكيماويات والمشروبات.",
      "zh": "适用于食品、化妆品、化工及饮料的自动灌装包装。",
      "ru": "Розлив и упаковка пищевой, косметической, химической продукции и напитков.",
      "de": "Abfüllung und Verpackung von Lebensmitteln, Kosmetik, Chemikalien und Getränken."
    }
  },
  {
    "slug": "carton-box-production-line",
    "order": 10,
    "name": {
      "en": "Carton Box Production Line",
      "ar": "خط إنتاج صناديق الكرتون",
      "zh": "纸箱生产线",
      "ru": "Линия производства картонных коробок",
      "de": "Produktionslinie für Kartonagen"
    },
    "description": {
      "en": "Producing printed and shipping cartons for retail, food, appliances, and export.",
      "ar": "لإنتاج كراتين الطباعة والشحن لقطاعات التجزئة والأغذية والأجهزة والتصدير.",
      "zh": "生产适用于零售、食品、家电及出口运输的印刷纸箱。",
      "ru": "Выпуск печатной и транспортной тары для торговли, пищевой продукции и экспорта.",
      "de": "Herstellung bedruckter Versandkartons für Handel, Lebensmittel, Geräte und Export."
    }
  },
  {
    "slug": "corrugated-cardboard-production-line",
    "order": 11,
    "name": {
      "en": "Corrugated Cardboard Production Line",
      "ar": "خط إنتاج الكرتون المموج",
      "zh": "瓦楞纸板生产线",
      "ru": "Линия производства гофрокартона",
      "de": "Wellpappen-Produktionslinie"
    },
    "description": {
      "en": "High-efficiency board production for carton factories and logistics packaging.",
      "ar": "لإنتاج ألواح مموجة بكفاءة لمصانع الكرتون وعبوات الخدمات اللوجستية.",
      "zh": "为纸箱厂及物流包装高效生产瓦楞纸板。",
      "ru": "Высокоэффективный выпуск листов для картона и логистической упаковки.",
      "de": "Effiziente Plattenfertigung für Kartonwerke und Logistikverpackungen."
    }
  },
  {
    "slug": "flexible-packaging-printing-lamination-line",
    "order": 12,
    "name": {
      "en": "Flexible Packaging Printing & Lamination Line",
      "ar": "خط طباعة وتصفيح العبوات المرنة",
      "zh": "软包装印刷复合生产线",
      "ru": "Линия печати и ламинации гибкой упаковки",
      "de": "Druck- und Kaschierlinie für flexible Verpackungen"
    },
    "description": {
      "en": "Printing and laminating flexible films for food, coffee, snacks, and pouches.",
      "ar": "لطباعة وتصفيح أفلام تعبئة الأغذية والقهوة والوجبات والأكياس المرنة.",
      "zh": "用于食品、咖啡、零食及袋装产品的薄膜印刷与复合。",
      "ru": "Печать и ламинация плёнки для пищевой продукции, кофе, снеков и пакетов.",
      "de": "Druck und Laminierung von Folien für Lebensmittel, Kaffee, Snacks und Beutel."
    }
  },
  {
    "slug": "labeling-shrink-wrapping-production-line",
    "order": 13,
    "name": {
      "en": "Labeling & Shrink Wrapping Production Line",
      "ar": "خط وضع الملصقات والتغليف الحراري",
      "zh": "贴标及热收缩包装线",
      "ru": "Линия этикетирования и термоусадочной упаковки",
      "de": "Etikettier- und Schrumpfverpackungslinie"
    },
    "description": {
      "en": "Integrated final-packaging solutions for bottles, jars, cans, and boxes.",
      "ar": "حلول تغليف نهائي متكاملة للزجاجات والعبوات والعلب والصناديق.",
      "zh": "面向瓶、罐、盒等产品的一体化终端包装方案。",
      "ru": "Комплексная финальная упаковка бутылок, банок, коробок и другой продукции.",
      "de": "Integrierte Endverpackung für Flaschen, Gläser, Dosen und Kartons."
    }
  },
  {
    "slug": "non-woven-bag-production-line",
    "order": 14,
    "name": {
      "en": "Non-Woven Bag Production Line",
      "ar": "خط إنتاج الأكياس غير المنسوجة",
      "zh": "无纺布袋生产线",
      "ru": "Линия производства нетканых сумок",
      "de": "Produktionslinie für Vliesstofftaschen"
    },
    "description": {
      "en": "Automated production of retail, supermarket, and promotional non-woven bags.",
      "ar": "لإنتاج أكياس التسوق والمتاجر والدعاية بصورة أوتوماتيكية.",
      "zh": "自动生产零售、超市及促销用无纺布袋。",
      "ru": "Автоматический выпуск сумок для торговли, супермаркетов и рекламы.",
      "de": "Automatische Herstellung von Einkaufs-, Supermarkt- und Werbetaschen."
    }
  },
  {
    "slug": "paper-bag-production-line",
    "order": 15,
    "name": {
      "en": "Paper Bag Production Line",
      "ar": "خط إنتاج الأكياس الورقية",
      "zh": "纸袋生产线",
      "ru": "Линия производства бумажных пакетов",
      "de": "Produktionslinie für Papiertüten"
    },
    "description": {
      "en": "Producing paper bags for retail, food, hospitality, fashion, and gifts.",
      "ar": "لإنتاج أكياس التجزئة والأغذية والفنادق والأزياء والهدايا.",
      "zh": "生产零售、食品、酒店、时尚及礼品用纸袋。",
      "ru": "Выпуск пакетов для торговли, питания, гостиниц, моды и подарков.",
      "de": "Herstellung von Tüten für Handel, Lebensmittel, Hotellerie, Mode und Geschenke."
    }
  },
  {
    "slug": "plastic-bag-making-production-line",
    "order": 16,
    "name": {
      "en": "Plastic Bag Making Production Line",
      "ar": "خط تصنيع الأكياس البلاستيكية",
      "zh": "塑料袋制造生产线",
      "ru": "Линия производства пластиковых пакетов",
      "de": "Produktionslinie für Kunststoffbeutel"
    },
    "description": {
      "en": "Flexible production of shopping, flat, T-shirt, and waste bags.",
      "ar": "لإنتاج مرن لأكياس التسوق والأكياس المسطحة وأكياس النفايات.",
      "zh": "灵活生产购物袋、平口袋、背心袋及垃圾袋。",
      "ru": "Гибкий выпуск пакетов-майка, плоских, хозяйственных и мусорных пакетов.",
      "de": "Flexible Fertigung von Einkaufs-, Flach-, Hemdchen- und Müllbeuteln."
    }
  },
  {
    "slug": "rigid-box-production-line",
    "order": 17,
    "name": {
      "en": "Rigid Box Production Line",
      "ar": "خط إنتاج العلب الصلبة الفاخرة",
      "zh": "精品硬盒生产线",
      "ru": "Линия производства жёстких коробок",
      "de": "Produktionslinie für starre Premiumboxen"
    },
    "description": {
      "en": "Premium rigid-box production for gifts, perfume, electronics, and hotel amenities.",
      "ar": "لإنتاج علب الهدايا والعطور والإلكترونيات ومستلزمات الفنادق.",
      "zh": "生产礼品、香水、电子产品及酒店用品精品包装盒。",
      "ru": "Премиальная упаковка для подарков, парфюмерии, электроники и отелей.",
      "de": "Hochwertige Verpackungen für Geschenke, Parfüm, Elektronik und Hotelartikel."
    }
  },
  {
    "slug": "stand-up-pouch-making-line",
    "order": 18,
    "name": {
      "en": "Stand-Up Pouch Making Line",
      "ar": "خط تصنيع الأكياس ذاتية الوقوف",
      "zh": "自立袋制袋生产线",
      "ru": "Линия производства пакетов дой-пак",
      "de": "Produktionslinie für Standbodenbeutel"
    },
    "description": {
      "en": "Producing premium zipper, spout, and stand-up pouches for multiple markets.",
      "ar": "لإنتاج الأكياس المزودة بسحاب أو فوهة والأكياس الفاخرة ذاتية الوقوف.",
      "zh": "生产拉链袋、吸嘴袋及多行业精品自立袋。",
      "ru": "Выпуск пакетов с застёжкой, носиком и устойчивым дном для разных рынков.",
      "de": "Herstellung von Reißverschluss-, Ausgießer- und Standbodenbeuteln."
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
            section: "production-lines",
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
    console.log("Production line categories seeded successfully");
  } catch (error) {
    console.error("Seeding failed:", error?.message || error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedCategories();

