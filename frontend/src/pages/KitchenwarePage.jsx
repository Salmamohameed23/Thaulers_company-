import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  PackageCheck,
  Truck,
  Factory,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { API_BASE_URL } from "../config/api";

const kitchenwareCategories = [
  {
    slug: "cookware-sets",
    image: "/images/kitchenware/categories/cookware-sets.webp",
  },
  {
    slug: "drinkware-bottles",
    image: "/images/kitchenware/categories/drinkware-bottles.webp",
  },
  {
    slug: "electric-kitchen-appliances",
    image: "/images/kitchenware/categories/electric-kitchen-appliances.webp",
  },
  {
    slug: "kitchen-tools-utensils",
    image: "/images/kitchenware/categories/kitchen-tools-utensils.webp",
  },
  {
    slug: "major-home-appliances",
    image: "/images/kitchenware/categories/major-home-appliances.webp",
  },
  {
    slug: "private-label-kitchen-sets",
    image: "/images/kitchenware/categories/private-label-kitchen-sets.webp",
  },
  {
    slug: "storage-organization",
    image: "/images/kitchenware/categories/storage-organization.webp",
  },
];

const KitchenwarePage = () => {
  const { t, lang } = useLanguage();
  const content = t.kitchenwarePage;
  const [apiCategories, setApiCategories] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadCategories = async () => {
      try {
        const baseUrl = API_BASE_URL.replace(/\/$/, "");
        const response = await fetch(
          `${baseUrl}/api/categories?section=kitchenware`,
          { signal: controller.signal },
        );
        if (!response.ok)
          throw new Error("Could not load kitchenware categories");

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
      return kitchenwareCategories.map((category, index) => ({
        ...category,
        title: content.categories?.[index]?.title || "",
        desc: content.categories?.[index]?.desc || "",
      }));
    }

    return apiCategories.map((category) => ({
      slug: category.slug,
      title: category.name?.[lang] || category.name?.en || "",
      desc: category.description?.[lang] || category.description?.en || "",
      image:
        category.image?.url ||
        kitchenwareCategories.find((item) => item.slug === category.slug)
          ?.image ||
        "",
    }));
  }, [apiCategories, content.categories, lang]);

  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden lg:min-h-[700px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/kitchenware/categories/hero.webp')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 lg:min-h-[700px]">
          <div className="max-w-2xl text-white">
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
      <section className="bg-white py-16 text-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-600">
              {content.collectionBadge}
            </p>
            <h2 className="mt-3 text-3xl font-black text-zinc-950 md:text-4xl">
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
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-black text-zinc-950">
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

      {/* PACKAGING */}
      <section className="bg-white py-14 text-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm"
            >
              <img
                src="/images/kitchenware/categories/brand.jpg"
                alt={content.packagingTitle}
                className="h-[300px] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-black text-zinc-950">
                {content.packagingTitle}
              </h2>

              <div className="mt-3 h-[3px] w-16 bg-red-600" />

              <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-gray-600">
                {content.packagingDescription}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-0 md:grid-cols-4">
                {[
                  { icon: BadgeCheck, title: content.packagingFeatures[0] },
                  { icon: PackageCheck, title: content.packagingFeatures[1] },
                  { icon: Factory, title: content.packagingFeatures[2] },
                  { icon: Truck, title: content.packagingFeatures[3] },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="group border-r border-gray-200 px-4 text-center last:border-r-0"
                    >
                      <Icon className="mx-auto mb-3 h-7 w-7 text-red-600 transition group-hover:-translate-y-1 group-hover:scale-110" />
                      <p className="text-xs font-black leading-5 text-zinc-950">
                        {item.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY SOURCE WITH US */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
              {content.whyBadge}
            </p>

            <h2 className="mt-4 text-4xl font-black">{content.whyTitle}</h2>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: BadgeCheck,
                title: content.whyItems[0].title,
                desc: content.whyItems[0].desc,
              },
              {
                icon: Factory,
                title: content.whyItems[1].title,
                desc: content.whyItems[1].desc,
              },
              {
                icon: PackageCheck,
                title: content.whyItems[2].title,
                desc: content.whyItems[2].desc,
              },
              {
                icon: Truck,
                title: content.whyItems[3].title,
                desc: content.whyItems[3].desc,
              },
              {
                icon: ArrowRight,
                title: content.whyItems[4].title,
                desc: content.whyItems[4].desc,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="border-r border-white/15 px-4 text-center last:border-r-0"
                >
                  <Icon className="mx-auto mb-5 h-8 w-8 text-red-500" />

                  <h3 className="text-sm font-black">{item.title}</h3>

                  <p className="mt-3 text-xs font-medium leading-6 text-white/70">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default KitchenwarePage;
