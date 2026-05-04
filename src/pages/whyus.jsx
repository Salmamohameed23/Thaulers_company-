import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BatteryCharging,
  Factory,
  HardHat,
  ShieldCheck,
  SunMedium,
} from "lucide-react";

const capabilities = [
  {
    icon: SunMedium,
    title: "Solar Power Systems",
    text: "Integrated solar power solutions designed for reliable performance and scalable deployment.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Energy Storage Systems",
    text: "Advanced BESS solutions supporting stable, optimized, and continuous energy performance.",
  },
  {
    icon: HardHat,
    title: "Full EPC Solar & Energy Engineering",
    text: "Engineering, procurement, and construction support across the full project lifecycle.",
  },
  {
    icon: Factory,
    title: "Factory Solutions",
    text: "Turnkey factory solutions, technology transfer, and manufacturing support for energy systems.",
  },
];

const positioning = [
  "China-based supply chain capability",
  "Engineering support in Egypt",
  "Global project execution mindset",
  "From kW-scale to Gigawatt-scale projects",
];

const About = () => {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative overflow-hidden bg-white py-20 ">
        <div className="absolute left-0 top-0 h-full w-[5px] bg-red-600" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(220,38,38,0.07),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.018)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-red-600">
              About Company
            </p>

            <h1 className="text-[44px] font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[78px]">
              Global solar and energy storage solutions,
              <span className="block text-neutral-700">
                engineered for reliable execution.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-[17px] leading-8 text-neutral-600 sm:text-lg">
              TOUGH HAULERS TRADE LIMITED is a global provider of solar power
              systems, battery energy storage solutions, and full EPC solar and
              energy engineering for international energy projects.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/solutions"
                className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(220,38,38,0.22)] transition hover:-translate-y-1 hover:bg-neutral-950"
              >
                Explore Solutions
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-black/15 bg-white px-8 py-4 text-sm font-black text-neutral-950 shadow-[0_14px_35px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:bg-neutral-950 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 ">
        <div className="absolute left-0 top-0 h-full w-[5px] bg-red-600" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-red-600">
              Company Positioning
            </p>

            <h2 className="text-[36px] font-black leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              Engineering Power.
              <span className="block text-neutral-700">
                Delivering Reliability.
              </span>
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-neutral-600">
              With operations based in China and engineering support in Egypt,
              the company combines supply chain strength with technical
              expertise to deliver scalable solar and energy storage solutions.
            </p>

            <p className="mt-5 text-[16px] leading-8 text-neutral-600">
              The company supports global projects through integrated solutions
              covering solar power systems, BESS, EPC engineering, factory
              solutions, and technology transfer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[34px] border border-black/10 bg-white p-5 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {positioning.map((item, index) => (
                <div
                  key={item}
                  className="rounded-3xl border border-black/10 bg-white p-5 shadow-[0_12px_32px_rgba(0,0,0,0.045)]"
                >
                  <p className="mb-4 text-5xl font-black text-black/[0.05]">
                    0{index + 1}
                  </p>

                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={20}
                      className="mt-1 shrink-0 text-red-600"
                    />
                    <p className="text-[15px] font-semibold leading-7 text-neutral-800">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 ">
        <div className="absolute left-0 top-0 h-full w-[5px] bg-red-600" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(220,38,38,0.055),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-red-600">
                Core Capabilities
              </p>

              <h2 className="text-[38px] font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                Integrated energy solutions
                <span className="block text-neutral-700">
                  across design, supply & execution.
                </span>
              </h2>
            </div>

            <Link
              to="/solutions"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-black text-white transition hover:bg-red-600"
            >
              View Solutions
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -7 }}
                  className="group rounded-[30px] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.075)] transition-all duration-300 hover:border-red-600/25 hover:shadow-[0_28px_70px_rgba(0,0,0,0.11)]"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-red-600">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-[19px] font-semibold leading-7 text-neutral-950">
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

    </main>
  );
};

export default About;
