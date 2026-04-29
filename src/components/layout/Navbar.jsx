import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import logo from "../../assets/logos/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = ({ isActive }) =>
    `text-[20px] font-semibold tracking-wide transition-colors duration-300 ${
      isActive ? "text-black" : "text-neutral-800 hover:text-red-600"
    }`;

  const dropdownItemClass =
    "block rounded-xl px-4 py-3 text-[17px] font-medium text-neutral-800 transition hover:bg-red-50 hover:text-red-600";

  const solutionsLinks = [
    { label: "Smart Storage", path: "/smart-storage" },
    { label: "Factory Solutions", path: "/factory" },
    { label: "Gigawatt Projects", path: "/gigawatt-projects" },
  ];

  const aboutLinks = [
    { label: "Company Profile", path: "/company-profile.pdf", download: true },
    { label: "Contact", path: "/contact" },
    { label: "Enquiry", path: "/enquiry" },
    { label: "Why Us", path: "/why-us" },
  ];

  const closeAll = () => {
    setIsOpen(false);
    setSolutionsOpen(false);
    setAboutOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? // ? "border-b border-black/10 bg-white/90 shadow-[0_10px_35px_rgba(0,0,0,0.10)] backdrop-blur-xl"
            // : "border-b border-black/5 bg-white/65 shadow-[0_6px_22px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            "bg-white shadow-[0_10px_35px_rgba(0,0,0,0.08)] border-b border-black/10"
          : "bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] border-b border-black/5"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between px-3 transition-all duration-300 sm:px-5 lg:px-6 ${
          scrolled ? "h-[76px]" : "h-24"
        }`}
      >
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3 -ml-4 lg:-ml-8"
        >
          <img
            src={logo}
            alt="Thaulers Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-12 max-w-[180px]" : "h-14 max-w-[210px]"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
          <NavLink to="/" className={navItemClass}>
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center gap-1 text-[15px] font-semibold tracking-wide text-neutral-800 transition-colors duration-300 hover:text-red-600">
              About
              <ChevronDown size={16} />
            </button>

            {aboutOpen && (
              <div className="absolute left-0 top-full w-60 pt-5">
                <div className="rounded-2xl border border-black/10 bg-white/95 p-3 shadow-2xl shadow-black/15 backdrop-blur-xl">
                  {aboutLinks.map((link) =>
                    link.download ? (
                      <a
                        key={link.label}
                        href={link.path}
                        download
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium text-neutral-800 transition hover:bg-red-50 hover:text-red-600"
                      >
                        {link.label}
                        <Download size={15} />
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        to={link.path}
                        className={dropdownItemClass}
                      >
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
            <button className="flex items-center gap-1 text-[15px] font-semibold tracking-wide text-neutral-800 transition-colors duration-300 hover:text-red-600">
              Solutions
              <ChevronDown size={16} />
            </button>

            {solutionsOpen && (
              <div className="absolute left-0 top-full w-64 pt-5">
                <div className="rounded-2xl border border-black/10 bg-white/95 p-3 shadow-2xl shadow-black/15 backdrop-blur-xl">
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

          <NavLink to="/partners" className={navItemClass}>
            Partners
          </NavLink>

          <NavLink to="/projects" className={navItemClass}>
            Projects
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {/* <Link
            to="/contact"
            className="rounded-full border border-black/17 px-5 py-3 text-[15px] font-semibold text-neutral-900 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            Contact
          </Link> */}

          {/* <Link
            to="/enquiry"
            className="rounded-full border border-black/17 px-5 py-3 text-[15px] font-semibold text-neutral-900 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
          >
            Enquiry
          </Link> */}

          <Link
            to="/contact"
            className="rounded-full bg-black px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600"
          >
            Let’s Build
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-black/10 p-2 text-black lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-black/10 bg-white/95 shadow-xl lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 sm:px-6">
            <NavLink to="/" className={navItemClass} onClick={closeAll}>
              Home
            </NavLink>

            <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              About
            </p>

            <a
              href="/company-profile.pdf"
              download
              onClick={closeAll}
              className="flex items-center gap-2 text-[17px] font-semibold text-neutral-800 hover:text-red-600"
            >
              Company Profile <Download size={14} />
            </a>

            <NavLink to="/contact" className={navItemClass} onClick={closeAll}>
              Contact
            </NavLink>

            <NavLink to="/enquiry" className={navItemClass} onClick={closeAll}>
              Enquiry
            </NavLink>

            <NavLink to="/why-us" className={navItemClass} onClick={closeAll}>
              Why Us
            </NavLink>

            <p className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              Solutions
            </p>

            {solutionsLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={navItemClass}
                onClick={closeAll}
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink to="/partners" className={navItemClass} onClick={closeAll}>
              Partners
            </NavLink>

            <NavLink to="/projects" className={navItemClass} onClick={closeAll}>
              Projects
            </NavLink>

            <div className="mt-4 grid gap-3">
              {/* <Link
                to="/contact"
                onClick={closeAll}
                className="inline-flex w-full justify-center rounded-full border border-black/17 px-5 py-3 text-sm font-semibold text-black transition hover:bg-red-600 hover:text-white"
              >
                Contact
              </Link> */}

              {/* <Link
                to="/enquiry"
                onClick={closeAll}
                className="inline-flex w-full justify-center rounded-full border border-black/20 px-5 py-3 text-sm font-semibold text-black transition hover:bg-red-600 hover:text-white"
              >
                Enquiry
              </Link> */}

              <Link
                to="/contact"
                onClick={closeAll}
                className="inline-flex w-full justify-center rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Let’s Build
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
