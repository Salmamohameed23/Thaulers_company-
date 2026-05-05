import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white relative overflow-hidden">
      {/* soft gradient بدل المربعات */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(220,38,38,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-black text-red-600 mb-4">THAULERS</h2>

            <p className="text-sm text-neutral-400 leading-7">
              Engineering Power. Delivering Reliability. Solar power, battery
              energy storage, EPC engineering, global projects, and China-based
              supply chain support.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-red-500 mb-4 uppercase">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link to="/solutions" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="/company-profile.pdf"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  Company Profile
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-red-500 mb-4 uppercase">
              Solutions
            </h3>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link
                  to="/smart-storage"
                  className="hover:text-white transition"
                >
                  Smart Storage
                </Link>
              </li>
              <li>
                <Link to="/factory" className="hover:text-white transition">
                  Factory Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/gigawatt-projects"
                  className="hover:text-white transition"
                >
                  Gigawatt Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/rd-capability"
                  className="hover:text-white transition"
                >
                  R&D Capability
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-red-500 mb-4 uppercase">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-red-500 mt-1" />
                <span>sales@toughhaulers.cn.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-red-500 mt-1" />
                <div>
                  <p>Yiwu, Zhejiang, China</p>
                  <p>Shenzhen, Guangdong, China</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LINE */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-xs text-neutral-500">
            © 2026 Tough Haulers Trade Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
