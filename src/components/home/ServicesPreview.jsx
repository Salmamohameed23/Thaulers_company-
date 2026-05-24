import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, BatteryCharging, Factory, Globe2 } from "lucide-react";

import smartstorage from "../../assets/images/hero4.jpg";
import Factoryimg from "../../assets/images/factory 5.png";
import gigawatt from "../../assets/images/gigawaa.png";

import { useLanguage } from "../../i18n/LanguageContext";
import { ROUTES } from "../../config/siteRoutes";
const ServicesPreview = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const services = [
    {
      icon: BatteryCharging,
      title: t.services.items[0].title,
      desc: t.services.items[0].desc,
      image: smartstorage,
      path: ROUTES.smartStorage,
    },
    {
      icon: Factory,
      title: t.services.items[1].title,
      desc: t.services.items[1].desc,
      image: Factoryimg,
      path: ROUTES.factory,
    },
    {
      icon: Globe2,
      title: t.services.items[2].title,
      desc: t.services.items[2].desc,
      image: gigawatt,
      path: ROUTES.gigawattProjects,
    },
  ];

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className={`relative overflow-hidden bg-white py-12 text-neutral-950 sm:py-14 lg:py-16 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
    
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10">
        {/* HEADER */}
        <div
          className={`mb-8 max-w-[560px] ${isAr ? "text-right" : "text-left"}`}
        >
          <p
            className={`mb-3 break-words font-black text-[#ee4036] ${
              isAr
                ? "text-[13px] tracking-normal text-right"
                : "text-[11px] uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.32em]"
            }`}
          >
            {t.services.badge}
          </p>

          <h2
            className={`break-words text-[28px] font-black tracking-[-0.025em] text-neutral-950 sm:text-[38px] lg:text-[44px] ${
              isAr ? "leading-[1.32]" : "leading-[1.1]"
            }`}
          >
            {t.services.title1}
            <span className="block text-[#ee4036]">{t.services.title2}</span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group flex z-10 h-full flex-col rounded-[22px] border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_65px_rgba(0,0,0,0.12)] sm:rounded-[26px]"
              >
                <Link to={item.path} className="flex h-full flex-col">
                  {/* IMAGE */}
                  <div className="relative z-0 h-[185px] overflow-visible rounded-t-[22px] sm:h-[200px] sm:rounded-t-[26px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div
                      className={`absolute -bottom-5 z-30 flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white shadow-lg transition group-hover:bg-[#ee4036] ${
                        isAr ? "right-5 sm:right-6" : "left-5 sm:left-6"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={`flex flex-1 flex-col px-5 pb-6 pt-8 sm:px-6 ${isAr ? "text-right" : "text-left"}`}
                  >
                    <h3 className="break-words text-[18px] font-bold leading-7 text-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 break-words text-[14px] leading-7 text-neutral-600">
                      {item.desc}
                    </p>

                    {/* BUTTON */}
                    <div className="mt-auto pt-5">
                      <div className="inline-flex items-center gap-2 text-[12px] font-bold text-[#ee4036]">
                        <span>{t.services.explore}</span>
                        <ArrowUpRight
                          size={14}
                          className={isAr ? "rotate-[-90deg]" : ""}
                        />
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
