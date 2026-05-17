import { motion } from "framer-motion";
import { BadgeCheck, Globe2, Headphones, Layers3 } from "lucide-react";

import { useLanguage } from "../../i18n/LanguageContext";

const WhyChooseUs = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const reasons = [
    { icon: BadgeCheck, key: 0 },
    { icon: Globe2, key: 1 },
    { icon: Layers3, key: 2 },
    { icon: Headphones, key: 3 },
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
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-12"
        >
          <p
            className={`mb-4 break-words font-black text-[#ee4036] ${
              isAr
                ? "text-[13px] tracking-normal text-right"
                : "text-[11px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.28em]"
            }`}
          >
            {t.whyChoose.badge}
          </p>

          <h2
            className={`break-words text-[30px] font-black tracking-[-0.035em] sm:text-5xl ${
              isAr ? "leading-[1.3]" : "leading-[1.08]"
            }`}
          >
            {t.whyChoose.title1}
            <span className="block text-[#ee4036]">{t.whyChoose.title2}</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const item = t.whyChoose.items[reason.key];

            return (
              <motion.div
                key={reason.key}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.075)] transition-all duration-300 hover:border-red-600/25 hover:shadow-[0_28px_70px_rgba(0,0,0,0.11)] sm:rounded-[28px] sm:p-7 ${
                  isAr ? "text-right" : "text-left"
                }`}
              >
                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-white transition-all duration-300 group-hover:bg-red-600 sm:mb-7">
                  <Icon size={21} />
                </div>

                <h3 className="break-words text-[18px] font-semibold leading-7 text-neutral-950 sm:text-[20px]">
                  {item.title}
                </h3>

                <p className="mt-4 break-words text-[14px] leading-7 text-neutral-600 sm:mt-5 sm:text-[15px] sm:leading-8">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
