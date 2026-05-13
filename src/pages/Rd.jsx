import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

import heroImg from "../assets/images/RD3.png";
import processImg from "../assets/images/RD1.png";
import standardsImg from "../assets/images/RD4.png";
import testingImg from "../assets/images/RD8.png";
import qualityImg from "../assets/images/RD5.png";
import teamImg from "../assets/images/RD6.png";
import solutionsImg from "../assets/images/RD7.png";
import platformImg from "../assets/images/RD2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: { opacity: 1, y: 0 },
};

const processSteps = [
  {
    number: "01",
    title: "Raw Material Inspection",
    desc: "Strict incoming quality checks on all materials and components",
  },
  {
    number: "02",
    title: "Production Control",
    desc: "Controlled manufacturing with in-process quality monitoring",
  },
  {
    number: "03",
    title: "Finished Product Testing",
    desc: "Full safety and performance verification before shipment",
  },
  {
    number: "04",
    title: "Delivery & Installation",
    desc: "Professional on-site delivery, commissioning, and setup support",
  },
  {
    number: "05",
    title: "After-Sales Service",
    desc: "Ongoing technical support and long-term reliability assurance",
  },
];

const standards = [
  ["ISO", "Quality Management"],
  ["CE", "EU Compliance"],
  ["UL", "Safety Requirements"],
  ["UN38.3", "Transport Safety"],
  ["ROHS", "Environmental"],
  ["IEC", "Int’l Standards"],
];

const testingList = [
  "Battery material testing",
  "Cell and module testing",
  "System performance checks",
  "Safety and reliability verification",
  "Laboratory-based quality control",
];

const qualityList = [
  "Customer-focused quality policy",
  "High industry standards",
  "Continuous improvement",
  "Product and service reliability",
  "Professional inspection process",
];

const teamList = [
  "Senior technical researchers",
  "Energy system engineers",
  "Project design support",
  "Real application experience",
  "Performance-focused development",
];

const platformList = [
  "Battery materials research",
  "Cell technology development",
  "BMS design and integration",
  "Complete system engineering",
  "Safer and more reliable product performance",
];

const SectionLabel = ({ children }) => (
  <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur-md">
    <span className="h-2.5 w-2.5 rounded-full bg-[#ee4036]" />
    <span className="text-s font-black uppercase tracking-[0.28em] text-white">
      {children}
    </span>
  </div>
);

SectionLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

const RdLabel = ({ children }) => (
  <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 backdrop-blur-md">
    <span className="h-2.5 w-2.5 rounded-full bg-[#ee4036]" />
    <span className="text-s font-black uppercase tracking-[0.28em] text-white">
      {children}
    </span>
  </div>
);

RdLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

const ListItem = ({ children }) => (
  <div className="group flex min-h-[88px] items-center gap-5 rounded-[24px] border border-neutral-200 bg-white px-6 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ee4036]/55 hover:shadow-[0_26px_65px_rgba(238,64,54,0.18)]">
    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ee4036] shadow-[0_0_14px_rgba(238,64,54,0.75)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(238,64,54,0.95)]" />

    <span className="text-[16px] font-semibold leading-6 text-neutral-800 transition-colors duration-300 group-hover:text-neutral-950">
      {children}
    </span>
  </div>
);

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function RDPage() {
  return (
    <main className="overflow-hidden bg-white text-neutral-950">
      {/* 1. OUR VISION */}
      <section className="relative min-h-screen overflow-hidden bg-black">
        <img
          src={heroImg}
          alt="Smart Energy Innovation"
          className="absolute inset-0 h-full w-full object-cover "
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/20" />
        <div className="absolute left-[-160px] top-24 h-[460px] w-[460px] rounded-full bg-[#ee4036]/15 blur-[150px]" />
        <div className="absolute right-[-180px] bottom-[-140px] h-[420px] w-[420px] rounded-full bg-[#ee4036]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-14 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ee4036]" />
              <span className="text-s font-black uppercase tracking-[0.28em] text-white">
                Our Vision
              </span>
            </div>

            <h1 className="text-[46px] font-black uppercase leading-[0.94] tracking-[-0.045em] text-white md:text-[74px] lg:text-[92px]">
              Powering The Future
              <br />
              With{" "}
              <span className="text-[#ee4036]">
                Smart
                <br />
                Energy
              </span>
              <br />
              Innovation
            </h1>

            <div className="mt-12 max-w-4xl rounded-[32px] border border-white/15 bg-white/10 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-10">
              <p className="text-[18px] leading-[2] text-white md:text-[21px]">
                To become a leading energy technology company with strong
                technical capability, reliable lithium battery solutions, and
                meaningful contributions to the global renewable energy
                industry.
              </p>

              <div className="my-7 h-px w-full bg-gradient-to-r from-[#ee4036] via-white/20 to-transparent" />

              <p className="text-[17px] leading-[2] text-white/90 md:text-[19px]">
                TOUGH HAULERS focuses on advanced lithium battery systems, solar
                power solutions, smart energy storage, and complete project
                support — from study and sourcing to delivery, installation,
                commissioning, and after-sales service.
              </p>
            </div>

            
          </motion.div>
        </div>
      </section>

      {/* 2. TECHNOLOGY */}
      <SplitSection
        label="Technology"
        title="Integrated R&D Platform"
        text="TOUGH HAULERS follows an integrated R&D approach that connects basic materials, battery cells, BMS, and complete energy systems into one advanced technology platform. This allows us to develop safer, more reliable, and higher-performance solutions for different project requirements."
        list={platformList}
        image={platformImg}
        caption="R&D Platform — Advanced Battery Systems"
        align="left"
      />

      {/* 3. SOLUTIONS */}
      <SplitSection
        label="Solutions"
        title="Application-Oriented Energy Solutions"
        text="TOUGH HAULERS develops energy solutions based on real application needs, combining solar power systems, battery energy storage, system integration, and engineering support to deliver reliable project-ready solutions."
        image={solutionsImg}
        caption="Solar, energy storage, and smart energy infrastructure"
        list={[
          "Solar power system solutions",
          "Battery energy storage system solutions",
          "Commercial and industrial energy applications",
          "Integrated EPC and engineering support",
          "Scalable solutions for different project sizes",
        ]}
        align="left"
        imagePosition="center"
      />

      {/* 4. R&D TEAM */}
      <section className="relative overflow-hidden px-6 py-28">
        <motion.img
          src={teamImg}
          alt="Expert Engineering and Research Team"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.035 }}
          viewport={{ once: true }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-7xl"
        >
          <div className="max-w-[520px] rounded-[34px] border border-neutral-200 bg-white/92 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-md md:p-10">
            <RdLabel>R&D Team</RdLabel>

            <h2 className="text-[38px] font-black uppercase leading-[1] tracking-[-0.03em] text-neutral-950 md:text-[52px]">
              Expert
              <br />
              Engineering
              <br />& Research Team
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-neutral-600">
              Our engineering-driven approach is supported by experienced
              researchers, technical specialists, and project teams who
              understand real energy requirements. We focus on performance,
              safety, reliability, and practical project execution.
            </p>

            <div className="mt-9 space-y-4">
              {teamList.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. QUALITY MANAGEMENT */}
      <SplitSection
        label="Quality Management"
        title="Strict Quality Management"
        text="Quality is a core part of every project. TOUGH HAULERS focuses on customer needs, high standards, stable performance, and continuous improvement. Every stage is managed with serious quality control to support long-term reliability."
        list={qualityList}
        image={qualityImg}
        caption="Quality Management — Standards & Control"
        align="left"
      />

      {/* 6. TESTING CAPABILITY */}
      <SplitSection
        label="Testing Capability"
        title="Advanced Testing Capability"
        text="Our testing process covers battery materials, cells, modules, complete systems, safety checks, and performance verification. This ensures every solution is tested for safety, reliability, and real project performance before delivery."
        list={testingList}
        image={testingImg}
        caption="Testing Capability — Laboratory Verification"
        align="left"
      />

      {/* 7. QUALITY ASSURANCE */}
      <section className="relative min-h-[720px] overflow-hidden px-6 py-28">
        <motion.img
          src={standardsImg}
          alt="Certified Quality Standards"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.035 }}
          viewport={{ once: true }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-7xl"
        >
          <div className="max-w-[520px] rounded-[34px] border border-neutral-200 bg-white/92 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-md md:p-10">
            <RdLabel>Quality Assurance</RdLabel>

            <h2 className="text-[38px] font-black uppercase leading-[0.98] tracking-[-0.03em] text-neutral-950 md:text-[52px]">
              Certified
              <br />
              Quality
              <br />& Global
              <br />
              Standards
            </h2>

            <p className="mt-7 text-[15px] leading-8 text-neutral-600">
              Our solutions are aligned with recognized international quality
              and safety requirements, giving clients stronger confidence when
              working across global markets.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-3">
              {standards.map(([title, desc]) => (
                <div
                  key={title}
                  className="group rounded-[20px] border border-neutral-200 bg-white px-4 py-5 text-center shadow-[0_14px_35px_rgba(0,0,0,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ee4036]/55 hover:shadow-[0_22px_45px_rgba(238,64,54,0.16)]"
                >
                  <h4 className="text-xl font-black uppercase tracking-widest text-[#ee4036]">
                    {title}
                  </h4>
                  <p className="mt-2 text-[10px] leading-4 text-neutral-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. PROCESS */}
      <section className="bg-[#f6f7f9] px-6 py-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl text-center"
        >
          <div className="flex justify-center">
            <p className="mb-5 text-xl font-black uppercase tracking-[0.28em] text-[#ee4036]">
              PROCESS
            </p>
          </div>

          <h2 className="text-[38px] font-black uppercase tracking-[-0.03em] md:text-[56px]">
            Full Process Control
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-neutral-600">
            From raw material inspection and production to final testing,
            delivery, installation, commissioning, and after-sales support,
            TOUGH HAULERS manages the complete workflow with a clear,
            professional, and quality-focused process.
          </p>

          <div className="relative mx-auto mt-20 max-w-5xl overflow-hidden border border-neutral-200 bg-white shadow-xl shadow-black/5">
            <img
              src={processImg}
              alt="Full Process Control"
              className="h-[300px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h3 className="max-w-4xl text-[28px] font-black uppercase leading-tight tracking-[0.02em] text-white md:text-[46px]">
                From Inspection To After-Sales — We Manage Every Step
              </h3>
            </div>
          </div>

          <div className="relative mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-5 md:gap-0">
            <div className="absolute left-[10%] right-[10%] top-[34px] hidden h-px bg-red-600/35 md:block" />

            {processSteps.map((step) => (
              <div key={step.number} className="relative z-10 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-red-600 bg-white text-2xl font-black text-red-600 shadow-lg shadow-red-600/10">
                  {step.number}
                </div>

                <h4 className="mx-auto mt-7 max-w-[140px] text-xs font-black uppercase leading-6 tracking-[0.12em] text-neutral-950">
                  {step.title}
                </h4>

                <p className="mx-auto mt-3 max-w-[170px] text-xs leading-6 text-neutral-500">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 9. GET STARTED */}
      <section className="relative border-t border-neutral-200 bg-white px-6 py-28 text-center">
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-600/10" />
        <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-600/10" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <div className="flex justify-center">
            
              <p className="mb-5 text-xl font-black uppercase tracking-[0.28em] text-[#ee4036]">
                GET STARTED
              </p>
            
          </div>

          <h2 className="text-[42px] font-black uppercase leading-tight tracking-[-0.03em] md:text-[68px]">
            Build Your Next Energy
            <br />
            Project
            <br />
            With <span className="text-red-600">Tough Haulers</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-neutral-600">
            Our R&D, technology, quality management, and project execution
            capabilities allow us to support reliable energy solutions for
            small, commercial, industrial, and large-scale projects.
          </p>
        </motion.div>
      </section>
    </main>
  );
}

function SplitSection({
  label,
  title,
  text,
  list,
  image,
  caption,
  align = "left",
  imagePosition = "center",
}) {
  const cardPosition =
    align === "right" ? "lg:ml-auto" : align === "center" ? "lg:mx-auto" : "";

  return (
    <section className="relative overflow-hidden  px-6 py-28">
      <motion.img
        src={image}
        alt={caption}
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.035 }}
        viewport={{ once: true }}
        transition={{ duration: 12, ease: "easeOut" }}
        className={`absolute inset-0 h-full w-full object-cover object-${imagePosition}`}
      />

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex max-w-7xl items-center"
      >
        <div
          className={`w-full max-w-[520px] rounded-[34px] border border-neutral-200 bg-white/92 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-md md:p-10 ${cardPosition}`}
        >
          <RdLabel>{label}</RdLabel>

          <h2 className="max-w-xl text-[38px] font-black uppercase leading-[1] tracking-[-0.03em] text-neutral-950 md:text-[52px]">
            {title}
          </h2>

          <p className="mt-7 max-w-xl text-[15px] leading-8 text-neutral-600">
            {text}
          </p>

          <div className="mt-9 space-y-4">
            {list.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

SplitSection.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "right", "center"]),
  imagePosition: PropTypes.string,
};
