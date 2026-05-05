// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,

  Building2,
 
  Handshake,
  
} from "lucide-react";

import eveVisit from "../assets/images/eve_visit.jpg";
import bydVisit from "../assets/images/byd_visit.jpg";

const partners = [
  {
    name: "EVE Energy",
    country: "China",
    category: "Battery Energy Storage Technology",
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
  {
    name: "RF Box Company",
    country: "Egypt",
    category: "Engineering Support Partner",
    image: null,
    website: "#",
    description:
      "RF Box Company supports regional engineering activities in Egypt, helping connect technical coordination, project support, and local engineering execution.",
    highlights: [
      "Engineering support in Egypt",
      "Technical coordination",
      "Project execution support",
    ],
  },
];

const Partners = () => {
  return (
    <main className="bg-white text-neutral-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="absolute left-0 top-0 h-full w-[5px] bg-red-600" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-red-600">
                Partners & Supply Chain
              </p>

              <h1 className="text-5xl font-black leading-tight">
                Global Technology Network
                <span className="block ">
                  powering energy projects.
                </span>
              </h1>

              <p className="mt-6 text-lg text-neutral-1000 leading-8">
                Our partner ecosystem supports solar power systems, battery
                energy storage, EPC engineering, and global project execution
                with reliable supply chain integration.
              </p>
            </div>

            <div className="bg-neutral-100 rounded-3xl p-6">
              <Handshake size={32} className="text-red-600 mb-4" />
              <p className="text-neutral-1000 leading-7">
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
                  className="rounded-3xl border border-black/10 bg-white overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* IMAGE */}
                    <div className="relative h-[320px] bg-neutral-100">
                      {partner.image ? (
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full bg-neutral-900 text-white">
                          <Building2 size={40} className="text-red-500" />
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 relative">
                      <span className="text-xs uppercase tracking-widest text-red-600 font-bold">
                        {partner.category}
                      </span>

                      <h3 className="text-3xl font-black mt-3">
                        {partner.name}
                      </h3>

                      <p className="text-sm text-neutral-800 mt-2">
                        {partner.country}
                      </p>

                      <p className="mt-5 text-neutral-1000 leading-7">
                        {partner.description}
                      </p>

                      {/* highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                        {partner.highlights.map((item) => (
                          <div
                            key={item}
                            className="p-4 border rounded-xl text-sm text-neutral-1000"
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="mt-8 flex items-center justify-between">
                        <span className="text-sm text-neutral-850 font-bold">
                          Main supply chain
                        </span>

                        <span className="flex items-center gap-2 text-red-600 font-bold group-hover:gap-3 transition">
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
