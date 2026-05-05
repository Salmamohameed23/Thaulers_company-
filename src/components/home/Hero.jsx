
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BatteryCharging,
  HardHat,
  SunMedium,
} from "lucide-react";
import heroImg from "../../assets/images/hero.png";

const capabilities = [
  {
    icon: SunMedium,
    label: "Solar Power Systems",
  },
  {
    icon: BatteryCharging,
    label: "Battery Energy Storage Systems",
  },
  {
    icon: HardHat,
    label: "Full EPC Solar & Energy Engineering",
  },
];

const Hero = () => {
  return (
    <section className="relative -mt-px min-h-[calc(100vh-94px)] overflow-hidden bg-white text-neutral-950">
      <motion.img
        src={heroImg}
        alt="Solar power systems and battery energy storage infrastructure"
        initial={{ scale: 1 }}
        animate={{ scale: 1.045 }}
        transition={{ duration: 14, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-white/6" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_48%,rgba(220,38,38,0.13),transparent_34%)]" />

      <div className="absolute left-0 top-0 h-full w-[5px] bg-red-600" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-94px)] max-w-[1540px] items-center px-6 py-16 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mx-auto w-full max-w-6xl"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/85 px-5 py-2.5 shadow-[0_14px_35px_rgba(0,0,0,0.08)] backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
            <span className="text-xs font-black uppercase tracking-[0.28em] text-neutral-900">
              Solar Energy · BESS · EPC Engineering
            </span>
          </div>

          <h1 className="max-w-6xl text-[44px] font-black leading-[0.98] tracking-[-0.055em] text-neutral-950 sm:text-6xl lg:text-7xl xl:text-[88px]">
            Powering Global Projects with Solar,
            <br />
            <span className="text-red-500">
              Battery Storage & EPC Excellence.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-[17px] font-medium leading-8 sm:text-xl">
            TOUGH HAULERS delivers integrated energy solutions across Solar
            Power Systems, Battery Energy Storage Systems, and Full EPC Solar &
            Energy Engineering for industrial and utility-scale projects.
          </p>

          <div className="mt-9 grid max-w-5xl gap-4 sm:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-3xl border border-black/10 bg-white/82 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:border-red-600/30 hover:bg-white"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white transition-all duration-300 group-hover:bg-red-600">
                    <Icon size={23} />
                  </div>

                  <p className="text-[16px] font-black leading-6 text-neutral-950">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-black/15 bg-white/85 px-8 py-4 text-[15px] font-black text-neutral-950 shadow-[0_15px_35px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
            >
              Let&apos;s Build
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;