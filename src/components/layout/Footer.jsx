import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import logo from "../../assets/logos/logo4.png";
const quickLinks = [
  { label: "Services", path: "/solutions" },
  { label: "Projects", path: "/projects" },
  { label: "Company Profile", path: "/company-profile.pdf", external: true },
  { label: "Contact", path: "/contact" },
];

const solutions = [
  { label: "Smart Storage", path: "/smart-storage" },
  { label: "Factory Solutions", path: "/factory" },
  { label: "Gigawatt Projects", path: "/gigawatt-projects" },
  { label: "R&D Capability", path: "/rd-capability" },
];

const Footer = () => {
  return (
    <footer className="relative mt-auto overflow-hidden bg-[#0b0b0c] text-white">
      <div className="absolute left-0 top-0 h-full w-[4px] bg-red-600" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(220,38,38,0.13),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.8fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Tough Haulers"
                  className="h-[35px] w-auto object-contain"
                />
              </div>

              {/* <div>
                <p className="text-lg font-black uppercase leading-none tracking-[0.04em]">
                  Tough Haulers
                </p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.24em] text-red-500">
                  Trade Limited
                </p>
              </div> */}
            </div>

            <p className="max-w-md text-[15px] leading-8 text-white/60">
              Engineering Power. Delivering Reliability. Solar power, battery
              energy storage, EPC engineering, global projects, and China-based
              supply chain support.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-red-500">
              Quick Links
            </p>

            <div className="flex flex-col gap-3.5">
              {quickLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.path}
                    className="group flex w-fit items-center gap-2 text-[15px] font-medium text-white/60 transition hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100 group-hover:text-red-500"
                    />
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="group flex w-fit items-center gap-2 text-[15px] font-medium text-white/60 transition hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100 group-hover:text-red-500"
                    />
                  </Link>
                ),
              )}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-red-500">
              Solutions
            </p>

            <div className="flex flex-col gap-3.5">
              {solutions.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-[15px] font-medium text-white/60 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-red-500">
              Contact
            </p>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-red-500" />
                <div>
                  <p className="text-sm font-bold text-white">Email</p>
                  <p className="mt-1 text-[15px] text-white/60">
                    sales@toughhaulers.cn.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-red-500" />
                <div>
                  <p className="text-sm font-bold text-white">Operations</p>
                  <p className="mt-1 text-[15px] leading-7 text-white/60">
                    China Supply Chain
                    <br />
                    Engineering Support in Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-[12px] text-white/40">
          <p>© 2026 Tough Haulers Trade Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
