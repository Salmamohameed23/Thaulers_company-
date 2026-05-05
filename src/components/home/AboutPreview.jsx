import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BatteryCharging,
  Globe2,
  HardHat,
  SunMedium,
  Factory,
} from "lucide-react";

const points = [
  {
    icon: SunMedium,
    title: "Solar Power Systems",
  },
  {
    icon: BatteryCharging,
    title: "Battery Energy Storage Systems",
  },
  {
    icon: HardHat,
    title: "Full EPC Solar & Energy Engineering",
  },
  {
    icon: Globe2,
    title: "China Supply Chain",
  },
  {
    icon: Factory,
    title: "Engineering Support in Egypt",
  },
  {
    icon: ArrowUpRight,
    title: "From kW-scale to Gigawatt-scale Projects",
  },
];

const AboutPreview = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12  text-neutral-950">
      <div className="absolute left-0 top-0 h-full w-[5px] bg-red-600" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(220,38,38,0.07),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px)] [background-size:72px_72px] opacity-50" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-7 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-red-600">
            About Company
          </p>

          <h2 className="max-w-3xl text-[38px] font-black leading-[1.05] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[58px]">
            Global solar and energy storage solutions,
            <span className="block ">
              engineered from design to execution.
            </span>
          </h2>

          <div className="mt-7 max-w-2xl space-y-5 text-[17px] font-medium leading-8  sm:text-lg">
            <p>
              TOUGH HAULERS is a global provider of advanced solar power and
              energy storage solutions, delivering fully integrated solar
              projects across international markets.
            </p>

            <p>
              With operations based in China and engineering support from  Egypt,
              the company combines global sourcing capabilities with strong
              technical expertise to deliver reliable, scalable, and
              high-performance energy systems.
            </p>
          </div>

          <Link
            to="/whyus"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-[15px] font-black text-white shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
          >
            Learn More About Us
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-[34px] border border-black/10 bg-white/80 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.10)] backdrop-blur-xl sm:p-8"
        >
          <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-red-600/10 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-black/5 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-red-600">
              Core Positioning
            </p>

            <div className="mt-8 grid gap-4">
              {points.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-[0_14px_35px_rgba(0,0,0,0.055)] transition-all duration-300 hover:border-red-600/25 hover:shadow-[0_22px_48px_rgba(0,0,0,0.10)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-white transition-all duration-300 group-hover:bg-red-600">
                      <Icon size={20} />
                    </div>

                    <p className="text-[15px] font-semibold leading-6 text-neutral-800">
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

export default AboutPreview;
