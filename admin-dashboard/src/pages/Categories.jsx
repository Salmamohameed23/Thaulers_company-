import { useEffect, useMemo, useState } from "react";
import { FolderTree, Pencil, Plus, Search, Trash2, X } from "lucide-react";
import Layout from "../components/Layout";
import { apiRequest } from "../services/api";

const sections = ["kitchenware", "hotel-supplies", "tools-hardware", "electric-scooters", "production-lines", "solar", "smart-storage"];
const sectionLabels = {
  kitchenware: "Kitchenware",
  "hotel-supplies": "Hotel Supplies",
  "tools-hardware": "Tools & Hardware",
  "electric-scooters": "Electric Scooters",
  "production-lines": "Production Lines",
  solar: "Solar Energy",
  "smart-storage": "Smart Storage",
};
const languages = [
  ["en", "English"], ["ar", "العربية"], ["zh", "中文"], ["ru", "Русский"], ["de", "Deutsch"], ["pl", "Polski"],
];
const emptyTranslations = () => ({ en: "", ar: "", zh: "", ru: "", de: "", pl: "" });
const emptyForm = { name: emptyTranslations(), section: "kitchenware", description: emptyTranslations(), order: 1, status: "active", image: null };

export default function Categories() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [sectionFilter, setSectionFilter] = useState("kitchenware");
  const [form, setForm] = useState(null);
  const [error, setError] = useState("");

  const load = async () => setItems((await apiRequest("/api/categories")).data || []);
  useEffect(() => { load().catch((e) => setError(e.message)); }, []);
  const filtered = useMemo(
    () => items.filter(
      (item) =>
        item.section === sectionFilter &&
        `${item.name?.en} ${item.name?.ar}`
          .toLowerCase()
          .includes(search.toLowerCase()),
    ),
    [items, search, sectionFilter],
  );

  const save = async (event) => {
    event.preventDefault(); setError("");
    try {
      const payload = {
        name: form.name,
        description: form.description,
        section: form.section,
        order: Math.max(Number(form.order) || 1, 1),
        status: form.status,
        ...(form.image?.url
          ? {
              image: {
                publicId: form.image.publicId,
                url: form.image.url,
                alt: form.image.alt || form.name,
              },
            }
          : {}),
      };
      if (!payload.image?.url) delete payload.image;
      await apiRequest(form._id ? `/api/categories/${form._id}` : "/api/categories", { method: form._id ? "PATCH" : "POST", body: JSON.stringify(payload) });
      setForm(null); await load();
    } catch (e) { setError(e.message); }
  };

  const archive = async (id) => {
    if (!confirm("Archive this category and its products?")) return;
    await apiRequest(`/api/categories/${id}`, { method: "DELETE" }); await load();
  };

  return <Layout title="Categories">
    <Header title="Product Categories" text="Manage the groups shown across every website section." onAdd={() => setForm({ ...structuredClone(emptyForm), section: sectionFilter })} />
    <div className="mb-5 flex gap-2 overflow-x-auto rounded-2xl bg-white p-3 shadow-sm">
      {sections.map((section) => {
        const count = items.filter((item) => item.section === section).length;
        const active = sectionFilter === section;
        return <button
          key={section}
          type="button"
          onClick={() => { setSectionFilter(section); setSearch(""); }}
          className={`whitespace-nowrap rounded-xl px-4 py-3 text-sm font-bold transition ${active ? "bg-black text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
        >
          {sectionLabels[section]} <span className={`ml-1 rounded-full px-2 py-0.5 text-xs ${active ? "bg-red-600 text-white" : "bg-white text-neutral-500"}`}>{count}</span>
        </button>;
      })}
    </div>
    <div className="mb-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><Search size={18}/><input className="w-full outline-none" placeholder="Search categories..." value={search} onChange={(e) => setSearch(e.target.value)}/></div>
    {error && <p className="mb-4 rounded-xl bg-red-50 p-4 text-red-700">{error}</p>}
    <div className="mb-4 flex items-center justify-between"><h2 className="text-2xl font-black">{sectionLabels[sectionFilter]}</h2><span className="text-sm font-semibold text-neutral-500">{filtered.length} categories</span></div>
    {!filtered.length && <div className="rounded-3xl bg-white p-12 text-center text-neutral-500 shadow-sm">No categories in this section yet.</div>}
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.map((item) => <article key={item._id} className="overflow-hidden rounded-3xl bg-white shadow-sm">
      {item.image?.url ? <img src={item.image.url} className="h-44 w-full object-cover"/> : <div className="flex h-44 items-center justify-center bg-neutral-200"><FolderTree/></div>}
      <div className="p-5"><span className="text-xs font-bold uppercase text-red-600">{item.section}</span><h2 className="mt-2 text-xl font-black">{item.name?.en}</h2><p className="mt-1 text-right font-semibold" dir="rtl">{item.name?.ar}</p>
      <div className="mt-5 flex gap-2"><button onClick={() => setForm(structuredClone(item))} className="flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-white"><Pencil size={15}/> Edit</button><button onClick={() => archive(item._id)} className="rounded-xl border p-2 text-red-600"><Trash2 size={18}/></button></div></div>
    </article>)}</div>
    {form && <CategoryForm form={form} setForm={setForm} onSubmit={save} onClose={() => setForm(null)}/>} 
  </Layout>;
}

function CategoryForm({ form, setForm, onSubmit, onClose }) {
  const setNested = (group, key, value) => setForm({ ...form, [group]: { ...form[group], [key]: value } });
  const [uploading, setUploading] = useState(false);
  const upload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const body = new FormData();
      body.append("images", file);
      const result = await apiRequest("/api/media/images", { method: "POST", body });
      setForm({ ...form, image: result.data?.[0] || null });
    } finally { setUploading(false); }
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5"><form onSubmit={onSubmit} className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-7">
    <div className="mb-6 flex justify-between"><h2 className="text-2xl font-black">{form._id ? "Edit" : "Add"} Category</h2><button type="button" onClick={onClose}><X/></button></div>
    <p className="mb-4 text-sm text-neutral-500">Enter the category name in all six website languages.</p>
    <div className="grid gap-4 md:grid-cols-2">{languages.map(([key,label]) => <Field key={key} label={label} value={form.name?.[key]} onChange={(v) => setNested("name", key, v)} required rtl={key === "ar"}/>)}
      <div className="md:col-span-2 mt-2 border-t pt-5"><h3 className="font-black">Short descriptions</h3><p className="mt-1 text-sm text-neutral-500">These appear below the category name on its card.</p></div>
      {languages.map(([key,label]) => <TextArea key={`description-${key}`} label={`${label} description`} value={form.description?.[key]} onChange={(v) => setNested("description", key, v)} required rtl={key === "ar"}/>)}
      <label className="text-sm font-bold">Website section<select className="mt-2 w-full rounded-xl border p-3" value={form.section} onChange={(e) => setForm({...form, section:e.target.value})}>{sections.map((x)=><option key={x}>{x}</option>)}</select></label>
      <Field label="Display order (1 = first)" type="number" value={form.order} onChange={(v) => setForm({...form, order:v})}/>
      <label className="text-sm font-bold">Category image<input className="mt-2 w-full rounded-xl border p-3" type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={upload}/><small className="mt-1 block text-neutral-500">{uploading ? "Uploading..." : "JPEG, PNG, WebP or AVIF · maximum 5 MB"}</small></label>
      <label className="text-sm font-bold">Visibility<select className="mt-2 w-full rounded-xl border p-3" value={form.status} onChange={(e)=>setForm({...form,status:e.target.value})}><option value="active">Active — visible on website</option><option value="draft">Draft — hidden from website</option></select></label>
    </div>{form.image?.url && <img src={form.image.url} className="mt-4 h-32 w-full rounded-2xl object-contain bg-neutral-100"/>}<button disabled={uploading} className="mt-6 w-full rounded-xl bg-red-600 p-3 font-bold text-white disabled:opacity-50">Save Category</button>
  </form></div>;
}

const Field = ({label,value,onChange,type="text",required,rtl}) => <label className="text-sm font-bold">{label}<input dir={rtl?"rtl":"ltr"} type={type} required={required} value={value ?? ""} onChange={(e)=>onChange(e.target.value)} className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-red-500"/></label>;
const TextArea = ({label,value,onChange,required,rtl}) => <label className="text-sm font-bold">{label}<textarea dir={rtl?"rtl":"ltr"} required={required} value={value ?? ""} onChange={(e)=>onChange(e.target.value)} rows="3" className="mt-2 w-full resize-y rounded-xl border p-3 outline-none focus:border-red-500"/></label>;
const Header = ({title,text,onAdd}) => <div className="mb-8 flex items-center justify-between rounded-3xl bg-black p-8 text-white"><div><h1 className="text-3xl font-black">{title}</h1><p className="mt-2 text-neutral-400">{text}</p></div><button onClick={onAdd} className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-bold"><Plus/> Add New</button></div>;
