import { Link } from "react-router-dom";
import { Gauge, Package, ArrowRight, CheckCircle } from "lucide-react";
import { productionLines } from "../data/productionLinesData";

export default function ProductionLinesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[420px] overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('/images/production-lines/hero.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        <div className="relative mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-6">
          <h1 className="max-w-3xl text-4xl font-black uppercase leading-tight text-white md:text-6xl">
            Complete Industrial Production Lines
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-200 md:text-base">
            We supply complete production line solutions from China, including
            technical study, supplier sourcing, equipment selection, layout
            support, quotation review, shipment coordination, installation
            support, and commissioning assistance.
          </p>

          <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold text-white">
            {[
              "Technical Study",
              "Supplier Sourcing",
              "Equipment Selection",
              "Layout Support",
              "Shipment Coordination",
              "Installation Support",
              "Commissioning",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-red-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black uppercase text-black">
              Production Lines We Supply
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-red-600" />
            <p className="mt-4 text-sm text-gray-500">
              High quality, reliable and customized production line solutions to
              meet diverse industrial needs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {" "}
            {productionLines.map((line) => (
              <div
                key={line.slug}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:border-red-500"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={line.image}
                    alt={line.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-black text-black">
                    {line.title}
                  </h3>

                  <p className="mt-2 min-h-[44px] text-sm leading-6 text-gray-600">
                    {line.application}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 text-xs">
                    <div className="flex gap-2">
                      <Gauge className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-bold text-black">Capacity</p>
                        <p className="text-gray-600">{line.capacity}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Package className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="font-bold text-black">Application</p>
                        <p className="text-gray-600">
                          {line.category || "Industrial"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Link
                      to={`/solutions/complete-industrial-production-lines/${line.slug}`}
                      className="border border-gray-300 py-3 text-center text-xs font-bold text-gray-800 transition hover:border-red-600 hover:text-red-600"
                    >
                      View Details
                    </Link>

                    <Link
                      to="/lets-build"
                      className="bg-red-600 py-3 text-center text-xs font-black text-white transition hover:bg-red-700"
                    >
                      Request Quotation
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-black">
              Looking for a Complete Production Line Solution?
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-gray-300">
              Send us your requirements and our team will study your project and
              connect you with the most suitable Chinese manufacturers.
            </p>
          </div>

          <Link
            to="/lets-build"
            className="inline-flex items-center gap-3 bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700"
          >
            Request Technical Proposal
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
