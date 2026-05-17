import { motion } from "framer-motion";
import { CheckCircle2, Layers3 } from "lucide-react";
import PropTypes from "prop-types";
import { useLanguage } from "../i18n/LanguageContext";

import heroImg from "../assets/images/RD_1.png";
import processImg from "../assets/images/R&D_6.png";
import ctaImg from "../assets/images/R&D_7.png";
import testingImg from "../assets/images/R&D_5.png";
import qualityImg from "../assets/images/RD5.png";
import teamImg from "../assets/images/R&D_4.png";
import solutionsImg from "../assets/images/R&D_3.png";
import platformImg from "../assets/images/RD_2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -34 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 34 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const standards = [
  {
    title: "ISO",
    descKey: "Quality Management",
    logoBox: "border-[#2d73c9]/20 bg-[#2d73c9]/5",
    logo: (
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#2d73c9] text-[22px] font-black text-[#2d73c9]">
        ISO
      </div>
    ),
  },
  {
    title: "CE",
    descKey: "EU Compliance",
    logoBox: "border-neutral-300 bg-neutral-50",
    logo: (
      <div className="text-[30px] font-black sm:text-[36px] tracking-[-0.14em] text-black">
        CE
      </div>
    ),
  },
  {
    title: "UL",
    descKey: "Safety Requirements",
    logoBox: "border-[#e11d2e]/20 bg-[#e11d2e]/5",
    logo: (
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-[4px] border-[#e11d2e] text-[24px] font-black text-[#e11d2e]">
        UL
      </div>
    ),
  },
  {
    title: "UN38.3",
    descKey: "Transport Safety",
    logoBox: "border-[#1f9d45]/20 bg-[#1f9d45]/5",
    logo: (
      <div className="text-[24px] font-black tracking-[-0.05em] text-[#1f9d45]">
        UN38.3
      </div>
    ),
  },
  {
    title: "RoHS",
    descKey: "Environmental Compliance",
    logoBox: "border-[#1ca344]/20 bg-[#1ca344]/5",
    logo: (
      <div className="flex flex-col items-center leading-none">
        <div className="text-[28px] font-black tracking-[-0.06em] text-[#1ca344]">
          RoHS
        </div>
        <div className="mt-1 h-4 w-4 rotate-45 rounded-br-full bg-[#1ca344]" />
      </div>
    ),
  },
  {
    title: "IEC",
    descKey: "International Standards",
    logoBox: "border-[#1768b3]/20 bg-[#1768b3]/5",
    logo: (
      <div className="flex h-16 w-16 items-center justify-center rounded-[6px] bg-[#1768b3] text-[24px] font-black tracking-[-0.08em] text-white">
        IEC
      </div>
    ),
  },
];

const CheckList = ({ items, dark = false, isAr = false }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    className="mt-6 space-y-3"
  >
    {items.map((item) => (
      <motion.div
        key={item}
        variants={fadeUp}
        dir={isAr ? "rtl" : "ltr"}
        className={`flex items-start gap-3 ${isAr ? "text-right" : ""}`}
      >
        <CheckCircle2
          size={18}
          className={`mt-0.5 shrink-0 ${
            dark ? "text-white/75" : "text-[#ee4036]"
          }`}
        />

        <p
          className={`text-[14px] font-semibold leading-6 ${
            dark ? "text-white/85" : "text-neutral-700"
          } ${isAr ? "text-right" : ""}`}
        >
          {item}
        </p>
      </motion.div>
    ))}
  </motion.div>
);

CheckList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  dark: PropTypes.bool,
  isAr: PropTypes.bool,
};

export default function RDPage() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const page = t.rdPage;

  return (
    <main
      key={lang}
      dir={isAr ? "rtl" : "ltr"}
      className={`overflow-x-hidden bg-white text-neutral-950 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      {/* HERO */}
      <section className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[640px] overflow-x-hidden bg-black">
        <motion.img
          src={heroImg}
          alt="Smart Energy Innovation"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div
          className={`absolute inset-y-0 w-full lg:w-[62%] ${
            isAr
              ? "right-0 bg-gradient-to-l from-black/80 via-black/45 to-transparent"
              : "left-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent"
          }`}
        />

        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[520px] sm:min-h-[600px] lg:min-h-[640px] max-w-7xl items-center px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75 }}
            className={`max-w-[520px] rounded-[26px] border border-white/15 bg-black/45 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-md ${
              isAr ? "mr-auto max-w-[560px] text-right lg:pr-10" : ""
            }`}
          >
            <div
              className={`mb-6 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 backdrop-blur-md ${
                isAr ? "flex-row-reverse" : ""
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#ee4036]" />

              <span
                className={`whitespace-nowrap font-black text-white ${
                  isAr
                    ? "text-[12px] tracking-normal text-right"
                    : "text-xs uppercase tracking-[0.2em] sm:tracking-[0.32em]"
                }`}
              >
                {page.heroBadge}
              </span>
            </div>

            <h1
              className={`text-[32px] font-black leading-[1.12] text-white sm:text-5xl lg:text-[58px] ${
                isAr ? "tracking-[-0.01em]" : "tracking-[-0.08em]"
              }`}
            >
              {page.heroTitle1}{" "}
              <span className="text-[#ee4036]">{page.heroTitleHighlight}</span>{" "}
              {page.heroTitle2}
            </h1>

            <p className="mt-6 text-[15px] font-medium leading-7 text-white">
              {page.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PLATFORM */}
      {/* PLATFORM */}
      <section className="relative overflow-x-hidden bg-white py-16">
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20 lg:px-8">
          {/* TEXT */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className={`max-w-[520px] ${isAr ? "text-right" : ""}`}
          >
            <p
              className={`mb-3 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-xs uppercase tracking-[0.2em] sm:tracking-[0.32em]"
              }`}
            >
              {page.platformBadge}
            </p>

            <h2
              className={`max-w-xl text-[30px] font-black sm:text-[36px] leading-[1.08] sm:text-5xl ${
                isAr ? "tracking-[-0.01em]" : "tracking-[-0.04em]"
              }`}
            >
              {page.platformTitle1}
              <span className="block text-[#ee4036]">
                {page.platformTitle2}
              </span>
            </h2>

            <p className="mt-6 max-w-[500px] text-[15px] leading-7 text-neutral-600">
              {page.platformDesc}
            </p>
          </motion.div>

          {/* IMAGE + CARDS */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative"
          >
            <div className="relative h-auto w-full overflow-hidden rounded-[24px] lg:ml-auto lg:h-[360px] lg:w-[82%] lg:overflow-visible lg:rounded-[28px]">
              <div className="relative h-[240px] overflow-hidden rounded-[24px] shadow-[0_25px_80px_rgba(0,0,0,0.14)] sm:h-[300px] lg:left-[90px] lg:h-full lg:rounded-[28px]">
                <motion.img
                  src={platformImg}
                  alt="Integrated R&D Platform"
                  initial={{ scale: 1.04 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 10, ease: "easeOut" }}
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-transparent" />
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-4 w-full space-y-2 lg:absolute lg:left-[-90px] lg:top-1/2 lg:mt-0 lg:w-[390px] lg:-translate-y-1/2 lg:space-y-1"
              >
                {page.platformList.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeLeft}
                    transition={{ duration: 0.45 }}
                    whileHover={{ x: 8, scale: 1.012 }}
                    className="group relative overflow-hidden rounded-[18px] border border-black/5 bg-white/92 px-5 py-4 shadow-[0_14px_36px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-300 hover:border-red-500/20 hover:shadow-[0_22px_55px_rgba(220,38,38,0.16)]"
                  >
                    <div className="pointer-events-none absolute right-[-40px] top-[-30px] h-20 w-20 rounded-full bg-red-600/0 blur-2xl transition duration-300 group-hover:bg-red-600/15" />

                    <div
                      dir={isAr ? "rtl" : "ltr"}
                      className="relative z-10 flex items-center gap-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[#ee4036] shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition group-hover:bg-[#ee4036] group-hover:text-white">
                        <Layers3 size={17} />
                      </span>

                      <span className="text-[13px] font-semibold leading-5 text-neutral-800">
                        {item}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS */}
      {/* SOLUTIONS */}
      <section className="relative overflow-x-hidden bg-black py-24 text-white">
        <motion.img
          src={solutionsImg}
          alt="Application-Oriented Energy Solutions"
          initial={{ scale: 1.04 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div
          className={`absolute inset-y-0 w-full lg:w-[58%] ${
            isAr
              ? "right-0 bg-gradient-to-l from-black/90 via-black/65 to-transparent"
              : "left-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent"
          }`}
        />

        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/45 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={isAr ? fadeRight : fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className={`max-w-[520px] ${isAr ? "mr-auto text-right" : ""}`}
          >
            <p
              className={`mb-5 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-xs uppercase tracking-[0.2em] sm:tracking-[0.32em]"
              }`}
            >
              {page.solutionsBadge}
            </p>

            <h2
              className={`text-[30px] font-black sm:text-[36px] leading-[1.08] text-white sm:text-5xl lg:text-[50px] ${
                isAr ? "tracking-[-0.01em]" : "tracking-[-0.01em]"
              }`}
            >
              {page.solutionsTitle1}
              <span className="block text-[#ee4036]">
                {page.solutionsTitle2}
              </span>
            </h2>

            <p className="mt-6 max-w-[500px] text-[15px] font-medium leading-8 text-white/82">
              {page.solutionsDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-16">
        <div
          className={`mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-24 lg:px-8 ${
            isAr ? "lg:[direction:rtl]" : ""
          }`}
        >
          <motion.div
            variants={isAr ? fadeRight : fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[26px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          >
            <motion.img
              src={teamImg}
              alt="Expert Engineering and Research Team"
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 9, ease: "easeOut" }}
              className="h-[260px] sm:h-[340px] lg:h-[420px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={isAr ? fadeLeft : fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className={`max-w-[620px] ${isAr ? "text-right" : ""}`}
          >
            <p
              className={`mb-5 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-xs uppercase tracking-[0.2em] sm:tracking-[0.32em]"
              }`}
            >
              {page.teamBadge}
            </p>

            <h2
              className={`text-[34px] font-black leading-[1.04] sm:text-5xl ${
                isAr ? "tracking-[-0.01em]" : "tracking-[-0.02em]"
              }`}
            >
              {page.teamTitle1}
              <span className="block text-[#ee4036]">{page.teamTitle2}</span>
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-neutral-600">
              {page.teamDesc}
            </p>

            <CheckList items={page.teamList} isAr={isAr} />
          </motion.div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-white py-16">
        <div
          className={`mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8 ${
            isAr ? "lg:[direction:rtl]" : ""
          }`}
        >
          <motion.div
            variants={isAr ? fadeLeft : fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className={`max-w-[620px] ${isAr ? "text-right" : ""}`}
          >
            <p
              className={`mb-5 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-xs uppercase tracking-[0.2em] sm:tracking-[0.32em]"
              }`}
            >
              {page.qualityBadge}
            </p>

            <h2
              className={`text-[32px] font-black sm:text-[47px] leading-[1.08] ${
                isAr ? "tracking-[-0.01em]" : "tracking-[-0.04em]"
              }`}
            >
              {page.qualityTitle}
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-neutral-600">
              {page.qualityDesc}
            </p>

            <CheckList items={page.qualityList} isAr={isAr} />
          </motion.div>

          <motion.div
            variants={isAr ? fadeRight : fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[26px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          >
            <motion.img
              src={qualityImg}
              alt="Strict Quality Management"
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 9, ease: "easeOut" }}
              className="h-[260px] sm:h-[340px] lg:h-[420px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* TESTING */}
      <section className="relative overflow-hidden bg-[#07111d] py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(59,130,246,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_50%,rgba(238,64,54,0.08),transparent_30%)]" />

        <div
          className={`relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24 lg:px-8 ${
            isAr ? "lg:[direction:rtl]" : ""
          }`}
        >
          <motion.div
            variants={isAr ? fadeRight : fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[26px] shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
          >
            <motion.img
              src={testingImg}
              alt="Advanced Testing Capability"
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 9, ease: "easeOut" }}
              className="h-[260px] sm:h-[320px] lg:h-[370px] w-full object-cover object-center"
            />
          </motion.div>

          <motion.div
            variants={isAr ? fadeLeft : fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className={`max-w-[520px] ${isAr ? "text-right" : ""}`}
          >
            <p
              className={`mb-4 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-xs uppercase tracking-[0.2em] sm:tracking-[0.32em]"
              }`}
            >
              {page.testingBadge}
            </p>

            <h2
              className={`text-[32px] font-black sm:text-[47px] leading-[1.08] text-white ${
                isAr ? "tracking-[-0.01em]" : "tracking-[-0.035em]"
              }`}
            >
              {page.testingTitle}
            </h2>

            <CheckList items={page.testingList} dark isAr={isAr} />
          </motion.div>
        </div>
      </section>

      {/* GLOBAL STANDARDS */}
      <section className="relative overflow-x-hidden bg-white py-16">
        <div className="absolute left-[-180px] top-[-120px] h-[260px] sm:h-[340px] lg:h-[420px] w-[420px] rounded-full bg-red-600/5 blur-[140px]" />
        <div className="absolute right-[-180px] bottom-[-140px] h-[260px] sm:h-[340px] lg:h-[420px] w-[420px] rounded-full bg-slate-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className={`max-w-3xl ${isAr ? "text-right" : ""}`}
          >
            ر
            <p
              className={`mb-3 font-black text-[#ee4036] ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-xs uppercase tracking-[0.2em] sm:tracking-[0.32em]"
              }`}
            >
              {page.standardsBadge}
            </p>
            <h2 className="text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              {page.standardsTitle1}
              <span className="block text-[#ee4036]">
                {page.standardsTitle2}
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-neutral-600">
              {page.standardsDesc}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-6"
          >
            {standards.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group flex min-h-[210px] flex-col items-center justify-center rounded-[18px] border border-black/5 bg-white p-6 text-center shadow-[0_18px_45px_rgba(0,0,0,0.07)] transition-all duration-300 hover:border-red-500/20 hover:shadow-[0_24px_60px_rgba(220,38,38,0.14)]"
              >
                <div
                  className={`mb-6 flex h-[92px] w-[92px] items-center justify-center rounded-[18px] border ${item.logoBox}`}
                >
                  {item.logo}
                </div>

                <p className="min-h-[40px] text-[12px] font-black leading-5 text-neutral-700">
                  {item.descKey}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[#f6f7f9] py-16">
        <div className="absolute left-[-180px] top-[-140px] h-[260px] sm:h-[340px] lg:h-[420px] w-[420px] rounded-full bg-red-600/5 blur-[140px]" />
        <div className="absolute right-[-180px] bottom-[-140px] h-[260px] sm:h-[340px] lg:h-[420px] w-[420px] rounded-full bg-slate-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <motion.div
              variants={isAr ? fadeRight : fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className={isAr ? "text-right" : ""}
            >
              <p
                className={`mb-3 font-black text-[#ee4036] ${
                  isAr
                    ? "text-[13px] tracking-normal text-right"
                    : "text-xs uppercase tracking-[0.2em] sm:tracking-[0.32em]"
                }`}
              >
                {page.processBadge}
              </p>

              <h2 className="text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-5xl">
                {page.processTitle1}
                <span className="block text-[#ee4036]">
                  {page.processTitle2}
                </span>
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-7 text-neutral-600">
                {page.processDesc}
              </p>
            </motion.div>

            <div>
              <motion.div
                variants={isAr ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
                className="overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              >
                <motion.img
                  src={processImg}
                  alt="Process"
                  initial={{ scale: 1.04 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 9, ease: "easeOut" }}
                  className="h-[260px] w-full object-cover"
                />
              </motion.div>

              <div className="relative mt-10">
                <div className="absolute top-[32px] left-[6%] right-[6%] hidden h-[2px] bg-neutral-300 lg:block" />

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  className={`grid gap-y-10 md:grid-cols-3 lg:grid-cols-5 ${
                    isAr ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {page.processSteps.map((item, index) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      transition={{ duration: 0.45 }}
                      className="group relative text-center"
                    >
                      {index !== page.processSteps.length - 1 && (
                        <div
                          className={`absolute top-[32px] hidden lg:block ${
                            isAr
                              ? "right-[calc(50%+40px)]"
                              : "left-[calc(50%+40px)]"
                          }`}
                        >
                          <div className="relative h-[2px] w-10 bg-neutral-400">
                            <span
                              className={`absolute top-1/2 -translate-y-1/2 border-y-[4px] border-y-transparent ${
                                isAr
                                  ? "left-0 border-r-[6px] border-r-neutral-400"
                                  : "right-0 border-l-[6px] border-l-neutral-400"
                              }`}
                            />
                          </div>
                        </div>
                      )}

                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#ee4036] bg-white text-[14px] font-black text-[#ee4036] shadow-[0_12px_30px_rgba(220,38,38,0.15)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_45px_rgba(220,38,38,0.25)]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="mx-auto max-w-[140px] text-[12px] font-bold leading-5 text-neutral-800">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-x-hidden bg-black text-white">
        <motion.img
          src={ctaImg}
          alt="Build Your Next Energy Project"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1.03 }}
          viewport={{ once: true }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover object-[85%_30%]"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div
          className={`absolute inset-y-0 w-full lg:w-[58%] ${
            isAr
              ? "right-0 bg-gradient-to-l from-black/95 via-black/70 to-transparent"
              : "left-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent"
          }`}
        />

        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/70 to-transparent" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        >
          <h2 className="text-[30px] font-black sm:text-[36px] leading-[1.12] tracking-[-0.04em] sm:text-5xl">
            {page.ctaTitle1}
            <span className="block">{page.ctaTitle2}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/72">
            {page.ctaDesc}
          </p>
        </motion.div>
      </section>
    </main>
  );
}
