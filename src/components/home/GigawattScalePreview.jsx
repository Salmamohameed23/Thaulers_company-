import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Network,
  Zap,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const scaleItems = [
  {
    icon: Building2,
    title: "Cities",
  },
  {
    icon: Factory,
    title: "Industrial Zones",
  },
  {
    icon: Network,
    title: "National Grids",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Reliability",
  },
];

const GigawattScalePreview = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white lg:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-1/4 h-[480px] w-[480px] rounded-full bg-red-600 blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-red-400">
              Gigawatt-Scale Energy
            </p>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
              Engineering and Delivering
              <span className="block text-red-500">
                High-Capacity Energy Infrastructure.
              </span>
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Gigawatt-scale projects represent large-scale energy
              infrastructures capable of supplying power to entire cities,
              industrial zones, and national grids. At this level, projects
              demand advanced engineering expertise, high-performance systems,
              and seamless execution.
            </p>

            <Link
              to="/gigawatt-projects"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-500"
            >
              View Large-Scale Capabilities
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="rounded-[34px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl"
          >
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
                <Zap size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-black">From kW to Gigawatt</h3>
                <p className="text-sm text-slate-400">
                  Scalable energy systems
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {scaleItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-black/35 p-5"
                  >
                    <Icon className="mb-4 text-red-400" size={24} />
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-200">
                      {item.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GigawattScalePreview;
