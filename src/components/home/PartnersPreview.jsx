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
    { logo: RFLogo, ...t.partners.items[0] },
    { logo: EVELogo, ...t.partners.items[1] },
    { logo: bydLogo, ...t.partners.items[2] },
  ];

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className={`relative overflow-hidden bg-white py-12 text-neutral-950 sm:py-16 lg:py-20 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="pointer-events-none absolute left-[-140px] top-20 h-[260px] w-[260px] rounded-full bg-red-600/10 blur-[95px] sm:h-[360px] sm:w-[360px] sm:blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-160px] h-[300px] w-[300px] rounded-full bg-red-600/10 blur-[100px] sm:h-[440px] sm:w-[440px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className={`mb-8 flex flex-col gap-5 sm:mb-12 sm:gap-7 lg:flex-row lg:items-end lg:justify-between ${
            isAr ? "text-right lg:flex-row-reverse" : "text-left"
          }`}
        >
          <div className="max-w-3xl">
            <p
              className={`mb-4 break-words font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-[11px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.28em]"
              }`}
            >
              {t.partners.badge}
            </p>
          </div>

          <Link
            to="/partners"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 sm:px-7 sm:py-4"
          >
            <span>{t.partners.viewAll}</span>
            <ArrowUpRight size={16} className={isAr ? "rotate-[-90deg]" : ""} />
          </Link>
        </motion.div>

        <div className="grid gap-5 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.075)] transition-all duration-300 hover:border-red-600/25 hover:shadow-[0_28px_70px_rgba(0,0,0,0.11)] sm:rounded-[30px] sm:p-7 ${
                isAr ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`absolute top-5 text-5xl font-black text-black/[0.035] sm:top-6 sm:text-7xl ${
                  isAr ? "left-5 sm:left-6" : "right-5 sm:right-6"
                }`}
              >
                0{index + 1}
              </div>

              <div className="mb-6 flex h-16 w-28 items-center justify-center rounded-2xl border border-black/10 bg-white p-3 shadow-[0_12px_35px_rgba(0,0,0,0.055)] sm:mb-8 sm:h-20 sm:w-32 sm:rounded-3xl sm:p-4">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-10 max-w-full object-contain sm:max-h-12"
                />
              </div>

              <h3
                className="break-words text-left text-[22px] font-black tracking-[-0.03em] text-neutral-950 sm:text-[28px]"
                dir="ltr"
              >
                {partner.name}
              </h3>

              <p
                className={`mt-2 break-words font-black text-[#ee4036] ${
                  isAr
                    ? "text-[12px] tracking-normal text-right"
                    : "text-[11px] uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.24em]"
                }`}
              >
                {partner.country}
              </p>
              <p className="mt-5 break-words text-[14px] leading-7 text-neutral-600 sm:mt-6 sm:text-[16px] sm:leading-8">
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
