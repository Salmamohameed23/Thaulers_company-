import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Download, Globe } from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 35);
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

  const navItemClass = ({ isActive }) =>
    `text-[15px] xl:text-[16.5px] font-bold tracking-[0.01em] transition-all duration-300 whitespace-nowrap ${
      isActive ? "text-red-600" : "text-neutral-900 hover:text-red-600"
    }`;

  const mobileNavItemClass = ({ isActive }) =>
    `rounded-2xl px-4 py-3 text-[16px] font-bold transition ${
      isActive ? "bg-red-50 text-red-600" : "text-neutral-900 hover:bg-neutral-50"
    }`;

  const dropdownItemClass = `flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-[14px] font-semibold text-neutral-800 transition-all duration-300 hover:bg-red-50 hover:text-red-600 ${
    isAr ? "flex-row-reverse text-right" : ""
  }`;

  const dropdownButtonClass = `flex items-center gap-1 text-[15px] xl:text-[16.5px] font-bold tracking-[0.01em] text-neutral-900 transition-all duration-300 hover:text-red-600 whitespace-nowrap ${
    isAr ? "flex-row-reverse" : ""
  }`;

  const solutionsLinks = [
    { label: t.nav.smartStorage, path: "/smart-storage" },
    { label: t.nav.factorySolutions, path: "/factory" },
    { label: t.nav.gigawattProjects, path: "/gigawatt-projects" },
  ];

  const aboutLinks = [
    {
      label: t.nav.companyProfile,
      path: "/company-profile.pdf",
      download: true,
    },
    { label: t.nav.whyUs, path: "/whyus" },
    { label: t.nav.contactUs, path: "/contact" },
  ];

  const languages = [
    { code: "en", label: "English", short: "EN" },
    { code: "ar", label: "العربية", short: "AR" },
    { code: "zh", label: "中文", short: "中文" },
  ];

  const currentLanguage = languages.find((item) => item.code === lang) || languages[0];

  const closeAll = () => {
    setIsOpen(false);
    setSolutionsOpen(false);
    setAboutOpen(false);
    setLangOpen(false);
  };

  const handleLanguageChange = (code) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <header
      dir={isAr ? "rtl" : "ltr"}
      className={`sticky top-0 z-50 bg-white transition-all duration-500 ease-out ${
        isAr ? "font-[Cairo]" : ""
      } ${
        scrolled
          ? "shadow-[0_10px_35px_rgba(0,0,0,0.075)]"
          : "shadow-[0_4px_18px_rgba(0,0,0,0.045)]"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1540px] items-center justify-between px-4 transition-all duration-500 ease-out sm:px-6 md:px-8 lg:px-10 xl:px-12 ${
          scrolled ? "h-[70px] lg:h-[74px]" : "h-[78px] sm:h-[86px] lg:h-[94px]"
        }`}
      >
        <Link to="/" onClick={closeAll} className="flex min-w-0 shrink-0 items-center">
          <img
            src={logo}
            alt="TOUGH HAULERS TRADE LIMITED"
            className={`w-auto object-contain transition-all duration-500 ease-out ${
              scrolled
                ? "h-[42px] max-w-[178px] sm:h-[46px] sm:max-w-[205px] lg:h-[48px]"
                : "h-[48px] max-w-[195px] sm:h-[54px] sm:max-w-[235px] lg:h-[58px] lg:max-w-[255px]"
            }`}
          />
        </Link>

        <nav className="hidden min-w-0 items-center gap-5 lg:flex xl:gap-9">
          <NavLink to="/" className={navItemClass}>
            {t.nav.home}
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button type="button" className={dropdownButtonClass}>
              {t.nav.about}
              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>

            {aboutOpen && (
              <div className={`absolute top-full w-64 pt-4 ${isAr ? "right-0" : "left-0"}`}>
                <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-[0_22px_60px_rgba(0,0,0,0.13)]">
                  {aboutLinks.map((link) =>
                    link.download ? (
                      <a key={link.label} href={link.path} download className={dropdownItemClass}>
                        <span>{link.label}</span>
                        <Download size={14} />
                      </a>
                    ) : (
                      <Link key={link.label} to={link.path} className={dropdownItemClass}>
                        {link.label}
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
            <button type="button" className={dropdownButtonClass}>
              {t.nav.solutions}
              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${solutionsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {solutionsOpen && (
              <div className={`absolute top-full w-72 pt-4 ${isAr ? "right-0" : "left-0"}`}>
                <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-[0_22px_60px_rgba(0,0,0,0.13)]">
                  {solutionsLinks.map((link) => (
                    <Link key={link.path} to={link.path} className={dropdownItemClass}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/R&D" className={navItemClass}>
            {t.nav.rd}
          </NavLink>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="group hidden shrink-0 items-center gap-3 lg:flex xl:gap-4"
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className={`hidden text-[14px] font-medium tracking-wide text-neutral-700 transition-all duration-300 group-hover:text-neutral-950 xl:block ${
              isAr ? "group-hover:translate-x-1" : "group-hover:-translate-x-1"
            }`}
          >
            {t.nav.startProject}
          </motion.span>

          <Link
            to="/lets-build"
            className={`relative overflow-hidden rounded-full bg-neutral-950 font-bold text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-[0_14px_35px_rgba(220,38,38,0.28)] ${
              scrolled ? "px-5 py-3 text-[13px]" : "px-6 py-3.5 text-[14px] xl:px-7 xl:text-[15px]"
            }`}
          >
            <span className="relative z-10 whitespace-nowrap">{t.nav.letsBuild}</span>
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2.5 text-[13px] font-bold text-neutral-900 transition-all duration-300 hover:border-red-500 hover:text-red-600"
            >
              <Globe size={16} />
              <span>{currentLanguage.short}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <div className={`absolute top-full w-40 pt-3 ${isAr ? "left-0" : "right-0"}`}>
                <div className="rounded-2xl border border-black/5 bg-white p-2 shadow-[0_22px_60px_rgba(0,0,0,0.14)]">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() => handleLanguageChange(item.code)}
                      className={`block w-full rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
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
        </motion.div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-xl border border-black/10 bg-white p-2.5 text-black shadow-sm transition lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-x-0 top-[70px] z-40 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-black/5 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:top-[78px] lg:hidden">
          <div className={`flex flex-col gap-2 px-4 py-5 sm:px-6 ${isAr ? "text-right" : ""}`}>
            <NavLink to="/" onClick={closeAll} className={mobileNavItemClass}>
              {t.nav.home}
            </NavLink>

            <p className="mt-3 px-4 text-xs font-black uppercase tracking-[0.24em] text-red-600">
              {t.nav.about}
            </p>

            {aboutLinks.map((link) =>
              link.download ? (
                <a
                  key={link.label}
                  href={link.path}
                  download
                  onClick={closeAll}
                  className="rounded-2xl px-4 py-3 text-[16px] font-bold text-neutral-900 transition hover:bg-neutral-50"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink key={link.path} to={link.path} onClick={closeAll} className={mobileNavItemClass}>
                  {link.label}
                </NavLink>
              ),
            )}

            <p className="mt-3 px-4 text-xs font-black uppercase tracking-[0.24em] text-red-600">
              {t.nav.solutions}
            </p>

            {solutionsLinks.map((link) => (
              <NavLink key={link.path} to={link.path} onClick={closeAll} className={mobileNavItemClass}>
                {link.label}
              </NavLink>
            ))}

            <NavLink to="/R&D" onClick={closeAll} className={mobileNavItemClass}>
              {t.nav.rd}
            </NavLink>

            <div className="mt-4 flex flex-wrap gap-2 px-4">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleLanguageChange(item.code)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                    lang === item.code
                      ? "border-red-600 bg-red-50 text-red-600"
                      : "border-black/10 text-neutral-700"
                  }`}
                >
                  {item.short}
                </button>
              ))}
            </div>

            <span className="mt-4 px-4 text-[15px] font-medium tracking-wide text-neutral-700">
              {t.nav.startProject}
            </span>

            <Link
              to="/lets-build"
              onClick={closeAll}
              className="mt-1 rounded-full bg-red-600 px-6 py-4 text-center text-[15px] font-bold text-white"
            >
              {t.nav.letsBuild}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
