import { motion } from "framer-motion";
import { TrendingUp, SunMedium } from "lucide-react";

import cleanEnergyBg from "../../assets/images/clean.png";

const CleanEnergySection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 text-black sm:py-20">
      <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
      <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(220,38,38,0.07),transparent_30%)]" />
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="max-w-[520px]"
        >
          <p className="mb-4 text-s font-black uppercase tracking-[0.38em] text-[#ee4036]">
            Clean Energy Shift
          </p>

          <h2 className="text-[40px] font-black leading-[1.1] tracking-[-0.02em] text-black sm:text-[50px] lg:text-[58px]">
            Clean Energy is
            <span className="block text-[#ee4036]">the Future</span>
          </h2>

          <p className="mt-6 max-w-[520px] text-[15px] font-medium leading-7 text-black/80">
            The world is rapidly shifting toward renewable energy — it’s the
            only sustainable and secure solution. Relying on the sun not only
            protects the environment but also guarantees you a stable and free
            source of power.
          </p>

          <div className="mt-7 space-y-4">
            <div className="flex items-start gap-4 rounded-[20px] border border-black/10 bg-white p-5 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#ee4036]/10 text-[#ee4036]">
                <TrendingUp size={21} strokeWidth={2.5} />
              </div>

              <p className="text-[14px] font-medium leading-7 text-black/75">
                <span className="font-black text-[#ee4036]">Take note:</span>{" "}
                Solar system prices have already risen, a clear sign that demand
                is growing faster than ever. The right time to start your clean
                energy project is now, before everyone else turns to it and
                entry becomes more expensive.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-[20px] border border-black/10 bg-white p-5 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#ee4036]/10 text-[#ee4036]">
                <SunMedium size={21} strokeWidth={2.5} />
              </div>

              <p className="text-[14px] font-medium leading-7 text-black/75">
                <span className="font-black text-[#ee4036]">
                  The smart move:
                </span>{" "}
                Invest in energy that comes directly from the sun, not from any
                other source. Solar power isn’t just an alternative — it’s the
                foundation of the future.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[30px]">
            <img
              src={cleanEnergyBg}
              alt="Clean energy battery storage"
              className="h-[360px] w-full object-start sm:h-[595px] lg:h-[595px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanEnergySection;
