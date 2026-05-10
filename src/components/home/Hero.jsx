
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import {
//   BatteryCharging,
//   HardHat,
//   SunMedium,
// } from "lucide-react";
import heroImg from "../../assets/images/hero_home.png";



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
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/15 to-transparent" />
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
              Solar Energy · BES
            </span>
          </div>

          <h1 className="max-w-6xl text-[44px] font-black leading-[0.98] tracking-[-0.055em] text-neutral-950 sm:text-6xl lg:text-7xl xl:text-[88px]">
            Powering Global Projects with Solar
            <span className="text-red-700">&nbsp; & Battery Storage. </span>
          </h1>

          <p className="mt-7 max-w-3xl text-[20px] sm:text-[22px] font-medium leading-9 ">
            TOUGH HAULERS delivers integrated energy solutions across Solar
            Power Systems, Battery Energy Storage Systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;