import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import bydLogo from "../../assets/logos/BYD_logo_clean_final.png";
import RFLogo from "../../assets/logos/RF LOGO.png";
import EVELogo from "../../assets/logos/EVE_logo_transparent.png";

const partners = [
  {
    name: "RF Box Company",
    country: "Egypt",
    logo: RFLogo,
    text: "Delivering engineering expertise and technical solutions.",
  },
  {
    name: "BYD",
    country: "China",
    logo: bydLogo,
    text: "A global leader in renewable energy and battery systems.",
  },
  {
    name: "EVE Energy",
    country: "China",
    logo: EVELogo,
    text: "Providing advanced battery technologies for large-scale energy storage applications.",
  },
];

const PartnersPreview = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14 text-neutral-950 ">
      <div className="absolute left-0 top-0 h-full w-[5px] bg-red-600" />
      <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-red-600/8 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.018)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-red-600">
              Our Partners & Main Supply Chain
            </p>

            <h2 className="text-[40px] font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Global Technology
              <span className="block text-neutral-700">
                & Engineering Network.
              </span>
            </h2>
          </div>

          <Link
            to="/partners"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
          >
            View All Partners
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 38 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.075)] transition-all duration-300 hover:border-red-600/25 hover:shadow-[0_28px_70px_rgba(0,0,0,0.11)]"
            >
              
                <div className="absolute right-6 top-6 text-7xl font-black text-black/[0.035]">
                  0{index + 1}
                </div>

                <div className="mb-8 flex h-20 w-32 items-center justify-center rounded-3xl border border-black/10 bg-white p-4 shadow-[0_12px_35px_rgba(0,0,0,0.055)]">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>

                <h3 className="text-[28px] font-black tracking-[-0.03em] text-neutral-950">
                  {partner.name}
                </h3>

                <p className="mt-2 text-xs font-black uppercase tracking-[0.24em] text-red-600">
                  {partner.country}
                </p>

                <p className="mt-6 text-[16px] leading-8 text-neutral-600">
                  {partner.text}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    View Partner
                  </span>

                  <ArrowUpRight className="text-neutral-400 transition group-hover:text-red-600" />
                </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersPreview;