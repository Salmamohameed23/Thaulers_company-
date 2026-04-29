import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const points = [
  "Solar Power Systems",
  "Battery Energy Storage Systems",
  "Full EPC Solar & Energy Engineering",
  "China Supply Chain",
  "Engineering Expertise",
  "kW-scale to Multi-Gigawatt Projects",
];

const AboutPreview = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0E12] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(220,38,38,0.14),transparent_30%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-red-400">
            About Company
          </p>

          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Global solar and energy storage solutions,
            <span className="block text-slate-300">
              engineered from design to execution.
            </span>
          </h2>
          <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
            <p>
              TOUGH HAULERS is a global provider of advanced solar
              power and energy storage solutions, delivering fully integrated
              solar projects across international markets.
            </p>

            <p>
              With operations based in China and engineering support in Egypt,
              the company combines global sourcing capabilities with strong
              technical expertise to deliver reliable, scalable, and
              high-performance energy systems.
            </p>
          </div>

          <Link
            to="/about"
            className="mt-9 inline-flex rounded-full border border-white/20 bg-[#07090C]/80 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-600"
          >
            Learn More About Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[34px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-400">
            Core Positioning
          </p>

          <div className="mt-8 grid gap-4">
            {points.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-black/25 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/10"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.9)]" />
                <p className="text-sm font-bold text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
