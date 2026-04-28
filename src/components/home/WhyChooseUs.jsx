import { motion } from "framer-motion";

const features = [
  {
    title: "Engineering Excellence",
    text: "Expert engineering team with deep industry experience and proven project delivery capability.",
  },
  {
    title: "Global Sourcing Advantage",
    text: "Strong China supply chain network ensuring competitive prices and reliable product quality.",
  },
  {
    title: "Scalable Energy Solutions",
    text: "From residential systems to gigawatt-scale projects, we deliver solutions that grow with your needs.",
  },
  {
    title: "Reliable After-Sales Support",
    text: "Dedicated support and warranty services to ensure long-term value and operational reliability.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#07090C] py-24 text-white">
      <motion.div
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(220,38,38,0.12),transparent_40%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-red-400"
        >
          Why Choose Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl"
        >
          Built on Trust.
          <span className="block text-red-500">Driven by Excellence.</span>
        </motion.h2>

        <div className="mt-16 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:border-red-500/40 hover:bg-white/[0.08]"
            >
              <h3 className="text-lg font-bold text-white">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
