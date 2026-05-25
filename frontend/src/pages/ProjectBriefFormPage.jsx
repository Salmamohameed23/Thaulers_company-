import { useMemo, useState } from "react";
import { Country, City } from "country-state-city";
import {
  Calendar,
  CheckCircle,
  ChevronDown,
  Factory,
  FileText,
  Globe2,
  Mail,
  MapPin,
  Package,
  Phone,
  Send,
  User,
} from "lucide-react";

const supportScope = [
  "Technical requirement collection",
  "Factory sourcing and comparison",
  "Process flow and layout discussion",
  "Quotation review and scope clarification",
  "Auxiliary equipment checklist",
  "Shipment and export coordination",
  "Installation and commissioning communication",
  "After-sales follow-up support",
];

const productionGroups = [
  {
    label: "Waste & Recycling Lines",
    options: [
      "Municipal Solid Waste Sorting Line",
      "Food Waste Compost Production Line",
      "Centralized City Waste Processing Line",
      "Medical Waste Incinerator Line",
    ],
  },
  {
    label: "Metal & Cable Lines",
    options: [
      "Aluminum Recycling to Cable Production Line",
      "Metal Pipe Production Line",
      "Steel Coil Slitting Line",
    ],
  },
  {
    label: "Packaging Production Lines",
    options: [
      "Automatic Filling & Packing Line",
      "Carton Box Production Line",
      "Corrugated Cardboard Production Line",
      "Flexible Packaging Printing & Lamination Line",
      "Labeling & Shrink Wrapping Production Line",
      "Non-Woven Bag Production Line",
      "Paper Bag Production Line",
      "Plastic Bag Making Production Line",
      "Rigid Box Production Line",
      "Stand-Up Pouch Making Line",
    ],
  },
  {
    label: "Textile / Fiber Lines",
    options: ["Recycled Polyester Staple Fiber Production Line"],
  },
];

const factorySpaces = [
  "Not available yet",
  "Under 500 m²",
  "500–1,000 m²",
  "1,000–3,000 m²",
  "3,000–10,000 m²",
  "More than 10,000 m²",
];

export default function ProjectBriefFormPage() {
  const [step, setStep] = useState("form");

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    targetDate: "",
    productionLineType: "",
    capacity: "",
    budget: "",
    rawMaterial: "",
    finalProduct: "",
    factorySpace: "",
    projectDetails: "",
  });

  const countries = Country.getAllCountries();

  const cities = useMemo(() => {
    if (!form.country) return [];
    return City.getCitiesOfCountry(form.country) || [];
  }, [form.country]);

  const update = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
      ...(key === "country" ? { city: "" } : {}),
    }));
  };

  const countryName =
    countries.find((item) => item.isoCode === form.country)?.name || "";

  const inputClass =
    "h-[46px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10";

  const inputWithIcon =
    "h-[46px] w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10";

  const selectWithIcon =
    "h-[46px] w-full appearance-none rounded-xl border border-gray-200 bg-white pl-11 pr-10 text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-500/10 disabled:bg-gray-50 disabled:text-gray-400";

  const labelClass = "mb-2 block text-xs font-black text-black";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep("summary");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const finalSubmit = () => {
    console.log("Project Brief:", {
      ...form,
      country: countryName,
    });
    alert("Project brief submitted successfully.");
  };

  const SummaryRow = ({ label, value }) => (
    <div className="grid gap-2 border-b border-gray-100 px-6 py-4 md:grid-cols-[220px_1fr]">
      <p className="text-sm font-black text-black">{label}</p>
      <p className="text-sm leading-6 text-gray-600">{value || "—"}</p>
    </div>
  );

  return (
    <main className="bg-[#f6f6f6]  relative text-black">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 text-white">
        {/* الصورة */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/production-lines/hero.png')",
          }}
        />

        {/* overlay غامق */}
        <div className="absolute inset-0 bg-black/70" />

        {/* المحتوى */}
        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Submit Your{" "}
            <span className="block text-[#ee4036]">
              Production Line Requirement
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-sm font-medium leading-7 text-white/80">
            Fill this form with your production target, raw material input,
            expected output, capacity, budget and factory situation.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          {/* LEFT */}
          <aside>
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
              Project Brief Form
            </p>

            <h2 className="max-w-lg text-4xl font-black leading-tight text-black md:text-5xl">
              The Information We Need Before Quotation
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-600">
              This dedicated page is designed to collect the essential project
              information before contacting factories or requesting quotations.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <h3 className="mb-5 text-lg font-black text-black">
                TOUGH HAULERS Support Scope
              </h3>

              <div className="space-y-3">
                {supportScope.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-red-500" />
                    <p className="text-sm font-semibold leading-6 text-gray-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            {step === "form" ? (
              <form onSubmit={handleFormSubmit}>
                <div className="grid gap-x-5 gap-y-4 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                      <input
                        className={inputWithIcon}
                        placeholder="Your name"
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Company Name</label>
                    <input
                      className={inputClass}
                      placeholder="Your company"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                      <input
                        type="email"
                        className={inputWithIcon}
                        placeholder="name@example.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Phone / WhatsApp</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                      <input
                        className={inputWithIcon}
                        placeholder="+00 000 000 000"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Destination Country</label>
                    <div className="relative">
                      <Globe2 className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                      <select
                        className={selectWithIcon}
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                      >
                        <option value="">Select country</option>
                        {countries.map((country) => (
                          <option key={country.isoCode} value={country.isoCode}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-3.5 h-4 w-4 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Destination City</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                      <select
                        className={selectWithIcon}
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                        disabled={!form.country}
                      >
                        <option value="">
                          {form.country
                            ? "Select city"
                            : "Select country first"}
                        </option>

                        {cities.map((city) => (
                          <option
                            key={`${city.name}-${city.latitude}-${city.longitude}`}
                            value={city.name}
                          >
                            {city.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-3.5 h-4 w-4 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Target Installation Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                      <input
                        className={inputWithIcon}
                        placeholder="Expected timeline"
                        value={form.targetDate}
                        onChange={(e) => update("targetDate", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>Production Line Type</label>
                    <div className="relative">
                      <Factory className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                      <select
                        className={selectWithIcon}
                        value={form.productionLineType}
                        onChange={(e) =>
                          update("productionLineType", e.target.value)
                        }
                      >
                        <option value="">Select production line type</option>

                        {productionGroups.map((group) => (
                          <optgroup key={group.label} label={group.label}>
                            {group.options.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-3.5 h-4 w-4 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Required Capacity</label>
                    <input
                      className={inputClass}
                      placeholder="Example: 20 TPD / 1000 kg/h"
                      value={form.capacity}
                      onChange={(e) => update("capacity", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Budget Range</label>
                    <input
                      className={inputClass}
                      placeholder="Example: USD 300,000 - 800,000"
                      value={form.budget}
                      onChange={(e) => update("budget", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Raw Material Input</label>
                    <div className="relative">
                      <Package className="absolute left-4 top-3.5 h-4 w-4 text-gray-400" />
                      <input
                        className={inputWithIcon}
                        placeholder="Example: PET flakes / food waste"
                        value={form.rawMaterial}
                        onChange={(e) => update("rawMaterial", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Raw Material Output / Final Product
                    </label>
                    <input
                      className={inputClass}
                      placeholder="Example: compost powder / PSI"
                      value={form.finalProduct}
                      onChange={(e) => update("finalProduct", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Factory Space Available
                    </label>
                    <div className="relative">
                      <select
                        className={`${inputClass} appearance-none pr-10`}
                        value={form.factorySpace}
                        onChange={(e) => update("factorySpace", e.target.value)}
                      >
                        <option value="">Select factory space status</option>
                        {factorySpaces.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-3.5 h-4 w-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>Project Details</label>
                    <textarea
                      rows="6"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                      placeholder="Write your raw material input, expected output/final product, input condition, output specification, capacity, automation level, electricity/steam/air requirements, existing factory situation, expected shipment country and any special technical requirements..."
                      value={form.projectDetails}
                      onChange={(e) => update("projectDetails", e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <div className="flex items-start gap-3">
                    <FileText className="mt-1 h-5 w-5 text-red-500" />
                    <div>
                      <p className="text-sm font-black text-black">
                        Attachments Recommended
                      </p>
                      <p className="mt-2 text-xs leading-6 text-gray-600">
                        Factory layout, land dimensions, raw material photos,
                        final product samples, capacity target, existing
                        quotation, or reference machine pictures.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center gap-3 bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700"
                >
                  Submit Project Brief
                  <Send className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div>
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
                  Project Brief Summary
                </p>

                <h2 className="text-3xl font-black text-black">
                  Review Your Information Before Final Submit
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Please review all information carefully before submitting your
                  project brief to TOUGH HAULERS.
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="border-b border-gray-200 bg-gray-50 px-6 py-5">
                    <h3 className="text-lg font-black text-black">
                      Production Line Project Brief
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Summary of your submitted requirement
                    </p>
                  </div>

                  <SummaryRow label="Full Name" value={form.fullName} />
                  <SummaryRow label="Company" value={form.company} />
                  <SummaryRow label="Email" value={form.email} />
                  <SummaryRow label="Phone / WhatsApp" value={form.phone} />
                  <SummaryRow
                    label="Destination"
                    value={`${countryName}${form.city ? ` / ${form.city}` : ""}`}
                  />
                  <SummaryRow
                    label="Target Installation Date"
                    value={form.targetDate}
                  />
                  <SummaryRow
                    label="Production Line Type"
                    value={form.productionLineType}
                  />
                  <SummaryRow label="Required Capacity" value={form.capacity} />
                  <SummaryRow label="Budget Range" value={form.budget} />
                  <SummaryRow
                    label="Raw Material Input"
                    value={form.rawMaterial}
                  />
                  <SummaryRow label="Final Product" value={form.finalProduct} />
                  <SummaryRow
                    label="Factory Space Available"
                    value={form.factorySpace}
                  />

                  <div className="px-6 py-5">
                    <p className="mb-2 text-sm font-black text-black">
                      Project Details
                    </p>
                    <p className="whitespace-pre-line text-sm leading-7 text-gray-600">
                      {form.projectDetails || "—"}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setStep("form")}
                    className="w-full border border-gray-300 px-8 py-4 text-sm font-black text-black transition hover:border-red-600 hover:text-red-600"
                  >
                    Back & Edit
                  </button>

                  <button
                    type="button"
                    onClick={finalSubmit}
                    className="w-full bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700"
                  >
                    Submit Final Brief
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
