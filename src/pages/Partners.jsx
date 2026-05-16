import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Handshake } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

import eveVisit from "../assets/images/eve_visit.jpg";
import bydVisit from "../assets/images/byd_visit.jpg";
import rfBoxVisit from "../assets/images/rf_visit.jpg";

const partnerAssets = [
  {
    key: "rf",
    name: "RF Box Company",
    country: { en: "Egypt", ar: "مصر", zh: "埃及" },
    image: rfBoxVisit,
    website: "https://www.rf-box.com/",
  },
  {
    key: "eve",
    name: "EVE Energy",
    country: { en: "China", ar: "الصين", zh: "中国" },
    image: eveVisit,
    website: "https://www.evebattery.com/en",
  },
  {
    key: "byd",
    name: "BYD",
    country: { en: "China", ar: "الصين", zh: "中国" },
    image: bydVisit,
    website: "https://www.bydglobal.com/cn/index.html",
  },
];

const Partners = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const partners = partnerAssets.map((item) => ({
    ...item,
    country: item.country[lang] || item.country.en,
    ...t.partnersPage.partners[item.key],
  }));

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className={`bg-white text-neutral-950 ${isAr ? "font-[Cairo]" : ""}`}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className={isAr ? "text-right" : ""}>
              <p className="mb-4 text-s font-black uppercase tracking-[0.3em] text-[#ee4036]">
                {t.partnersPage.heroBadge}
              </p>

              <h1 className="text-5xl font-black leading-tight">
                {t.partnersPage.heroTitle1}
                <span className="block">{t.partnersPage.heroTitle2}</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-700">
                {t.partnersPage.heroDesc}
              </p>
            </div>

            <div className="rounded-3xl bg-neutral-100 p-6">
              <Handshake size={32} className="mb-4 text-[#ee4036]" />
              <p className="leading-7 text-neutral-700">
                {t.partnersPage.heroBox}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10">
            {partners.map((partner, index) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-md transition hover:shadow-xl"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* IMAGE */}
                    <div className="relative h-[320px] bg-neutral-100">
                      {partner.image ? (
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-neutral-900 text-white">
                          <Building2 size={40} className="text-red-500" />
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className={`relative p-8 ${isAr ? "text-right" : ""}`}>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#ee4036]">
                        {partner.category}
                      </span>

                      <h3 className="mt-3 text-3xl font-black">
                        {partner.name}
                      </h3>

                      <p className="mt-2 text-sm text-neutral-800">
                        {partner.country}
                      </p>

                      <p className="mt-5 leading-7 text-neutral-700">
                        {partner.description}
                      </p>

                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {partner.highlights.map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border p-4 text-sm text-neutral-700"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        <span className="text-sm font-bold text-neutral-800">
                          {partner.label}
                        </span>

                        <span
                          className={`flex items-center gap-2 font-bold text-[#ee4036] transition group-hover:gap-3 ${
                            isAr ? "flex-row-reverse" : ""
                          }`}
                        >
                          {t.partnersPage.visit}
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;
