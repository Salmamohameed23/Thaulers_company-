import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { hotelPartnerItems } from "../data/hotelSuppliesData";
import { useLanguage } from "../i18n/LanguageContext";
import { API_BASE_URL } from "../config/api";
import ProductRequestCTA from "../components/common/ProductRequestCTA";

const hotelCategories = [
  {
    slug: "amenities-guest-room",
    title: "Guest Room Amenities",
    desc: "Thoughtfully selected essentials that enhance comfort and elevate the guest experience.",
    image: "/images/Hotelsupply/category-amenities-guest-room.webp",
  },
  {
    slug: "bathroom-accessories",
    title: "Bathroom Accessories",
    desc: "Refined and functional bathroom accessories designed for modern hospitality spaces.",
    image: "/images/Hotelsupply/category-bathroom-accessories.webp",
  },
  {
    slug: "bedding-linen",
    title: "Bedding & Linen",
    desc: "Premium bedding and linen collections created for lasting comfort and presentation.",
    image: "/images/Hotelsupply/category-bedding-linen.webp",
  },
  {
    slug: "front-office-stationery",
    title: "Front Office Stationery",
    desc: "Professional stationery and desk accessories that support polished guest services.",
    image: "/images/Hotelsupply/category-front-office-stationery.webp",
  },
  {
    slug: "housekeeping-supplies",
    title: "Housekeeping Supplies",
    desc: "Reliable housekeeping products for efficient daily operations and consistent standards.",
    image: "/images/Hotelsupply/category-housekeeping-supplies.webp",
  },
  {
    slug: "mattress-protectors",
    title: "Mattress Protectors",
    desc: "Durable protective solutions designed to preserve hygiene, comfort, and mattress quality.",
    image: "/images/Hotelsupply/category-mattress-protectors.webp",
  },
  {
    slug: "packaging-branding",
    title: "Packaging & Branding",
    desc: "Custom packaging and branding solutions tailored to your hotel's identity.",
    image: "/images/Hotelsupply/category-packaging-branding.webp",
  },
  {
    slug: "pillows-duvets",
    title: "Pillows & Duvets",
    desc: "Comfort-focused pillows and duvets engineered for restful, memorable stays.",
    image: "/images/Hotelsupply/category-pillows-duvets.webp",
  },
  {
    slug: "restaurant-buffet-supplies",
    title: "Restaurant & Buffet Supplies",
    desc: "Elegant, dependable solutions for professional dining and buffet presentation.",
    image: "/images/Hotelsupply/category-restaurant-buffet-supplies.webp",
  },
  {
    slug: "room-slippers",
    title: "Room Slippers",
    desc: "Comfortable guest slippers available in hospitality-ready styles and finishes.",
    image: "/images/Hotelsupply/category-room-slippers.webp",
  },
  {
    slug: "towels-bath-textiles",
    title: "Towels & Bath Textiles",
    desc: "Soft, absorbent bath textiles developed for everyday hospitality performance.",
    image: "/images/Hotelsupply/category-towels-bath-textiles.webp",
  },
];

const HotelSuppliesPage = () => {
  const { t, lang } = useLanguage();
  const content = t.hotelSuppliesPage;
  const [apiCategories, setApiCategories] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const loadCategories = async () => {
      try {
        const baseUrl = API_BASE_URL.replace(/\/$/, "");
        const response = await fetch(
          `${baseUrl}/api/categories?section=hotel-supplies`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("Could not load hotel categories");
        const result = await response.json();
        setApiCategories(Array.isArray(result.data) ? result.data : []);
      } catch (error) {
        if (error.name !== "AbortError") setApiCategories(null);
      }
    };
    loadCategories();
    return () => controller.abort();
  }, []);

  const displayedCategories = useMemo(() => {
    if (apiCategories === null) {
      return hotelCategories.map((category, index) => ({
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
        hotelCategories.find((item) => item.slug === category.slug)?.image ||
        "",
    }));
  }, [apiCategories, content.categories, lang]);

  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden text-white lg:min-h-[700px]">
        {/* IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Hotelsupply/hero.jpg')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />

        {/* CONTENT */}
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 lg:min-h-[700px]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/20 px-5 py-3 text-[11px] font-black uppercase tracking-[0.35em] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              {content.heroBadge}
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] md:text-7xl">
              {content.heroTitlePrefix}{" "}
              <span className="text-red-600">{content.heroHighlight}</span>
              <br />
              {content.heroTitleSuffix}
            </h1>

            <div className="mt-8 max-w-xl rounded-3xl border border-white/30 bg-black/35 p-7 backdrop-blur-sm">
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
            <h2 className="text-4xl font-black text-zinc-950">
              {content.categoriesTitle}
            </h2>

            <div className="mx-auto mt-4 h-[3px] w-16 bg-red-600" />
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {displayedCategories.map((category, index) => {
              return (
                <motion.article
                  key={category.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    opacity: { duration: 0.5, delay: index * 0.07 },
                    y: { duration: 0.35, delay: index * 0.07 },
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:border-red-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.13)]"
                >
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-black text-zinc-950 transition-colors duration-300 group-hover:text-red-600">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-6 text-gray-600">
                      {category.desc}
                    </p>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
              {content.whyBadge}
            </p>

            <h2 className="mt-4 text-4xl font-black">{content.whyTitle}</h2>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {hotelPartnerItems.map((item, index) => {
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
      <ProductRequestCTA categorySlug="hotel-supplies" />
    </main>
  );
};

export default HotelSuppliesPage;
