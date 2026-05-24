import {
  Target,
  Eye,
  Sun,
  BatteryCharging,
  HardHat,
  Globe2,
  ShieldCheck,
  Truck,
  Users,
  PackageCheck,
  Factory,
  Award,
  Handshake,
  Leaf,
  MapPin,
  Building2,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const statIcons = [Building2, Globe2, Factory, PackageCheck];
const whatIcons = [
  Sun,
  Factory,
  Globe2,
  BatteryCharging,
  PackageCheck,
  HardHat,
  Eye,
  ShieldCheck,
];
const reasonIcons = [ShieldCheck, Award, Handshake, Truck, Globe2, Leaf];
const peopleIcons = [HardHat, Users, Handshake];

const ImageBlock = ({ src, className = "", children }) => {
  return (
    <div className={`relative overflow-hidden bg-zinc-100 ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/30" />
      {children}
    </div>
  );
};

const Whyus = () => {
  const { t, lang } = useLanguage();
  const page = t.aboutPage;
  const isAr = lang === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className={`min-h-screen bg-white text-zinc-950 ${
        isAr ? "font-[Cairo]" : "font-sans"
      }`}
    >
      {/* HERO */}
      <section className="relative min-h-[460px] overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about/about-hero.jpg')" }}
        />
        <div
          className={`absolute inset-0 ${
            isAr
              ? "bg-gradient-to-l from-black via-black/70 to-black/20"
              : "bg-gradient-to-r from-black via-black/70 to-black/20"
          }`}
        />

        <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-5 lg:px-8">
          <div className={`max-w-3xl ${isAr ? "mr-auto text-right" : ""}`}>
            <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              {page.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-zinc-100 md:text-xl">
              {page.heroDesc}
            </p>
            <div
              className={`mt-7 h-1 w-16 bg-[#ef3b35] ${isAr ? "mr-auto" : ""}`}
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div className={isAr ? "text-right" : ""}>
            <h2 className="text-4xl font-black text-zinc-950">
              {page.overviewTitle}
            </h2>
            <div
              className={`mt-4 h-1 w-14 bg-[#ef3b35] ${isAr ? "mr-auto" : ""}`}
            />
            <p className="mt-6 text-lg leading-8 text-zinc-700">
              {page.overviewP1}
            </p>
            <p className="mt-4 text-lg leading-8 text-zinc-700">
              {page.overviewP2}
            </p>

            <div className="mt-9 grid grid-cols-2 gap-6 md:grid-cols-4">
              {page.stats.map(({ value, label }, index) => {
                const Icon = statIcons[index] || Building2;
                return (
                  <div key={label}>
                    <Icon className="text-zinc-950" size={30} />
                    <p className="mt-3 text-2xl font-black text-[#ef3b35]">
                      {value}
                    </p>
                    <p className="text-sm font-bold text-zinc-600">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm">
              <Target className="text-[#ef3b35]" size={38} />
              <h3 className="mt-6 text-2xl font-black text-zinc-950">
                {page.missionTitle}
              </h3>
              <div className="mt-3 h-1 w-10 bg-[#ef3b35]" />
              <p className="mt-5 leading-8 text-zinc-600">{page.missionText}</p>
            </div>

            <div className="rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm">
              <Eye className="text-[#ef3b35]" size={38} />
              <h3 className="mt-6 text-2xl font-black text-zinc-950">
                {page.visionTitle}
              </h3>
              <div className="mt-3 h-1 w-10 bg-[#ef3b35]" />
              <p className="mt-5 leading-8 text-zinc-600">{page.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-zinc-950 lg:text-5xl">
              {page.whatWeDoTitle}
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 bg-[#ef3b35]" />
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {page.whatWeDo.map(({ title, desc }, index) => {
              const Icon = whatIcons[index] || PackageCheck;
              return (
                <div
                  key={title}
                  className={`rounded-3xl border border-zinc-100 bg-white p-7 shadow-sm transition hover:shadow-xl ${
                    isAr ? "text-right" : ""
                  }`}
                >
                  <Icon className="text-[#ef3b35]" size={42} />
                  <h3 className="mt-5 text-xl font-black text-zinc-950">
                    {title}
                  </h3>
                  <div
                    className={`mt-3 h-1 w-10 bg-[#ef3b35] ${isAr ? "mr-auto" : ""}`}
                  />
                  <p className="mt-5 text-sm leading-7 text-zinc-600">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className={isAr ? "text-right" : ""}>
            <h2 className="text-4xl font-black text-zinc-950 lg:text-5xl">
              {page.globalReachTitle}
            </h2>
            <div
              className={`mt-4 h-1 w-14 bg-[#ef3b35] ${isAr ? "mr-auto" : ""}`}
            />
            <p className="mt-6 text-lg leading-8 text-zinc-700">
              {page.globalReachText}
            </p>

            <div className="relative mt-8 min-h-[280px] overflow-hidden rounded-3xl border border-zinc-100 bg-zinc-50 p-8">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] [background-size:18px_18px]" />
              <div className="relative grid h-full grid-cols-3 place-items-center gap-4 text-[#ef3b35]">
                {Array.from({ length: 18 }).map((_, i) => (
                  <MapPin
                    key={i}
                    size={18 + (i % 3) * 4}
                    className="opacity-80"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={isAr ? "text-right" : ""}>
            <h2 className="text-4xl font-black text-zinc-950 lg:text-5xl">
              {page.whyClientsTitle}
            </h2>
            <div
              className={`mt-4 h-1 w-14 bg-[#ef3b35] ${isAr ? "mr-auto" : ""}`}
            />

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {page.clientReasons.map(({ title, desc }, index) => {
                const Icon = reasonIcons[index] || ShieldCheck;
                return (
                  <div key={title} className="flex gap-4">
                    <Icon className="shrink-0 text-[#ef3b35]" size={34} />
                    <div>
                      <h3 className="font-black text-zinc-950">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        {desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl bg-black text-white lg:grid-cols-[.9fr_1.1fr]">
            <ImageBlock
              src="/images/about/our-people.jpg"
              className="min-h-[340px]"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white/40">
                <Users size={90} />
              </div>
            </ImageBlock>

            <div className="relative p-8 lg:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-black to-[#320404]" />
              <div className={`relative ${isAr ? "text-right" : ""}`}>
                <h2 className="text-4xl font-black">{page.peopleTitle}</h2>
                <div
                  className={`mt-4 h-1 w-14 bg-[#ef3b35] ${isAr ? "mr-auto" : ""}`}
                />
                <p className="mt-6 text-lg leading-8 text-zinc-200">
                  {page.peopleText}
                </p>

                <div className="mt-9 grid gap-6 sm:grid-cols-3">
                  {page.peopleStrength.map((title, index) => {
                    const Icon = peopleIcons[index] || Users;
                    return (
                      <div key={title} className="text-center">
                        <Icon className="mx-auto text-[#ef3b35]" size={36} />
                        <p className="mt-3 font-black text-white">{title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Whyus;
