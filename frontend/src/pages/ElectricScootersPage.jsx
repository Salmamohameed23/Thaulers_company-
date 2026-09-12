import { motion } from "framer-motion";
import {
  BatteryCharging,
  BadgeCheck,
  Factory,
  PackageCheck,
  Truck,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

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
    image: "/images/bikes/high-performance-scooters.jpg",
  },
  {
    slug: "adventure-scooters",
    title: "Adventure Scooters",
    desc: "Rugged models built for rough roads, outdoor journeys, and confident all-terrain mobility.",
    image: "/images/bikes/adventure-scooters.jpg",
  },
  {
    slug: "classic-scooters",
    title: "Classic Scooters",
    desc: "Retro-inspired models combining elegant design, comfortable seating, and reliable everyday performance.",
    image: "/images/bikes/classic-scooters.jpg",
  },
  {
    slug: "utility-scooters",
    title: "Utility Scooters",
    desc: "Versatile, durable models designed for daily tasks with stability, strength, and practical features.",
    image: "/images/bikes/utility-scooters.jpg",
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

  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden bg-black text-white lg:min-h-[700px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bikes/scooter-hero.png')",
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

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {scooterCategories.map((category, index) => {
              const translatedCategory = content.categories[index];

              return (
                <motion.article
                  key={category.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    opacity: { duration: 0.5, delay: index * 0.08 },
                    y: { duration: 0.35, delay: index * 0.08 },
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:border-red-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.13)]"
                >
                  <div className="relative flex h-72 items-center justify-center overflow-hidden bg-white p-5">
                    <img
                      src={category.image}
                      alt={translatedCategory.title}
                      className="h-full w-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-x-5 bottom-0 h-px bg-gray-100" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-black transition-colors duration-300 group-hover:text-red-600">
                      {translatedCategory.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold leading-7 text-gray-600">
                      {translatedCategory.desc}
                    </p>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />
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
    </main>
  );
};

export default ElectricScootersPage;
