import { motion } from "framer-motion";
import {
  BatteryCharging,
  Cable,
  Cpu,
  Layers3,
  ShieldCheck,
  Thermometer,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";
import smartHero from "../assets/images/hero4.jpg";
import ess5 from "../assets/images/5 kw 1.png";
import ess10 from "../assets/images/5 kw 6.png";
import essIndustrial from "../assets/images/6.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const capabilities = [
  "BMS Integration",
  "PCS Selection",
  "China Supply Chain",
  "Safety & Scalability",
];

const products = [
  {
    title: "Household ESS",
    spec: "51.2V | 5kWh",
    image: ess5,
    description:
      "Compact residential energy storage for backup power and daily energy flexibility.",
  },
  {
    title: "Household ESS",
    spec: "51.2V | 10kWh",
    image: ess10,
    description:
      "Higher-capacity household storage designed for reliable home energy operation.",
  },
  {
    title: "Commercial & Industrial System",
    spec: "832V | 232.96kW",
    image: essIndustrial,
    description:
      "Commercial and industrial energy storage for scalable, operation-ready applications.",
  },
  {
    title: "Residential Wall-Mounted ESS",
    spec: "51.2V | 15kWh",
    image: ess10,
    description:
      "Wall-mounted residential storage for larger home backup and daily power optimization.",
  },
  {
    title: "Rack Battery System",
    spec: "48V | Modular",
    image: ess5,
    description:
      "Modular rack battery solution designed for flexible capacity expansion and stable operation.",
  },
  {
    title: "Utility Storage Cabinet",
    spec: "High Voltage | Outdoor",
    image: essIndustrial,
    description:
      "Outdoor-ready storage cabinet for commercial, industrial, and utility-scale energy projects.",
  },
];

const engineeringScope = [
  {
    icon: BatteryCharging,
    title: "Battery System Design",
    text: "BESS architecture designed around real project requirements, capacity needs, and operational stability.",
  },
  {
    icon: Cpu,
    title: "BMS Integration",
    text: "Battery management integration focused on monitoring, safety logic, and dependable system control.",
  },
  {
    icon: Zap,
    title: "Inverter & PCS Selection",
    text: "Project-specific inverter and PCS selection to support efficient power conversion and performance.",
  },
  {
    icon: Layers3,
    title: "Containerized Storage",
    text: "Containerized storage solutions for utility, commercial, and industrial deployment needs.",
  },
  {
    icon: Thermometer,
    title: "Thermal Management",
    text: "Thermal control systems designed to support safety, efficiency, and long-term reliability.",
  },
  {
    icon: Cable,
    title: "Electrical Engineering",
    text: "Single-line diagrams, layouts, protection systems, and full electrical engineering support.",
  },
];

export default function SmartStorage() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = 420;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <main className="overflow-hidden bg-white text-neutral-950">
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden bg-black text-white">
        {/* BACKGROUND IMAGE */}
        <motion.img
          src={smartHero}
          alt="Factory production and engineering"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 14, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAYS */}
        <div className="absolute inset-0 bg-black/48" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-10 pt-28 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.75 }}
            className="max-w-5xl"
          >
            {/* TOP BADGE */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3 backdrop-blur-md">
              <span className="h-3 w-3 rounded-full bg-[#ee4036]" />
              <span className="text-[13px] font-black uppercase tracking-[0.34em] text-white">
                Smart Storage · BESS Solutions
              </span>
            </div>

            {/* TITLE */}
            <h1 className="max-w-5xl text-[52px] font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl lg:text-[86px]">
              Integrated battery
              <span className="block">storage execution.</span>
            </h1>

            {/* RED LINE */}
            <div className="mt-8 h-[4px] w-[150px] bg-[#ee4036] shadow-[0_0_18px_rgba(220,38,38,0.75)]" />

            {/* DESCRIPTION */}
            <div className="mt-8 max-w-4xl space-y-6 text-[19px] font-bold leading-9 text-white">
              <p>
                TOUGH HAULERS delivers fully integrated Energy Storage Systems
                for utility, commercial, and industrial applications.
              </p>

              <p>
                From system design and engineering to full supply, installation,
                commissioning, and after-sales service, our focus is built
                around real operational reliability.
              </p>
            </div>
          </motion.div>

          {/* TRUST STRIP */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex min-h-[84px] items-center gap-4 rounded-[22px] border border-white/50 bg-white/10 px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ee4036] text-white shadow-[0_12px_30px_rgba(220,38,38,0.38)]">
                  <ShieldCheck size={18} />
                </span>

                <span className="text-[15px] font-extrabold leading-5 text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PRODUCT RANGE */}
      {/* PRODUCT RANGE */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="mb-6 flex flex-col items-center">
              <p className="mb-5 text-s font-black uppercase tracking-[0.28em] text-[#ee4036]">
                PRODUCT RANGE
              </p>
            </div>

            <h2 className="max-w-5xl text-[34px] font-black leading-[1.04] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[64px]">
              Storage products engineered for different energy demands.
            </h2>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_18px_40px_rgba(0,0,0,0.14)] transition hover:bg-red-600 hover:text-white lg:flex"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 z-20 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_18px_40px_rgba(0,0,0,0.14)] transition hover:bg-red-600 hover:text-white lg:flex"
            >
              <ChevronRight size={24} />
            </button>

            <div
              ref={sliderRef}
              className="flex gap-7 overflow-x-auto scroll-smooth  scrollbar-hide items-stretch"
            >
              {products.map((product, index) => (
                <motion.article
                  key={`${product.title}-${product.spec}-${index}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  className="group  relative min-w-[369px] max-w-[390px]  flex-col overflow-hidden rounded-[36px] border border-black/10 bg-white shadow-[0_24px_75px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-2 hover:border-red-600/30 hover:shadow-[0_35px_90px_rgba(220,38,38,0.13)]"
                >
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-[335px] items-center justify-center bg-gradient-to-b from-neutral-50 via-white to-white p-8">
                    <img
                      src={product.image}
                      alt={`${product.title} ${product.spec}`}
                      className="relative z-10 max-h-[245px] w-auto object-contain drop-shadow-[0_28px_35px_rgba(0,0,0,0.16)] transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="relative p-8">
                    <div className="mb-5 inline-flex  px-4 py-2 text-sm font-black text-black">
                      {product.spec}
                    </div>

                    <h3 className="text-2xl font-black tracking-[-0.035em] text-neutral-950">
                      {product.title}
                    </h3>

                    <p className="mt-4 min-h-[84px] text-[15px] leading-7 text-neutral-600">
                      {product.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING SCOPE */}
      <section className="relative overflow-hidden bg-neutral-50 py-16">
        {/* Left Accent */}
        <div className="absolute left-0 top-0 z-10 h-full w-[5px] bg-red-600" />

        {/* Background Glow */}
        <div className="absolute left-[-140px] top-24 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />

        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="mb-6 flex flex-col items-center">
              <p className="mb-5 text-s font-black uppercase tracking-[0.28em] text-[#ee4036]">
                ENGINEERING SCOPE
              </p>
            </div>

            <h2 className="max-w-5xl text-[34px] font-black leading-[1.04] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[64px]">
              Engineering depth behind every storage system.
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
            {engineeringScope.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2 hover:border-red-600/30 hover:shadow-[0_30px_85px_rgba(220,38,38,0.12)]"
                >
                  {/* Hover Top Line */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Top Row */}
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white transition duration-300 group-hover:bg-red-600">
                      <Icon size={23} />
                    </div>

                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-300 transition duration-300 group-hover:text-red-500">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black tracking-[-0.025em] text-neutral-950">
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
