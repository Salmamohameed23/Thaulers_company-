import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BatteryCharging,
  Globe2,
  SunMedium,
  Factory,
} from "lucide-react";

import { useLanguage } from "../../i18n/LanguageContext";

const AboutPreview = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const points = [
    { icon: SunMedium, key: 0 },
    { icon: BatteryCharging, key: 1 },
    { icon: Globe2, key: 2 },
    { icon: Factory, key: 3 },
    { icon: ArrowUpRight, key: 4 },
  ];

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className={`relative overflow-hidden bg-white py-12 text-neutral-950 sm:py-16 lg:py-20 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="pointer-events-none absolute left-[-180px] top-10 h-[280px] w-[280px] rounded-full bg-red-600/10 blur-[100px] sm:h-[380px] sm:w-[380px] sm:blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-180px] h-[320px] w-[320px] rounded-full bg-red-600/10 blur-[110px] sm:h-[450px] sm:w-[450px] sm:blur-[130px]" />

      <div className="relative mx-auto grid max-w-[1180px] items-stretch gap-8 px-4 sm:gap-10 sm:px-6 md:px-8 lg:grid-cols-[0.95fr_1.15fr] lg:gap-14 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className={`h-full max-w-[540px] ${isAr ? "text-right" : "text-left"}`}
        >
          <p
            className={`mb-4 break-words font-black text-[#ee4036] sm:mb-5 ${
              isAr
                ? "text-[13px] tracking-normal"
                : "text-[11px] uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.36em]"
            }`}
          >
            {t.about.badge}
          </p>

          <h2
            className={`break-words text-[28px] font-black text-neutral-950 sm:text-[38px] lg:text-[48px] ${
              isAr
                ? "leading-[1.32] tracking-[-0.01em]"
                : "leading-[1.08] tracking-[-0.035em]"
            }`}
          >
            {t.about.title}
            <span className="block text-[#ee4036]">{t.about.highlight}</span>
          </h2>

          <div className="mt-6 space-y-4 text-[14px] font-medium leading-7 text-neutral-800 sm:mt-8 sm:text-[15px] sm:leading-8">
            <p className="break-words">{t.about.p1}</p>
            <p className="break-words">{t.about.p2}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="relative flex h-full flex-col rounded-[24px] border border-black/5 bg-white p-4 shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:rounded-[32px] sm:p-7"
        >
          <p
            className={`mb-5 break-words font-black text-[#ee4036] sm:mb-7 ${
              isAr
                ? "text-[14px] tracking-normal text-right"
                : "text-[11px] uppercase tracking-[0.22em] sm:text-[13px] sm:tracking-[0.36em] text-left"
            }`}
          >
            {t.about.coreBadge}
          </p>

          <div className="flex flex-1 flex-col gap-3 sm:gap-4">
            {points.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.key}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.22 }}
                  className={`group flex flex-1 items-start gap-4 rounded-[16px] border border-black/10 bg-white px-4 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-red-600/25 sm:items-center sm:gap-5 sm:rounded-[18px] sm:px-5 ${
                    isAr ? "text-right" : "text-left"
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-neutral-950 text-white transition-all duration-300 group-hover:bg-[#ee4036] sm:h-11 sm:w-11">
                    <Icon size={19} strokeWidth={2.4} />
                  </div>

                  <p className="break-words text-[14px] font-semibold leading-7 text-neutral-800 sm:text-[15px]">
                    {t.about.points[item.key]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutPreview;
