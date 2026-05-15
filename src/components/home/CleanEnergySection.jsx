import { motion } from "framer-motion";
import { TrendingUp, SunMedium } from "lucide-react";

import cleanEnergyBg from "../../assets/images/clean.png";
import { useLanguage } from "../../i18n/LanguageContext";

const CleanEnergySection = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section
      className={`relative overflow-hidden bg-white py-14 text-black sm:py-16 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
      <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />

      <div
        className={`relative mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 ${
          isAr ? "lg:[direction:rtl]" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className={`${isAr ? "text-right lg:[direction:rtl]" : ""}`}
        >
          <p className="mb-3 text-s font-black uppercase tracking-[0.38em] text-[#ee4036]">
            {t.cleanEnergy.badge}
          </p>

          <h2
            className={`text-[38px] font-black text-black sm:text-[46px] lg:text-[50px] ${
              isAr
                ? "leading-[1.25] tracking-[-0.01em]"
                : "leading-[1.03] tracking-[-0.02em]"
            }`}
          >
            {t.cleanEnergy.title}
            <span className="block text-[#ee4036]">
              {t.cleanEnergy.highlight}
            </span>
          </h2>

          <p className="mt-5 max-w-[520px] text-[14px] font-medium leading-7 text-black/80">
            {t.cleanEnergy.description}
          </p>

          <div className="mt-6 space-y-4">
            <div
              className={`flex items-start gap-4 rounded-[18px] border border-black/10 bg-white p-4 shadow-[0_16px_40px_rgba(0,0,0,0.07)] ${
                isAr ? "text-right" : ""
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#ee4036]/10 text-[#ee4036]">
                <TrendingUp size={20} strokeWidth={2.5} />
              </div>

              <p className="text-[13px] font-medium leading-6 text-black/75">
                <span className="font-black text-[#ee4036]">
                  {t.cleanEnergy.noteTitle}
                </span>{" "}
                {t.cleanEnergy.noteText}
              </p>
            </div>

            <div
              className={`flex items-start gap-4 rounded-[18px] border border-black/10 bg-white p-4 shadow-[0_16px_40px_rgba(0,0,0,0.07)] ${
                isAr ? "text-right" : ""
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#ee4036]/10 text-[#ee4036]">
                <SunMedium size={20} strokeWidth={2.5} />
              </div>

              <p className="text-[13px] font-medium leading-6 text-black/75">
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
          className="relative flex items-center"
        >
          <div className="h-[430px] w-full overflow-hidden rounded-[28px] sm:h-[455px] lg:h-[485px]">
            <img
              src={cleanEnergyBg}
              alt="Clean energy battery storage"
              className="h-full w-full object-cover object-[100%_center]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanEnergySection;
