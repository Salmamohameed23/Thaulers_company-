import { useEffect, useMemo, useState } from "react";
import { Building2, Mail, MapPin, Phone, Search, X } from "lucide-react";
import Layout from "../components/Layout";
import { apiRequest } from "../services/api";

const statuses = ["new", "reviewed", "contacted", "closed"];
const statusStyles = {
  new: "bg-red-50 text-red-700 border-red-200",
  reviewed: "bg-blue-50 text-blue-700 border-blue-200",
  contacted: "bg-emerald-50 text-emerald-700 border-emerald-200",
  closed: "bg-neutral-100 text-neutral-700 border-neutral-300",
};

export default function ProjectBriefs() {
  const [briefs, setBriefs] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);
      const response = await apiRequest("/api/admin/project-briefs");
      setBriefs(response.data || []);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { load(); }, []);

  const updateStatus = async (id, nextStatus) => {
    const response = await apiRequest(`/api/admin/project-briefs/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status: nextStatus }),
    });
    setBriefs((items) => items.map((item) => item._id === id ? response.data : item));
    setSelected((item) => item?._id === id ? response.data : item);
  };

  const filtered = useMemo(() => briefs.filter((item) => {
    const text = `${item.fullName} ${item.company} ${item.email} ${item.country} ${item.city} ${item.productionLineType}`.toLowerCase();
    return text.includes(search.toLowerCase()) && (status === "all" || item.status === status);
  }), [briefs, search, status]);

  return <Layout title="Production Line Briefs">
    <div className="mb-8 rounded-3xl bg-black p-8 text-white shadow-xl">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500">Production Lines</p>
      <h1 className="mt-3 text-3xl font-black">Project Briefs</h1>
      <p className="mt-2 text-sm text-neutral-400">Review technical requirements and manage client follow-up.</p>
    </div>

    <div className="mb-6 flex flex-col gap-4 md:flex-row">
      <div className="relative flex-1"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search client, company, country or line..." className="w-full rounded-2xl border bg-white py-4 pl-12 pr-4 outline-none focus:border-red-500" />
      </div>
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-2xl border bg-white px-5 py-4 font-semibold">
        <option value="all">All Status</option>{statuses.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>

    {loading ? <p className="p-8 font-bold">Loading...</p> : <div className="grid gap-5">
      {filtered.map((item) => <article key={item._id} className="rounded-3xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-5 lg:flex-row">
          <div>
            <div className="flex flex-wrap gap-2"><Badge status={item.status} /><span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold">{item.referenceCode}</span></div>
            <h2 className="mt-4 text-xl font-black">{item.productionLineType}</h2>
            <div className="mt-3 grid gap-2 text-sm text-neutral-600 md:grid-cols-2">
              <Line icon={Building2} value={item.company || item.fullName} /><Line icon={MapPin} value={`${item.city}, ${item.country}`} />
              <Line icon={Mail} value={item.email} /><Line icon={Phone} value={item.phone} />
            </div>
          </div>
          <button onClick={() => setSelected(item)} className="self-start rounded-xl bg-black px-5 py-3 font-bold text-white hover:bg-red-600">View Details</button>
        </div>
      </article>)}
      {!filtered.length && <p className="rounded-3xl bg-white p-10 text-center text-neutral-500">No project briefs found.</p>}
    </div>}

    {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white">
        <header className="sticky top-0 flex items-center justify-between bg-black px-8 py-6 text-white"><div><p className="text-xs font-bold text-red-500">{selected.referenceCode}</p><h2 className="mt-2 text-2xl font-black">{selected.productionLineType}</h2></div><button onClick={() => setSelected(null)}><X /></button></header>
        <div className="grid gap-6 p-8 md:grid-cols-2">
          <Section title="Client"><Info label="Name" value={selected.fullName} /><Info label="Company" value={selected.company} /><Info label="Email" value={selected.email} /><Info label="Phone" value={selected.phone} /><Info label="Destination" value={`${selected.city}, ${selected.country}`} /></Section>
          <Section title="Technical Scope"><Info label="Line" value={selected.productionLineType} /><Info label="Capacity" value={selected.capacity} /><Info label="Budget" value={selected.budget} /><Info label="Raw material" value={selected.rawMaterial} /><Info label="Final product" value={selected.finalProduct} /><Info label="Factory space" value={selected.factorySpace} /><Info label="Target date" value={selected.targetDate} /></Section>
          <Section title="Project Details"><p className="whitespace-pre-line text-sm leading-7 text-neutral-700">{selected.projectDetails || "No details provided."}</p></Section>
          <Section title="Attachments">
            {selected.attachments?.length ? selected.attachments.map((file) => (
              <a key={file.publicId} href={file.url} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-bold transition hover:border-red-600 hover:text-red-600">
                <span className="min-w-0 truncate">{file.name}</span>
                <span className="ml-3 text-xs">Open</span>
              </a>
            )) : <p className="text-sm text-neutral-500">No attachments supplied.</p>}
          </Section>
          <Section title="Status"><Badge status={selected.status} /><div className="mt-5 grid grid-cols-2 gap-2">{statuses.map((item) => <button key={item} onClick={() => updateStatus(selected._id, item)} className="rounded-xl border px-3 py-3 text-left text-sm font-bold capitalize hover:border-red-600">{item}</button>)}</div></Section>
        </div>
      </div>
    </div>}
  </Layout>;
}

const Badge = ({ status = "new" }) => <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase ${statusStyles[status] || statusStyles.new}`}>{status}</span>;
const Line = ({ icon: Icon, value }) => <p className="flex items-center gap-2"><Icon size={16} />{value || "-"}</p>;
const Section = ({ title, children }) => <section className="rounded-3xl border p-6"><h3 className="mb-5 text-sm font-black uppercase tracking-widest text-red-600">{title}</h3><div className="space-y-4">{children}</div></section>;
const Info = ({ label, value }) => <div><p className="text-xs font-bold uppercase text-neutral-400">{label}</p><p className="mt-1 break-words text-sm font-bold">{value || "-"}</p></div>;
