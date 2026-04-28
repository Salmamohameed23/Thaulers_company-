import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/navLinks";
import logo from "../../assets/logos/logo4.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-white" : "text-slate-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090C]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logo}
            alt="Thaulers Logo"
            className="h-10 w-auto max-w-[140px] object-contain"
          />

          
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navItemClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex shrink-0 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-500"
        >
          Let’s Build
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B0E12] lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={navItemClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-full justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-500"
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
