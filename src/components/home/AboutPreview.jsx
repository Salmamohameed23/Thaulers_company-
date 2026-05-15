import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BatteryCharging,
  Globe2,
  SunMedium,
  Factory,
} from "lucide-react";

const points = [
  { icon: SunMedium, title: "Solar Power Systems" },
  { icon: BatteryCharging, title: "Battery Energy Storage Systems" },
  { icon: Globe2, title: "China Supply Chain" },
  { icon: Factory, title: "Engineering Support From Egypt" },
  { icon: ArrowUpRight, title: "From kW-scale to Gigawatt-scale Projects" },
];

const AboutPreview = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-neutral-950">
      <div className="absolute left-[-180px] top-10 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute right-[-180px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl items-start gap-16 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="max-w-[460px]"
        >
          <p className="mb-4 text-s font-black uppercase tracking-[0.32em] text-[#ee4036]">
            About Company
          </p>

          <h2 className="text-[32px] font-black leading-[1.02] tracking-[-0.035em] text-neutral-950 sm:text-[40px] lg:text-[44px]">
            Global solar and energy storage solutions, engineered from design to
            execution.
          </h2>

          <div className="mt-6 space-y-4 text-[13px] font-medium leading-6 text-neutral-800">
            <p>
              TOUGH HAULERS is a global provider of advanced solar power and
              energy storage solutions, delivering fully integrated solar
              projects across international markets.
            </p>

            <p>
              With operations based in China and engineering support from Egypt,
              the company combines global sourcing capabilities with strong
              technical expertise to deliver reliable, scalable, and
              high-performance energy systems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="relative rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_28px_70px_rgba(0,0,0,0.08)] sm:p-7"
        >
          <p className="mb-5 text-s font-black uppercase tracking-[0.32em] text-[#ee4036]">
            Core Positioning
          </p>

          <div className="space-y-3">
            {points.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.22 }}
                  className="group flex items-center gap-4 rounded-[14px] border border-black/10 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.045)] transition-all duration-300 hover:border-red-600/25"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-neutral-950 text-white transition-all duration-300 group-hover:bg-[#ee4036]">
                    <Icon size={17} strokeWidth={2.4} />
                  </div>

                  <p className="text-[13px] font-semibold text-neutral-800">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
