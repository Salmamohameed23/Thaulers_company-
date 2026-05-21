import { NavLink } from "react-router-dom";
import { LayoutDashboard, Mail, Wrench } from "lucide-react";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
      isActive
        ? "bg-red-600 text-white"
        : "text-neutral-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-black p-6 text-white">
      <div className="mb-10">
        <h1 className="text-2xl font-black text-red-500">THAULERS</h1>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Admin Control
        </p>
      </div>

      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/messages" className={linkClass}>
          <Mail size={18} />
          Messages
        </NavLink>

        <NavLink to="/build-requests" className={linkClass}>
          <Wrench size={18} />
          Build Requests
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
