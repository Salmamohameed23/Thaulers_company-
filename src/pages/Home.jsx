import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
  Lightbulb,
  Factory,
  Sun,
  Bike,
  Utensils,
  Hotel,
  Wrench,
  Box,
  Globe2,
} from "lucide-react";

import { ROUTES } from "../config/siteRoutes";
import { homeData } from "../data/homeData";
import { useLanguage } from "../i18n/LanguageContext";

const MotionLink = motion(Link);

const ICONS = {
  sun: Sun,
  factory: Factory,
  bike: Bike,
  utensils: Utensils,
  hotel: Hotel,
  wrench: Wrench,
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

const whyIcons = [Globe2, ShieldCheck, Box, Truck, Headphones, Lightbulb];

const ImageBlock = ({ src, children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />
      {children}
    </div>
  );
};

const Home = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const home = t.mainHome;
  const isLongHeroLang = lang === "de" || lang === "ru";
  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className={`min-h-screen bg-white text-zinc-950 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      {/* HERO */}
     <section className="relative min-h-[620px] overflow-hidden bg-black">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/src/assets/home_imgs/hero.png')" }}
  />

  {/* Strong readable overlay */}
  <div className="absolute inset-0 bg-black/30" />
  <div
    className={`absolute inset-0 ${
      isAr
        ? "bg-gradient-to-l from-black/85 via-black/55 to-black/20"
        : "bg-gradient-to-r from-black/85 via-black/55 to-black/20"
    }`}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

  <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-16 lg:px-8">
    <div
      className={`w-full pt-10 ${
        isAr
          ? "ml-auto max-w-[820px] text-right"
          : isLongHeroLang
          ? "max-w-[720px] text-left"
          : "max-w-3xl text-left"
      }`}
    >
      <div
        className={`mb-7 flex ${
          isAr ? "justify-end" : "justify-start"
        }`}
      >
        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur-md sm:gap-3 sm:px-5 sm:py-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#ee4036] sm:h-2.5 sm:w-2.5" />
          <span className="break-words font-black text-white">
            {home.heroBadge}
          </span>
        </div>
      </div>

      <h1
        className={`font-black tracking-tight text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.75)] ${
          isAr
            ? "text-[42px] leading-[1.12] sm:text-[56px] lg:text-[70px]"
            : isLongHeroLang
            ? "text-[34px] leading-[1.08] sm:text-[46px] lg:text-[58px]"
            : "text-[42px] leading-[0.98] sm:text-6xl lg:text-7xl"
        }`}
      >
        {home.heroTitle}
      </h1>

      <p
        className={`mt-8 max-w-xl text-lg font-semibold leading-8 text-zinc-100 drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)] md:text-xl ${
          isAr ? "mr-auto" : ""
        }`}
      >
        {home.heroDesc}
      </p>

      <div
        className={`mt-10 flex flex-col gap-4 sm:flex-row ${
          isAr ? "sm:justify-end" : "sm:justify-start"
        }`}
      >
        <Link
          to={ROUTES.solutions.solarEnergy}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ef3b35] px-8 py-4 font-black text-white shadow-2xl shadow-red-500/20 transition hover:bg-red-600"
        >
          {home.exploreSolutions}
          <ArrowRight size={20} className={isAr ? "rotate-180" : ""} />
        </Link>

        <Link
          to={ROUTES.contact}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-black text-black transition hover:bg-zinc-100"
        >
          {home.requestQuotation}
          <ArrowRight size={20} className={isAr ? "rotate-180" : ""} />
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* WHO WE ARE */}
      <section className="bg-white py-12 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div className={isAr ? "text-right" : ""}>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#ef3b35]">
              {home.whoBadge}
            </p>

            <h2 className="text-4xl font-black leading-tight text-zinc-950 lg:text-5xl">
              {home.whoTitle}
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-900">
              {home.whoDesc}
            </p>

            <Link
              to={ROUTES.whyUs}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#ef3b35] px-7 py-4 font-black text-[#ef3b35] transition hover:bg-[#ef3b35] hover:text-white"
            >
              {home.learnMore}
              <ArrowRight size={18} className={isAr ? "rotate-180" : ""} />
            </Link>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_.8fr]">
            <div className="group relative">
              <ImageBlock
                src="/src/assets/home_imgs/about1.png"
                className="h-[360px] rounded-3xl shadow-2xl"
              />
              <ImageBlock
                src="/src/assets/home_imgs/about2.png"
                className={`absolute -bottom-8 hidden h-40 w-64 rounded-2xl border-8 border-white shadow-xl md:block ${
                  isAr ? "-right-8" : "-left-8"
                }`}
              />
            </div>

            <div className="space-y-6">
              {home.features.map((item, index) => {
                const Icon = [Globe2, ShieldCheck, Truck][index] || Globe2;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 border-b border-zinc-100 pb-6 last:border-0"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-100 bg-red-50 text-[#ef3b35]">
                      <Icon size={22} />
                    </div>
                    <div className={isAr ? "text-right" : ""}>
                      <h3 className="font-black text-zinc-950">{item.title}</h3>
                      <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-zinc-50 py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ef3b35]">
              {home.categoriesBadge}
            </p>
            <h2 className="mt-3 text-4xl font-black text-zinc-950 lg:text-5xl">
              {home.categoriesTitle}
            </h2>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {homeData.categories.map(({ key, icon, image, path }, index) => {
              const Icon = ICONS[icon] || Box;
              const item = home.categories[key];

              return (
                <MotionLink
                  key={key}
                  to={path}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[26px] border border-zinc-100 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.06)] transition hover:border-red-500/20 hover:shadow-[0_28px_80px_rgba(0,0,0,0.13)]"
                >
                  <ImageBlock src={image} className="h-48 lg:h-56" />

                  <div className={`p-6 ${isAr ? "text-right" : ""}`}>
                    <div
                      className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#ef3b35] transition duration-300 group-hover:scale-110 group-hover:bg-[#ef3b35] group-hover:text-white ${
                        isAr ? "mr-0 ml-auto" : ""
                      }`}
                    >
                      <Icon size={26} />
                    </div>

                    <h3 className="text-[20px] font-black text-zinc-950 transition group-hover:text-[#ef3b35]">
                      {item.title}
                    </h3>

                    <p className="mt-2 min-h-[44px] text-[15px] text-zinc-500">
                      {item.desc}
                    </p>

                    <div
                      className={`mt-5 flex items-center gap-2 text-sm font-black text-[#ef3b35] opacity-0 transition duration-300 group-hover:opacity-100 ${
                        isAr
                          ? "justify-end group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      <span>{home.viewDetails}</span>
                      <ArrowRight
                        size={16}
                        className={isAr ? "rotate-180" : ""}
                      />
                    </div>
                  </div>
                </MotionLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTION LINES */}
      <section className="bg-white py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ef3b35]">
              {home.productionBadge}
            </p>
            <h2 className="mt-3 text-4xl font-black text-zinc-950 lg:text-5xl">
              {home.productionTitle}
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {homeData.productionLines.map((line, index) => {
              const item = home.productionLines[index];

              return (
                <motion.article
                  key={item.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-[26px] border border-zinc-100 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.06)] transition hover:border-red-500/20 hover:shadow-[0_26px_70px_rgba(0,0,0,0.12)]"
                >
                  <ImageBlock src={line.image} className="h-48" />

                  <div className={`p-6 ${isAr ? "text-right" : ""}`}>
                    <h3 className="text-[18px] font-black text-zinc-950 transition group-hover:text-[#ef3b35]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-6 text-zinc-500">
                      {item.desc}
                    </p>

                    <Link
                      to={ROUTES.solutions.productionLines}
                      className={`mt-5 inline-flex items-center gap-2 text-sm font-black text-[#ef3b35] transition ${
                        isAr
                          ? "group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      {home.viewDetails}
                      <ArrowRight
                        size={16}
                        className={isAr ? "rotate-180" : ""}
                      />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-zinc-50 py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ef3b35]">
              {home.whyBadge}
            </p>
            <h2 className="mt-3 text-4xl font-black text-zinc-950 lg:text-5xl">
              {home.whyTitle}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {home.whyItems.map(({ title, desc }, index) => {
              const Icon = whyIcons[index] || Lightbulb;

              return (
                <div key={title} className="group text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-100 bg-white text-[#ef3b35] shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-[#ef3b35] group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(239,59,53,0.3)]">
                    <Icon
                      size={28}
                      className="transition duration-300 group-hover:rotate-6"
                    />
                  </div>
                  <h3 className="mt-5 font-black text-zinc-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 lg:flex-row lg:px-8">
          <div className={isAr ? "text-right" : ""}>
            <h2 className="text-3xl font-black text-zinc-950 lg:text-4xl">
              {home.ctaTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-600">{home.ctaDesc}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to={ROUTES.letsBuild}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#ef3b35] px-8 py-4 font-black text-white transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-red-600 hover:shadow-[0_15px_40px_rgba(239,59,53,0.35)]"
            >
              {home.letsBuild}
              <ArrowRight
                size={18}
                className={`transition duration-300 ${
                  isAr
                    ? "rotate-180 group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              />
            </Link>

            <Link
              to={ROUTES.contact}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-zinc-300 px-8 py-4 font-black text-black transition hover:border-[#ef3b35] hover:text-[#ef3b35]"
            >
              {home.requestQuotation}
              <ArrowRight size={18} className={isAr ? "rotate-180" : ""} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
