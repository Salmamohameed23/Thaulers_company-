import { motion } from "framer-motion";
import { Zap, Network, HardHat, Settings } from "lucide-react";

const stats = [
  {
    icon: Zap,
    title: "kW → Gigawatt",
    text: "Project Scale",
  },
  {
    icon: Network,
    title: "China",
    text: "Supply Chain",
  },
  {
    icon: HardHat,
    title: "Egypt",
    text: "Engineering Support",
  },
  {
    icon: Settings,
    title: "End-to-End",
    text: "EPC Delivery",
  },
];

const HeroStats = () => {
  return (
    <section className="border-y border-white/10 bg-[#050505] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group flex items-center gap-5 border-b border-white/10 p-7 transition-all duration-300 hover:bg-white/[0.04] sm:border-r lg:border-b-0"
            >
              <motion.div
                whileHover={{ rotate: 6, scale: 1.08 }}
                transition={{ duration: 0.25 }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-red-500/60 text-red-500 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white"
              >
                <Icon size={24} />
              </motion.div>

              <div>
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroStats;
