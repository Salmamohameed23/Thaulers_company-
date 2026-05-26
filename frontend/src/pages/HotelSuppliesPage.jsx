import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  hotelCategories,
  hotelProducts,
  hotelPartnerItems,
} from "../data/hotelSuppliesData";

const HotelSuppliesPage = () => {
  const featuredProducts = hotelProducts.slice(0, 4);

  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="relative h-[520px] overflow-hidden text-white">
        {/* IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/images/Hotelsupply/hero.png')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        {/* CONTENT */}
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
          <div>
            <h1 className="text-5xl font-black leading-tight md:text-6xl">
              Hotel Supplies
            </h1>

            <div className="mt-5 h-[3px] w-16 bg-red-600" />

            <p className="mt-6 max-w-xl text-sm font-semibold leading-7 text-white/90">
              Premium hotel amenities, guest room essentials, and hospitality
              solutions that elevate every stay.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
              Hotel Solutions
            </p>

            <h2 className="mt-3 text-4xl font-black text-zinc-950">
              Explore Categories
            </h2>

            <div className="mx-auto mt-4 h-[3px] w-16 bg-red-600" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hotelCategories.map((cat, index) => {
              const Icon = cat.icon;

              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:border-red-500/30 hover:shadow-xl"
                >
                  {/* ICON */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-black text-zinc-950 transition group-hover:text-red-600">
                    {cat.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-3 text-sm font-semibold leading-7 text-gray-600">
                    {cat.desc}
                  </p>

                  {/* CTA */}
                  <Link
                    to={`/solutions/hotel-supplies/${cat.slug}`}
                    className="mt-auto pt-6 text-sm font-black text-red-600 transition group-hover:translate-x-1"
                  >
                    Explore Collection →
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* FEATURED */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
              Featured Collections
            </p>

            <h2 className="mt-4 text-4xl font-black text-zinc-950">
              Curated for Hospitality Excellence
            </h2>

            <div className="mx-auto mt-4 h-[3px] w-16 bg-red-600" />
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <motion.article
                key={product.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:border-red-500/30 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-sm font-black text-zinc-950">
                    {product.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold leading-6 text-gray-600">
                    {product.desc}
                  </p>

                  <Link
                    to={`/solutions/hotel-supplies/${product.categorySlug}/${product.slug}`}
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-black text-red-600 transition group-hover:translate-x-1"
                  >
                    View Details
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
              Built for Hotel Projects
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Why Partner with TOUGH HAULERS
            </h2>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
            {hotelPartnerItems.map((item, index) => {
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

      {/* REQUEST AREA */}
      <section className="bg-white px-6 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            <img
              src="/images/hotel-supplies/catalog.jpg"
              alt="Hotel Supplies Catalog"
              className="h-[260px] w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-black leading-tight text-zinc-950">
              Request a Catalog or Quotation
            </h2>

            <p className="mt-4 max-w-xl text-sm font-semibold leading-7 text-gray-600">
              Get our latest hotel supplies catalog and personalized quotation
              for your project.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
             

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-gray-300 px-8 py-4 text-sm font-black text-zinc-950 transition hover:border-red-600 hover:text-red-600"
              >
                Request a Quotation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HotelSuppliesPage;
