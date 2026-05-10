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
  "EPC Delivery",
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
      <section className="relative min-h-[92vh] overflow-hidden bg-white pt-28 pb-20">
        <div className="absolute left-0 top-0 z-20 h-full w-[5px] bg-red-600" />

        <img
          src={smartHero}
          alt="Smart battery energy storage system"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
        <div className="absolute right-[-120px] top-24 h-[520px] w-[520px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-5 text-s font-black uppercase tracking-[0.28em] text-red-600">
              Smart Storage · BESS Solutions
            </p>

            <h1 className="max-w-4xl text-[44px] font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[72px]">
              Integrated battery storage.
              <span className="block ">Engineered for real operation.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-[17px] leading-8 text-neutral-700 sm:text-lg">
              Fully integrated Energy Storage Systems for utility, commercial,
              and industrial applications — from system design and engineering
              to full supply, installation, and commissioning.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[48px] bg-gradient-to-br from-red-600/12 via-black/5 to-transparent blur-3xl" />
          </motion.div>
        </div>
        {/* TRUST STRIP */}
        <section className="relative border-y  ">
          <div className="absolute left-0 top-0 h-full w-[5px] bg-red-600" />

          <div className="mx-auto grid max-w-7xl gap-px px-6 py-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-4   px-6 py-7 text-xl font-semibold text-neutral-800"
              >
                <ShieldCheck size={17} className="text-red-600" />
                {item}
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* PRODUCT RANGE */}
      {/* PRODUCT RANGE */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-red-600/15 bg-red-600/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              <p className="text-s font-black uppercase tracking-[0.28em] text-red-600">
                Product Range
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
                    <div className="mb-5 inline-flex rounded-full bg-red-600/10 px-4 py-2 text-sm font-black text-red-600">
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
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-red-600/15 bg-red-600/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-red-600" />

              <p className="text-s font-black uppercase tracking-[0.28em] text-red-600">
                Engineering Scope
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
