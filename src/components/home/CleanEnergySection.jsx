import { motion } from "framer-motion";
import { TrendingUp, SunMedium } from "lucide-react";

import cleanEnergyBg from "../../assets/images/clean.png";
import { useLanguage } from "../../i18n/LanguageContext";

const CleanEnergySection = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section
      className={`relative overflow-hidden bg-white py-16 text-black sm:py-20 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
      <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(220,38,38,0.07),transparent_30%)]" />

      <div
        className={`relative mx-auto grid max-w-7xl items-stretch gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 ${
          isAr ? "lg:[direction:rtl]" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className={`h-full max-w-[520px] ${
            isAr ? "text-right lg:[direction:rtl]" : ""
          }`}
        >
          <p className="mb-4 text-s font-black uppercase tracking-[0.38em] text-[#ee4036]">
            {t.cleanEnergy.badge}
          </p>

          <h2
            className={`text-[40px] font-black text-black sm:text-[50px] lg:text-[58px] ${
              isAr
                ? "leading-[1.28] tracking-[-0.01em]"
                : "leading-[1.1] tracking-[-0.02em]"
            }`}
          >
            {t.cleanEnergy.title}
            <span className="block text-[#ee4036]">
              {t.cleanEnergy.highlight}
            </span>
          </h2>

          <p className="mt-6 max-w-[520px] text-[15px] font-medium leading-7 text-black/80">
            {t.cleanEnergy.description}
          </p>

          <div className="mt-7 space-y-4">
            <div
              className={`flex items-start gap-4 rounded-[20px] border border-black/10 bg-white p-5 shadow-[0_18px_45px_rgba(0,0,0,0.08)] ${
                isAr ? "text-right" : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#ee4036]/10 text-[#ee4036]">
                <TrendingUp size={21} strokeWidth={2.5} />
              </div>

              <p className="text-[14px] font-medium leading-7 text-black/75">
                <span className="font-black text-[#ee4036]">
                  {t.cleanEnergy.noteTitle}
                </span>{" "}
                {t.cleanEnergy.noteText}
              </p>
            </div>

            <div
              className={`flex items-start gap-4 rounded-[20px] border border-black/10 bg-white p-5 shadow-[0_18px_45px_rgba(0,0,0,0.08)] ${
                isAr ? "text-right" : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#ee4036]/10 text-[#ee4036]">
                <SunMedium size={21} strokeWidth={2.5} />
              </div>

              <p className="text-[14px] font-medium leading-7 text-black/75">
                <span className="font-black text-[#ee4036]">
                  {t.cleanEnergy.smartTitle}
                </span>{" "}
                {t.cleanEnergy.smartText}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isAr ? -35 : 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="relative h-full"
        >
          <div className="h-full overflow-hidden rounded-[30px]">
            <img
              src={cleanEnergyBg}
              alt="Clean energy battery storage"
              className={`h-full min-h-[520px] w-full  sm:min-h-[650px] ${
                isAr ? "object-[38%_center]" : "object-start"
              }`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanEnergySection;
