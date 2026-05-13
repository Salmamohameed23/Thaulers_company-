import { Link } from "react-router-dom";
import { ChevronRight, Mail, MapPin } from "lucide-react";
import logo from "../../assets/logos/white_red_logo.png";

const solutions = [
  { name: "Smart Storage", path: "/smart-storage" },
  { name: "Factory Solutions", path: "/factory-solutions" },
  { name: "Gigawatt Projects", path: "/gigawatt-projects" },
];

const legal = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_5%,rgba(220,38,38,0.28),transparent_36%)]" />
      <div className="pointer-events-none absolute left-[-180px] bottom-[-210px] h-[520px] w-[520px] rounded-full border border-red-600/20 opacity-40" />
      <div className="pointer-events-none absolute left-[-220px] bottom-[-250px] h-[620px] w-[620px] rounded-full border border-red-600/10 opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-black" />

      <div className="relative z-0 mx-auto max-w-[1320px] px-6 pt-16 lg:px-10">
        <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="border-white/10 pb-14 pt-3 lg:border-r lg:pr-10">
            <div className="flex h-[16px] items-center  -ml-6">
              <Link to="/" className="inline-flex items-end pt-3">
                <img
                  src={logo}
                  alt="Tough Haulers"
                  className="w-[180px] object-contain"
                />
              </Link>
            </div>

            <div className="mt-10 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)]" />

            <h3 className="mt-10 max-w-[280px] text-[24px] font-extrabold leading-[1.22] tracking-[-0.035em] text-white">
              Engineering Power.
              <br />
              Delivering Reliability.
            </h3>

            <p className="mt-6 max-w-[305px] text-[15px] leading-8 text-neutral-400">
              Solar power, battery energy storage, EPC engineering, global
              projects, and China-based supply chain support.
            </p>
          </div>

          {/* Solutions */}
          <div className="border-white/10 pb-14 pt-3 lg:border-r lg:px-10">
            <h4 className="h-[16px] text-[13px] font-bold uppercase leading-none tracking-[0.48em] text-[#ee4036]">
              Solutions
            </h4>

            <div className="mt-10 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)]" />

            <ul className="mt-10 max-w-[250px]">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-between border-b border-white/10 py-5 text-[14px] font-medium text-neutral-200 transition-all duration-300 hover:border-red-500/60 hover:text-white"
                  >
                    <span className="flex items-center gap-5">
                      <ChevronRight className="h-4 w-4 text-red-500 transition-all duration-300 group-hover:translate-x-1 group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.95)]" />
                      {item.name}
                    </span>

                    <span className="h-[2px] w-5 bg-red-500 transition-all duration-300 group-hover:w-8 group-hover:shadow-[0_0_10px_rgba(220,38,38,0.95)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="border-white/10 pb-14 pt-3 lg:border-r lg:px-10">
            <h4 className="h-[16px] text-[13px] font-bold uppercase leading-none tracking-[0.48em] text-[#ee4036]">
              Contact
            </h4>

            <div className="mt-10 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)]" />

            <div className="mt-10 max-w-[300px]">
              <a
                href="mailto:sales@toughhaulers.cn.com"
                className="group flex items-center gap-5 border-b border-white/10 py-5 text-[14px] font-medium text-neutral-100 transition-colors duration-300 hover:text-red-400"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500 transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(220,38,38,0.45)]">
                  <Mail className="h-4 w-4" />
                </span>
                <span>sales@toughhaulers.cn.com</span>
              </a>

              <div className="flex items-center gap-5 border-b border-white/10 py-5 text-[14px] font-medium text-neutral-100">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Yiwu, Zhejiang, China</span>
              </div>

              <div className="flex items-center gap-5 py-5 text-[14px] font-medium text-neutral-100">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="pb-14 pt-3 lg:pl-10">
            <h4 className="h-[16px] text-[13px] font-bold uppercase leading-none tracking-[0.48em] text-[#ee4036]">
              Legal
            </h4>

            <div className="mt-10 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)]" />

            <ul className="mt-10 max-w-[250px]">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-between border-b border-white/10 py-5 text-[14px] font-medium text-neutral-200 transition-all duration-300 hover:border-red-500/60 hover:text-white"
                  >
                    <span>{item.name}</span>

                    <span className="h-[2px] w-5 bg-red-500 transition-all duration-300 group-hover:w-8 group-hover:shadow-[0_0_10px_rgba(220,38,38,0.95)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-10">
          <div className="flex flex-col items-center justify-center gap-4 text-center text-[14px] text-neutral-500 md:flex-row">
            <p>© 2026 Tough Haulers Trade limited</p>
            <span className="hidden h-4 w-px bg-white/20 md:block" />
            <p>Powering a sustainable future</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
