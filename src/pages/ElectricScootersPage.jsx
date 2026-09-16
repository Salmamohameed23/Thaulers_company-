import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  BadgeCheck,
  Factory,
  PackageCheck,
  Truck,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { API_BASE_URL } from "../config/api";
import ProductRequestCTA from "../components/common/ProductRequestCTA";

const scooterCategories = [
  {
    slug: "city-scooters",
    title: "City Scooters",
    desc: "Efficient and comfortable electric scooters designed for modern urban mobility.",
    image: "/images/bikes/city-scooters.jpg",
  },
  {
    slug: "delivery-scooters",
    title: "Delivery Scooters",
    desc: "Practical commercial models built for dependable last-mile delivery operations.",
    image: "/images/bikes/delivery-scooters.jpg",
  },
  {
    slug: "high-performance-scooters",
    title: "High-Performance Scooters",
    desc: "Powerful models combining responsive acceleration, extended range, and bold design.",
    image: "/images/bikes/high-performance-scooters.webp",
  },
  {
    slug: "adventure-scooters",
    title: "Adventure Scooters",
    desc: "Rugged models built for rough roads, outdoor journeys, and confident all-terrain mobility.",
    image: "/images/bikes/adventure-scooters.webp",
  },
  {
    slug: "classic-scooters",
    title: "Classic Scooters",
    desc: "Retro-inspired models combining elegant design, comfortable seating, and reliable everyday performance.",
    image: "/images/bikes/classic-scooters.webp",
  },
  {
    slug: "utility-scooters",
    title: "Utility Scooters",
    desc: "Versatile, durable models designed for daily tasks with stability, strength, and practical features.",
    image: "/images/bikes/utility-scooters.webp",
  },
];

const advantages = [
  {
    icon: BatteryCharging,
    title: "Reliable Battery Systems",
    desc: "Battery configurations selected for dependable range, safety, and daily performance.",
  },
  {
    icon: BadgeCheck,
    title: "Quality-Checked Supply",
    desc: "Carefully evaluated models supported by consistent manufacturing standards.",
  },
  {
    icon: Factory,
    title: "Factory-Direct Sourcing",
    desc: "Competitive supply from capable manufacturers matched to your market requirements.",
  },
  {
    icon: PackageCheck,
    title: "Branding & Customization",
    desc: "Flexible colors, specifications, logos, packaging, and private-label options.",
  },
  {
    icon: Truck,
    title: "Export & Logistics Support",
    desc: "Responsive coordination for inspection, packing, documentation, and shipment.",
  },
];

const ElectricScootersPage = () => {
  const { t, lang } = useLanguage();
  const content = t.electricScootersPage;
  const isArabic = lang === "ar";
  const [apiCategories, setApiCategories] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadCategories = async () => {
      try {
        const baseUrl = API_BASE_URL.replace(/\/$/, "");
        const response = await fetch(
          `${baseUrl}/api/categories?section=electric-scooters`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Could not load electric scooter categories");
        }

        const result = await response.json();
        setApiCategories(Array.isArray(result.data) ? result.data : []);
      } catch (error) {
        if (error.name !== "AbortError") {
          // Keep the current static content as a fallback if the API is offline.
          setApiCategories(null);
        }
      }
    };

    loadCategories();
    return () => controller.abort();
  }, []);

  const displayedCategories = useMemo(() => {
    if (apiCategories === null) {
      return scooterCategories.map((category, index) => ({
        ...category,
        title: content.categories?.[index]?.title || category.title,
        desc: content.categories?.[index]?.desc || category.desc,
      }));
    }

    return apiCategories.map((category) => ({
      slug: category.slug,
      title: category.name?.[lang] || category.name?.en || "",
      desc: category.description?.[lang] || category.description?.en || "",
      image:
        category.image?.url ||
        scooterCategories.find((item) => item.slug === category.slug)?.image ||
        "",
    }));
  }, [apiCategories, content.categories, lang]);

  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden bg-black text-white lg:min-h-[700px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bikes/scooter-hero.webp')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 lg:min-h-[700px]">
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className={`max-w-3xl ${isArabic ? "ml-auto text-right" : "text-left"}`}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/20 px-5 py-3 text-[11px] font-black uppercase tracking-[0.35em] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              {content.heroBadge}
            </div>

            <h1
              className={`mt-8 font-black ${
                isArabic
                  ? "text-4xl leading-[1.3] sm:text-5xl md:text-6xl md:leading-[1.25]"
                  : "text-5xl leading-[1.08] md:text-7xl"
              }`}
            >
              <span className="block">{content.heroTitlePrefix}</span>
              <span className={`block ${isArabic ? "mt-2" : "mt-1"}`}>
                {content.heroTitleMiddle}{" "}
                <span className="text-red-600">{content.heroHighlight}</span>
              </span>
            </h1>

            <div className="mt-8 max-w-2xl rounded-3xl border border-white/30 bg-black/35 p-7 backdrop-blur-sm">
              <p className="text-base font-semibold leading-8 text-white/90 md:text-lg">
                {content.heroDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-black text-zinc-950 md:text-4xl">
              {content.categoriesTitle}
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-red-600" />
            <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-7 text-gray-600">
              {content.categoriesDescription}
            </p>
          </div>

          <div className="mt-12 grid justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedCategories.map((category, index) => {
              return (
                <motion.article
                  key={category.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    opacity: { duration: 0.5, delay: index * 0.08 },
                    y: { duration: 0.35, delay: index * 0.08 },
                  }}
                  className="group relative flex h-full w-full max-w-[290px] flex-col overflow-hidden rounded-[22px] border border-zinc-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-red-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
                >
                  <div className="relative h-[308px] w-full overflow-hidden bg-white">
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-full object-contain object-center"
                    />
                  </div>

                  <div className="mx-5 h-px bg-zinc-100" />

                  <div className="flex flex-1 flex-col px-6 pb-7 pt-5">
                    <div className="mb-3 h-[3px] w-9 rounded-full bg-red-600 transition-all duration-300 group-hover:w-14" />
                    <h3 className="text-lg font-black leading-snug text-zinc-950 transition-colors duration-300 group-hover:text-red-600">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-[13px] font-medium leading-6 text-zinc-600">
                      {category.desc}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition duration-300 group-hover:ring-red-500/15" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
              {content.whyBadge}
            </p>
            <h2 className="mt-4 text-4xl font-black">{content.whyTitle}</h2>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              const translatedItem = content.whyItems[index];

              return (
                <motion.div
                  key={translatedItem.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="border-r border-white/15 px-4 text-center last:border-r-0"
                >
                  <Icon className="mx-auto mb-5 h-8 w-8 text-red-500" />
                  <h3 className="text-sm font-black">{translatedItem.title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-white/70">
                    {translatedItem.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <ProductRequestCTA categorySlug="electric-scooters" />
    </main>
  );
};

export default ElectricScootersPage;
