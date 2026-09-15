import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Archive, Boxes, Factory, FolderTree, Mail, Package, Ship, TrendingUp, Users, Wrench } from "lucide-react";
import Layout from "../components/Layout";
import { apiRequest } from "../services/api";

const cards = [
  ["visitors", "Unique Visitors", Users, "from-red-600 to-rose-500"], ["visitorsToday", "New Visitors Today", TrendingUp, "from-orange-500 to-red-500"],
  ["messages", "Messages", Mail, "from-zinc-900 to-zinc-700"], ["builds", "Build Requests", Wrench, "from-slate-800 to-slate-600"],
  ["briefs", "Production Briefs", Factory, "from-neutral-800 to-neutral-600"], ["categories", "Categories", FolderTree, "from-red-700 to-red-500"],
  ["products", "Products", Package, "from-stone-800 to-stone-600"], ["shipments", "Shipment Portfolio", Ship, "from-rose-800 to-red-600"],
];

export default function Dashboard() {
  const [stats,setStats]=useState({}),[loading,setLoading]=useState(true),[error,setError]=useState("");
  useEffect(()=>{apiRequest("/api/admin/stats").then(r=>setStats(r.data||{})).catch(e=>setError(e.message)).finally(()=>setLoading(false))},[]);
  return <Layout title="Dashboard">
    <motion.section initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} className="relative mb-8 overflow-hidden rounded-[2rem] bg-black p-8 text-white shadow-2xl"><div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-red-600/30 blur-3xl"/><div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="text-xs font-black uppercase tracking-[0.35em] text-red-500">Control Center</p><h1 className="mt-3 text-4xl font-black">Welcome back</h1><p className="mt-2 max-w-xl text-neutral-400">A live overview of your website, enquiries, catalogue and operations.</p></div><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"><Boxes className="text-red-500"/><div><p className="text-xs text-neutral-400">Live content</p><p className="font-black">{(stats.categories||0)+(stats.products||0)} items</p></div></div></div></motion.section>
    {error&&<p className="mb-5 rounded-2xl bg-red-50 p-4 text-red-700">{error}</p>}
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{cards.map(([key,title,Icon,color],index)=><motion.article key={key} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:index*.055}} whileHover={{y:-5}} className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl"><div className={`mb-7 inline-flex rounded-2xl bg-gradient-to-br ${color} p-3 text-white shadow-lg`}><Icon size={21}/></div><p className="text-sm font-bold text-neutral-500">{title}</p><div className="mt-2 flex items-end justify-between"><p className="text-4xl font-black tracking-tight">{loading?"—":stats[key]||0}</p><span className="rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-neutral-500">Live</span></div></motion.article>)}</div>
    <div className="mt-8 grid gap-5 lg:grid-cols-3"><section className="rounded-3xl bg-white p-7 shadow-sm lg:col-span-2"><div className="flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-widest text-red-600">Overview</p><h2 className="mt-2 text-2xl font-black">Incoming activity</h2></div><TrendingUp className="text-red-600"/></div><div className="mt-7 grid grid-cols-3 gap-3">{[["Messages",stats.messages],["Build",stats.builds],["Briefs",stats.briefs]].map(([label,value])=><div key={label} className="rounded-2xl bg-neutral-100 p-5"><p className="text-xs font-bold text-neutral-500">{label}</p><p className="mt-2 text-2xl font-black">{value||0}</p></div>)}</div></section><section className="rounded-3xl bg-red-600 p-7 text-white shadow-xl"><Archive size={28}/><h2 className="mt-8 text-2xl font-black">Safe archive</h2><p className="mt-2 text-sm text-red-100">Removed catalogue items stay recoverable until an admin permanently deletes them.</p></section></div>
  </Layout>;
}
