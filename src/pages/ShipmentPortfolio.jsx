import { useEffect, useState } from "react";
import { Images, Pencil, Plus, Trash2, Upload, X } from "lucide-react";
import Layout from "../components/Layout";
import { apiRequest } from "../services/api";

const languages = [
  ["en", "English"], ["ar", "العربية"], ["zh", "中文"], ["ru", "Русский"], ["de", "Deutsch"], ["pl", "Polski"],
];
const emptyLocalized = () => ({ en: "", ar: "", zh: "", ru: "", de: "", pl: "" });
const emptyForm = () => ({
  product: emptyLocalized(), origin: emptyLocalized(), destination: emptyLocalized(),
  scope: emptyLocalized(), shipmentStatus: emptyLocalized(), details: emptyLocalized(),
  container: "40HQ", images: [], order: 1, status: "active",
});

export default function ShipmentPortfolio() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(null);
  const [error, setError] = useState("");

  const load = async () => setItems((await apiRequest("/api/shipment-cases")).data || []);
  useEffect(() => { load().catch((e) => setError(e.message)); }, []);

  const save = async (event) => {
    event.preventDefault();
    setError("");
    if (form.images.length !== 3) return setError("Please upload exactly 3 images.");
    try {
      const payload = {
        product: form.product, origin: form.origin, destination: form.destination,
        scope: form.scope, shipmentStatus: form.shipmentStatus, details: form.details,
        container: form.container, images: form.images,
        order: Math.max(Number(form.order) || 1, 1), status: form.status,
      };
      await apiRequest(form._id ? `/api/shipment-cases/${form._id}` : "/api/shipment-cases", {
        method: form._id ? "PATCH" : "POST",
        body: JSON.stringify(payload),
      });
      setForm(null);
      await load();
    } catch (e) { setError(e.message); }
  };

  const archive = async (id) => {
    if (!confirm("Remove this shipment case from the website?")) return;
    try {
      await apiRequest(`/api/shipment-cases/${id}`, { method: "DELETE" });
      await load();
    } catch (e) { setError(e.message); }
  };

  const visibleItems = items.filter((item) => item.status !== "archived");

  return <Layout title="Shipment Portfolio">
    <div className="mb-8 flex flex-col gap-5 rounded-3xl bg-black p-8 text-white sm:flex-row sm:items-center sm:justify-between">
      <div><h1 className="text-3xl font-black">Shipment Portfolio</h1><p className="mt-2 text-neutral-400">Manage real loading and shipment cases shown on the website.</p></div>
      <button onClick={() => setForm(emptyForm())} className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-bold"><Plus size={19}/> Add Shipment</button>
    </div>

    {error && <p className="mb-5 rounded-xl bg-red-50 p-4 font-semibold text-red-700">{error}</p>}
    {!visibleItems.length && <div className="rounded-3xl bg-white p-12 text-center text-neutral-500 shadow-sm"><Images className="mx-auto mb-3"/>No shipment cases yet.</div>}

    <div className="grid gap-6 xl:grid-cols-2">
      {visibleItems.map((item, index) => <article key={item._id} className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="grid grid-cols-2 gap-1 bg-neutral-100">
          <img src={item.images?.[0]?.url} alt="" className="col-span-2 aspect-[16/7] h-full w-full object-cover"/>
          <img src={item.images?.[1]?.url} alt="" className="aspect-[16/9] h-full w-full object-cover"/>
          <img src={item.images?.[2]?.url} alt="" className="aspect-[16/9] h-full w-full object-cover"/>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3"><div><span className="text-xs font-black uppercase tracking-wider text-red-600">Shipment Case {String(index + 1).padStart(2, "0")}</span><h2 className="mt-2 text-xl font-black">{item.product?.en}</h2><p dir="rtl" className="mt-1 text-right font-semibold">{item.product?.ar}</p></div><span className={`rounded-full px-3 py-1 text-xs font-bold ${item.status === "active" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>{item.status}</span></div>
          <div className="mt-5 flex gap-2"><button onClick={() => setForm(structuredClone(item))} className="flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-white"><Pencil size={15}/> Edit</button><button onClick={() => archive(item._id)} className="rounded-xl border p-2 text-red-600"><Trash2 size={18}/></button></div>
        </div>
      </article>)}
    </div>
    {form && <ShipmentForm form={form} setForm={setForm} onSubmit={save} onClose={() => setForm(null)} setError={setError}/>} 
  </Layout>;
}

function ShipmentForm({ form, setForm, onSubmit, onClose, setError }) {
  const [uploading, setUploading] = useState(false);
  const setLocalized = (group, language, value) => setForm({ ...form, [group]: { ...form[group], [language]: value } });
  const upload = async (event) => {
    const files = Array.from(event.target.files || []);
    if (files.length !== 3) return setError("Select exactly 3 images together.");
    setUploading(true); setError("");
    try {
      const body = new FormData();
      files.forEach((file) => body.append("images", file));
      const result = await apiRequest("/api/media/images", { method: "POST", body });
      setForm({ ...form, images: (result.data || []).slice(0, 3).map(({ publicId, url }) => ({ publicId, url })) });
    } catch (e) { setError(e.message); }
    finally { setUploading(false); }
  };

  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4"><form onSubmit={onSubmit} className="max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-7">
    <div className="mb-6 flex items-center justify-between"><div><h2 className="text-2xl font-black">{form._id ? "Edit" : "Add"} Shipment Case</h2><p className="mt-1 text-sm text-neutral-500">Add the content in all six website languages.</p></div><button type="button" onClick={onClose}><X/></button></div>

    {[
      ["product", "Product category"],
      ["origin", "Origin"],
      ["destination", "Destination"],
      ["scope", "Scope of work"],
      ["shipmentStatus", "Shipment status (example: Loaded)"],
      ["details", "Public details / confidentiality note"],
    ].map(([group, title]) => <section key={group} className="mb-7"><h3 className="mb-3 font-black">{title}</h3><div className="grid gap-3 md:grid-cols-2">{languages.map(([key, label]) => <label key={`${group}-${key}`} className="text-sm font-bold">{label}{group === "details" || group === "scope" ? <textarea required dir={key === "ar" ? "rtl" : "ltr"} rows="3" value={form[group]?.[key] || ""} onChange={(e) => setLocalized(group, key, e.target.value)} className="mt-2 w-full resize-y rounded-xl border p-3 outline-none focus:border-red-500"/> : <input required dir={key === "ar" ? "rtl" : "ltr"} value={form[group]?.[key] || ""} onChange={(e) => setLocalized(group, key, e.target.value)} className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-red-500"/>}</label>)}</div></section>)}

    <div className="grid gap-4 border-t pt-6 md:grid-cols-3">
      <label className="text-sm font-bold">Container type<input required value={form.container} onChange={(e) => setForm({...form, container:e.target.value})} className="mt-2 w-full rounded-xl border p-3" placeholder="40HQ"/></label>
      <label className="text-sm font-bold">Display order<input required type="number" min="1" value={form.order} onChange={(e) => setForm({...form, order:e.target.value})} className="mt-2 w-full rounded-xl border p-3"/></label>
      <label className="text-sm font-bold">Visibility<select value={form.status} onChange={(e) => setForm({...form, status:e.target.value})} className="mt-2 w-full rounded-xl border p-3"><option value="active">Active — visible</option><option value="draft">Draft — hidden</option></select></label>
    </div>

    <label className="mt-6 block rounded-2xl border-2 border-dashed p-6 text-center font-bold"><Upload className="mx-auto mb-2"/>{uploading ? "Uploading..." : "Choose exactly 3 images"}<input type="file" multiple accept="image/jpeg,image/png,image/webp,image/avif" onChange={upload} className="hidden"/></label>
    {!!form.images?.length && <div className="mt-4 grid grid-cols-2 gap-3">{form.images.map((image, i) => <img key={image.url} src={image.url} alt={`Upload ${i + 1}`} className={`${i === 0 ? "col-span-2 aspect-[16/7]" : "aspect-[16/9]"} w-full rounded-xl object-cover`}/>)}</div>}
    <button disabled={uploading || form.images.length !== 3} className="mt-7 w-full rounded-xl bg-red-600 p-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50">Save Shipment Case</button>
  </form></div>;
}
