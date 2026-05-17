import { motion } from "framer-motion";
import {
  BatteryCharging,
  Cable,
  Cpu,
  Factory,
  Home,
  Layers3,
  RadioTower,
  ShieldCheck,
  SolarPanel,
  Thermometer,
  Zap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";

import smartHero from "../assets/images/hero4.jpg";
import ess5 from "../assets/images/5 kw 1.png";
import ess10 from "../assets/images/5 kw 6.png";
import essIndustrial from "../assets/images/6.png";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function SmartStorage() {
  const sliderRef = useRef(null);
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const capabilities = t.smartStoragePage.capabilities;

  const productImages = [
    ess5,
    ess10,
    essIndustrial,
    essIndustrial,
    essIndustrial,
    essIndustrial,
  ];

  const products = t.smartStoragePage.products.map((product, index) => ({
    ...product,
    image: productImages[index],
  }));

  const applicationIcons = [Home, Factory, Zap, SolarPanel, RadioTower, Cable];

  const applications = t.smartStoragePage.applications.map((title, index) => ({
    title,
    icon: applicationIcons[index],
  }));

  const engineeringIcons = [
    BatteryCharging,
    Cpu,
    Zap,
    Layers3,
    Thermometer,
    Cable,
  ];

  const engineeringScope = t.smartStoragePage.engineeringScope.map(
    (item, index) => ({
      ...item,
      icon: engineeringIcons[index],
    }),
  );

  const process = t.smartStoragePage.process;

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <main
      className={`overflow-x-hidden bg-white text-neutral-950 ${
        isAr ? "font-[Cairo]" : ""
      }`}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* HERO */}
      <section className="relative overflow-x-hidden bg-black text-white">
        <motion.img
          src={smartHero}
          alt="Battery energy storage systems"
          initial={{ scale: 1.03 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div
          className={`absolute inset-y-0 w-full lg:w-[68%] ${
            isAr
              ? "right-0 bg-gradient-to-l from-black via-black/78 to-transparent"
              : "left-0 bg-gradient-to-r from-black via-black/78 to-transparent"
          }`}
        />

        <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className={`max-w-[650px] ${isAr ? "text-right" : ""}`}
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
                    : "text-xs uppercase tracking-[0.2em] sm:tracking-[0.32em]"
                }`}
              >
                {t.smartStoragePage.heroBadge}
              </span>
            </div>

            <h1 className="text-[42px] font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-[62px]">
              {t.smartStoragePage.heroTitle1}
              <span className="mt-2 block text-[#ee4036]">
                {t.smartStoragePage.heroTitle2}
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[15px] font-medium leading-7 text-white/85">
              {t.smartStoragePage.heroDesc}
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25 + index * 0.07 }}
                className="group flex min-h-[74px] items-center gap-4 rounded-2xl border border-white/20 bg-neutral-950/70 px-5 py-4 text-white shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-md transition hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_24px_60px_rgba(220,38,38,0.18)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ee4036] text-white">
                  <ShieldCheck size={16} />
                </span>

                <span className="text-[13px] font-extrabold leading-5">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="relative overflow-x-hidden bg-white py-14">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 text-center">
            <p
              className={`mb-3 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-xs uppercase tracking-[0.22em] sm:tracking-[0.34em]"
              }`}
            >
              {t.smartStoragePage.productBadge}
            </p>

            <h2 className="text-[28px] font-black leading-[1.1] tracking-[-0.035em] sm:text-4xl">
              {t.smartStoragePage.productTitle1}
              <span className="block text-[#ee4036]">
                {t.smartStoragePage.productTitle2}
              </span>
            </h2>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition hover:bg-red-600 hover:text-white lg:flex"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 z-20 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition hover:bg-red-600 hover:text-white lg:flex"
            >
              <ChevronRight size={20} />
            </button>

            <div
              ref={sliderRef}
              className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth px-1 pb-6"
            >
              {products.map((product, index) => (
                <motion.article
                  key={`${product.title}-${index}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="group min-w-[240px] sm:min-w-[255px] overflow-hidden rounded-[18px] border border-transparent bg-white shadow-[0_18px_45px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-red-500/20 hover:shadow-[0_24px_70px_rgba(220,38,38,0.18)]"
                >
                  <div className="flex h-[185px] items-center justify-center bg-white p-6">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-[150px] w-auto object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-[15px] font-black text-neutral-950">
                      {product.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-[13px] leading-6 text-neutral-600">
                      {product.description}
                    </p>

                    <button className="mt-4 inline-flex items-center gap-2 text-[12px] font-black text-[#ee4036]">
                      {product.action}
                      <ChevronRight
                        size={15}
                        className={isAr ? "rotate-180" : ""}
                      />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-neutral-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p
              className={`mb-3 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-xs uppercase tracking-[0.22em] sm:tracking-[0.34em]"
              }`}
            >
              {t.smartStoragePage.applicationsBadge}
            </p>

            <h2 className="text-[28px] font-black tracking-[-0.035em] sm:text-4xl">
              {t.smartStoragePage.applicationsTitle1}
              <span className="text-[#ee4036]">
                {" "}
                {t.smartStoragePage.applicationsTitle2}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {applications.map((item, index) => {
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

      {/* ENGINEERING SCOPE */}
      <section className="relative overflow-x-hidden bg-white py-14">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 text-center">
            <p
              className={`mb-3 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-xs uppercase tracking-[0.22em] sm:tracking-[0.34em]"
              }`}
            >
              {t.smartStoragePage.engineeringBadge}
            </p>
            <h2 className="text-[28px] font-black tracking-[-0.035em] sm:text-4xl">
              {t.smartStoragePage.engineeringTitle1}
              <span className="text-[#ee4036]">
                {" "}
                {t.smartStoragePage.engineeringTitle2}
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-neutral-600">
              {t.smartStoragePage.engineeringDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {engineeringScope.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className="group flex items-start gap-5 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_14px_38px_rgba(0,0,0,0.055)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,0,0,0.08)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-600/20 bg-red-600/5 text-[#ee4036]">
                    <Icon size={20} />
                  </span>

                  <div>
                    <h3 className="text-[15px] font-black text-neutral-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-neutral-600">
                      {item.text}
                    </p>
                  </div>

                  <ChevronRight
                    size={17}
                    className={`mt-2 shrink-0 text-neutral-300 ${
                      isAr ? "mr-auto rotate-180" : "ml-auto"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p
              className={`mb-3 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-xs uppercase tracking-[0.22em] sm:tracking-[0.34em]"
              }`}
            >
              {t.smartStoragePage.processBadge}
            </p>
            <h2 className="text-[28px] font-black tracking-[-0.035em] sm:text-4xl">
              {t.smartStoragePage.processTitle1}
              <span className="text-[#ee4036]">
                {" "}
                {t.smartStoragePage.processTitle2}
              </span>
            </h2>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-red-500/40 lg:block" />

            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
              {process.map((item, index) => (
                <motion.div
                  key={item}
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

                  <div className="relative z-20 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-red-500 bg-white text-[14px] font-black text-[#ee4036] shadow-[0_18px_45px_rgba(220,38,38,0.15)] ring-8 ring-neutral-50 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_rgba(220,38,38,0.25)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="mx-auto max-w-[140px] text-[13px] font-black leading-5 text-neutral-950">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
