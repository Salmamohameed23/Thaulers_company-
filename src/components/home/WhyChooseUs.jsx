import { motion } from "framer-motion";
import { BadgeCheck, Globe2, Headphones, Layers3 } from "lucide-react";

import { useLanguage } from "../../i18n/LanguageContext";

const WhyChooseUs = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const reasons = [
    { icon: BadgeCheck, key: 0 },
    { icon: Globe2, key: 1 },
    { icon: Layers3, key: 2 },
    { icon: Headphones, key: 3 },
  ];

  return (
    <section
      className={`relative overflow-hidden bg-white py-20 text-neutral-950 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
      <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className={`mx-auto mb-12 max-w-3xl text-center ${
            isAr ? "lg:[direction:rtl]" : ""
          }`}
        >
          <p className="mb-4 text-s font-black uppercase tracking-[0.28em] text-[#ee4036]">
            {t.whyChoose.badge}
          </p>

          <h2
            className={`text-[40px] font-black tracking-[-0.04em] sm:text-5xl ${
              isAr ? "leading-[1.28]" : "leading-[1.05]"
            }`}
          >
            {t.whyChoose.title1}
            <span className="block">{t.whyChoose.title2}</span>
          </h2>
        </motion.div>

        <div
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-4 ${
            isAr ? "lg:[direction:rtl]" : ""
          }`}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const item = t.whyChoose.items[reason.key];

            return (
              <motion.div
                key={reason.key}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className={`group relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.075)] transition-all duration-300 hover:border-red-600/25 hover:shadow-[0_28px_70px_rgba(0,0,0,0.11)] ${
                  isAr ? "text-right" : ""
                }`}
              >
                <div
                  className={`mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white transition-all duration-300 group-hover:bg-red-600 ${
                    isAr ? "mr-0" : ""
                  }`}
                >
                  <Icon size={21} />
                </div>

                <h3 className="text-[20px] font-semibold leading-7 text-neutral-950">
                  {item.title}
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-neutral-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
