// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import heroImg from "../../assets/images/hero.png";

// const Hero = () => {
//   return (
//     <section className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-[#050608] text-white">
//       <motion.div
//         initial={{ scale: 1 }}
//         animate={{ scale: 1.04 }}
//         transition={{ duration: 12, ease: "easeOut" }}
//         className="absolute inset-0"
//       >
//         <img
//           src={heroImg}
//           alt="Solar and energy storage infrastructure"
//           className="h-full w-full object-cover opacity-65"
//         />
//       </motion.div>

//       <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/35" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-black/10" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(239,35,60,0.26),transparent_36%)]" />
//       <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />

//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-10">
//         <motion.div
//           initial={{ opacity: 0, y: 34 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.75 }}
//           className="mx-auto flex max-w-5xl flex-col items-center"
//         >
//           <h1 className="max-w-5xl text-center text-[44px] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-[84px]">
//             Solar Power, Battery Energy
//             <span className="block text-red-500">Storage & EPC Solutions.</span>
//           </h1>

//           <p className="mx-auto mt-7 max-w-3xl text-center text-base leading-8 text-slate-200 sm:text-xl">
//             TOUGH HAULERS delivers Solar Power Systems, Battery Storage
//             Solutions, and Full EPC Solar & Energy Engineering for global
//             projects — from 5 kW to gigawatt-scale energy systems.
//           </p>

//           <div className="mt-10 flex flex-wrap justify-center gap-4">
//             <Link
//               to="/solutions"
//               className="rounded-full bg-red-600 px-7 py-4 text-sm font-bold text-white shadow-[0_0_38px_rgba(239,35,60,0.38)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_0_55px_rgba(239,35,60,0.55)]"
//             >
//               Explore Solutions
//             </Link>

//             <Link
//               to="/contact"
//               className="rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/15"
//             >
//               Start a Project
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
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
            Powering Global Projects with
            <span className="text-red-500"> Solar, </span>
            <span className="text-red-500" >Battery Storage & EPC Excellence.</span>
          </h1>

          <p className="mt-7 max-w-3xl text-[17px] font-medium leading-8 sm:text-xl">
            TOUGH HAULERS delivers integrated energy solutions
            across Solar Power Systems, Battery Energy Storage Systems, and Full
            EPC Solar & Energy Engineering for industrial and utility-scale
            projects.
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
              to="/solutions"
              className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-[15px] font-black text-white shadow-[0_20px_48px_rgba(220,38,38,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-500"
            >
              Explore Solutions
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-black/15 bg-white/85 px-8 py-4 text-[15px] font-black text-neutral-950 shadow-[0_15px_35px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;