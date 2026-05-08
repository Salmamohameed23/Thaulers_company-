import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BatteryCharging,
  Cable,
  Factory,
  HardHat,
  ShieldCheck,
  SunMedium,
  Zap,
} from "lucide-react";

import gigaHero from "../assets/images/gigawaa.png";
import giga1 from "../assets/images/gigawaa.png";
import giga2 from "../assets/images/gigawaa.png";
import giga3 from "../assets/images/gigawaa.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const capabilities = [
  "Multi-GW Project Scope",
  "Solar + BESS Integration",
  "Full EPC Engineering",
  "China Supply Chain",
  "Utility-Scale Execution",
];

const services = [
  {
    icon: SunMedium,
    title: "Utility-Scale Solar",
    text: "Engineering and supply support for large-scale solar power systems designed for industrial and utility applications.",
  },
  {
    icon: BatteryCharging,
    title: "BESS Integration",
    text: "Battery Energy Storage Systems integrated with project requirements, safety needs, and long-term operation.",
  },
  {
    icon: Cable,
    title: "Electrical Engineering",
    text: "Single-line diagrams, layouts, protection systems, and electrical engineering support for complex projects.",
  },
  {
    icon: Zap,
    title: "PCS & Inverter Selection",
    text: "Technical selection support for inverters, PCS, and power conversion systems based on project scale.",
  },
  {
    icon: Factory,
    title: "China Supply Chain",
    text: "Strong China-based supply chain capability for high-quality components, optimized cost, and reliable delivery.",
  },
  {
    icon: HardHat,
    title: "Commissioning Support",
    text: "Project support from engineering and supply through installation, commissioning, and operation-ready handover.",
  },
];

const process = [
  {
    title: "Project Scope & Feasibility",
    text: "Understanding the required capacity, application, location needs, system structure, and technical constraints.",
  },
  {
    title: "Engineering & System Design",
    text: "Preparing the technical foundation across solar, BESS, electrical layouts, protection systems, and integration scope.",
  },
  {
    title: "Supply Chain & Procurement",
    text: "Coordinating China-based sourcing for high-quality components with optimized cost and reliable performance.",
  },
  {
    title: "Installation & Commissioning Support",
    text: "Supporting project execution through installation planning, commissioning, technical training, and operation readiness.",
  },
];

const GigaProjects = () => {
  return (
    <main className="overflow-hidden bg-white text-neutral-950">
      {/* HERO */}
      <section className="relative min-h-[100vh] overflow-hidden bg-black text-white">
        <motion.img
          src={gigaHero}
          alt="Utility scale solar and energy storage project"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 14, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="max-w-6xl"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/12 px-5 py-2.5 shadow-[0_16px_45px_rgba(0,0,0,0.22)] backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-white">
                Giga Projects · Solar · BESS · EPC
              </span>
            </div>

            <h1 className="max-w-5xl text-[46px] font-black leading-[0.93] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-[88px]">
              Engineering power
              <br />
              <span className="text-white/85">at giga scale.</span>
            </h1>

            <div className="mt-8 h-[4px] w-28 rounded-full bg-red-600 shadow-[0_0_25px_rgba(220,38,38,0.5)]" />

            <p className="mt-8 max-w-4xl text-[18px] font-medium leading-9 text-white/85 sm:text-[21px]">
              TOUGH HAULERS supports large-scale solar and energy storage
              projects from kW scale to multi-Gigawatt project requirements.
              <span className="mt-5 block">
                Our role connects EPC engineering, BESS integration, China-based
                supply chain capability, and practical project execution support
                for industrial and utility-scale energy applications.
              </span>
            </p>

            {/* TRUST STRIP INSIDE HERO */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[24px] border border-white/18 bg-black/35 px-5 py-5 shadow-[0_20px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-600/15"
                >
                  <div className="absolute right-[-35px] top-[-35px] h-28 w-28 rounded-full bg-red-600/0 blur-[50px] transition duration-500 group-hover:bg-red-600/25" />

                  <div className="relative flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-[0_14px_32px_rgba(220,38,38,0.38)]">
                      <ShieldCheck size={18} />
                    </div>

                    <span className="text-[14px] font-bold leading-5 text-white">
                      {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT SCALE IMAGES */}
      <section className="relative overflow-hidden bg-white py-14">
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-red-600">
                Giga-Scale Energy
              </p>

              <h2 className="text-[38px] font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                Large energy projects need engineering discipline, not just
                supply.
              </h2>
            </div>

            <p className="max-w-xl text-[16px] leading-8 text-neutral-600 lg:ml-auto">
              Our giga-scale approach is built around solar power systems, BESS,
              full EPC engineering, supply chain coordination, and practical
              support from design to commissioning.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[giga1, giga2, giga3].map((img, index) => (
              <motion.div
                key={img}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[34px] shadow-[0_24px_75px_rgba(0,0,0,0.12)]"
              >
                <img
                  src={img}
                  alt="Giga scale energy project"
                  className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-neutral-50 py-14">
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-red-600">
                Engineering Scope
              </p>

              <h2 className="text-[38px] font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                Integrated support for large solar and storage projects.
              </h2>
            </div>

            <p className="max-w-xl text-[16px] leading-8 text-neutral-600 lg:ml-auto">
              From system design and electrical engineering to procurement, BESS
              integration, installation support, and commissioning, the focus is
              reliability at real project scale.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[32px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2 hover:border-red-600/30 hover:shadow-[0_30px_85px_rgba(220,38,38,0.12)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-red-600">
                    <Icon size={24} />
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
      <section className="relative overflow-hidden bg-white py-14">
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-red-600">
                Delivery Workflow
              </p>

              <h2 className="text-[38px] font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                A controlled path from concept to operation-ready delivery.
              </h2>
            </div>

            <p className="max-w-xl text-[16px] leading-8 text-neutral-600 lg:ml-auto">
              Giga-scale projects require disciplined sequencing, technical
              clarity, supply coordination, and practical execution support.
            </p>
          </div>

          <div className="grid gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative grid gap-5 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_20px_65px_rgba(0,0,0,0.07)] transition duration-500 hover:-translate-y-1 hover:border-red-600/30 hover:shadow-[0_30px_85px_rgba(220,38,38,0.11)] lg:grid-cols-[96px_1fr_auto] lg:items-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-sm font-black text-white shadow-[0_18px_38px_rgba(220,38,38,0.28)]">
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


    </main>
  );
};

export default GigaProjects;
