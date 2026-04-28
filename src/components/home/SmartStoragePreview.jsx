import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import storageImg from "../../assets/images/6.png";

const products = [
  {
    title: "Household ESS",
    spec: "51.2V | 5kWh",
  },
  {
    title: "Household ESS",
    spec: "51.2V | 10kWh",
  },
  {
    title: "Commercial & Industrial ESS",
    spec: "832V | 232.96kW",
  },
];

const SmartStoragePreview = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0E12] py-24 text-white">
      <motion.div
        animate={{ opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.14),transparent_34%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-red-400">
              Smart Storage Energy
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Advanced energy storage
              <span className="block text-red-500">
                for reliable power performance.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              We provide fully integrated Energy Storage Systems tailored for
              utility, commercial, and industrial applications. Our scope covers
              complete EPC solutions, from system design and engineering to full
              supply, installation, and commissioning.
            </p>

            <Link
              to="/smart-storage"
              className="mt-9 inline-flex rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-500"
            >
              Explore Storage Solutions
            </Link>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.spec}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group rounded-[26px] border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur transition-all duration-300 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10"
              >
                <div className="mb-5 overflow-hidden rounded-2xl bg-white p-4">
                  <motion.img
                    src={storageImg}
                    alt={product.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.35 }}
                    className="h-44 w-full object-contain"
                  />
                </div>

                <h3 className="text-lg font-black text-white">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm font-bold text-red-400">
                  {product.spec}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartStoragePreview;
