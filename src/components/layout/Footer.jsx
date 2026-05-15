import { Link } from "react-router-dom";
import { ChevronRight, Mail, MapPin } from "lucide-react";
import logo from "../../assets/logos/white_red_logo.png";

const solutions = [
  { name: "Smart Storage", path: "/smart-storage" },
  { name: "Factory Solutions", path: "/factory" },
  { name: "Gigawatt Projects", path: "/gigawatt-projects" },
];

const legal = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(220,38,38,0.25),transparent_34%)]" />
      <div className="pointer-events-none absolute left-[-220px] bottom-[-260px] h-[620px] w-[620px] rounded-full border border-red-600/10 opacity-40" />

      <div className="relative mx-auto max-w-[1180px] px-6 pt-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Brand */}
          <div className="lg:border-r lg:border-white/10 lg:pr-10 ">
            <div className="flex h-[34px] items-center ml-[-20]  ">
              <Link to="/">
                <img
                  src={logo}
                  alt="Tough Haulers"
                  className="w-[150px] object-contain mt-[18px] ml-[-18px]"
                />
              </Link>
            </div>

            <div className="mt-8 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)]" />

            <h3 className="mt-8 max-w-[260px] text-[23px] font-extrabold leading-[1.18] tracking-[-0.035em]">
              Engineering Power.
              <br />
              Delivering Reliability.
            </h3>

            <p className="mt-6 max-w-[280px] text-[14px] leading-7 text-neutral-400">
              Solar power, battery energy storage, EPC engineering, global
              projects, and China-based supply chain support.
            </p>
          </div>

          {/* Solutions */}
          <div className="lg:border-r lg:border-white/10 lg:px-10">
            <h4 className="flex h-[34px] items-center text-[12px] font-bold uppercase tracking-[0.42em] text-[#ee4036]">
              Solutions
            </h4>

            <div className="mt-8 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)]" />

            <ul className="mt-8">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-[14px] font-semibold text-neutral-200 transition hover:text-white"
                  >
                    <span className="flex items-center gap-4">
                      <ChevronRight className="h-4 w-4 text-red-500 transition group-hover:translate-x-1" />
                      {item.name}
                    </span>
                    <span className="h-[2px] w-5 bg-red-500 transition-all group-hover:w-8" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:border-r lg:border-white/10 lg:px-10">
            <h4 className="flex h-[34px] items-center text-[12px] font-bold uppercase tracking-[0.42em] text-[#ee4036]">
              Contact
            </h4>

            <div className="mt-8 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)]" />

            <div className="mt-8">
              <a
                href="mailto:sales@toughhaulers.cn.com"
                className="group flex items-center gap-4 border-b border-white/10 py-4 text-[14px] font-semibold text-neutral-100 hover:text-red-400"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
                  <Mail className="h-4 w-4" />
                </span>
                <span>sales@toughhaulers.cn.com</span>
              </a>

              <div className="flex items-center gap-4 border-b border-white/10 py-4 text-[14px] font-semibold text-neutral-100">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Yiwu, Zhejiang, China</span>
              </div>

              <div className="flex items-center gap-4 py-4 text-[14px] font-semibold text-neutral-100">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-600 text-red-500">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Shenzhen, Guangdong, China</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="lg:pl-10">
            <h4 className="flex h-[34px] items-center text-[12px] font-bold uppercase tracking-[0.42em] text-[#ee4036]">
              Legal
            </h4>

            <div className="mt-8 h-[3px] w-10 bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.95)]" />

            <ul className="mt-8">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-[14px] font-semibold text-neutral-200 transition hover:text-white"
                  >
                    <span>{item.name}</span>
                    <span className="h-[2px] w-5 bg-red-500 transition-all group-hover:w-8" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center text-[13px] text-neutral-500 md:flex-row">
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
