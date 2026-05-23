import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Headphones,
  Lightbulb,
  Factory,
  Sun,
  Bike,
  Utensils,
  Hotel,
  Wrench,
  Box,
  Globe2,
} from "lucide-react";

const red = "#ef3b35";

const categories = [
  {
    title: "Solar Energy",
    desc: "Solar systems, storage and clean energy projects",
    icon: Sun,
    image: "/images/categories/solar.jpg",
    path: "/solutions/solar-energy",
  },
  {
    title: "Bikes",
    desc: "Bikes, parts and mobility products",
    icon: Bike,
    image: "/images/categories/scooter.jpg",
    path: "/solutions/bikes",
  },
  {
    title: "Kitchenware",
    desc: "Cookware, utensils and custom packaging",
    icon: Utensils,
    image: "/images/categories/kitchenware.jpg",
    path: "/solutions/kitchenware",
  },
  {
    title: "Complete Industrial Production Lines",
    desc: "Machinery lines and technical sourcing",
    icon: Factory,
    image: "/images/categories/production-lines.jpg",
    path: "/solutions/complete-industrial-production-lines",
  },
  {
    title: "Hotel",
    desc: "Hospitality supplies and hotel products",
    icon: Hotel,
    image: "/images/categories/hotel-supplies.jpg",
    path: "/solutions/hotel",
  },
  {
    title: "Tools",
    desc: "Tools, hardware and industrial supplies",
    icon: Wrench,
    image: "/images/categories/tools.jpg",
    path: "/solutions/tools",
  },
];

const productionLines = [
  {
    title: "Metal Pipe Production Line",
    desc: "High-frequency welded pipe mill with high efficiency and precision.",
    image: "/images/production-lines/metal-pipe.jpg",
  },
  {
    title: "Steel Coil Slitting Line",
    desc: "High-speed slitting for carbon steel, stainless steel and aluminum.",
    image: "/images/production-lines/slitting-line.jpg",
  },
  {
    title: "Roll Forming Production Line",
    desc: "Automated roll forming for roofing, framing and structural profiles.",
    image: "/images/production-lines/roll-forming.jpg",
  },
  {
    title: "Cable Tray Production Line",
    desc: "High-speed production for cable management systems.",
    image: "/images/production-lines/cable-tray.jpg",
  },
];

const whyFeatures = [
  {
    title: "Global Sourcing",
    desc: "China-based sourcing support for different business categories.",
    icon: Globe2,
  },
  {
    title: "Quality Focus",
    desc: "Supplier coordination and product quality follow-up.",
    icon: ShieldCheck,
  },
  {
    title: "Competitive Supply",
    desc: "Factory-direct sourcing for better project value.",
    icon: Box,
  },
  {
    title: "Logistics Support",
    desc: "Support from sourcing stage to shipment coordination.",
    icon: Truck,
  },
  {
    title: "After-Sales Support",
    desc: "Responsive support for long-term cooperation.",
    icon: Headphones,
  },
  {
    title: "Solution Mindset",
    desc: "Practical product and project solutions for global clients.",
    icon: Lightbulb,
  },
];

const ImageBlock = ({ src, children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden bg-zinc-200 ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/60 to-black/20" />
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/home/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_40%,#ef3b35_0,transparent_30%),radial-gradient(circle_at_80%_20%,#ffffff_0,transparent_18%)]" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 lg:px-8">
          <div className="max-w-3xl pt-10">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[3px] w-12 bg-[#ef3b35]" />
              <p className="text-xs font-black uppercase tracking-[0.36em] text-[#ef3b35]">
                Tough Haulers Trade Limited
              </p>
            </div>

            <h1 className="text-[42px] font-black leading-[0.98] tracking-tight text-white drop-shadow-xl sm:text-6xl lg:text-7xl">
              Global Trading, Industrial Solutions & Clean Energy Projects
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-100 md:text-xl">
              Tough Haulers connects global markets with reliable products,
              advanced production lines and sustainable energy solutions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/solutions/solar-energy"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ef3b35] px-8 py-4 font-black text-white shadow-2xl shadow-red-500/20 transition hover:bg-red-600"
              >
                Explore Our Solutions <ArrowRight size={20} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-black text-black transition hover:bg-zinc-100"
              >
                Request a Quotation <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#ef3b35]">
              Who We Are
            </p>

            <h2 className="text-4xl font-black leading-tight text-zinc-950 lg:text-5xl">
              Your Trusted Partner in Global Trade and Industrial Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Tough Haulers Trade Limited is a China-based trading and project
              solutions company supporting industrial equipment, consumer goods,
              clean energy projects, and supply chain services.
            </p>

            <Link
              to="/whyus"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#ef3b35] px-7 py-4 font-black text-[#ef3b35] transition hover:bg-[#ef3b35] hover:text-white"
            >
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_.8fr]">
            <div className="group relative">
              <ImageBlock
                src="/images/home/company-building.jpg"
                className="h-[360px] rounded-3xl shadow-2xl"
              />
              <ImageBlock
                src="/images/home/warehouse.jpg"
                className="absolute -bottom-8 -left-8 hidden h-40 w-64 rounded-2xl border-8 border-white shadow-xl md:block"
              />
            </div>

            <div className="space-y-6">
              {[
                [Globe2, "Global Sourcing", "China-based sourcing support."],
                [
                  ShieldCheck,
                  "Reliable Quality",
                  "Quality-focused supply coordination.",
                ],
                [
                  Truck,
                  "End-to-End Support",
                  "From sourcing to delivery follow-up.",
                ],
              ].map(([Icon, title, desc]) => (
                <div
                  key={title}
                  className="flex gap-4 border-b border-zinc-100 pb-6 last:border-0"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-100 bg-red-50 text-[#ef3b35]">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-black text-zinc-950">{title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-zinc-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ef3b35]">
              Main Business Categories
            </p>
            <h2 className="mt-3 text-4xl font-black text-zinc-950 lg:text-5xl">
              Diverse Solutions for Every Industry
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {categories.map(({ title, desc, icon: Icon, image, path }) => (
              <Link
                key={title}
                to={path}
                className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition hover:shadow-2xl"
              >
                <ImageBlock src={image} className="h-36" />

                <div className="p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#ef3b35] transition group-hover:bg-[#ef3b35] group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-black text-zinc-950">{title}</h3>
                  <p className="mt-1 min-h-[42px] text-sm text-zinc-500">
                    {desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION LINES */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ef3b35]">
              Featured Production Lines
            </p>
            <h2 className="mt-3 text-4xl font-black text-zinc-950 lg:text-5xl">
              Precision. Performance. Productivity.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productionLines.map((line) => (
              <article
                key={line.title}
                className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition hover:shadow-xl"
              >
                <ImageBlock src={line.image} className="h-44" />

                <div className="p-6">
                  <h3 className="text-lg font-black text-zinc-950">
                    {line.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {line.desc}
                  </p>

                  <Link
                    to="/solutions/complete-industrial-production-lines"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#ef3b35]"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ef3b35]">
              Why Choose Tough Haulers
            </p>
            <h2 className="mt-3 text-4xl font-black text-zinc-950 lg:text-5xl">
              Built on Trust. Driven by Results.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {whyFeatures.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-100 bg-white text-[#ef3b35] shadow-sm">
                  <Icon size={28} />
                </div>
                <h3 className="mt-5 font-black text-zinc-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 lg:flex-row lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-zinc-950 lg:text-4xl">
              Ready to Build Your Next Project?
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              Let’s work together with reliable products, industrial solutions
              and professional supply support.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/lets-build"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ef3b35] px-8 py-4 font-black text-white"
            >
              Let’s Build Together <ArrowRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-zinc-300 px-8 py-4 font-black text-black"
            >
              Request a Quotation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
