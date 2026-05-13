import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import logo from "../../assets/logos/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 35);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = ({ isActive }) =>
    `text-[16.5px] xl:text-[17.5px] font-bold tracking-[0.01em] transition-all duration-300 ${
      isActive ? "text-red-600" : "text-neutral-900 hover:text-red-600"
    }`;

  const dropdownItemClass =
    "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold text-neutral-800 transition-all duration-300 hover:bg-red-50 hover:text-red-600";

  const dropdownButtonClass =
    "flex items-center gap-1 text-[16.5px] xl:text-[17.5px] font-bold tracking-[0.01em] text-neutral-900 transition-all duration-300 hover:text-red-600";

  const solutionsLinks = [
    { label: "Smart Storage", path: "/smart-storage" },
    { label: "Factory Solutions", path: "/factory" },
    { label: "Gigawatt Projects", path: "/gigawatt-projects" },
  ];

  const aboutLinks = [
    { label: "Company Profile", path: "/company-profile.pdf", download: true },
    { label: "Why Us", path: "/whyus" },
    { label: "Contact Us", path: "/contact" },
  ];

  const closeAll = () => {
    setIsOpen(false);
    setSolutionsOpen(false);
    setAboutOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-500 ease-out ${
        scrolled
          ? "shadow-[0_10px_35px_rgba(0,0,0,0.075)]"
          : "shadow-[0_4px_18px_rgba(0,0,0,0.045)]"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1540px] items-center justify-between px-5 transition-all duration-500 ease-out sm:px-7 md:px-8 lg:px-10 xl:px-12 ${
          scrolled ? "h-[74px]" : "h-[94px]"
        }`}
      >
        <Link
          to="/"
          onClick={closeAll}
          className="flex shrink-0 items-center pl-1 sm:pl-2 lg:-ml-4 xl:-ml-8"
        >
          <img
            src={logo}
            alt="TOUGH HAULERS TRADE LIMITED"
            className={`w-auto object-contain transition-all duration-500 ease-out ${
              scrolled ? "h-[48px] max-w-[210px]" : "h-[58px] max-w-[255px]"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex xl:gap-11">
          <NavLink to="/" className={navItemClass}>
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className={dropdownButtonClass}>
              About
              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${
                  aboutOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aboutOpen && (
              <div className="absolute left-0 top-full w-64 pt-4">
                <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-[0_22px_60px_rgba(0,0,0,0.13)]">
                  {aboutLinks.map((link) =>
                    link.download ? (
                      <a
                        key={link.label}
                        href={link.path}
                        download
                        className={dropdownItemClass}
                      >
                        <span>{link.label}</span>
                        <Download size={14} />
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        to={link.path}
                        className={dropdownItemClass}
                      >
                        {link.label}
                      </Link>
                    )
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
            <button className={dropdownButtonClass}>
              Solutions
              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {solutionsOpen && (
              <div className="absolute left-0 top-full w-72 pt-4">
                <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-[0_22px_60px_rgba(0,0,0,0.13)]">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={dropdownItemClass}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/R&D" className={navItemClass}>
            R&D
          </NavLink>

          <NavLink to="/partners" className={navItemClass}>
            Partners
          </NavLink>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="group hidden items-center gap-4 lg:flex"
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[16px] font-medium tracking-wide text-neutral-700 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-neutral-950"
          >
            Start your project
          </motion.span>

          <Link
            to="/lets-build"
            className={`relative overflow-hidden rounded-full bg-neutral-950 font-bold text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-[0_14px_35px_rgba(220,38,38,0.28)] ${
              scrolled ? "px-6 py-3 text-[14px]" : "px-8 py-4 text-[15.5px]"
            }`}
          >
            <span className="relative z-10">Let’s Build</span>
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </motion.div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mr-1 rounded-xl border border-black/10 bg-white p-2.5 text-black shadow-sm transition lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-black/5 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.08)] lg:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            <NavLink to="/" onClick={closeAll} className={navItemClass}>
              Home
            </NavLink>

            <p className="mt-2 text-xs font-black uppercase tracking-[0.24em] text-red-600">
              About
            </p>

            {aboutLinks.map((link) =>
              link.download ? (
                <a
                  key={link.label}
                  href={link.path}
                  download
                  onClick={closeAll}
                  className="text-[16.5px] font-bold text-neutral-900"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeAll}
                  className={navItemClass}
                >
                  {link.label}
                </NavLink>
              )
            )}

            <p className="mt-2 text-xs font-black uppercase tracking-[0.24em] text-red-600">
              Solutions
            </p>

            {solutionsLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeAll}
                className={navItemClass}
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink to="/R&D" onClick={closeAll} className={navItemClass}>
              R&D
            </NavLink>

            <NavLink to="/partners" onClick={closeAll} className={navItemClass}>
              Partners
            </NavLink>

            <span className="mt-4 text-[15px] font-medium tracking-wide text-neutral-700">
              Start your project
            </span>

            <Link
              to="/lets-build"
              onClick={closeAll}
              className="rounded-full bg-red-600 px-6 py-4 text-center text-[15px] font-bold text-white"
            >
              Let’s Build
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;