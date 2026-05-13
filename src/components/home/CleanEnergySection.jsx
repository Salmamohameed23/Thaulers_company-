import { motion } from "framer-motion";
import { TrendingUp, SunMedium } from "lucide-react";

import cleanEnergyBg from "../../assets/images/clean.png";

const CleanEnergySection = () => {
  return (
    <section
      className="relative flex min-h-[760px] items-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${cleanEnergyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background image animation */}
      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.04 }}
        viewport={{ once: true }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center brightness-100 contrast-110 saturate-110"
        style={{
          backgroundImage: `url(${cleanEnergyBg})`,
        }}
      />

      {/* Softer overlays */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />
      <div className="absolute left-0 top-0 h-full w-[55%] bg-[radial-gradient(circle_at_25%_45%,rgba(220,38,38,0.18),transparent_45%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#ee4036]" />
            <span className="text-xs font-black uppercase tracking-[0.28em] text-white">
              Clean Energy Shift
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="max-w-4xl text-[42px] font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[78px]"
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
            className="mt-8 max-w-3xl space-y-5 text-[16px] font-medium leading-8 text-neutral-100 sm:text-lg"
          >
            <p className="max-w-2xl">
              The world is rapidly shifting toward renewable energy — it’s the
              only sustainable and secure solution. Relying on the sun not only
              protects the environment but also guarantees you a stable and free
              source of power.
            </p>

            <div className="flex max-w-3xl items-start gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur-md">
              <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-red-500/40 bg-red-600/20 text-[#ee4036]">
                <TrendingUp size={21} />
              </div>

              <p>
                <span className="font-black text-[#ee4036]">Take note:</span>{" "}
                Solar system prices have already risen, a clear sign that demand
                is growing faster than ever. The right time to start your clean
                energy project is now, before everyone else turns to it and
                entry becomes more expensive.
              </p>
            </div>

            <div className="flex max-w-3xl items-start gap-4 rounded-3xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur-md">
              <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-red-500/40 bg-red-600/20 text-[#ee4036]">
                <SunMedium size={21} />
              </div>

              <p>
                <span className="font-black text-[#ee4036]">
                  The smart move:
                </span>{" "}
                Invest in energy that comes directly from the sun, not from any
                other source. Solar power isn’t just an alternative — it’s the
                foundation of the future.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CleanEnergySection;
