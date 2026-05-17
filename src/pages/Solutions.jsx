import { Link } from "react-router-dom";
import { BatteryCharging, Factory, Globe2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Solutions() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const items = [
    { icon: BatteryCharging, label: t?.nav?.smartStorage || "Smart Storage", path: "/smart-storage" },
    { icon: Factory, label: t?.nav?.factorySolutions || "Factory Solutions", path: "/factory" },
    { icon: Globe2, label: t?.nav?.gigawattProjects || "Gigawatt Projects", path: "/gigawatt-projects" },
  ];

  return (
    <main dir={isAr ? "rtl" : "ltr"} className={`overflow-x-hidden bg-white text-neutral-950 ${isAr ? "font-[Cairo]" : ""}`}>
      <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(220,38,38,0.35),transparent_36%)]" />
        <div className={`relative mx-auto max-w-7xl ${isAr ? "text-right" : ""}`}>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#ee4036] sm:tracking-[0.34em]">Solutions</p>
          <h1 className="max-w-4xl text-[34px] font-black leading-tight tracking-[-0.03em] sm:text-5xl lg:text-[64px]">
            Engineering Power. <span className="text-[#ee4036]">Delivering Reliability.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map(({ icon: Icon, label, path }) => (
            <Link key={path} to={path} className={`group rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.07)] transition hover:-translate-y-1 hover:border-red-600/25 ${isAr ? "text-right" : ""}`}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-[#ee4036]">
                <Icon size={22} />
              </div>
              <h2 className="text-xl font-black text-neutral-950">{label}</h2>
              <p className="mt-3 text-[14px] leading-7 text-neutral-600">Explore our integrated energy engineering solutions and project delivery capabilities.</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
