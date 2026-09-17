import { Link } from "react-router-dom";
import { ChevronRight, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import { ROUTES, SOLUTIONS_LINKS } from "../../config/siteRoutes.js";

const Footer = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const solutions = SOLUTIONS_LINKS.map((item) => ({
    name: t.footer.links[item.key],
    path: item.path,
  }));

  const legal = [
    { name: t.footer.links.privacy, path: ROUTES.privacy },
    { name: t.footer.links.terms, path: ROUTES.terms },
  ];

  const sectionTitleClass = `text-[11px] font-black uppercase tracking-[0.42em] text-[#ee4036] ${
    isAr ? "text-right tracking-normal" : ""
  }`;

  const sectionHeaderClass = "flex h-[72px] flex-col justify-between";

  const redLineClass = `h-[2px] w-12 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)] ${
    isAr ? "mr-0 ml-auto" : ""
  }`;

  const linkRowClass = `group flex items-center justify-between border-b border-white/10 py-4 text-[14px] font-semibold text-neutral-200 transition hover:text-white ${
    isAr ? "text-right" : ""
  }`;

  return (
    <footer
      dir={isAr ? "rtl" : "ltr"}
      className={`relative overflow-hidden bg-black text-white ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(220,38,38,0.25),transparent_34%)]" />
      <div className="pointer-events-none absolute left-[-220px] bottom-[-260px] h-[620px] w-[620px] rounded-full border border-red-600/10 opacity-40" />

      <div className="relative w-full px-5 pt-14 sm:px-7 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid grid-cols-1 gap-10 border-b border-white/20 pb-14 md:grid-cols-2 xl:grid-cols-[1.25fr_1fr_1.15fr_0.85fr] xl:gap-0">
          {/* Brand */}
          <div className={`${isAr ? "text-right xl:pl-10" : "xl:pr-10"}`}>
            <div className={sectionHeaderClass}>
              <img
                src="/images/home_imgs/white-logo.png"
                alt="Tough Haulers"
                className={`h-9 w-auto max-w-[280px] object-contain ${
                  isAr ? "ml-auto" : "mr-auto"
                }`}
              />
              <div className={redLineClass} />
            </div>

            <div>
              <h3 className="mt-5 max-w-[360px] text-[25px] font-black leading-tight tracking-[-0.02em]">
                {t.footer.tagline1}
                <br />
                {t.footer.tagline2}
              </h3>

              <p className="mt-3 max-w-[380px] text-[15px] font-medium leading-8 text-neutral-300">
                {t.footer.desc}
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div
            className={`xl:border-x xl:border-white/10 xl:px-10 ${
              isAr ? "text-right" : ""
            }`}
          >
            <div className={sectionHeaderClass}>
              <h4 className={sectionTitleClass}>{t.footer.solutions}</h4>
              <div className={redLineClass} />
            </div>

            <ul className="mt-6">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className={linkRowClass}>
                    <span
                      className={`flex min-w-0 items-center gap-3 ${
                        isAr ? "w-full justify-start text-right" : ""
                      }`}
                    >
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 text-red-500 transition ${
                          isAr ? "rotate-180" : "group-hover:translate-x-1"
                        }`}
                      />
                      <span className="break-words">{item.name}</span>
                    </span>

                    {!isAr && (
                      <span className="ml-4 h-[2px] w-6 shrink-0 bg-red-500 transition-all group-hover:w-10" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`xl:border-r xl:border-white/10 xl:px-10 ${
              isAr ? "text-right xl:border-l xl:border-r-0" : ""
            }`}
          >
            <div className={sectionHeaderClass}>
              <h4 className={sectionTitleClass}>{t.footer.contact}</h4>
              <div className={redLineClass} />
            </div>

            <div className="mt-6">
              <a
                href={`mailto:${t.footer.email}`}
                className={`group flex items-center gap-4 border-b border-white/10 py-4 text-[14px] font-semibold text-neutral-100 transition hover:text-red-400 ${
                  isAr ? "justify-start text-right" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
                  <Mail className="h-4 w-4" />
                </span>

                <span
                  dir="ltr"
                  className={`min-w-0 flex-1 break-all ${
                    isAr ? "text-right" : ""
                  }`}
                >
                  {t.footer.email}
                </span>
              </a>

              <div
                className={`flex items-start gap-4 border-b border-white/10 py-5 text-[14px] font-semibold leading-7 text-neutral-100 ${
                  isAr ? "justify-start text-right" : ""
                }`}
              >
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
                  <MapPin className="h-4 w-4" />
                </span>

                <span
                  dir="ltr"
                  className={`min-w-0 flex-1 break-words ${
                    isAr ? "text-right" : ""
                  }`}
                >
                  {t.footer.location1}
                </span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className={`${isAr ? "text-right xl:pr-10" : "xl:pl-10"}`}>
            <div className={sectionHeaderClass}>
              <h4 className={sectionTitleClass}>{t.footer.legal}</h4>
              <div className={redLineClass} />
            </div>

            <ul className="mt-6">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className={linkRowClass}>
                    <span
                      className={`flex min-w-0 items-center gap-3 ${
                        isAr ? "w-full justify-start text-right" : ""
                      }`}
                    >
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 text-red-500 transition ${
                          isAr ? "rotate-180" : "group-hover:translate-x-1"
                        }`}
                      />
                      <span className="break-words">{item.name}</span>
                    </span>

                    {!isAr && (
                      <span className="ml-4 h-[2px] w-6 shrink-0 bg-red-500 transition-all group-hover:w-10" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-8 sm:py-10">
          <div
            className={`flex flex-col items-center justify-between gap-5 text-center text-[13px] leading-6 tracking-wide text-neutral-400 md:flex-row md:text-left ${
              isAr ? "md:flex-row-reverse md:text-right" : ""
            }`}
          >
            <p>{t.footer.copyright}</p>

            {/* <p className="text-neutral-500">
              {t.footer.designedBy}{" "}
              <span className="font-semibold text-neutral-200">
                Salma Mohamed
              </span>
            </p> */}

            <div
              className={`flex flex-col items-center gap-5 md:flex-row ${
                isAr ? "md:flex-row-reverse" : ""
              }`}
            >
              <p>{t.footer.slogan}</p>

              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.facebook.com/TOUGHHAULERS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-110"
                >
                  <img
                    src="/icons/facebook.png"
                    alt="Facebook"
                    className="h-8 w-8 object-contain"
                  />
                </a>

                <a
                  href="https://www.instagram.com/thaulers"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-110"
                >
                  <img
                    src="/icons/instagram.png"
                    alt="Instagram"
                    className="h-8 w-8 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
