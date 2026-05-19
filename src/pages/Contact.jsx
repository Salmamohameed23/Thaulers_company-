import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Building2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Contact = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className={`bg-white text-neutral-950 ${
        isAr ? "font-[Cairo] text-right" : ""
      }`}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-12 lg:py-14">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl break-words"
          >
            <p
              className={`mb-4 font-bold text-red-600 sm:mb-6 ${
                isAr
                  ? "text-[13px] tracking-normal text-right"
                  : "text-[11px] uppercase tracking-[0.22em] sm:text-sm sm:tracking-[0.3em]"
              }`}
            >
              {t.contactPage.badge}
            </p>

            <h1 className="max-w-5xl text-[32px] font-black leading-[1.18] tracking-[-0.02em] sm:text-5xl lg:text-[64px] rtl:leading-[1.35]">
              {t.contactPage.title1}
              <span className="mt-2 block text-red-600 sm:mt-3">
                {t.contactPage.title2}
              </span>
            </h1>

            <p className="mt-5 max-w-3xl break-words text-[15px] leading-7 text-neutral-900 sm:mt-6 sm:text-[16px] sm:leading-8">
              {t.contactPage.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* LEFT SIDE */}
          <div>
            <h2 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">
              {t.contactPage.contactTitle}
            </h2>

            <div className="space-y-5 sm:space-y-6">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className={`flex items-start gap-3 border-b border-black/10 pb-5 sm:gap-4 ${
                      isAr ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-600">
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-500">
                        {item.title}
                      </p>
                      <p className="break-words text-[15px] font-medium leading-7 text-neutral-800">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ENQUIRY */}
            <div className="mt-8 sm:mt-10">
              <h3 className="mb-2 text-lg font-bold">
                {t.contactPage.enquiryTitle}
              </h3>
              <p className="break-words text-[15px] leading-7 text-neutral-600">
                {t.contactPage.enquiryText}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-[24px] border border-black/10 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.07)] sm:rounded-[28px] sm:p-8">
            <h3 className="mb-5 text-lg font-bold sm:mb-6 sm:text-xl">
              {t.contactPage.formTitle}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contactPage.name}
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-[15px] outline-none transition focus:border-red-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contactPage.email}
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-[15px] outline-none transition focus:border-red-500"
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t.contactPage.company}
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-[15px] outline-none transition focus:border-red-500"
              />

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contactPage.message}
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-[15px] outline-none transition focus:border-red-500"
              />

              {submitStatus === "success" && (
                <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  Message sent successfully.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  Please check your information and try again.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-red-600 py-3.5 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-neutral-400"
              >
                {loading ? "Sending..." : t.contactPage.send}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
