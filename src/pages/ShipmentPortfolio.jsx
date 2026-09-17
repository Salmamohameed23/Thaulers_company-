import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  Lock,
  MapPin,
  Package,
  ShieldCheck,
  Ship,
} from "lucide-react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config/api";
import { ROUTES } from "../config/siteRoutes";
import { useLanguage } from "../i18n/LanguageContext";
import heroImage from "/images/home_imgs/ship-img.png";

const localize = (value, lang) => value?.[lang] || value?.en || "";

export default function ShipmentPortfolio() {
  const { t, lang } = useLanguage();
  const content = t.shipmentPortfolioPage;
  const [shipments, setShipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_BASE_URL}/api/shipment-cases`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((result) => setShipments(result.data || []))
      .catch(() => setShipments([]))
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const trustItems = [
    { icon: ShieldCheck, text: content.verifiedSuppliers },
    { icon: ClipboardCheck, text: content.loadingSupervision },
    { icon: Camera, text: content.photoDocumentation },
    { icon: Globe2, text: content.globalDelivery },
  ];

  return (
    <main
      className="bg-neutral-50 text-slate-950"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:py-24">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/40 to-slate-950/85" />
        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">
            {content.badge}
          </p>
          <h1 className="mt-5 text-4xl font-black uppercase tracking-tight md:text-6xl">
            {content.title}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold text-white/80 md:text-xl">
            {content.subtitle}
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-100 md:grid-cols-4 rtl:divide-x-reverse">
          {trustItems.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center justify-center gap-3 px-3 py-6 text-center text-sm font-black text-slate-700"
            >
              <Icon className="h-5 w-5 shrink-0 text-red-600" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              {content.casesTitle}
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 bg-red-600" />
          </div>

          {loading && (
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-[510px] animate-pulse rounded-3xl bg-white shadow-sm"
                />
              ))}
            </div>
          )}
          {!loading && !shipments.length && (
            <div className="rounded-3xl bg-white p-12 text-center font-semibold text-slate-500 shadow-sm">
              {content.empty}
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {shipments.map((shipment, index) => (
              <motion.article
                key={shipment._id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -7 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.07)] transition-shadow hover:shadow-[0_22px_55px_rgba(15,23,42,0.14)]"
              >
                <div className="grid grid-cols-2 gap-1 overflow-hidden bg-slate-100 p-1">
                  <div className="relative col-span-2 overflow-hidden rounded-t-[20px]">
                    <img
                      src={shipment.images?.[0]?.url}
                      alt={localize(shipment.category, lang)}
                      className="aspect-[16/7] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                    <span className="absolute start-4 top-4 rounded-xl bg-slate-900/90 px-3 py-2 text-sm font-black text-white shadow-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-bl-[20px] rtl:rounded-bl-none rtl:rounded-br-[20px]">
                    <img
                      src={shipment.images?.[1]?.url}
                      alt=""
                      className="aspect-[16/9] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-br-[20px] rtl:rounded-bl-[20px] rtl:rounded-br-none">
                    <img
                      src={shipment.images?.[2]?.url}
                      alt=""
                      className="aspect-[16/9] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl font-black text-red-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-black uppercase tracking-wide">
                      {content.caseLabel}
                    </h3>
                  </div>
                  <dl className="mt-4 space-y-2.5 text-sm">
                    <Info
                      icon={Package}
                      label={content.categoryLabel}
                      value={localize(shipment.category, lang)}
                    />
                    <Info
                      icon={Ship}
                      label={content.containerLabel}
                      value={shipment.container}
                    />
                    <Info
                      icon={MapPin}
                      label={content.originLabel}
                      value={localize(shipment.origin, lang)}
                    />
                    <Info
                      icon={Globe2}
                      label={content.destinationLabel}
                      value={localize(shipment.destination, lang)}
                    />
                    <Info
                      icon={CheckCircle2}
                      label={content.statusLabel}
                      value={localize(shipment.shipmentStatus, lang)}
                      valueClass="text-emerald-600"
                    />
                    {!!localize(shipment.note, lang) && (
                      <div className="mt-1 flex items-start gap-3 rounded-xl bg-amber-50 px-3 py-2.5">
                        <Lock className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                        <p className="text-xs font-semibold italic text-amber-700">
                          {content.noteLabel}: {localize(shipment.note, lang)}
                        </p>
                      </div>
                    )}
                  </dl>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-black px-8 py-9 text-white md:flex-row">
          <div>
            <h2 className="text-2xl font-black">{content.ctaTitle}</h2>
            <p className="mt-2 font-medium text-white/65">{content.ctaText}</p>
          </div>
          <Link
            to={ROUTES.contact}
            className="shrink-0 rounded-xl bg-red-600 px-7 py-4 font-black transition hover:bg-red-700"
          >
            {content.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, valueClass = "text-slate-600" }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
      <div>
        <dt className="inline font-black">{label}: </dt>
        <dd className={`inline font-semibold ${valueClass}`}>{value}</dd>
      </div>
    </div>
  );
}
