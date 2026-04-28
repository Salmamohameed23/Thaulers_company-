import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sun,
  BatteryCharging,
  HardHat,
  ClipboardCheck,
  DraftingCompass,
  PackageCheck,
  Wrench,
  Activity,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import solarImg from "../../assets/images/solar-power-panel.jpg";
import bessImg from "../../assets/images/17.jpg";
import epcImg from "../../assets/images/5 kw 6.png";

const featuredServices = [
  {
    icon: Sun,
    title: "Solar Power Systems",
    text: "High-efficiency solar solutions designed for maximum performance and long-term reliability.",
    image: solarImg,
  },
  {
    icon: BatteryCharging,
    title: "Battery Energy Storage Systems",
    text: "Advanced energy storage technologies ensuring stable, continuous, and optimized power supply.",
    image: bessImg,
  },
  {
    icon: HardHat,
    title: "Full EPC Solar & Energy Engineering",
    text: "Complete project lifecycle services ensuring seamless execution and optimal performance.",
    image: epcImg,
  },
];

const lifecycleServices = [
  { icon: ClipboardCheck, title: "Project Study & Energy Analysis" },
  { icon: DraftingCompass, title: "Engineering Design, R&D & System Planning" },
  { icon: PackageCheck, title: "Sourcing & Procurement from Global Suppliers" },
  { icon: Wrench, title: "Installation & Commissioning" },
  { icon: Activity, title: "Operation & Maintenance" },
  { icon: ShieldCheck, title: "After-Sales Support & Warranty" },
];

const ServicesPreview = () => {
  return (
    <section className="relative overflow-hidden bg-[#050608] py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(239,35,60,0.20),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(239,35,60,0.10),transparent_30%)]" />

      <motion.div
        animate={{ x: ["0%", "8%", "0%"], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-red-600 blur-[130px]"
      />

      <div className="absolute inset-0 opacity-[0.17] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:76px_76px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-red-400">
              Our Services
            </p>

            <h2 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Complete Energy
              <span className="block text-red-500">Engineering Services.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              We deliver complete energy solutions designed to power commercial,
              industrial, and hospitality sectors. Every stage is executed with
              precision to ensure reliability, efficiency, and long-term
              performance.
            </p>
          </div>

          <Link
            to="/solutions"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:bg-red-600"
          >
            Explore Services
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 55, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                whileHover={{ y: -12 }}
                className="group relative min-h-[440px] overflow-hidden rounded-[34px] border border-white/10 bg-[#11161D] shadow-2xl shadow-black/40"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/40 bg-black/35 text-red-300 backdrop-blur transition-all duration-300 group-hover:rotate-3 group-hover:bg-red-600 group-hover:text-white">
                  <Icon size={26} />
                </div>

                <div className="absolute right-6 top-6 text-6xl font-black leading-none text-white/10 transition-all duration-500 group-hover:text-red-500/30">
                  0{index + 1}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="max-w-[280px] text-2xl font-black leading-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {service.text}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">
                      Core Capability
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-red-600">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-red-400">
                Project Lifecycle
              </p>

              <h3 className="text-3xl font-black leading-tight text-white">
                From study to long-term support.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Complete project lifecycle services ensuring seamless execution
                and optimal performance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {lifecycleServices.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className="group min-h-[150px] border-b border-white/10 p-6 transition-all duration-300 hover:bg-red-600"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 transition-all duration-300 group-hover:bg-white group-hover:text-red-600">
                      <Icon size={22} />
                    </div>

                    <p className="text-sm font-bold leading-6 text-slate-200 transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
