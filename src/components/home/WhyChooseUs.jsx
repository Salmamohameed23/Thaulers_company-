import { motion } from "framer-motion";
import {
  BadgeCheck,
  Globe2,
  Headphones,
  Layers3,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Engineering Excellence",
    text: "Strong technical expertise across solar power systems, battery energy storage, and EPC project delivery.",
  },
  {
    icon: Globe2,
    title: "China Supply Chain",
    text: "Global sourcing capability supported by a strong China-based supply chain for energy technologies.",
  },
  {
    icon: Layers3,
    title: "Scalable Energy Solutions",
    text: "Solutions designed to support projects from kW-scale applications to Gigawatt-scale deployment.",
  },
  {
    icon: Headphones,
    title: "Engineering Support in Egypt",
    text: "Regional engineering support in Egypt to assist project execution, coordination, and technical delivery.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14 text-neutral-950 ">
      <div className="absolute left-0 top-0 h-full w-[5px] bg-red-600" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(220,38,38,0.06),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.018)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-red-600">
            Why Choose Us
          </p>

          <h2 className="text-[40px] font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            Built on Trust.
            <span className="block ">
              Driven by Engineering.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.075)] transition-all duration-300 hover:border-red-600/25 hover:shadow-[0_28px_70px_rgba(0,0,0,0.11)]"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white transition-all duration-300 group-hover:bg-red-600">
                  <Icon size={21} />
                </div>

                <h3 className="text-[20px] font-semibold leading-7 text-neutral-950">
                  {reason.title}
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-neutral-600">
                  {reason.text}
                </p>

                
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
