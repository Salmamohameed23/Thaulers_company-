import { motion } from "framer-motion";
import { Mail, MapPin, Building2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Contact = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const contactInfo = [
    {
      icon: Mail,
      title: t.contactPage.info[0].title,
      text: t.contactPage.info[0].text,
    },
    {
      icon: MapPin,
      title: t.contactPage.info[1].title,
      text: t.contactPage.info[1].text,
    },
    {
      icon: Building2,
      title: t.contactPage.info[2].title,
      text: t.contactPage.info[2].text,
    },
  ];

  return (
    <main
      className={`bg-white text-neutral-950 ${
        isAr ? "font-[Cairo] text-right" : ""
      }`}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(220,38,38,0.07),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
              {t.contactPage.badge}
            </p>

            <h1 className="max-w-5xl text-[38px] font-black leading-[1.3] tracking-[0.01em] sm:text-5xl lg:text-[64px]">
              {t.contactPage.title1}
              <span className="block text-red-600 mt-3">
                {t.contactPage.title2}
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-[16px] leading-8 text-neutral-600">
              {t.contactPage.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t.contactPage.contactTitle}
            </h2>

            <div className="space-y-6">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 border-b border-black/10 pb-5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-red-600 text-red-600">
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        {item.title}
                      </p>
                      <p className="text-[15px] font-medium text-neutral-800 leading-7">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ENQUIRY */}
            <div className="mt-10">
              <h3 className="text-lg font-bold mb-2">
                {t.contactPage.enquiryTitle}
              </h3>
              <p className="text-neutral-600 leading-7 text-[15px]">
                {t.contactPage.enquiryText}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
            <h3 className="text-xl font-bold mb-6">
              {t.contactPage.formTitle}
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder={t.contactPage.name}
                className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-red-500"
              />

              <input
                type="email"
                placeholder={t.contactPage.email}
                className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-red-500"
              />

              <input
                type="text"
                placeholder={t.contactPage.company}
                className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-red-500"
              />

              <textarea
                rows="4"
                placeholder={t.contactPage.message}
                className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-red-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 py-3 text-white font-semibold transition hover:bg-red-700"
              >
                {t.contactPage.send}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
