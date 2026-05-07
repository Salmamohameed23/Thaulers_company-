import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import logo from "../../assets/logos/white_red_logo.png";

const solutions = [
  { name: "Smart Storage", path: "/smart-storage" },
  { name: "Factory Solutions", path: "/factory-solutions" },
  { name: "Gigawatt Projects", path: "/gigawatt-projects" },
  { name: "R&D Capability", path: "/rd-capability" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(220,38,38,0.13),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/45 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-8 py-16 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.8fr_0.9fr]">
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Tough Haulers Trade Limited"
                className="mb-10 h-auto w-[220px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>

            <p className="max-w-xl text-[16px] font-medium leading-8 text-neutral-300">
              Engineering Power. Delivering Reliability.
              <br />
              Solar power, battery energy storage, EPC engineering, global
              projects, and China-based supply chain support.
            </p>
          </div>

          <div>
            <h3 className="mb-9 text-xs font-black uppercase tracking-[0.42em] text-red-500">
              Solutions
            </h3>

            <ul className="space-y-5">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-[16px] font-semibold text-neutral-200 transition-all duration-300 hover:text-red-500"
                  >
                    {item.name}
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-9 text-xs font-black uppercase tracking-[0.42em] text-red-500">
              Contact
            </h3>

            <div className="space-y-6 text-[16px] font-medium text-neutral-300">
              <a
                href="mailto:sales@toughhaulers.cn.com"
                className="flex items-start gap-4 transition-colors duration-300 hover:text-red-500"
              >
                <Mail size={21} className="mt-0.5 shrink-0 text-red-500" />
                <span>sales@toughhaulers.cn.com</span>
              </a>

              <div className="flex items-start gap-4">
                <MapPin size={21} className="mt-0.5 shrink-0 text-red-500" />
                <span className="leading-7">
                  Yiwu, Zhejiang, China
                  <br />
                  Shenzhen, Guangdong, China
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-7 text-center text-sm text-neutral-500">
          © 2026 Tough Haulers Trade Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
