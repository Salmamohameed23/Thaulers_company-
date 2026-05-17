import { motion } from "framer-motion";
import {
  BatteryCharging,
  Factory,
  ShieldCheck,
  SunMedium,
  Headphones,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const About = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const capabilities = [
    {
      icon: SunMedium,
      title: t.aboutPage.capabilities[0].title,
      text: t.aboutPage.capabilities[0].text,
    },
    {
      icon: BatteryCharging,
      title: t.aboutPage.capabilities[1].title,
      text: t.aboutPage.capabilities[1].text,
    },
    {
      icon: Factory,
      title: t.aboutPage.capabilities[2].title,
      text: t.aboutPage.capabilities[2].text,
    },
    {
      icon: Headphones,
      title: t.aboutPage.capabilities[3].title,
      text: t.aboutPage.capabilities[3].text,
    },
  ];

  const positioning = t.aboutPage.positioningItems;

  return (
    <main
      className={`bg-white text-neutral-950 ${
        isAr ? "font-[Cairo] text-right" : ""
      }`}
      dir={isAr ? "rtl" : "ltr"}
    >
      <section className="relative overflow-x-hidden bg-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(220,38,38,0.07),transparent_30%)]" />
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="mb-8 text-xs font-black uppercase tracking-[0.18em] sm:tracking-[0.28em] text-[#ee4036]">
              {t.aboutPage.badge}
            </p>

            <h1
              className={`max-w-5xl text-[32px] font-black sm:text-[38px] 
${isAr ? "leading-[1.4] tracking-[0.02em]" : "leading-[1.4] tracking-[0em]"} 
sm:text-5xl lg:text-[68px]`}
            >
              {t.aboutPage.title1}
              <span className="block leading-[1.5] text-[#ee4036]">
                {t.aboutPage.title2}
              </span>
            </h1>

            <p className="mt-8 max-w-4xl text-[17px] leading-8 text-neutral-600 sm:text-lg">
              {t.aboutPage.p1}
            </p>

            <p className="mt-5 max-w-4xl text-[17px] leading-8 text-neutral-600 sm:text-lg">
              {t.aboutPage.p2}
            </p>

            <p className="mt-5 max-w-4xl text-[17px] leading-8 text-neutral-600 sm:text-lg">
              {t.aboutPage.goalLabel}
              <span className="font-semibold text-neutral-950">
                {" "}
                {t.aboutPage.goalText}
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-x-hidden bg-white py-14 bg-[radial-gradient(circle_at_12%_18%,rgba(220,38,38,0.055),transparent_30%)]">
        <div className="absolute left-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-red-600/10 blur-[110px]" />
        <div className="absolute right-[-160px] bottom-[-120px] h-[440px] w-[440px] rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] sm:tracking-[0.28em] text-[#ee4036]">
              {t.aboutPage.positioningBadge}
            </p>

            <h2 className="text-[30px] font-black sm:text-[36px] leading-[1.08] tracking-[-0.04em] sm:text-5xl">
              {t.aboutPage.positioningTitle1}
              <span className="block text-[#ee4036]">
                {t.aboutPage.positioningTitle2}
              </span>
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-neutral-600">
              {t.aboutPage.positioningP1}
            </p>

            <p className="mt-5 text-[16px] leading-8 text-neutral-600">
              {t.aboutPage.positioningP2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[34px] border border-black/10 bg-white p-5 shadow-[0_25px_70px_rgba(0,0,0,0.08)] sm:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {positioning.map((item, index) => (
                <div
                  key={item}
                  className="rounded-3xl border border-black/10 bg-white p-5 shadow-[0_12px_32px_rgba(0,0,0,0.045)]"
                >
                  <p className="mb-4 text-5xl font-black text-black/[0.05]">
                    0{index + 1}
                  </p>

                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={20}
                      className="mt-1 shrink-0 text-[#ee4036]"
                    />
                    <p className="text-[15px] font-semibold leading-7 text-neutral-800">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-x-hidden bg-white py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(220,38,38,0.055),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] sm:tracking-[0.28em] text-[#ee4036]">
                {t.aboutPage.capabilitiesBadge}
              </p>

              <h2 className="text-[32px] font-black sm:text-[38px] leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                {t.aboutPage.capabilitiesTitle1}
                <span className="block text-[#ee4036]">
                  {t.aboutPage.capabilitiesTitle2}
                </span>
              </h2>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -7 }}
                  className="group h-full rounded-[30px] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.075)] transition-all duration-300 hover:border-red-600/25 hover:shadow-[0_28px_70px_rgba(0,0,0,0.11)]"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-red-600">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-[19px] font-semibold leading-7 text-neutral-950">
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
    </main>
  );
};

export default About;
