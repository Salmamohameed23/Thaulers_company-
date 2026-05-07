import { motion } from "framer-motion";
import { Zap, TrendingUp, SunMedium } from "lucide-react";

import cleanEnergyBg from "../../assets/images/about_home.jpg";

const CleanEnergySection = () => {
  return (
    <section
      className="relative flex min-h-[760px] items-center justify-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${cleanEnergyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.06 }}
        viewport={{ once: true }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center brightness-60
contrast-125
saturate-150"
        style={{
          backgroundImage: `url(${cleanEnergyBg})`,
        }}
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.16),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md"
        >
          <Zap size={16} className="text-red-500" />
          <span className="text-xs font-black uppercase tracking-[0.28em] text-white/90">
            Clean Energy Shift
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="mx-auto max-w-4xl text-[42px] font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[78px]"
        >
          Clean Energy is
          <span className="block text-red-500 drop-shadow-[0_0_28px_rgba(239,68,68,0.45)]">
            the Future
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="mx-auto mt-8 max-w-3xl space-y-6 text-[16px] font-medium leading-8 text-neutral-100 sm:text-lg"
        >
          <p>
            The world is rapidly shifting toward renewable energy — it’s the
            only sustainable and secure solution. Relying on the sun not only
            protects the environment but also guarantees you a stable and free
            source of power.
          </p>

          <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur-md">
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-red-500/40 bg-red-600/20 text-red-500">
              <TrendingUp size={21} />
            </div>

            <p>
              <span className="font-black text-red-500">Take note:</span> Solar
              system prices have already risen, a clear sign that demand is
              growing faster than ever. The right time to start your clean
              energy project is now, before everyone else turns to it and entry
              becomes more expensive.
            </p>
          </div>

          <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur-md">
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-red-500/40 bg-red-600/20 text-red-500">
              <SunMedium size={21} />
            </div>

            <p>
              <span className="font-black text-red-500">The smart move:</span>{" "}
              Invest in energy that comes directly from the sun, not from any
              other source. Solar power isn’t just an alternative — it’s the
              foundation of the future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanEnergySection;
