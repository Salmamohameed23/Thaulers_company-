import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BatteryCharging,
  Cable,
  CheckCircle2,
  Cpu,
  Layers3,
  ShieldCheck,
  Thermometer,
  Zap,
} from "lucide-react";

import smartHero from "../assets/images/3.jpg";
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
    title: "Commercial & Industrial ESS",
    spec: "832V | 232.96kW",
    image: essIndustrial,
    description:
      "Commercial and industrial energy storage for scalable, operation-ready applications.",
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

const process = [
  {
    title: "Design & Engineering",
    text: "System design, layouts, protection strategy, and technical planning for the required application.",
  },
  {
    title: "Supply & Procurement",
    text: "China-based sourcing support for high-quality components, optimized cost, and reliable performance.",
  },
  {
    title: "Installation & Commissioning",
    text: "Support from installation planning through testing, commissioning, and operation readiness.",
  },
  {
    title: "Operation-ready Support",
    text: "Factory-level support when required, technical training, and practical handover guidance.",
  },
];

// const supplySupport = [
//   "Strong China supply chain capabilities",
//   "High-quality components",
//   "Optimized cost",
//   "Reliable performance",
//   "Factory-level support when required",
//   "Technology transfer",
//   "Production setup",
//   "Technical training",
// ];

export default function SmartStorage() {
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

        <div className="absolute inset-0 bg-gradient-to-r from-white/86 via-white/64 to-white/76" />
        <div className="absolute right-[-120px] top-24 h-[520px] w-[520px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-red-600">
              Smart Storage · BESS Solutions
            </p>

            <h1 className="max-w-4xl text-[44px] font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[72px]">
              Integrated battery storage.
              <span className="block text-neutral-400">
                Engineered for real operation.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-[17px] leading-8 text-neutral-700 sm:text-lg">
              Fully integrated Energy Storage Systems for utility, commercial,
              and industrial applications — from system design and engineering
              to full supply, installation, and commissioning.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/lets-build"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-bold text-white shadow-[0_20px_45px_rgba(220,38,38,0.24)] transition hover:-translate-y-1 hover:bg-neutral-950"
              >
                Start Storage Project
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/90 px-8 py-4 text-sm font-bold text-neutral-950 shadow-[0_16px_45px_rgba(0,0,0,0.08)] backdrop-blur transition hover:-translate-y-1 hover:bg-neutral-950 hover:text-white"
              >
                Contact Engineering Team
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[48px] bg-gradient-to-br from-red-600/12 via-black/5 to-transparent blur-3xl" />

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[42px] border border-black/10 bg-white/82 p-6 shadow-[0_45px_120px_rgba(0,0,0,0.14)] backdrop-blur-xl"
            >
              <div className="relative rounded-[32px] bg-gradient-to-b from-neutral-900 to-black p-6 text-white shadow-[0_28px_70px_rgba(0,0,0,0.20)]">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-400">
                      BESS Scope
                    </p>
                    <h2 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                      EPC-ready storage system
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                    <BatteryCharging size={24} />
                  </div>
                </div>

                <div className="mt-7 grid gap-3">
                  {[
                    "Battery system design",
                    "BMS integration",
                    "PCS selection",
                    "Thermal management",
                    "Electrical protection",
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.25 + index * 0.06,
                      }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3"
                    >
                      <CheckCircle2 size={17} className="text-red-400" />
                      <span className="text-sm font-medium text-white/85">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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
      <section className="relative overflow-hidden bg-white py-12">
        <div className="absolute left-0 top-0 z-10 h-full w-[5px] bg-red-600" />
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                Product Range
              </p>
              <h2 className="text-[38px] font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                Storage products engineered for different energy demands.
              </h2>
            </div>

            <p className="max-w-xl text-[16px] leading-8 text-neutral-600 lg:ml-auto">
              From household ESS to commercial and industrial storage, each
              solution supports reliable operation, scalable deployment, and
              practical energy storage applications.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.article
                key={product.spec}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[36px] border border-black/10 bg-white shadow-[0_24px_75px_rgba(0,0,0,0.08)] transition duration-500 hover:border-red-600/30 hover:shadow-[0_35px_90px_rgba(220,38,38,0.13)]"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex h-[335px] items-center justify-center bg-gradient-to-b from-neutral-50 via-white to-white p-8">
                  <div className="absolute left-6 top-6 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-neutral-700 backdrop-blur">
                    {index === 0
                      ? "Residential"
                      : index === 1
                        ? "Home Backup"
                        : "C&I System"}
                  </div>

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

                  <h3 className="text-2xl font-black tracking-[-0.035em]">
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
      </section>

      {/* ENGINEERING SCOPE */}
      <section className="relative overflow-hidden bg-neutral-50 py-12">
        <div className="absolute left-0 top-0 z-10 h-full w-[5px] bg-red-600" />
        <div className="absolute left-[-140px] top-24 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                Engineering Scope
              </p>
              <h2 className="text-[38px] font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                Engineering depth behind every storage system.
              </h2>
            </div>

            <p className="max-w-xl text-[16px] leading-8 text-neutral-600 lg:ml-auto">
              TOUGH HAULERS supports BESS projects across design, integration,
              electrical systems, safety, scalability, and real-world operation.
            </p>
          </div>

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
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-red-600">
                      <Icon size={23} />
                    </div>

                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-300 group-hover:text-red-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-black tracking-[-0.025em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EPC PROCESS */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="absolute left-0 top-0 z-10 h-full w-[5px] bg-red-600" />
        <div className="absolute right-[-180px] bottom-[-140px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
                EPC Delivery Process
              </p>

              <h2 className="text-[38px] font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                From technical planning to operation-ready delivery.
              </h2>
            </div>

            <p className="max-w-xl text-[16px] leading-8 text-neutral-600 lg:ml-auto">
              A structured EPC workflow covering design, sourcing, installation,
              commissioning, and practical support for real-world BESS
              operation.
            </p>
          </div>

          <div className="grid gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative grid gap-5 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_20px_65px_rgba(0,0,0,0.07)] transition duration-500 hover:-translate-y-1 hover:border-red-600/30 hover:shadow-[0_30px_85px_rgba(220,38,38,0.11)] lg:grid-cols-[96px_1fr_auto] lg:items-center"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-sm font-black text-white shadow-[0_18px_38px_rgba(220,38,38,0.28)]">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-[-0.035em]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-[15px] leading-7 text-neutral-600">
                    {step.text}
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white transition group-hover:bg-red-600 lg:flex">
                  <ArrowUpRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLY CHAIN */}
      {/* <section className="relative overflow-hidden bg-white py-12">
        <div className="absolute left-0 top-0 z-10 h-full w-[5px] bg-red-600" />
        <div className="absolute left-[-120px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[95px]" />
        <div className="absolute right-[-120px] bottom-10 h-[420px] w-[420px] rounded-full bg-red-600/12 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-red-600">
              Supply Chain + Factory Support
            </p>

            <h2 className="text-[38px] font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              China supply capability with engineering-focused execution.
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-neutral-600">
              Strong sourcing capability, high-quality components, optimized
              cost, and factory-level support when required — including
              technology transfer, production setup, and technical training.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {supplySupport.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-3xl border border-black/10 bg-white/90 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)] backdrop-blur transition hover:-translate-y-1 hover:border-red-600/25 hover:shadow-[0_28px_75px_rgba(220,38,38,0.10)]"
              >
                <CheckCircle2 className="mb-4 text-red-600" size={22} />
                <p className="text-[15px] font-semibold leading-7 text-neutral-700">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
