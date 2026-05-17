import { motion } from "framer-motion";
import { CheckCircle2, Layers3 } from "lucide-react";
import PropTypes from "prop-types";

import heroImg from "../assets/images/RD_1.png";
import processImg from "../assets/images/R&D_6.png";
import ctaImg from "../assets/images/R&D_7.png";
import testingImg from "../assets/images/R&D_5.png";
import qualityImg from "../assets/images/RD5.png";
import teamImg from "../assets/images/R&D_4.png";
import solutionsImg from "../assets/images/R&D_3.png";
import platformImg from "../assets/images/RD_2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -34 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 34 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const platformList = [
  "Battery materials research",
  "Cell technology development",
  "BMS design and integration",
  "Complete system engineering",
  "Safer and more reliable product performance",
];

const teamList = [
  "Senior technical researchers",
  "Energy system engineers",
  "Project design support",
  "Real application experience",
  "Performance-focused development",
];

const qualityList = [
  "Customer-focused quality policy",
  "High industry standards",
  "Continuous improvement",
  "Product and service reliability",
  "Professional inspection process",
];

const testingList = [
  "Battery material testing",
  "Cell and module testing",
  "System performance checks",
  "Safety and reliability verification",
  "Laboratory-based quality control",
];

const processSteps = [
  "Raw Material Inspection",
  "Production Control",
  "Finished Product Testing",
  "Delivery & Installation",
  "After-Sales Service",
];

const CheckList = ({ items, dark = false }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    className="mt-6 space-y-3"
  >
    {items.map((item) => (
      <motion.div
        key={item}
        variants={fadeUp}
        className="flex items-start gap-3"
      >
        <CheckCircle2
          size={18}
          className={`mt-0.5 shrink-0 ${
            dark ? "text-white/75" : "text-[#ee4036]"
          }`}
        />
        <p
          className={`text-[14px] font-semibold leading-6 ${
            dark ? "text-white/85" : "text-neutral-700"
          }`}
        >
          {item}
        </p>
      </motion.div>
    ))}
  </motion.div>
);

CheckList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  dark: PropTypes.bool,
};

export default function RDPage() {
  return (
    <main className="overflow-hidden bg-white text-neutral-950">
      {/* HERO */}
      <section className="relative min-h-[640px] overflow-hidden bg-black">
        <motion.img
          src={heroImg}
          alt="Smart Energy Innovation"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-6 py-16 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75 }}
            className="max-w-[520px] rounded-[26px] border border-white/15 bg-black/45 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-md"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ee4036]" />
              <span className="whitespace-nowrap text-s font-black uppercase tracking-[0.32em] text-white">
                OUR VISION
              </span>
            </div>

            <h1 className="text-[42px] font-black leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[58px]">
              Powering the Future with{" "}
              <span className="text-[#ee4036]">Smart Energy</span> Innovation
            </h1>

            <p className="mt-6 text-[15px] font-medium leading-7 text-white">
              To become a leading energy technology company with strong
              technical capability, reliable lithium battery solutions, and
              meaningful contributions to the global renewable energy industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PLATFORM */}
      <section className="relative overflow-hidden bg-white py-16">
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="max-w-xl lg:-ml-16"
          >
            <p className="mb-3 text-s font-black uppercase tracking-[0.38em] text-[#ee4036]">
              R&D Platform
            </p>

            <h2 className="max-w-xl text-[36px] font-black leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              One Platform.
              <span className="block text-[#ee4036]">
                Endless Possibilities.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-neutral-600">
              Our integrated R&D platform connects basic materials, battery
              cells, BMS, and complete energy systems into one advanced
              technology platform — enabling safer, more reliable, and
              higher-performance solutions for diverse project needs.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative"
          >
            <div className="relative ml-auto h-[360px] w-[88%] overflow-visible rounded-[28px]">
              <div className="relative left-[130px] h-full overflow-hidden rounded-[28px] shadow-[0_25px_80px_rgba(0,0,0,0.14)]">
                <motion.img
                  src={platformImg}
                  alt="Integrated R&D Platform"
                  initial={{ scale: 1.04 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 10, ease: "easeOut" }}
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-transparent" />
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="absolute left-[-120px] top-1/2 w-[430px] -translate-y-1/2 space-y-1"
              >
                {platformList.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeLeft}
                    transition={{ duration: 0.45 }}
                    whileHover={{ x: 8, scale: 1.012 }}
                    className="group relative overflow-hidden rounded-[18px] border border-black/5 bg-white/92 px-5 py-4 shadow-[0_14px_36px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all duration-300 hover:border-red-500/20 hover:shadow-[0_22px_55px_rgba(220,38,38,0.16)]"
                  >
                    <div className="pointer-events-none absolute right-[-40px] top-[-30px] h-20 w-20 rounded-full bg-red-600/0 blur-2xl transition duration-300 group-hover:bg-red-600/15" />

                    <div className="relative z-10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-[#ee4036] shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition group-hover:bg-[#ee4036] group-hover:text-white">
                          <Layers3 size={17} />
                        </span>

                        <span className="text-[13px] font-semibold leading-5 text-neutral-800">
                          {item}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="relative overflow-hidden bg-black py-24 text-white">
        <motion.img
          src={solutionsImg}
          alt="Application-Oriented Energy Solutions"
          initial={{ scale: 1.04 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        />

        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-black/95 via-black/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/45 to-transparent" />
        <div className="absolute left-[-160px] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-red-600/20 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="max-w-[520px]"
          >
            <p className="mb-5 text-s font-black uppercase tracking-[0.32em] text-[#ee4036]">
              Solutions
            </p>

            <h2 className="text-[36px] font-black leading-[1.08] tracking-[-0.01em] text-white sm:text-5xl lg:text-[50px]">
              Application-Oriented
              <span className="block text-[#ee4036]">Energy Solutions</span>
            </h2>

            <p className="mt-6 max-w-[500px] text-[15px] font-medium leading-8 text-white/82">
              We develop energy solutions based on real application needs —
              combining solar power systems, battery energy storage, system
              integration, and engineering support to deliver reliable
              project-ready solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[26px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          >
            <motion.img
              src={teamImg}
              alt="Expert Engineering and Research Team"
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 9, ease: "easeOut" }}
              className="h-[420px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 text-s font-black uppercase tracking-[0.32em] text-[#ee4036]">
              our team
            </p>

            <h2 className="text-[34px] font-black leading-[1.01] tracking-[-0.02em] sm:text-5xl">
              Expert Engineering
              <span className="block text-[#ee4036]"> & Research Team</span>
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-neutral-600">
              Our engineering-driven approach is supported by experienced
              researchers, technical specialists, and project teams who focus on
              performance, safety, reliability, and practical project execution.
            </p>

            <CheckList items={teamList} />
          </motion.div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 text-s font-black uppercase tracking-[0.32em] text-[#ee4036]">
              Quality Management
            </p>

            <h2 className="text-[47px] font-black leading-[1.08] tracking-[-0.04em]">
              Strict Quality Management
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-neutral-600">
              Quality is at the core of every project. We focus on customer
              needs, high standards, stable performance, and continuous
              improvement to support long-term reliability and customer
              satisfaction.
            </p>

            <CheckList items={qualityList} />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[26px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          >
            <motion.img
              src={qualityImg}
              alt="Strict Quality Management"
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 9, ease: "easeOut" }}
              className="h-[420px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* TESTING */}
      <section className="relative overflow-hidden bg-[#07111d] py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(59,130,246,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_50%,rgba(238,64,54,0.08),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[26px] shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
          >
            <motion.img
              src={testingImg}
              alt="Advanced Testing Capability"
              initial={{ scale: 1.04 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 9, ease: "easeOut" }}
              className="h-[370px] w-full object-cover object-center"
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="max-w-[520px]"
          >
            <p className="mb-4 text-s font-black uppercase tracking-[0.32em] text-[#ee4036]">
              Testing Capability
            </p>

            <h2 className="text-[47px] font-black leading-[1.08] tracking-[-0.035em] text-white">
              Advanced Testing Capability
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-7 space-y-4"
            >
              {testingList.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeRight}
                  transition={{ duration: 0.4 }}
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/75 transition group-hover:border-red-500/40 group-hover:bg-[#ee4036] group-hover:text-white">
                    <CheckCircle2 size={16} />
                  </span>

                  <p className="text-[15px] font-semibold leading-6 text-white/78 transition group-hover:text-white">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* GLOBAL STANDARDS */}
      <section className="relative overflow-hidden bg-white py-16">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-red-600/5 blur-[140px]" />
        <div className="absolute right-[-180px] bottom-[-140px] h-[420px] w-[420px] rounded-full bg-slate-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-s font-black uppercase tracking-[0.32em] text-[#ee4036]">
              Global Standards
            </p>

            <h2 className="text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-5xl">
              Aligned with{" "}
              <span className="block text-[#ee4036]">
                International Standards
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-neutral-600">
              Our solutions are developed in line with globally recognized
              standards to ensure safety, quality, and compliance across
              international markets.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-6"
          >
            {[
              {
                title: "ISO",
                desc: "Quality Management",
                logoBox: "border-[#2d73c9]/20 bg-[#2d73c9]/5",
                logo: (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#2d73c9] text-[22px] font-black text-[#2d73c9]">
                    ISO
                  </div>
                ),
              },
              {
                title: "CE",
                desc: "EU Compliance",
                logoBox: "border-neutral-300 bg-neutral-50",
                logo: (
                  <div className="text-[36px] font-black tracking-[-0.14em] text-black">
                    CE
                  </div>
                ),
              },
              {
                title: "UL",
                desc: "Safety Requirements",
                logoBox: "border-[#e11d2e]/20 bg-[#e11d2e]/5",
                logo: (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-[4px] border-[#e11d2e] text-[24px] font-black text-[#e11d2e]">
                    UL
                  </div>
                ),
              },
              {
                title: "UN38.3",
                desc: "Transport Safety",
                logoBox: "border-[#1f9d45]/20 bg-[#1f9d45]/5",
                logo: (
                  <div className="text-[24px] font-black tracking-[-0.05em] text-[#1f9d45]">
                    UN38.3
                  </div>
                ),
              },
              {
                title: "RoHS",
                desc: "Environmental Compliance",
                logoBox: "border-[#1ca344]/20 bg-[#1ca344]/5",
                logo: (
                  <div className="flex flex-col items-center leading-none">
                    <div className="text-[28px] font-black tracking-[-0.06em] text-[#1ca344]">
                      RoHS
                    </div>
                    <div className="mt-1 h-4 w-4 rotate-45 rounded-br-full bg-[#1ca344]" />
                  </div>
                ),
              },
              {
                title: "IEC",
                desc: "International Standards",
                logoBox: "border-[#1768b3]/20 bg-[#1768b3]/5",
                logo: (
                  <div className="flex h-16 w-16 items-center justify-center rounded-[6px] bg-[#1768b3] text-[24px] font-black tracking-[-0.08em] text-white">
                    IEC
                  </div>
                ),
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group flex min-h-[210px] flex-col items-center justify-center rounded-[18px] border border-black/5 bg-white p-6 text-center shadow-[0_18px_45px_rgba(0,0,0,0.07)] transition-all duration-300 hover:border-red-500/20 hover:shadow-[0_24px_60px_rgba(220,38,38,0.14)]"
              >
                <div
                  className={`mb-6 flex h-[92px] w-[92px] items-center justify-center rounded-[18px] border ${item.logoBox}`}
                >
                  {item.logo}
                </div>

                <p className="min-h-[40px] text-[12px] font-black leading-5 text-neutral-700">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[#f6f7f9] py-16">
        <div className="absolute left-[-180px] top-[-140px] h-[420px] w-[420px] rounded-full bg-red-600/5 blur-[140px]" />
        <div className="absolute right-[-180px] bottom-[-140px] h-[420px] w-[420px] rounded-full bg-slate-400/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
            >
              <p className="mb-3 text-s font-black uppercase tracking-[0.32em] text-[#ee4036]">
                Our Process
              </p>

              <h2 className="text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-5xl">
                Full Process Control from
                <span className="block text-[#ee4036]">
                  Inspection to After-Sales
                </span>
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-7 text-neutral-600">
                From raw material inspection to final testing, delivery,
                installation, commissioning, and after-sales support, TOUGH
                HAULERS manages the complete workflow with a clear, professional
                process.
              </p>
            </motion.div>

            <div>
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
                className="overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              >
                <motion.img
                  src={processImg}
                  alt="Process"
                  initial={{ scale: 1.04 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 9, ease: "easeOut" }}
                  className="h-[260px] w-full object-cover"
                />
              </motion.div>

              <div className="relative mt-10">
                <div className="absolute top-[32px] left-[6%] right-[6%] hidden h-[2px] bg-neutral-300 lg:block" />

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  className="grid gap-y-10 md:grid-cols-3 lg:grid-cols-5"
                >
                  {processSteps.map((item, index) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      transition={{ duration: 0.45 }}
                      className="group relative text-center"
                    >
                      {index !== processSteps.length - 1 && (
                        <div className="absolute left-[calc(50%+40px)] top-[32px] hidden lg:block">
                          <div className="relative h-[2px] w-10 bg-neutral-400">
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[6px] border-l-neutral-400 border-y-[4px] border-y-transparent"></span>
                          </div>
                        </div>
                      )}

                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#ee4036] bg-white text-[14px] font-black text-[#ee4036] shadow-[0_12px_30px_rgba(220,38,38,0.15)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_45px_rgba(220,38,38,0.25)]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <p className="mx-auto max-w-[140px] text-[12px] font-bold leading-5 text-neutral-800">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-black text-white">
        <motion.img
          src={ctaImg}
          alt="Build Your Next Energy Project"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1.03 }}
          viewport={{ once: true }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover object-[85%_30%]"
        />

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/70 to-transparent" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        >
          <h2 className="text-[36px] font-black leading-[1.12] tracking-[-0.04em] sm:text-5xl">
            Build Your Next Energy Project
            <span className="block">with Tough Haulers</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/72">
            With strong R&D, advanced technology, strict quality management, and
            full process control, we deliver reliable energy solutions and
            long-term project success.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
