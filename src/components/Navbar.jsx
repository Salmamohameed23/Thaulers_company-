import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { apiRequest } from "../services/api";

const Navbar = ({ title }) => {
  const navigate = useNavigate();
  const [admin,setAdmin]=useState(null);
  useEffect(()=>{apiRequest("/api/auth/me").then(r=>setAdmin(r.admin)).catch(()=>{})},[]);

  const logout = async () => {
    await apiRequest("/api/auth/logout", { method: "POST" }).catch(() => {});
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-black/5 bg-white/90 px-8 backdrop-blur-xl">
      <div>
        <h2 className="text-xl font-black text-black">{title}</h2>
        <p className="text-xs text-neutral-500">TOUGH HAULERS management system</p>
      </div>

      <div className="flex items-center gap-4">{admin&&<div className="hidden text-right md:block"><p className="text-sm font-black">{admin.name}</p><p className="text-[11px] uppercase text-neutral-400">{admin.role}</p></div>}<button
        onClick={logout}
        className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-black"
      >
        <LogOut size={16}/>Logout
      </button></div>
    </header>
  );
};

export default Navbar;
