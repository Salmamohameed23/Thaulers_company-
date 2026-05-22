import { motion } from "framer-motion";
import { TrendingUp, SunMedium } from "lucide-react";

import cleanEnergyBg from "../../assets/images/clean.png";
import { useLanguage } from "../../i18n/LanguageContext";

const CleanEnergySection = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className={`relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 sm:gap-10 sm:px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className={isAr ? "text-right" : "text-left"}
        >
          <p
            className={`mb-3 break-words font-black text-[#ee4036] ${
              isAr
                ? "text-[13px] tracking-normal text-right"
                : "text-[11px] uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.38em]"
            }`}
          >
            {t.cleanEnergy.badge}
          </p>
          <h2
            className={`break-words text-[30px] font-black text-black sm:text-[42px] lg:text-[50px] ${
              isAr
                ? "leading-[1.28] tracking-[-0.01em]"
                : "leading-[1.05] tracking-[-0.02em]"
            }`}
          >
            {t.cleanEnergy.title}
            <span className="block text-[#ee4036]">
              {t.cleanEnergy.highlight}
            </span>
          </h2>

          <p className="mt-5 max-w-[520px] break-words text-[14px] font-medium leading-7 text-black/80 sm:text-[15px]">
            {t.cleanEnergy.description}
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                icon: TrendingUp,
                title: t.cleanEnergy.noteTitle,
                text: t.cleanEnergy.noteText,
              },
              {
                icon: SunMedium,
                title: t.cleanEnergy.smartTitle,
                text: t.cleanEnergy.smartText,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start gap-3 rounded-[18px] border border-black/10 bg-white p-4 shadow-[0_16px_40px_rgba(0,0,0,0.07)] sm:gap-4 ${
                    isAr ? "text-right" : "text-left"
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#ee4036]/10 text-[#ee4036]">
                    <Icon size={20} strokeWidth={2.5} />
                  </div>

                  <p className="break-words text-[13px] font-medium leading-6 text-black/75 sm:text-[14px]">
                    <span className="font-black text-[#ee4036]">
                      {item.title}
                    </span>{" "}
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isAr ? -35 : 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center"
        >
          <div className="h-[300px] w-full overflow-hidden rounded-[22px] sm:h-[390px] sm:rounded-[28px] lg:h-[485px]">
            <img
              src={cleanEnergyBg}
              alt="Clean energy battery storage"
              className="h-full w-full object-cover object-[82%_center] sm:object-[100%_center]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanEnergySection;
