import { useLanguage } from "../i18n/LanguageContext";

export default function TermsOfService() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <main
      className={`relative overflow-hidden bg-white text-neutral-950 ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="pointer-events-none absolute left-[-180px] top-[280px] h-[380px] w-[380px] rounded-full bg-red-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[520px] h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[130px]" />
      {/* Hero */}
      <section className="relative z-10 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(220,38,38,0.35),transparent_36%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <h1
            className={`text-4xl font-extrabold tracking-[-0.03em] text-white md:text-5xl ${
              isAr ? "text-right" : ""
            }`}
          >
            {t.terms.title}
          </h1>
        </div>
      </section>

      {/* Content */}

      <section className="relative z-10 overflow-hidden mx-auto max-w-4xl px-6 py-14 lg:px-8">
        <p
          className={` mb-4 text-[15px] leading-7 text-neutral-700 ${
            isAr ? "text-right" : ""
          }`}
        >
          {t.terms.intro}
        </p>

        <div className="space-y-4">
          {t.terms.sections.map((section, index) => (
            <div key={index} className="flex gap-4">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-600 text-xs font-bold text-white">
                {index + 1}
              </span>

              <div className={isAr ? "text-right w-full" : ""}>
                <h2 className="text-xl font-extrabold tracking-[-0.02em]">
                  {section.title}
                </h2>

                <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
