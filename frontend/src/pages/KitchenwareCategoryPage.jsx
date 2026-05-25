import { useParams, Link } from "react-router-dom";
import {
  kitchenwareProducts,
  kitchenwareCategories,
} from "../data/kitchenwareData";

const KitchenwareCategoryPage = () => {
  const { categorySlug } = useParams();

  const category = kitchenwareCategories.find((c) => c.slug === categorySlug);

  const products = kitchenwareProducts.filter(
    (p) => p.categorySlug === categorySlug,
  );

  return (
    <main className="bg-white py-14 text-zinc-950">
      {" "}
      {/* 👈 أهم سطر */}
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <h1 className="text-3xl font-black text-zinc-950">
          {category?.title || "Category"}
        </h1>

        <div className="mt-3 h-[3px] w-14 bg-red-600" />

        <p className="mt-4 text-sm text-gray-600">{category?.desc}</p>

        {/* Products */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.slug}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-40 bg-gray-100 overflow-hidden rounded-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition group-hover:scale-105"
                />
              </div>

              <h3 className="mt-3 text-sm font-black text-zinc-950">
                {product.title}
              </h3>

              <p className="mt-1 text-xs text-gray-500">{product.shortDesc}</p>

              <Link
                to={`/solutions/kitchenware/${product.categorySlug}/${product.slug}`}
                className="mt-auto pt-3 text-sm font-black text-red-600 transition group-hover:translate-x-1"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default KitchenwareCategoryPage;
