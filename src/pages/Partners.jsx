// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Handshake } from "lucide-react";

import eveVisit from "../assets/images/eve_visit.jpg";
import bydVisit from "../assets/images/byd_visit.jpg";
import rfBoxVisit from "../assets/images/rf_visit.jpg";

const partners = [
  {
    name: "RF Box Company",
    country: "Egypt",
    category: "Engineering Support Partner",
    label: "Partner",
    image: rfBoxVisit,
    website: "https://www.rf-box.com/",
    description:
      "RF Box Company supports regional engineering activities in Egypt, helping connect technical coordination, project support, and local engineering execution.",
    highlights: [
      "Engineering support in Egypt",
      "Technical coordination",
      "Project execution support",
    ],
  },
  {
    name: "EVE Energy",
    country: "China",
    category: "Battery Energy Storage Technology",
    label: "Main supply chain",
    image: eveVisit,
    website: "https://www.evebattery.com/en",
    description:
      "EVE Energy is part of the company’s battery technology and supply chain network, supporting advanced energy storage applications for reliable and scalable project delivery.",
    highlights: [
      "Battery Energy Storage Systems",
      "Large-scale storage applications",
      "Energy technology supply chain",
    ],
  },
  {
    name: "BYD",
    country: "China",
    category: "Renewable Energy & Battery Ecosystem",
    label: "Main supply chain",
    image: bydVisit,
    website: "https://www.bydglobal.com/cn/index.html",
    description:
      "BYD strengthens the company’s access to advanced energy technologies, battery solutions, and integrated renewable energy supply chain capabilities.",
    highlights: [
      "Battery and storage ecosystem",
      "Renewable energy technologies",
      "Global technology capability",
    ],
  },
];

const Partners = () => {
  return (
    <main className="bg-white text-neutral-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-12">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-s font-black uppercase tracking-[0.3em] text-[#ee4036]">
                Our Partners & Main Supply Chain
              </p>

              <h1 className="text-5xl font-black leading-tight">
                Global Technology Network
                <span className="block">powering energy projects.</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-neutral-850">
                Our partner ecosystem supports solar power systems, battery
                energy storage, EPC engineering, and global project execution
                with reliable supply chain integration.
              </p>
            </div>

            <div className="rounded-3xl bg-neutral-100 p-6">
              <Handshake size={32} className="mb-4 text-[#ee4036]" />
              <p className="leading-7 text-neutral-700">
                Strong partnerships ensure better sourcing, better engineering
                coordination, and stronger project delivery confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10">
            {partners.map((partner, index) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block transition ${
                  partner.website === "#"
                    ? "pointer-events-none opacity-70"
                    : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-md transition hover:shadow-xl"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* IMAGE */}
                    <div className="relative h-[320px] bg-neutral-100">
                      {partner.image ? (
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-neutral-900 text-white">
                          <Building2 size={40} className="text-red-500" />
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="relative p-8">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#ee4036]">
                        {partner.category}
                      </span>

                      <h3 className="mt-3 text-3xl font-black">
                        {partner.name}
                      </h3>

                      <p className="mt-2 text-sm text-neutral-800">
                        {partner.country}
                      </p>

                      <p className="mt-5 leading-7 text-neutral-700">
                        {partner.description}
                      </p>

                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {partner.highlights.map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border p-4 text-sm text-neutral-700"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        <span className="text-sm font-bold text-neutral-800">
                          {partner.label}
                        </span>

                        <span className="flex items-center gap-2 font-bold text-[#ee4036] transition group-hover:gap-3">
                          Visit Website
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;
