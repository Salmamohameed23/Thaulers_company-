import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, BatteryCharging, Factory, Globe2 } from "lucide-react";

const services = [
  {
    icon: BatteryCharging,
    title: "Smart Storage",
    desc: "Battery Energy Storage Systems designed for stable, scalable, and reliable energy performance.",
    image: "/src/assets/images/9.png",
    path: "/smart-storage",
  },
  {
    icon: Factory,
    title: "Factory Solutions",
    desc: "Turnkey factory solutions, technology transfer, and production support for energy storage systems.",
    image: "/src/assets/images/11.jpg",
    path: "/factory",
  },
  {
    icon: Globe2,
    title: "Gigawatt Projects",
    desc: "Engineering and supply chain capability supporting projects from kW-scale to Gigawatt-scale deployment.",
    image: "/src/assets/images/12.jpg",
    path: "/gigawatt-projects",
  },
];

const ServicesPreview = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14 text-neutral-950">
      <div className="absolute left-0 top-0 h-full w-[5px] bg-red-600" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(220,38,38,0.05),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-red-600">
              Our Solutions
            </p>

            <h2 className="text-[40px] font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Integrated Energy
              <span className="block text-neutral-700">
                Solutions & Capabilities.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              From battery storage systems to full-scale manufacturing and
              gigawatt-level project execution, we deliver scalable and reliable
              energy solutions globally.
            </p>
          </div>

          {/* Button on right */}
          <div className="shrink-0 lg:mb-3">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-3 rounded-full bg-neutral-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-red-600"
            >
              Explore All Solutions
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,0,0,0.12)]"
              >
                <Link to={item.path} className="block h-full">
                  {/* Image */}
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-white/10" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-950 text-white transition group-hover:bg-red-600">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-[18px] font-semibold text-neutral-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-neutral-600">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                        Explore Solution
                      </span>

                      <ArrowUpRight className="text-neutral-400 transition group-hover:text-red-600" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
