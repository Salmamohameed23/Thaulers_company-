import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { productionLines } from "../data/productionLinesData";
import { useLanguage } from "../i18n/LanguageContext";

export default function ProductionLinesPage() {
  const { t } = useLanguage();
  const content = t.productionLinesPage;

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[620px] overflow-hidden bg-black text-white lg:min-h-[700px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/production-lines/hero.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 lg:min-h-[700px]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/20 px-5 py-3 text-[11px] font-black uppercase tracking-[0.35em] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              {content.heroBadge}
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] md:text-7xl">
              {content.heroTitlePrefix}
              <br />
              <span className="text-red-600">{content.heroHighlight}</span>
            </h1>

            <div className="mt-8 max-w-2xl rounded-3xl border border-white/30 bg-black/35 p-7 backdrop-blur-sm">
              <p className="text-base font-semibold leading-8 text-white/90 md:text-lg">
                {content.heroDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black uppercase text-black">
              {content.listTitle}
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-red-600" />
            <p className="mt-4 text-sm text-gray-500">
              {content.listDescription}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productionLines.map((line, index) => {
              const translatedLine = content.lines[index];

              return (
                <motion.article
                  key={line.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    opacity: { duration: 0.5, delay: index * 0.05 },
                    y: { duration: 0.35, delay: index * 0.05 },
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:border-red-200 hover:shadow-[0_20px_50px_rgba(0,0,0,0.13)]"
                >
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <img
                      src={line.image}
                      alt={translatedLine.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-black text-black transition-colors duration-300 group-hover:text-red-600">
                      {translatedLine.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {translatedLine.description}
                    </p>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-red-600 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-black px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-black">{content.ctaTitle}</h3>
            <p className="mt-2 max-w-2xl text-sm text-gray-300">
              {content.ctaDescription}
            </p>
          </div>

          <Link
            to="/solutions/production-lines/let-build"
            className="inline-flex items-center gap-3 bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700"
          >
            {content.ctaButton}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
