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
      className={`relative overflow-hidden bg-white py-20 text-neutral-950 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="absolute left-[-180px] top-10 h-[380px] w-[380px] rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute right-[-180px] bottom-[-120px] h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[130px]" />

      <div
        className={`relative mx-auto grid max-w-[1180px] items-stretch gap-14 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.15fr] lg:px-10 ${
          isAr ? "lg:[direction:rtl]" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className={`h-full max-w-[540px] ${
            isAr ? "text-right lg:[direction:rtl]" : ""
          }`}
        >
          <p className="mb-5 text-[13px] font-black uppercase tracking-[0.36em] text-[#ee4036]">
            {t.about.badge}
          </p>

          <h2
            className={`text-[34px] font-black text-neutral-950 sm:text-[42px] lg:text-[48px] ${
              isAr
                ? "leading-[1.32] tracking-[-0.01em]"
                : "leading-[1.04] tracking-[-0.035em]"
            }`}
          >
            {t.about.title}
          </h2>

          <div className="mt-8 space-y-5 text-[15px] font-medium leading-8 text-neutral-800">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className={`relative flex h-full flex-col rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.09)] sm:p-7 ${
            isAr ? "lg:[direction:rtl]" : ""
          }`}
        >
          <p className="mb-7 text-[13px] font-black uppercase tracking-[0.36em] text-[#ee4036]">
            {t.about.coreBadge}
          </p>

          <div className="flex flex-1 flex-col gap-4">
            {points.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.key}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.22 }}
                  className={`group flex flex-1 items-center gap-5 rounded-[18px] border border-black/10 bg-white px-5 py-4 shadow-[0_14px_34px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-red-600/25 ${
                    isAr ? "text-right [direction:rtl]" : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-neutral-950 text-white transition-all duration-300 group-hover:bg-[#ee4036]">
                    <Icon size={19} strokeWidth={2.4} />
                  </div>

                  <p className="text-[15px] font-semibold text-neutral-800">
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
