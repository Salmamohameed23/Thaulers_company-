import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, BatteryCharging, Factory, Globe2 } from "lucide-react";

import smartstorage from "../../assets/images/smart2.png";
import Factoryimg from "../../assets/images/factory 5.png";
import gigawatt from "../../assets/images/gigawaa.png";

const services = [
  {
    icon: BatteryCharging,
    title: "Smart Storage",
    desc: "Battery Energy Storage Systems designed for stable, scalable, and reliable energy performance.",
    image: smartstorage,
    path: "/smart-storage",
  },
  {
    icon: Factory,
    title: "Factory Solutions",
    desc: "Turnkey factory solutions, technology transfer, and production support for energy storage systems.",
    image: Factoryimg,
    path: "/factory",
  },
  {
    icon: Globe2,
    title: "Gigawatt Projects",
    desc: "Engineering and supply chain capability supporting projects from kW-scale to Gigawatt-scale deployment.",
    image: gigawatt,
    path: "/gigawatt-projects",
  },
];

const ServicesPreview = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-neutral-950">
      <div className="absolute left-[-160px] top-10 h-[340px] w-[340px] rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute right-[-160px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="mb-8 max-w-[520px]">
          <p className="mb-3 text-s font-black uppercase tracking-[0.32em] text-[#ee4036]">
            Our Solutions
          </p>

          <h2 className="text-[32px] font-black leading-[1.1] tracking-[-0.025em] text-neutral-950 sm:text-[40px] lg:text-[44px]">
            Integrated Energy
            <span className="block">Solutions & Capabilities.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group flex h-full flex-col  rounded-[26px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_65px_rgba(0,0,0,0.12)]"
              >
                <Link to={item.path} className="flex h-full flex-col">
                  {/* Image */}
                  <div className="relative h-[200px] rounded-t-[26px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full rounded-t-[26px] object-cover  "
                    />

                    {/* icon floating */}
                    <div className="absolute -bottom-5 left-6 z-20 flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white shadow-lg transition group-hover:bg-[#ee4036]">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-6 pb-6 pt-8">
                    <h3 className="text-[18px] font-bold text-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-neutral-600">
                      {item.desc}
                    </p>

                    {/* BUTTON FIXED */}
                    <div className="mt-auto pt-5">
                      <div className="inline-flex items-center gap-2 text-[12px] font-bold text-[#ee4036]">
                        <span>Explore Solutions</span>
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;