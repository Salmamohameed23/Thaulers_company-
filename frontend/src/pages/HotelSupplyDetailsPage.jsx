import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Box,
  FileText,
  PackageCheck,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { hotelProducts, hotelCategories } from "../data/hotelSuppliesData";

const HotelSupplyDetailsPage = () => {
  const { categorySlug, productSlug } = useParams();

  const product = hotelProducts.find(
    (item) => item.slug === productSlug && item.categorySlug === categorySlug,
  );

  const category = hotelCategories.find(
    (item) => item.slug === product?.categorySlug,
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-white p-10 text-zinc-950">
        Product not found
      </main>
    );
  }

  const dataSheet = [
    ["Product / Category", product.title],
    ["Type", product.type],
    ["Material", product.material],
    ["Finish", product.finish],
    ["Packaging", product.packaging],
    ["Logo Option", product.logo],
    ["Application", product.application],
    ["Set Includes", product.setIncludes],
  ];

  const featureCards = [
    {
      icon: ShieldCheck,
      value: product.material,
      label: "Material",
    },
    {
      icon: Palette,
      value: product.finish,
      label: "Finish",
    },
    {
      icon: PackageCheck,
      value: product.packaging,
      label: "Packaging",
    },
    {
      icon: BadgeCheck,
      value: product.logo,
      label: "Logo",
    },
  ];

  const customization = [
    "Hotel logo and private label branding",
    "Custom packaging, color and scent options",
    "Barcode, label and carton mark support",
    "Sample, catalog and quotation support available",
  ];

  return (
    <main className="bg-white text-zinc-950">
      <section className="bg-gray-50 px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <Link
            to={`/solutions/hotel-supplies/${product.categorySlug}`}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-black text-zinc-950 transition hover:border-red-600 hover:text-red-600"
          >
            <ArrowLeft size={15} />
            Back to Category
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-5 text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
                Hotel Supplies
              </p>

              <h1 className="text-5xl font-black leading-tight text-zinc-950">
                {product.title}
              </h1>

              <h2 className="mt-5 text-xl font-black text-gray-700">
                {category?.title || "Product Category"}
              </h2>

              <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-gray-600">
                {product.desc}
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700"
                >
                  Request Quotation
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-gray-300 px-8 py-4 text-sm font-black text-zinc-950 transition hover:border-red-600 hover:text-red-600"
                >
                  Request Catalog
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] bg-gray-100 shadow-2xl">
              <img
                src={product.image}
                alt={product.title}
                className="h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:border-red-500/30 hover:shadow-xl"
              >
                <Icon className="mx-auto mb-4 h-7 w-7 text-red-600" />

                <p className="text-sm font-black leading-6 text-zinc-950">
                  {item.value}
                </p>

                <p className="mt-2 text-xs font-bold text-gray-500">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-7 flex items-center gap-3">
              <FileText className="h-6 w-6 text-red-600" />
              <h2 className="text-3xl font-black text-zinc-950">
                Product Data Sheet
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
                  <div className="bg-gray-50 px-5 py-4 text-sm font-black text-zinc-950">
                    {label}
                  </div>

                  <div className="px-5 py-4 text-sm font-semibold leading-7 text-gray-600">
                    {value || "—"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-7 flex items-center gap-3">
                <Box className="h-7 w-7 text-red-600" />
                <h2 className="text-3xl font-black text-zinc-950">
                  Customization Support
                </h2>
              </div>

              <div className="space-y-4">
                {customization.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-4 w-4 shrink-0 text-red-600" />
                    <p className="text-sm font-semibold leading-6 text-gray-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-7 flex items-center gap-3">
                <PackageCheck className="h-7 w-7 text-red-600" />
                <h2 className="text-3xl font-black text-zinc-950">
                  Project Options
                </h2>
              </div>

              <p className="text-sm font-semibold leading-7 text-gray-600">
                MOQ, packaging style, product combinations, logo method, bottle
                design, color, scent, material, and guest experience
                requirements can be adjusted according to the hotel project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HotelSupplyDetailsPage;
