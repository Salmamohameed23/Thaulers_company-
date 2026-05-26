import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  toolsHardwareCategories,
  toolsHardwareProducts,
} from "../data/toolsHardwareData";

const ToolsHardwareCategoryPage = () => {
  const { categorySlug } = useParams();

  const category = toolsHardwareCategories.find(
    (item) => item.slug === categorySlug,
  );

  const products = toolsHardwareProducts.filter(
    (item) => item.categorySlug === categorySlug,
  );

  if (!category) {
    return (
      <main className="min-h-screen bg-white p-10 text-zinc-950">
        Category not found
      </main>
    );
  }

  const Icon = category.icon;

  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="bg-gray-50 px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/solutions/tools-hardware"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-black text-zinc-950 transition hover:border-red-600 hover:text-red-600"
          >
            <ArrowLeft size={15} />
            Back to Tools & Hardware
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-5 text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
                Tools & Hardware
              </p>

              <h1 className="text-5xl font-black leading-tight text-zinc-950">
                {category.title}
              </h1>

              <h2 className="mt-5 text-xl font-black text-gray-700">
                Product Category
              </h2>

              <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-gray-600">
                {category.desc}
              </p>
            </div>

            <div className="overflow-hidden rounded-[30px] bg-gray-100 shadow-2xl">
              {category.image ? (
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-[360px] w-full object-cover"
                />
              ) : (
                <div className="flex h-[360px] items-center justify-center">
                  <Icon className="h-20 w-20 text-gray-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
              Collection Items
            </p>

            <h2 className="mt-3 text-4xl font-black text-zinc-950">
              Products in This Category
            </h2>

            <div className="mx-auto mt-4 h-[3px] w-16 bg-red-600" />
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
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
                    className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
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
                    to={`/solutions/tools-hardware/${product.categorySlug}/${product.slug}`}
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
    </main>
  );
};

export default ToolsHardwareCategoryPage;
