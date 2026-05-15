import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import bydLogo from "../../assets/logos/BYD_logo_clean_final.png";
import RFLogo from "../../assets/logos/rfbox logo.jpg";
import EVELogo from "../../assets/logos/EVE_logo_transparent.png";

import { useLanguage } from "../../i18n/LanguageContext";

const PartnersPreview = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const partners = [
    {
      logo: RFLogo,
      ...t.partners.items[0],
    },
    {
      logo: EVELogo,
      ...t.partners.items[1],
    },
    {
      logo: bydLogo,
      ...t.partners.items[2],
    },
  ];

  return (
    <section
      className={`relative overflow-hidden bg-white py-20 text-neutral-950 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
      <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className={`mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between ${
            isAr ? "lg:flex-row-reverse text-right" : ""
          }`}
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-s font-black uppercase tracking-[0.28em] text-[#ee4036]">
              {t.partners.badge}
            </p>
          </div>

          <Link
            to="/partners"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
          >
            <span>{t.partners.viewAll}</span>
            <ArrowUpRight size={16} className={isAr ? "rotate-[-90deg]" : ""} />
          </Link>
        </motion.div>

        <div
          className={`grid gap-7 md:grid-cols-2 lg:grid-cols-3 ${
            isAr ? "lg:[direction:rtl]" : ""
          }`}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.075)] transition-all duration-300 hover:border-red-600/25 hover:shadow-[0_28px_70px_rgba(0,0,0,0.11)] ${
                isAr ? "text-right" : ""
              }`}
            >
              <div
                className={`absolute top-6 text-7xl font-black text-black/[0.035] ${
                  isAr ? "left-6" : "right-6"
                }`}
              >
                0{index + 1}
              </div>

              <div
                className={`mb-8 flex h-20 w-32 items-center justify-center rounded-3xl border border-black/10 bg-white p-4 shadow-[0_12px_35px_rgba(0,0,0,0.055)] ${
                  isAr ? "mr-0" : ""
                }`}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>

              <h3
                className="text-[28px] font-black tracking-[-0.03em] text-neutral-950 text-left"
                dir="ltr"
              >
                {partner.name}
              </h3>

              <p className="mt-2 text-xs font-black uppercase tracking-[0.24em] text-[#ee4036]">
                {partner.country}
              </p>

              <p className="mt-6 text-[16px] leading-8 text-neutral-600">
                {partner.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersPreview;
