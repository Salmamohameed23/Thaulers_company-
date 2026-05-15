import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, BatteryCharging, Factory, Globe2 } from "lucide-react";

import smartstorage from "../../assets/images/smart2.png";
import Factoryimg from "../../assets/images/factory 5.png";
import gigawatt from "../../assets/images/gigawaa.png";

import { useLanguage } from "../../i18n/LanguageContext";

const ServicesPreview = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const services = [
    {
      icon: BatteryCharging,
      title: t.services.items[0].title,
      desc: t.services.items[0].desc,
      image: smartstorage,
      path: "/smart-storage",
    },
    {
      icon: Factory,
      title: t.services.items[1].title,
      desc: t.services.items[1].desc,
      image: Factoryimg,
      path: "/factory",
    },
    {
      icon: Globe2,
      title: t.services.items[2].title,
      desc: t.services.items[2].desc,
      image: gigawatt,
      path: "/gigawatt-projects",
    },
  ];

  return (
    <section
      className={`relative overflow-hidden bg-white py-20 text-neutral-950 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="absolute left-[-160px] top-10 h-[340px] w-[340px] rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute right-[-160px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-red-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        {/* HEADER */}
        <div className={`mb-8 max-w-[520px] ${isAr ? "text-right" : ""}`}>
          <p className="mb-3 text-s font-black uppercase tracking-[0.32em] text-[#ee4036]">
            {t.services.badge}
          </p>

          <h2
            className={`text-[32px] font-black leading-[1.1] tracking-[-0.025em] text-neutral-950 sm:text-[40px] lg:text-[44px] ${
              isAr ? "leading-[1.3]" : ""
            }`}
          >
            {t.services.title1}
            <span className="block">{t.services.title2}</span>
          </h2>
        </div>

        {/* CARDS */}
        <div
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
            isAr ? "lg:[direction:rtl]" : ""
          }`}
        >
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group flex h-full flex-col rounded-[26px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_65px_rgba(0,0,0,0.12)]"
              >
                <Link to={item.path} className="flex h-full flex-col">
                  {/* IMAGE */}
                  <div className="relative h-[200px] rounded-t-[26px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full rounded-t-[26px] object-cover"
                    />

                    <div
                      className={`absolute -bottom-5 z-20 flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white shadow-lg transition group-hover:bg-[#ee4036] ${
                        isAr ? "right-6" : "left-6"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`flex flex-1 flex-col px-6 pb-6 pt-8 ${
                      isAr ? "text-right" : ""
                    }`}
                  >
                    <h3 className="text-[18px] font-bold text-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-neutral-600">
                      {item.desc}
                    </p>

                    {/* BUTTON */}
                    <div className="mt-auto pt-5">
                      <div className="inline-flex items-center gap-2 text-[12px] font-bold text-[#ee4036]">
                        <span>{t.services.explore}</span>
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
