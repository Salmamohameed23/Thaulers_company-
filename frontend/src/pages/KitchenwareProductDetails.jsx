import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { kitchenwareProducts } from "../data/kitchenwareData";

const KitchenwareProductDetails = () => {
  const { productSlug } = useParams();

  const product = kitchenwareProducts.find((p) => p.slug === productSlug);

  if (!product) {
    return (
      <main className="min-h-screen bg-white p-10 text-zinc-950">
        Product not found
      </main>
    );
  }

  return (
    <main className="bg-white py-14 text-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to={`/solutions/kitchenware/${product.categorySlug}`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-black text-red-600"
        >
          <ArrowLeft size={16} />
          Back to Category
        </Link>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <img
              src={product.image}
              alt={product.title}
              className="h-[420px] w-full object-contain"
            />
          </div>

          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-red-600">
              Kitchenware Product
            </p>

            <h1 className="text-4xl font-black leading-tight text-zinc-950">
              {product.title}
            </h1>

            <div className="mt-4 h-[3px] w-16 bg-red-600" />

            <p className="mt-6 text-base font-semibold leading-8 text-gray-600">
              {product.details}
            </p>

            <div className="mt-8 grid gap-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="grid grid-cols-[150px_1fr] rounded-xl border border-gray-200 bg-white"
                >
                  <div className="border-r border-gray-200 bg-gray-50 px-4 py-4 text-sm font-black text-zinc-950">
                    {key}
                  </div>
                  <div className="px-4 py-4 text-sm font-semibold text-gray-600">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-red-100 bg-red-50 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                <p className="text-sm font-semibold leading-6 text-gray-700">
                  Available for bulk sourcing, private label packaging, and
                  customized brand requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KitchenwareProductDetails;
