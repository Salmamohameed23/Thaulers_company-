import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero.png";

// const heroCards = [
//   {
//     title: "Solar Power Systems",
//     text: "High-efficiency solar solutions engineered for reliable performance.",
//   },
//   {
//     title: "Battery Storage Solutions",
//     text: "Advanced BESS technologies for stable and optimized power supply.",
//   },
//   {
//     title: "Full EPC Energy Engineering",
//     text: "From project study and design to supply, installation, and commissioning.",
//   },
// ];

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#050608] text-white">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Solar and energy storage infrastructure"
          className="h-full w-full object-cover opacity-60"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_34%,rgba(239,35,60,0.32),transparent_34%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-start px-4 pt-14 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid w-full items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-4xl"
          >
            {/* <p className="mb-6 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-red-300 backdrop-blur">
              TOUGH HAULERS 
            </p> */}

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Solar Power, Battery Energy
              <span className="block text-red-500">
                Storage & EPC Solutions.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              TOUGH HAULERS delivers Solar Power Systems, Battery Storage
              Solutions, and Full EPC Solar & Energy Engineering for global
              projects — from 5 kW to gigawatt-scale energy systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/solutions"
                className="rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white shadow-[0_0_38px_rgba(239,35,60,0.38)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_0_55px_rgba(239,35,60,0.55)]"
              >
                Explore Solutions
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/15"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 44 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="hidden lg:block"
          >
            {/* <div className="rounded-[34px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl"> */}
            {/* <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-red-400">
                Core Capabilities
              </p> */}

            {/* <div className="space-y-4">
                {heroCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.45 + index * 0.12 }}
                    className="group rounded-2xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.08]"
                  >
                    <h3 className="text-lg font-black text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {card.text}
                    </p>
                  </motion.div>
                ))}
              </div> */}
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
