// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import {
//   BatteryCharging,
//   HardHat,
//   SunMedium,
// } from "lucide-react";

import heroImg from "../../assets/images/hero_home.png";
import { useLanguage } from "../../i18n/LanguageContext";

const Hero = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="relative -mt-px min-h-[calc(100vh-94px)] overflow-hidden bg-black text-white">
      {/* BACKGROUND IMAGE */}
      <motion.img
        src={heroImg}
        alt="Solar power systems and battery energy storage infrastructure"
        initial={{ scale: 1 }}
        animate={{ scale: 1.045 }}
        transition={{ duration: 14, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAYS */}
      {/* <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_48%,rgba(220, 38, 38, 0.18),transparent_50%)]" /> */}
      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/68 via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_48%,rgba(220,38,38,0.12),transparent_48%)]" />
      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-94px)] max-w-[1540px] items-center px-6 py-20 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className={`w-full max-w-6xl ${
            lang === "ar" ? "mr-0 text-right" : "mx-auto text-left"
          }`}
        >
          {/* TOP BADGE */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ee4036]" />

            <span className="text-s font-black uppercase tracking-[0.28em] text-white">
              {t.home.heroBadge}
            </span>
          </div>

          {/* TITLE */}
          <h1
            className={`max-w-6xl font-black tracking-[-0.01em] drop-shadow-[0_5px_18px_rgba(0,0,0,0.65)] ${
              lang === "ar"
                ? "text-[46px] leading-[1.35] sm:text-[58px] lg:text-[72px] xl:text-[82px]"
                : "text-[44px] leading-[1.04] sm:text-6xl lg:text-7xl xl:text-[88px]"
            }`}
          >
            {t.home.heroTitle}
            <span className="text-[#ee4036]">
              {lang === "ar" ? " " : "\u00A0"}
              {t.home.heroHighlight}
            </span>
          </h1>

          {/* DESCRIPTION WITH GLASS BACKGROUND */}
          <div className="relative mt-10 max-w-4xl overflow-hidden rounded-[34px] border border-white/15 bg-white/[0.07] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.38)] backdrop-blur-[18px] sm:p-9">
            <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

            <p className="relative z-10 text-[20px] font-medium leading-10 text-white/90 sm:text-[22px]">
              {t.home.heroDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
