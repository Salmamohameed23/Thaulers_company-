import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  Factory,
  GraduationCap,
  ShieldCheck,
  Settings2,
  Wrench,
} from "lucide-react";
import factoryHero from "../assets/images/factory.png";
import factory1 from "../assets/images/factory.png";
import factory2 from "../assets/images/factory.png";
import factory3 from "../assets/images/factory.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const capabilities = [
  "Factory Coordination",
  "Production Setup",
  "China Supply Chain",
  "Technical Support",
  "Quality Control",
];

const services = [
  {
    icon: Factory,
    title: "Production Coordination",
    text: "Factory-level coordination for energy manufacturing, sourcing, and scalable project execution.",
  },
  {
    icon: Boxes,
    title: "Component Sourcing",
    text: "Reliable sourcing support for solar systems, BESS components, electrical equipment, and industrial materials.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    text: "Inspection-focused workflows to support quality consistency and operational reliability.",
  },
  {
    icon: Settings2,
    title: "Production Setup",
    text: "Support for factory setup, workflow coordination, and manufacturing process preparation.",
  },
  {
    icon: GraduationCap,
    title: "Technical Training",
    text: "Practical technical guidance and training support for engineering and operational teams.",
  },
  {
    icon: Wrench,
    title: "Engineering Support",
    text: "Engineering-focused support across manufacturing coordination and energy project execution.",
  },
];

const process = [
  {
    title: "Requirement Analysis",
    text: "Understanding project scope, technical requirements, and operational targets.",
  },
  {
    title: "Factory Matching",
    text: "Identifying suitable manufacturing partners and supply capabilities.",
  },
  {
    title: "Production Coordination",
    text: "Managing communication, timelines, sourcing, and production workflow support.",
  },
  {
    title: "Delivery & Support",
    text: "Coordinating shipment preparation, technical assistance, and ongoing project support.",
  },
];

const FactoryPage = () => {
  return (
    <main className="overflow-hidden bg-white text-neutral-950">
      {/* HERO */}
      <section className="relative min-h-[100vh] overflow-hidden bg-black text-white">
        <motion.img
          src={factoryHero}
          alt="Factory production and engineering"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 14, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/58 to-black/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(220,38,38,0.22),transparent_36%)]" />


        <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl items-center px-6 py-14 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="max-w-6xl"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/12 px-5 py-2.5 shadow-[0_16px_45px_rgba(0,0,0,0.22)] backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-white">
                Factory Support · Production · Engineering
              </span>
            </div>

            <h1 className="max-w-5xl text-[46px] font-black leading-[0.93] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl xl:text-[88px]">
              Factory-backed
              <br />
              <span className="text-white/85">industrial execution.</span>
            </h1>

            <div className="mt-8 h-[4px] w-28 rounded-full bg-red-600 shadow-[0_0_25px_rgba(220,38,38,0.5)]" />

            <p className="mt-8 max-w-4xl text-[18px] font-medium leading-9 text-white/85 sm:text-[21px]">
              TOUGH HAULERS supports energy and industrial projects through
              strong China-based manufacturing capabilities, engineering-focused
              sourcing, and practical production coordination.
              <span className="mt-5 block">
                From factory setup and component sourcing to technical support,
                quality control, and scalable manufacturing workflows, our focus
                is built around real operational execution.
              </span>
            </p>

            {/* TRUST STRIP INSIDE HERO */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[24px] border border-white/18 bg-black/35 px-5 py-5 shadow-[0_20px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-600/15"
                >
                  <div className="absolute right-[-35px] top-[-35px] h-28 w-28 rounded-full bg-red-600/0 blur-[50px] transition duration-500 group-hover:bg-red-600/25" />

                  <div className="relative flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-[0_14px_32px_rgba(220,38,38,0.38)]">
                      <ShieldCheck size={18} />
                    </div>

                    <span className="text-[14px] font-bold leading-5 text-white">
                      {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FACTORY IMAGES */}
      <section className="relative overflow-hidden bg-white py-14">
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-red-600">
              Factory Environment
            </p>

            <h2 className="text-[38px] font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Industrial capability with practical manufacturing coordination.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[factory1, factory2, factory3].map((img, index) => (
              <motion.div
                key={img}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[34px] shadow-[0_24px_75px_rgba(0,0,0,0.12)]"
              >
                <img
                  src={img}
                  alt="Factory"
                  className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-neutral-50 py-14">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
          <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-red-600">
                Factory Services
              </p>

              <h2 className="text-[38px] font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
                Manufacturing support beyond standard sourcing.
              </h2>
            </div>

            <p className="max-w-xl text-[16px] leading-8 text-neutral-600 lg:ml-auto">
              We support industrial and energy projects with coordinated
              manufacturing workflows, sourcing strategy, and factory-level
              execution support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="group rounded-[32px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2 hover:border-red-600/30 hover:shadow-[0_30px_85px_rgba(220,38,38,0.12)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-red-600">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-black tracking-[-0.025em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-white py-14">
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-red-600">
              Workflow Process
            </p>

            <h2 className="text-[38px] font-black leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Structured coordination from factory selection to delivery.
            </h2>
          </div>

          <div className="grid gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative grid gap-5 rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_20px_65px_rgba(0,0,0,0.07)] transition duration-500 hover:-translate-y-1 hover:border-red-600/30 hover:shadow-[0_30px_85px_rgba(220,38,38,0.11)] lg:grid-cols-[96px_1fr_auto] lg:items-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-sm font-black text-white shadow-[0_18px_38px_rgba(220,38,38,0.28)]">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-[-0.035em]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-[15px] leading-7 text-neutral-600">
                    {step.text}
                  </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white transition group-hover:bg-red-600 lg:flex">
                  <ArrowUpRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FactoryPage;
