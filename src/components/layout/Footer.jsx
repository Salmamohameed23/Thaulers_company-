import { Link } from "react-router-dom";
import { ChevronRight, Mail, MapPin } from "lucide-react";
import logo from "../../assets/logos/white_red_logo.png";
import { useLanguage } from "../../i18n/LanguageContext";

const Footer = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const solutions = [
    { name: t.footer.links.smart, path: "/smart-storage" },
    { name: t.footer.links.factory, path: "/factory" },
    { name: t.footer.links.giga, path: "/gigawatt-projects" },
  ];

  const legal = [
    { name: t.footer.links.privacy, path: "/privacy-policy" },
    { name: t.footer.links.terms, path: "/terms-of-service" },
  ];

  return (
    <footer
      className={`relative overflow-hidden bg-black text-white ${
        isAr ? "font-[Cairo]" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(220,38,38,0.25),transparent_34%)]" />
      <div className="pointer-events-none absolute left-[-220px] bottom-[-260px] h-[620px] w-[620px] rounded-full border border-red-600/10 opacity-40" />

      <div className="relative mx-auto max-w-[1180px] px-8 pt-10 lg:px-8">
        <div
          className={`grid grid-cols-1 gap-16 border-b border-white/30 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 ${
            isAr ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* Brand */}
          <div
            className={`lg:border-white/10 ${
              isAr ? "text-right lg:border-l lg:pl-10" : "lg:border-r lg:pr-10"
            }`}
          >
            <div
              className={`flex h-[34px] items-center ${
                isAr ? "justify-end" : ""
              }`}
            >
              <Link to="/">
                <img
                  src={logo}
                  alt="Tough Haulers"
                  className={`mt-[16px] -translate-x-[29px] w-[300px] object-contain ${
                    isAr ? "translate-x-[35px]" : "-translate-x-[10px]"
                  }`}
                />
              </Link>
            </div>

            <div
              className={`mt-8 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)] ${
                isAr ? "text-right lg:border-l" : "lg:border-r"
              }`}
            />

            <h3 className="mt-5 max-w-[260px] text-[23px] font-extrabold leading-[1.25] tracking-[-0.02em]">
              {t.footer.tagline1}
              <br />
              {t.footer.tagline2}
            </h3>

            <p className="mt-2 max-w-[280px] text-[14px] leading-7 text-neutral-400">
              {t.footer.desc}
            </p>
          </div>

          {/* Solutions */}
          <div
            className={`lg:border-white/10 ml-[-75px] lg:px-10 ${
              isAr ? "text-right lg:border-l" : "lg:border-r"
            }`}
          >
            <h4 className="flex h-[34px] items-center text-[12px] font-bold uppercase tracking-[0.42em] text-[#ee4036]">
              {t.footer.solutions}
            </h4>

            <div
              className={`mt-8 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)] ${
                isAr ? "mr-0" : ""
              }`}
            />

            <ul className="mt-5">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-[14px] font-semibold text-neutral-200 transition hover:text-white"
                  >
                    <span
                      className={`flex items-center gap-4 ${
                        isAr ? "w-full flex-row-reverse justify-between" : ""
                      }`}
                    >
                      <ChevronRight
                        className={`h-4 w-4 text-red-500 transition ${
                          isAr ? "rotate-180" : "group-hover:translate-x-1"
                        }`}
                      />
                      {item.name}
                    </span>

                    {!isAr && (
                      <span className="h-[2px] w-5 bg-red-500 transition-all group-hover:w-8" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`lg:border-white/10  ml-[-75px] lg:px-10 ${
              isAr ? "text-right lg:border-l" : "lg:border-r"
            }`}
          >
            <h4 className="flex h-[34px] items-center text-[12px] font-bold uppercase tracking-[0.42em] text-[#ee4036]">
              {t.footer.contact}
            </h4>

            <div className="mt-8 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)]" />

            <div className="mt-5">
              <a
                href={`mailto:${t.footer.email}`}
                className={`group flex items-center gap-4  border-b border-white/10 py-4 text-[14px] font-semibold text-neutral-100 hover:text-red-400 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
                  <Mail className="h-4 w-4" />
                </span>
                <span dir="ltr">{t.footer.email}</span>
              </a>

              <div
                className={`flex items-center gap-4 border-b ml-[15px] border-white/10 py-4 text-[14px] font-semibold text-neutral-100 ${
                  isAr ? "flex-row-reverse" : ""
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center ml-[-17px] justify-center rounded-full border border-red-600 text-red-500">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>{t.footer.location1}</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className={ `lg:border-white/10  ml-[-75px] lg:px-10 ${
            isAr ? "text-right lg:pr-10" : "lg:pl-10"}`}>
            <h4 className="flex h-[34px] items-center text-[12px] font-bold uppercase tracking-[0.42em] text-[#ee4036]">
              {t.footer.legal}
            </h4>

            <div className="mt-8 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)]" />

            <ul className="mt-5">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-[14px] font-semibold text-neutral-200 transition hover:text-white"
                  >
                    <span
                      className={`flex items-center gap-4 ${
                        isAr ? "w-full flex-row-reverse justify-between" : ""
                      }`}
                    >
                      <ChevronRight
                        className={`h-4 w-4 text-red-500 transition ${
                          isAr ? "rotate-180" : "group-hover:translate-x-1"
                        }`}
                      />
                      {item.name}
                    </span>

                    {!isAr && (
                      <span className="h-[2px] w-5 bg-red-500 transition-all group-hover:w-8" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" py-10 -mt-[-8px]">
          <div
            className={`flex flex-col items-center justify-center gap-5 text-center text-[15px] text-neutral-400 tracking-wide md:flex-row ${
              isAr ? "md:flex-row-reverse" : ""
            }`}
          >
            <p dir={isAr ? "rtl" : "ltr"}>{t.footer.copyright}</p>

            <span className="hidden h-4 w-px bg-white/40 md:block" />

            <p dir={isAr ? "rtl" : "ltr"}>{t.footer.slogan}</p>

            <div className="flex items-center justify-center gap-5 md:ml-4">
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
    </footer>
  );
};

export default Footer;
