import { Link } from "react-router-dom";
import { ChevronRight, Mail, MapPin } from "lucide-react";
import logo from "../../assets/logos/white_red_logo.png";

const solutions = [
  { name: "Smart Storage", path: "/smart-storage" },
  { name: "Factory Solutions", path: "/factory-solutions" },
  { name: "Gigawatt Projects", path: "/gigawatt-projects" },
  { name: "R&D Capability", path: "/rd-capability" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_22%,rgba(127,29,29,0.50),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:90px_90px] opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.015] via-transparent to-black/40" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6 pt-24 pb-0 lg:px-0">
        <div className="grid min-h-[330px] grid-cols-1 gap-14 md:grid-cols-3 md:gap-20">
          <div className="md:pt-0">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="Tough Haulers"
                className="w-[185px] object-contain"
              />
            </Link>

            <div className="mt-10 h-[3px] w-11 bg-red-500 shadow-[0_0_16px_rgba(239,68,68,0.75)]" />

            <h3 className="mt-5 text-[15px] font-semibold leading-7 text-white">
              Engineering Power. Delivering Reliability.
            </h3>

            <p className="mt-4 max-w-[330px] text-[15px] font-normal leading-7 text-neutral-400">
              Solar power, battery energy storage, EPC engineering, global
              projects, and China-based supply chain support.
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.42em] text-red-500">
              Solutions
            </h4>

            <div className="mt-5 h-[2px] w-11 bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.75)]" />

            <ul className="mt-7 w-full max-w-[230px]">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-4 border-b border-white/10 py-4 text-[14px] font-medium text-neutral-200 transition-all duration-300 hover:border-red-500/60 hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4 shrink-0 text-red-500 transition-all duration-300 group-hover:translate-x-1 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.42em] text-red-500">
              Contact
            </h4>

            <div className="mt-5 h-[2px] w-11 bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.75)]" />

            <div className="mt-8 max-w-[330px] space-y-6">
              <a
                href="mailto:sales@toughhaulers.cn.com"
                className="group flex items-start gap-5 border-b border-white/10 pb-6 text-[14px] font-medium text-neutral-100 transition-colors duration-300 hover:text-red-400"
              >
                <Mail className="mt-0.5 h-6 w-6 shrink-0 text-red-500 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
                <span>sales@toughhaulers.cn.com</span>
              </a>

              <div className="flex items-start gap-5 text-[14px] font-medium leading-7 text-neutral-100">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-red-500" />
                <div>
                  <p>Yiwu, Zhejiang, China</p>
                  <p className="mt-1">Shenzhen, Guangdong, China</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 py-7 text-center">
          <p className="text-[14px] text-neutral-500">
            © 2026 Tough Haulers Trade Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
