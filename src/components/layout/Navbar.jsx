import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Download,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { ROUTES, SOLUTIONS_LINKS } from "../../config/siteRoutes.js";
import logo from "../../assets/logos/logo2.png";
import { useLanguage } from "../../i18n/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang, setLang, t } = useLanguage();
  const isAr = lang === "ar";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeAll = () => {
    setIsOpen(false);
    setSolutionsOpen(false);
    setAboutOpen(false);
    setLangOpen(false);
  };

  const navItemClass = ({ isActive }) =>
    `group relative py-2 text-[15px] font-extrabold tracking-[-0.01em] transition-colors duration-300 whitespace-nowrap xl:text-[16px] ${
      isActive ? "text-red-600" : "text-neutral-800 hover:text-red-600"
    } after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:rounded-full after:bg-red-600 after:transition-transform after:duration-300 ${
      isActive
        ? "after:scale-x-100"
        : "after:scale-x-0 group-hover:after:scale-x-100"
    }`;

  const mobileNavItemClass = ({ isActive }) =>
    `rounded-2xl px-4 py-3 text-[16px] font-black transition ${
      isActive
        ? "bg-red-50 text-red-600"
        : "text-neutral-900 hover:bg-neutral-50"
    }`;

  const dropdownButtonClass = `flex items-center gap-1.5 py-2 text-[15px] font-extrabold tracking-[-0.01em] text-neutral-800 transition-colors duration-300 hover:text-red-600 whitespace-nowrap xl:text-[16px] ${
    isAr ? "flex-row-reverse" : ""
  }`;

  const dropdownItemClass = `group flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-[14px] font-bold text-neutral-700 transition-all duration-200 hover:bg-red-50 hover:text-red-600 ${
    isAr ? "flex-row-reverse text-right" : ""
  }`;

  const solutionsLinks = SOLUTIONS_LINKS.map((item) => ({
    label: t.footer.links[item.key],
    path: item.path,
  }));

  const aboutLinks = [
    {
      label: t.nav.companyProfile,
      path: "/company-profile.pdf",
      download: true,
    },
    { label: t.nav.whyUs, path: ROUTES.whyUs },
    { label: t.nav.contactUs, path: ROUTES.contact },
  ];

  const languages = [
    { code: "en", label: "English", short: "EN" },
    { code: "ar", label: "العربية", short: "AR" },
    { code: "zh", label: "中文", short: "中文" },
    { code: "ru", label: "Русский", short: "RU" },
    { code: "de", label: "Deutsch", short: "DE" },
    { code: "pl", label: "Polski", short: "PL" },
  ];

  const currentLanguage =
    languages.find((item) => item.code === lang) || languages[0];

  const handleLanguageChange = (code) => {
    setLang(code);
    setLangOpen(false);
    setIsOpen(false);
  };

  return (
    <header
      dir="ltr"
      className={`sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur-xl transition-all duration-500 ${
        isAr ? "font-[Cairo]" : ""
      } ${
        scrolled
          ? "shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
          : "shadow-[0_4px_18px_rgba(0,0,0,0.035)]"
      }`}
    >
      <div className="grid h-[74px] w-full grid-cols-[1fr_auto] items-center px-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8 xl:px-10">
        <Link
          to={ROUTES.home}
          onClick={closeAll}
          className="flex w-[190px] shrink-0 items-center justify-self-start"
          aria-label="TOUGH HAULERS home"
        >
          <img
            src={logo}
            alt="TOUGH HAULERS TRADE LIMITED"
            className="h-auto w-[190px] object-contain"
          />
        </Link>

        <nav
          dir={isAr ? "rtl" : "ltr"}
          className="hidden items-center justify-self-center gap-5 lg:flex xl:gap-7"
          aria-label="Main navigation"
        >
          <NavLink to={ROUTES.home} className={navItemClass}>
            {t.nav.home}
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              className={dropdownButtonClass}
              onClick={() => {
                setAboutOpen((value) => !value);
                setSolutionsOpen(false);
                setLangOpen(false);
              }}
              aria-expanded={aboutOpen}
            >
              {t.nav.about}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aboutOpen && (
              <div
                className={`absolute top-full w-64 pt-4 ${
                  isAr ? "right-0" : "left-0"
                }`}
              >
                <div className="rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_22px_55px_rgba(0,0,0,0.13)]">
                  {aboutLinks.map((link) =>
                    link.download ? (
                      <a
                        key={link.label}
                        href={link.path}
                        download
                        className={dropdownItemClass}
                        onClick={closeAll}
                      >
                        <span>{link.label}</span>
                        <Download
                          size={15}
                          className="transition group-hover:text-red-600"
                        />{" "}
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        to={link.path}
                        className={dropdownItemClass}
                        onClick={closeAll}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight
                          size={15}
                          className="transition group-hover:text-red-600"
                        />{" "}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              className={dropdownButtonClass}
              onClick={() => {
                setSolutionsOpen((value) => !value);
                setAboutOpen(false);
                setLangOpen(false);
              }}
              aria-expanded={solutionsOpen}
            >
              {t.nav.solutions}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {solutionsOpen && (
              <div
                className={`absolute top-full w-[330px] pt-4 ${
                  isAr ? "right-0" : "left-0"
                }`}
              >
                <div className="rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_22px_55px_rgba(0,0,0,0.13)]">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={dropdownItemClass}
                      onClick={closeAll}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to={ROUTES.shipmentPortfolio} className={navItemClass}>
            {t.nav.shipmentPortfolio}
          </NavLink>
        </nav>

        <div className="hidden shrink-0 items-center justify-self-end gap-3 lg:flex">
          {/* <span className="hidden text-[13px] font-bold text-neutral-500 xl:block">
            {t.nav.startProject}
          </span> */}

          {/* <Link
            to={ROUTES.letsBuild}
            className="rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-[0_14px_35px_rgba(220,38,38,0.25)]"
          >
            {t.nav.letsBuild}
          </Link> */}

          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button
              type="button"
              onClick={() => {
                setLangOpen((value) => !value);
                setAboutOpen(false);
                setSolutionsOpen(false);
              }}
              className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-[13px] font-black text-neutral-800 transition-all duration-300 hover:border-red-300 hover:bg-red-50 hover:text-red-600"
              aria-expanded={langOpen}
            >
              <Globe size={16} />
              <span>{currentLanguage.short}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  langOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langOpen && (
              <div className="absolute top-full w-44 pt-4 right-0">
                <div className="rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_22px_55px_rgba(0,0,0,0.13)]">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => handleLanguageChange(item.code)}
                      className={`block w-full rounded-2xl px-4 py-3 text-[15px] font-bold transition ${
                        isAr ? "text-right" : "text-left"
                      } ${
                        lang === item.code
                          ? "bg-red-50 text-red-600"
                          : "text-neutral-800 hover:bg-red-50 hover:text-red-600"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="justify-self-end rounded-xl border border-neutral-200 bg-neutral-50 p-2.5 text-black transition hover:border-red-400 hover:bg-red-50 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-x-0 top-[74px] z-40 max-h-[calc(100vh-74px)] overflow-y-auto border-t border-black/5 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)] lg:hidden">
          <div
            dir={isAr ? "rtl" : "ltr"}
            className={`flex flex-col gap-1.5 px-4 py-5 sm:px-6 ${
              isAr ? "text-right" : ""
            }`}
          >
            <NavLink
              to={ROUTES.home}
              onClick={closeAll}
              className={mobileNavItemClass}
            >
              {t.nav.home}
            </NavLink>

            <p className="mt-3 px-4 text-xs font-black uppercase tracking-[0.22em] text-red-600">
              {t.nav.about}
            </p>

            {aboutLinks.map((link) =>
              link.download ? (
                <a
                  key={link.label}
                  href={link.path}
                  download
                  onClick={closeAll}
                  className="rounded-2xl px-4 py-3 text-[16px] font-black text-neutral-900 transition hover:bg-neutral-50"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeAll}
                  className={mobileNavItemClass}
                >
                  {link.label}
                </NavLink>
              ),
            )}

            <p className="mt-3 px-4 text-xs font-black uppercase tracking-[0.22em] text-red-600">
              {t.nav.solutions}
            </p>

            {solutionsLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeAll}
                className={mobileNavItemClass}
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to={ROUTES.shipmentPortfolio}
              onClick={closeAll}
              className={mobileNavItemClass}
            >
              {t.nav.shipmentPortfolio}
            </NavLink>

            <div className="mt-4 flex flex-wrap gap-2 px-4">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleLanguageChange(item.code)}
                  className={`rounded-full border px-4 py-2 text-sm font-black transition ${
                    lang === item.code
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-black/10 text-neutral-700"
                  }`}
                >
                  {item.short}
                </button>
              ))}
            </div>

            {/* <span className="mt-4 px-4 text-[14px] font-bold text-neutral-500">
              {t.nav.startProject}
            </span> */}

            {/* <Link
              to={ROUTES.letsBuild}
              onClick={closeAll}
              className="mt-1 rounded-full bg-neutral-950 px-6 py-4 text-center text-[15px] font-black text-white transition hover:bg-red-600"
            >
              {t.nav.letsBuild}
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
