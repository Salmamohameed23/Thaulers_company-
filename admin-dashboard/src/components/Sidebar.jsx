import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Archive, Factory, FolderTree, LayoutDashboard, Mail, Package, Ship, Users, Wrench } from "lucide-react";
import { apiRequest } from "../services/api";

const links=[
  ["/dashboard","dashboard","Dashboard",LayoutDashboard], ["/messages","messages","Messages",Mail],
  ["/build-requests","build_requests","Build Requests",Wrench], ["/project-briefs","project_briefs","Production Briefs",Factory],
  ["/categories","categories","Categories",FolderTree], ["/products","products","Products",Package],
  ["/shipment-portfolio","shipments","Shipment Portfolio",Ship], ["/archive","archive","Archive",Archive],
];
export default function Sidebar(){const [admin,setAdmin]=useState(null);useEffect(()=>{apiRequest("/api/auth/me").then(r=>setAdmin(r.admin)).catch(()=>{})},[]);const full=admin&&["admin","super_admin"].includes(admin.role);const allowed=p=>!admin||full||(admin.permissions||[]).includes(p);const linkClass=({isActive})=>`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive?"bg-red-600 text-white shadow-lg shadow-red-950/30":"text-neutral-400 hover:bg-white/10 hover:text-white"}`;
return <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col bg-black p-6 text-white"><div className="mb-8 border-b border-white/10 pb-7"><h1 className="text-2xl font-black tracking-tight text-red-500">THAULERS</h1><p className="mt-1 text-[10px] font-bold uppercase tracking-[.3em] text-neutral-600">Admin control</p></div><nav className="flex-1 space-y-1.5 overflow-y-auto">{links.filter(x=>allowed(x[1])).map(([to,,label,Icon])=><NavLink key={to} to={to} className={linkClass}><Icon size={18}/>{label}</NavLink>)}{full&&<NavLink to="/users" className={linkClass}><Users size={18}/>Team Access</NavLink>}</nav>{admin&&<div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4"><p className="truncate text-sm font-black">{admin.name}</p><p className="mt-1 truncate text-xs text-neutral-500">{admin.email}</p><span className="mt-3 inline-block rounded-full bg-red-600/20 px-2.5 py-1 text-[10px] font-black uppercase text-red-400">{admin.role}</span></div>}</aside>}
