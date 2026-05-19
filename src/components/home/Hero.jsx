// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero_home.png";
import { useLanguage } from "../../i18n/LanguageContext";

const Hero = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className={`relative -mt-px min-h-[calc(100svh-82px)] overflow-hidden bg-black text-white sm:min-h-[calc(100svh-94px)] ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      {/* BACKGROUND IMAGE */}
      <motion.img
        src={heroImg}
        alt="Solar power systems and battery energy storage infrastructure"
        initial={{ scale: 1 }}
        animate={{ scale: 1.045 }}
        transition={{ duration: 14, ease: "easeOut" }}
        className={`absolute inset-0 h-full w-full object-cover ${
          isAr ? "object-[62%_center]" : "object-[58%_center] sm:object-center"
        }`}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />
      <div
        className={`absolute inset-0 ${
          isAr
            ? "bg-gradient-to-l from-black/78 via-black/32 to-black/10"
            : "bg-gradient-to-r from-black/78 via-black/32 to-black/10"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_48%,rgba(220,38,38,0.14),transparent_48%)]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-82px)] max-w-[1540px] items-center px-4 py-16 sm:min-h-[calc(100svh-94px)] sm:px-6 sm:py-12 md:px-8 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className={`w-full max-w-6xl ${isAr ? "text-right" : "text-left"}`}
        >
          {/* TOP BADGE */}
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur-md sm:mb-7 sm:gap-3 sm:px-5 sm:py-2.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#ee4036] sm:h-2.5 sm:w-2.5" />

            <span
              className={`break-words font-black text-white ${
                isAr
                  ? "text-[12px] tracking-normal text-right"
                  : "text-[10px] uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.28em]"
              }`}
            >
              {t.home.heroBadge}
            </span>
          </div>

          {/* TITLE */}
          <h1
            className={`max-w-6xl break-words font-black tracking-[-0.01em] drop-shadow-[0_5px_18px_rgba(0,0,0,0.65)] ${
              isAr
                ? "text-[34px] leading-[1.34] sm:text-[48px] md:text-[58px] lg:text-[72px] xl:text-[82px]"
                : "text-[36px] leading-[1.05] sm:text-[52px] md:text-6xl lg:text-7xl xl:text-[88px]"
            }`}
          >
            {t.home.heroTitle}
            <span className="text-[#ee4036]">
              {isAr ? " " : "\u00A0"}
              {t.home.heroHighlight}
            </span>
          </h1>

          {/* DESCRIPTION WITH GLASS BACKGROUND */}
          <div className="relative mt-7 max-w-4xl overflow-hidden rounded-[24px] border border-white/15 bg-white/[0.07] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.38)] backdrop-blur-[18px] sm:mt-10 sm:rounded-[34px] sm:p-8 lg:p-9">
            <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-red-600/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

            <p className="relative z-10 break-words text-[16px] font-medium leading-8 text-white/90 sm:text-[20px] sm:leading-10 lg:text-[22px]">
              {t.home.heroDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
