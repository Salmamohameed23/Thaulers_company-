// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero_home.png";

const Hero = () => {
  return (
    <section className="relative -mt-px min-h-[100vh] overflow-hidden bg-black text-white">
      {/* BACKGROUND IMAGE */}
      <motion.img
        src={heroImg}
        alt="Solar power systems and battery energy storage infrastructure"
        initial={{ scale: 1 }}
        animate={{ scale: 1.04 }}
        transition={{ duration: 14, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/60" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_45%)]" />

      {/* RED LEFT LINE */}
      <div className="absolute left-0 top-0 z-20 h-full w-[5px] bg-red-600" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl items-center justify-center px-6 py-12 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* TOP LABEL */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse" />

            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-white">
              Smart Solar Energy Solutions
            </span>
          </div>

          {/* MAIN TITLE */}
          <h1 className="text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[74px]">
            Clean Energy
            <br />
            <span className="text-white/90">is the Future.</span>
          </h1>

          {/* RED LINE */}
          <div className="mx-auto mt-7 h-[4px] w-24 rounded-full bg-red-600 shadow-[0_0_25px_rgba(220,38,38,0.45)]" />

          {/* DESCRIPTION */}
          <p className="mx-auto mt-9 max-w-4xl text-[18px] font-medium leading-9 text-white/85 sm:text-[21px]">
            The world is rapidly shifting toward renewable energy — the only
            sustainable and secure solution for the future.
            <span className="mt-5 block">
              Relying on the sun not only protects the environment, but also
              guarantees a stable and independent source of power.
            </span>
            <span className="mt-5 block">
              Solar system prices are already rising, a clear sign that demand
              is growing faster than ever.
            </span>
            <span className="mt-5 block text-white">
              The smart move is to invest in energy that comes directly from the
              sun — because solar power is not just an alternative, it is the
              foundation of the future.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
