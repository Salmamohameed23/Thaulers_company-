import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  PackageCheck,
  Truck,
  Factory,
} from "lucide-react";
import {
  kitchenwareCategories,
  kitchenwareProducts,
} from "../data/kitchenwareData";

const KitchenwarePage = () => {
  const featuredProducts = kitchenwareProducts.slice(0, 6);

  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="relative h-[520px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-100"
          style={{
            backgroundImage: "url('/images/kitchenware/categories/hero.png ')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Kitchenware
            </h1>

            <div className="mt-4 h-[3px] w-16 bg-red-600" />

            <p className="mt-6 text-base text-s font-semibold leading-7 text-white/90">
              Premium quality kitchenware designed for durability, performance,
              and modern everyday use.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white py-16 text-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-600">
              Kitchenware Collection
            </p>
            <h2 className="mt-3 text-3xl font-black text-zinc-950 md:text-4xl">
              Product Categories
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-red-600" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {kitchenwareCategories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/solutions/kitchenware/${cat.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:border-red-500/30 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-black text-zinc-950">
                    {cat.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold leading-6 text-gray-600">
                    {cat.desc}
                  </p>

                  <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-black text-red-600 transition group-hover:translate-x-1">
                    Explore
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="products" className=" py-16 text-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-red-600">
              Selected Items
            </p>
            <h2 className="mt-3 text-3xl font-black text-zinc-950 md:text-4xl">
              Featured Products
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-16 bg-red-600" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.slug}
                whileHover={{ y: -6 }}
                className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-red-500/30 hover:shadow-lg"
              >
                <div className="h-36 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <h3 className="mt-4 text-sm font-black leading-5 text-zinc-950">
                  {product.title}
                </h3>

                <p className="mt-2 text-xs font-semibold leading-5 text-gray-600">
                  {product.shortDesc}
                </p>

                <Link
                  to={`/solutions/kitchenware/${product.categorySlug}/${product.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-black text-red-600 transition hover:translate-x-1"
                >
                  View Details
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGING */}
      {/* PACKAGING + WHY US */}
      {/* PACKAGING */}
      <section className="bg-white py-14 text-zinc-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm"
            >
              <img
                src="/images/kitchenware/packaging.png"
                alt="Packaging & Custom Branding"
                className="h-[300px] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-black text-zinc-950">
                Packaging & Custom Branding
              </h2>

              <div className="mt-3 h-[3px] w-16 bg-red-600" />

              <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-gray-600">
                We provide tailored packaging solutions and private label
                options to help your brand stand out in the market.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-0 md:grid-cols-4">
                {[
                  { icon: BadgeCheck, title: "Custom Logo Printing" },
                  { icon: PackageCheck, title: "Color Box Design" },
                  { icon: Factory, title: "Barcode & Label Service" },
                  { icon: Truck, title: "Retail-Ready Packaging" },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="group border-r border-gray-200 px-4 text-center last:border-r-0"
                    >
                      <Icon className="mx-auto mb-3 h-7 w-7 text-red-600 transition group-hover:-translate-y-1 group-hover:scale-110" />
                      <p className="text-xs font-black leading-5 text-zinc-950">
                        {item.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY SOURCE WITH US */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
              Supply Chain Advantage
            </p>

            <h2 className="mt-4 text-4xl font-black">Why Source With Us</h2>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                icon: BadgeCheck,
                title: "High-Quality Materials",
                desc: "Food-grade, safe & durable materials.",
              },
              {
                icon: Factory,
                title: "Advanced Manufacturing",
                desc: "Modern facilities with strict quality control.",
              },
              {
                icon: PackageCheck,
                title: "Competitive Pricing",
                desc: "Factory-direct pricing with excellent value.",
              },
              {
                icon: Truck,
                title: "Reliable Delivery",
                desc: "On-time delivery with strong supply chain support.",
              },
              {
                icon: ArrowRight,
                title: "Global Experience",
                desc: "Trusted by clients in worldwide markets.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="border-r border-white/15 px-4 text-center last:border-r-0"
                >
                  <Icon className="mx-auto mb-5 h-8 w-8 text-red-500" />

                  <h3 className="text-sm font-black">{item.title}</h3>

                  <p className="mt-3 text-xs font-medium leading-6 text-white/70">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default KitchenwarePage;
