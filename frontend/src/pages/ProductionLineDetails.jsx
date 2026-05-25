import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  Box,
  ClipboardList,
  Factory,
  Gauge,
  Package,
  Settings,
  CheckCircle,
  FileText,
} from "lucide-react";
import { productionLines } from "../data/productionLinesData";

export default function ProductionLineDetails() {
  const { slug } = useParams();
  const line = productionLines.find((item) => item.slug === slug);

  if (!line) {
    return (
      <main className="min-h-screen bg-white px-6 py-20 text-center">
        <h1 className="text-3xl font-black text-black">
          Production Line Not Found
        </h1>

        <Link
          to="/solutions/complete-industrial-production-lines"
          className="mt-6 inline-block font-bold text-red-600"
        >
          Back to Production Lines
        </Link>
      </main>
    );
  }

  const dataSheet = [
    ["Production Line", line.title],
    ["Raw Material Input", line.rawMaterial],
    ["Final Output", line.finalOutput],
    ["Capacity Range", line.capacity],
    ["Application", line.application],
    ["Main Equipment", line.mainEquipment?.join(", ")],
    ["Automation Level", line.automation],
    ["Best For", line.bestFor],
  ];

  const highlights = [
    line.application,
    line.finalOutput,
    line.capacity,
    "Customized project configuration",
  ].filter(Boolean);

  const supportItems = line.support
    ? line.support.split(",").map((item) => item.trim())
    : [
        "Technical study and project evaluation",
        "Supplier sourcing and comparison",
        "Quotation review and equipment selection",
        "Layout support and shipment coordination",
        "Installation support and commissioning assistance",
      ];

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/solutions/complete-industrial-production-lines"
            className="inline-flex rounded-full border border-gray-300 px-6 py-3 text-sm font-black text-black transition hover:border-red-600 hover:text-red-600"
          >
            ← Back to Production Lines
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-6 text-xs font-black uppercase tracking-[0.45em] text-red-600">
                Production Line
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-tight text-black md:text-6xl">
                {line.title}
              </h1>

              <h2 className="mt-6 text-2xl font-black text-gray-700">
                {line.category || line.application}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                {line.finalOutput || line.application}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700"
                >
                  Request Quotation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to={`/solutions/production-lines/let-build?line=${line.slug}`}
                  className="inline-flex items-center gap-3 border border-gray-300 px-8 py-4 text-sm font-black text-black transition hover:border-red-600 hover:text-red-600"
                >
                  Let’s Build
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] bg-gray-100 shadow-2xl">
              <img
                src={line.image}
                alt={line.title}
                className="h-[430px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-100 bg-white px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Gauge,
              value: line.capacity,
              label: "Capacity",
            },
            {
              icon: Box,
              value: line.application,
              label: "Application",
            },
            {
              icon: Factory,
              value: line.category || "Industrial Production Line",
              label: "Category",
            },
            {
              icon: Package,
              value: "Project Export Ready",
              label: "Shipment",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <Icon className="mx-auto mb-5 h-7 w-7 text-red-500" />

                <p className="text-lg font-black text-black">{item.value}</p>
                <p className="mt-2 text-sm font-bold text-gray-500">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* DATA + SIDE CARDS */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-7 flex items-center gap-3">
              <FileText className="h-6 w-6 text-red-500" />
              <h2 className="text-3xl font-black text-black">
                Production Line Data Sheet
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200">
              {dataSheet.map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid grid-cols-[180px_1fr] ${
                    index !== dataSheet.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <div className="bg-gray-50 px-5 py-4 text-sm font-black text-black">
                    {label}
                  </div>

                  <div className="px-5 py-4 text-sm leading-7 text-gray-700">
                    {value || "—"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-7 flex items-center gap-3">
                <ClipboardList className="h-7 w-7 text-red-500" />
                <h2 className="text-3xl font-black text-black">
                  Project Highlights
                </h2>
              </div>

              <div className="space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm leading-6 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-7 flex items-center gap-3">
                <Settings className="h-7 w-7 text-red-500" />
                <h2 className="text-3xl font-black text-black">
                  TOUGH HAULERS Support Scope
                </h2>
              </div>

              <div className="space-y-4">
                {supportItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm leading-6 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
