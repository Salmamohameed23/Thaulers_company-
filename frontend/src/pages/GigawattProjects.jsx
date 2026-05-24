import { motion } from "framer-motion";
import {
  BatteryCharging,
  Cable,
  Factory,
  HardHat,
  ShieldCheck,
  SunMedium,
  Zap,
  ClipboardCheck,
  MapPinned,
  Boxes,
  ScanSearch,
  Building2,
  Network,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

import gigaHero from "../assets/images/gigawaa.png";
import gigaEnd from "../assets/images/gigawat2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const heroIcons = [SunMedium, BatteryCharging, HardHat, Boxes, ShieldCheck];

const serviceIcons = [SunMedium, BatteryCharging, Cable, Zap, Factory, HardHat];

const processIcons = [
  ClipboardCheck,
  MapPinned,
  ScanSearch,
  Boxes,
  HardHat,
  ShieldCheck,
];

const largeScaleIcons = [
  SunMedium,
  BatteryCharging,
  Network,
  HardHat,
  Zap,
  Building2,
];

const GigaProjects = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const heroCapabilities = t.gigaPage.heroCapabilities.map((title, index) => ({
    icon: heroIcons[index],
    title,
  }));

  const services = t.gigaPage.services.map((item, index) => ({
    ...item,
    icon: serviceIcons[index],
  }));

  const process = t.gigaPage.process.map((title, index) => ({
    icon: processIcons[index],
    title,
  }));

  const largeScaleCapabilities = t.gigaPage.capabilities.map(
    (title, index) => ({
      icon: largeScaleIcons[index],
      title,
    }),
  );

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className={`overflow-hidden bg-white text-neutral-950 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <motion.img
          src={gigaHero}
          alt="Utility scale solar and energy storage project"
          initial={{ scale: 1.03 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 sm:bg-black/40 lg:bg-black/35" />

        <div
          className={`absolute inset-y-0 hidden w-[68%] sm:block ${
            isAr
              ? "right-0 bg-gradient-to-l from-black via-black/78 to-transparent"
              : "left-0 bg-gradient-to-r from-black via-black/78 to-transparent"
          }`}
        />

        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className={`max-w-[660px] ${isAr ? "mr-0 text-right" : ""}`}
          >
            <div
              className={`mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/35 px-4 py-2 backdrop-blur-md ${
                isAr ? "flex-row-reverse" : ""
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-[#ee4036]" />
              <span
                className={`font-black text-white ${
                  isAr
                    ? "text-[12px] tracking-normal text-right"
                    : "text-[10px] uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.32em]"
                }`}
              >
                {t.gigaPage.heroBadge}
              </span>
            </div>

            <h1
              className={`break-words text-[34px] font-black text-white sm:text-5xl lg:text-[62px] ${
                isAr
                  ? "leading-[1.18] tracking-[0em]"
                  : "leading-[1.02] tracking-[-0.045em]"
              }`}
            >
              {t.gigaPage.heroTitle1}
              <span className="block">
                {t.gigaPage.heroTitle2A}{" "}
                <span className="text-[#ee4036]">&</span>
              </span>
              <span className="block">{t.gigaPage.heroTitle2B}</span>
            </h1>

            <p className="mt-5 max-w-[560px] break-words text-[14px] font-medium leading-7 text-white/85 sm:mt-6 sm:text-[15px]">
              {t.gigaPage.heroDesc}
            </p>
          </motion.div>

          <div
            className={`mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-5 ${
              isAr ? "lg:[direction:rtl]" : ""
            }`}
          >
            {heroCapabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.25 + index * 0.07 }}
                  className={`group flex min-h-[74px] items-center gap-4 rounded-2xl border border-white/20 bg-neutral-950/70 px-5 py-4 text-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_24px_60px_rgba(220,38,38,0.18)] ${
                    isAr ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ee4036] text-white">
                    <Icon size={17} />
                  </span>

                  <span className="text-[13px] font-extrabold leading-5">
                    {item.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT GIGA PROJECTS */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-14">
        <div className="absolute left-[-160px] top-20 h-[360px] w-[360px] rounded-full  blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.35fr_1fr] lg:gap-10 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="flex items-center justify-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-[22px] border border-red-600/20 bg-red-600/5 text-[#ee4036] sm:h-28 sm:w-28 sm:rounded-[28px]">
              <SunMedium size={56} />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.08 }}
            className={isAr ? "text-right" : ""}
          >
            <p
              className={`mb-3 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-[11px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.34em]"
              }`}
            >
              {t.gigaPage.aboutBadge}
            </p>

            <h2 className="break-words text-[26px] font-black leading-[1.15] tracking-[-0.025em] sm:text-4xl">
              {t.gigaPage.aboutTitle}
            </h2>

            <p className="mt-5 max-w-4xl break-words text-[15px] leading-7 text-neutral-900">
              {t.gigaPage.aboutDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ENGINEERING SCOPE */}
      <section className="relative overflow-hidden  py-12 sm:py-14">

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-10">
            <p
              className={`mb-3 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-[11px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.34em]"
              }`}
            >
              {t.gigaPage.scopeBadge}
            </p>

            <h2 className="break-words text-[26px] font-black leading-[1.15] tracking-[-0.025em] sm:text-4xl">
              {t.gigaPage.scopeTitle}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl break-words text-[14px] leading-7 text-neutral-900">
              {t.gigaPage.scopeDesc}
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group relative overflow-hidden rounded-[18px] border border-black/5 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-red-500/20 hover:shadow-[0_24px_70px_rgba(220,38,38,0.14)] ${
                    isAr ? "text-right" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div
                      className={`absolute top-[-30px] h-28 w-28 rounded-full bg-red-600/15 blur-2xl ${
                        isAr ? "left-[-30px]" : "right-[-30px]"
                      }`}
                    />
                  </div>

                  <div className="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-950 text-white transition group-hover:bg-[#ee4036]">
                    <Icon size={20} />
                  </div>

                  <h3 className="relative z-10 break-words text-[16px] font-black text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-3 break-words text-[13px] leading-6 text-neutral-900">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className=" py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center sm:mb-12">
            <p
              className={`mb-3 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-[11px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.34em]"
              }`}
            >
              {t.gigaPage.processBadge}
            </p>

            <h2 className="break-words text-[25px] font-black leading-[1.18] tracking-[-0.025em] sm:text-4xl">
              {t.gigaPage.processTitle}
            </h2>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-red-500/40 lg:block" />

            <div
              className={`grid gap-8 md:grid-cols-3 lg:grid-cols-6 ${
                isAr ? "lg:[direction:rtl]" : ""
              }`}
            >
              {process.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group relative text-center"
                  >
                    {index !== process.length - 1 && (
                      <ArrowRight
                        size={18}
                        className={`absolute top-[23px] z-10 hidden text-[#ee4036] lg:block ${
                          isAr
                            ? "right-[calc(50%+45px)] rotate-180"
                            : "left-[calc(50%+45px)]"
                        }`}
                      />
                    )}

                    <div className="relative z-20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-red-500 bg-white text-[#ee4036] shadow-[0_18px_45px_rgba(220,38,38,0.15)] ring-8 ring-white transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_rgba(220,38,38,0.25)]">
                      <Icon size={22} />
                    </div>

                    <p className="mb-1 text-[11px] font-black text-[#ee4036]">
                      0{index + 1}
                    </p>

                    <p className="mx-auto max-w-[145px] text-[12px] font-black leading-5 text-neutral-950">
                      {item.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LARGE SCALE CAPABILITIES */}
      <section className=" py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 text-center sm:mb-9">
            <p
              className={`mb-3 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-[11px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.34em]"
              }`}
            >
              {t.gigaPage.capabilitiesBadge}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {largeScaleCapabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 text-center shadow-[0_14px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-red-600/30 hover:shadow-[0_18px_45px_rgba(220,38,38,0.18)]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-2xl" />
                  </div>

                  <Icon
                    className="relative z-10 mx-auto mb-3 text-[#ee4036] transition duration-300 group-hover:scale-110"
                    size={31}
                  />

                  <p className="relative z-10 text-[13px] font-black leading-5">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className=" py-12 sm:py-14">
        <div
          className={`mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 ${
            isAr ? "lg:[direction:rtl]" : ""
          }`}
        >
          <div className="min-h-[240px] overflow-hidden rounded-[22px] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:min-h-[320px] sm:rounded-[28px]">
            <img
              src={gigaEnd}
              alt="Large scale solar and storage infrastructure"
              className="h-full w-full object-cover opacity-90"
            />
          </div>

          <div className={`flex items-center ${isAr ? "text-right" : ""}`}>
            <div>
              <p
                className={`mb-3 font-black text-[#ee4036] ${
                  isAr
                    ? "text-[13px] tracking-normal text-right"
                    : "text-[11px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.34em]"
                }`}
              >
                {t.gigaPage.finalBadge}
              </p>

              <h2 className="break-words text-[27px] font-black leading-[1.16] tracking-[-0.02em] sm:text-4xl">
                {t.gigaPage.finalTitle}
              </h2>

              <p className="mt-5 max-w-xl break-words text-[15px] leading-7 text-neutral-900">
                {t.gigaPage.finalDesc}
              </p>

              <div className="mt-6 space-y-4">
                {t.gigaPage.executionPoints.map((item) => (
                  <div
                    key={item}
                    className={`flex items-start gap-3 ${
                      isAr ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ee4036] text-white">
                      <ShieldCheck size={12} />
                    </span>

                    <p className="text-[14px] font-semibold leading-6 text-neutral-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GigaProjects;
