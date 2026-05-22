import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ClipboardCheck, FlaskConical } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const SolarActionSections = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const items = [
    {
      icon: ClipboardCheck,
      badge: t.solarAction.letsBuild.badge,
      title: t.solarAction.letsBuild.title,
      desc: t.solarAction.letsBuild.desc,
      path: "/lets-build",
      button: t.solarAction.letsBuild.button,
    },
    {
      icon: FlaskConical,
      badge: t.solarAction.rd.badge,
      title: t.solarAction.rd.title,
      desc: t.solarAction.rd.desc,
      path: "/rd",
      button: t.solarAction.rd.button,
    },
  ];

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className={`relative overflow-hidden bg-white py-12 text-neutral-950 sm:py-14 lg:py-16 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="relative mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:px-10">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.path}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[30px] border border-neutral-200 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:border-red-500/35 hover:shadow-[0_26px_90px_rgba(0,0,0,0.12)] sm:p-8 ${
                isAr ? "text-right" : "text-left"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent opacity-80" />
              <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-red-600/8 blur-3xl transition group-hover:bg-red-600/14" />

              <div
                className={`relative mb-5 flex items-center gap-4 ${
                  isAr ? "flex-row-reverse justify-end" : "justify-start"
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-[0_14px_30px_rgba(220,38,38,0.22)]">
                  <Icon size={22} />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.22em] text-red-600">
                  {item.badge}
                </p>
              </div>

              <h3 className="relative max-w-xl text-[25px] font-black leading-tight tracking-[-0.035em] text-neutral-950 sm:text-[32px]">
                {item.title}
              </h3>

              <p className="relative mt-4 max-w-xl text-[15px] font-medium leading-8 text-neutral-600">
                {item.desc}
              </p>

              <Link
                to={item.path}
                className={`relative mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-600 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                <span>{item.button}</span>
                <ArrowUpRight
                  size={16}
                  className={isAr ? "rotate-[-90deg]" : ""}
                />
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default SolarActionSections;
