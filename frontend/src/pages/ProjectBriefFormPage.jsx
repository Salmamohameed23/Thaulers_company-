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
import { API_BASE_URL } from "../config/api";
import { useLanguage } from "../i18n/LanguageContext";

const productionGroups = [
  {
    label: "Waste & Recycling Lines",
    lineIndexes: [0, 1, 2, 3],
    options: [
      "Municipal Solid Waste Sorting Line",
      "Food Waste Compost Production Line",
      "Centralized City Waste Processing Line",
      "Medical Waste Incinerator Line",
    ],
  },
  {
    label: "Metal & Cable Lines",
    lineIndexes: [5, 6, 7],
    options: [
      "Aluminum Recycling to Cable Production Line",
      "Metal Pipe Production Line",
      "Steel Coil Slitting Line",
    ],
  },
  {
    label: "Packaging Production Lines",
    lineIndexes: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
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
    lineIndexes: [4],
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
  const { lang, t } = useLanguage();
  const copy = t.projectBriefPage;
  const isAr = lang === "ar";
  const [step, setStep] = useState("form");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [referenceCode, setReferenceCode] = useState("");
  const [attachments, setAttachments] = useState([]);

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
  const regionNames = useMemo(
    () => new Intl.DisplayNames([lang], { type: "region" }),
    [lang],
  );

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

  const displayCountryName = form.country
    ? regionNames.of(form.country) || countryName
    : "";

  const displayLineType = productionGroups.reduce((translated, group) => {
    const itemIndex = group.options.indexOf(form.productionLineType);
    if (itemIndex < 0) return translated;
    return (
      copy.lineTitles?.[group.lineIndexes[itemIndex]] ||
      t.productionLinesPage.lines[group.lineIndexes[itemIndex]]?.title ||
      form.productionLineType
    );
  }, form.productionLineType);

  const factorySpaceIndex = factorySpaces.indexOf(form.factorySpace);
  const displayFactorySpace =
    factorySpaceIndex >= 0
      ? copy.factorySpaces[factorySpaceIndex]
      : form.factorySpace;

  const inputClass =
    "h-[46px] w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10";

  const inputWithIcon = `h-[46px] w-full rounded-xl border border-gray-200 bg-white text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 ${isAr ? "pl-4 pr-11" : "pl-11 pr-4"}`;

  const selectWithIcon = `h-[46px] w-full appearance-none rounded-xl border border-gray-200 bg-white text-sm text-gray-900 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-500/10 disabled:bg-gray-50 disabled:text-gray-400 ${isAr ? "pl-10 pr-11" : "pl-11 pr-10"}`;

  const leadingIconClass = `absolute top-3.5 h-4 w-4 text-gray-400 ${isAr ? "right-4" : "left-4"}`;
  const selectArrowClass = `pointer-events-none absolute top-3.5 h-4 w-4 text-gray-400 ${isAr ? "left-4" : "right-4"}`;

  const labelClass = "mb-2 block text-xs font-black text-black";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitError("");
    if (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.country ||
      !form.city ||
      !form.productionLineType
    ) {
      setSubmitError(copy.requiredError);
      return;
    }
    setStep("summary");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const finalSubmit = async () => {
    setSubmitLoading(true);
    setSubmitError("");
    try {
      const payload = new FormData();
      payload.append(
        "payload",
        JSON.stringify({
          ...form,
          country: countryName,
          countryCode: form.country,
        }),
      );
      attachments.forEach((file) => payload.append("attachments", file));

      const response = await fetch(`${API_BASE_URL}/api/project-briefs`, {
        method: "POST",
        body: payload,
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || copy.submissionFailed);
      }
      setReferenceCode(data.referenceCode);
      setStep("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Project brief submission error:", error);
      setSubmitError(error.message || copy.submissionFailed);
    } finally {
      setSubmitLoading(false);
    }
  };

  const SummaryRow = ({ label, value }) => (
    <div className="grid gap-2 border-b border-gray-100 px-6 py-4 md:grid-cols-[220px_1fr]">
      <p className="text-sm font-black text-black">{label}</p>
      <p className="text-sm leading-6 text-gray-600">{value || "—"}</p>
    </div>
  );

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className={`relative bg-[#f6f6f6] text-black ${isAr ? "font-[Cairo]" : ""}`}
    >
      {/* HERO */}
      <section className="relative overflow-hidden py-24 text-white">
        {/* الصورة */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/production-lines/hero.webp')",
          }}
        />

        {/* overlay غامق */}
        <div className="absolute inset-0 bg-black/70" />

        {/* المحتوى */}
        <div className="relative mx-auto max-w-7xl px-6">
          <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            {copy.heroTitle}{" "}
            <span className="block text-[#ee4036]">{copy.heroHighlight}</span>
          </h1>

          <p className="mt-6 max-w-3xl text-sm font-medium leading-7 text-white/80">
            {copy.heroDesc}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          {/* LEFT */}
          <aside>
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
              {copy.badge}
            </p>

            <h2 className="max-w-lg text-4xl font-black leading-tight text-black md:text-5xl">
              {copy.introTitle}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-600">
              {copy.introDesc}
            </p>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <h3 className="mb-5 text-lg font-black text-black">
                {copy.supportTitle}
              </h3>

              <div className="space-y-3">
                {copy.supportScope.map((item) => (
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
                    <label className={labelClass}>{copy.fields.fullName}</label>
                    <div className="relative">
                      <User className={leadingIconClass} />
                      <input
                        className={inputWithIcon}
                        placeholder={copy.placeholders.name}
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{copy.fields.company}</label>
                    <input
                      className={inputClass}
                      placeholder={copy.placeholders.company}
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{copy.fields.email}</label>
                    <div className="relative">
                      <Mail className={leadingIconClass} />
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
                    <label className={labelClass}>{copy.fields.phone}</label>
                    <div className="relative">
                      <Phone className={leadingIconClass} />
                      <input
                        className={inputWithIcon}
                        placeholder="+00 000 000 000"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{copy.fields.country}</label>
                    <div className="relative">
                      <Globe2 className={leadingIconClass} />
                      <select
                        className={selectWithIcon}
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                      >
                        <option value="">{copy.placeholders.country}</option>
                        {countries.map((country) => (
                          <option key={country.isoCode} value={country.isoCode}>
                            {regionNames.of(country.isoCode) || country.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className={selectArrowClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{copy.fields.city}</label>
                    <div className="relative">
                      <MapPin className={leadingIconClass} />
                      <select
                        className={selectWithIcon}
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                        disabled={!form.country}
                      >
                        <option value="">
                          {form.country
                            ? copy.placeholders.city
                            : copy.placeholders.countryFirst}
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
                      <ChevronDown className={selectArrowClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      {copy.fields.targetDate}
                    </label>
                    <div className="relative">
                      <Calendar className={leadingIconClass} />
                      <input
                        type="date"
                        className={inputWithIcon}
                        min={new Date().toISOString().split("T")[0]}
                        value={form.targetDate}
                        onChange={(e) => update("targetDate", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>{copy.fields.lineType}</label>
                    <div className="relative">
                      <Factory className={leadingIconClass} />
                      <select
                        className={selectWithIcon}
                        value={form.productionLineType}
                        onChange={(e) =>
                          update("productionLineType", e.target.value)
                        }
                      >
                        <option value="">{copy.placeholders.lineType}</option>

                        {productionGroups.map((group, groupIndex) => (
                          <optgroup
                            key={group.label}
                            label={copy.productionGroupLabels[groupIndex]}
                          >
                            {group.options.map((item, itemIndex) => (
                              <option key={item} value={item}>
                                {copy.lineTitles?.[
                                  group.lineIndexes[itemIndex]
                                ] ||
                                  t.productionLinesPage.lines[
                                    group.lineIndexes[itemIndex]
                                  ]?.title ||
                                  item}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <ChevronDown className={selectArrowClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{copy.fields.capacity}</label>
                    <input
                      className={inputClass}
                      placeholder={copy.placeholders.capacity}
                      value={form.capacity}
                      onChange={(e) => update("capacity", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>{copy.fields.budget}</label>
                    <input
                      className={inputClass}
                      placeholder={copy.placeholders.budget}
                      value={form.budget}
                      onChange={(e) => update("budget", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      {copy.fields.rawMaterial}
                    </label>
                    <div className="relative">
                      <Package className={leadingIconClass} />
                      <input
                        className={inputWithIcon}
                        placeholder={copy.placeholders.rawMaterial}
                        value={form.rawMaterial}
                        onChange={(e) => update("rawMaterial", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      {copy.fields.finalProduct}
                    </label>
                    <input
                      className={inputClass}
                      placeholder={copy.placeholders.finalProduct}
                      value={form.finalProduct}
                      onChange={(e) => update("finalProduct", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      {copy.fields.factorySpace}
                    </label>
                    <div className="relative">
                      <select
                        className={`${inputClass} appearance-none pr-10`}
                        value={form.factorySpace}
                        onChange={(e) => update("factorySpace", e.target.value)}
                      >
                        <option value="">
                          {copy.placeholders.factorySpace}
                        </option>
                        {factorySpaces.map((item, index) => (
                          <option key={item} value={item}>
                            {copy.factorySpaces[index]}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className={selectArrowClass} />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>{copy.fields.details}</label>
                    <textarea
                      rows="6"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
                      placeholder={copy.placeholders.details}
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
                        {copy.attachmentsTitle}
                      </p>
                      <p className="mt-2 text-xs leading-6 text-gray-600">
                        {copy.attachmentsDesc}
                      </p>
                      <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-black px-5 py-3 text-xs font-black text-white transition hover:bg-red-600">
                        <FileText className="h-4 w-4" />
                        {copy.chooseAttachments}
                        <input
                          type="file"
                          multiple
                          accept=".jpg,.jpeg,.png,.webp,.avif,.pdf,.doc,.docx,.xls,.xlsx"
                          className="hidden"
                          onChange={(e) => {
                            const selected = Array.from(e.target.files || []);
                            if (
                              selected.some(
                                (file) => file.size > 10 * 1024 * 1024,
                              )
                            ) {
                              setSubmitError(copy.attachmentTooLarge);
                              e.target.value = "";
                              return;
                            }
                            setAttachments((current) =>
                              [...current, ...selected].slice(0, 5),
                            );
                            setSubmitError("");
                            e.target.value = "";
                          }}
                        />
                      </label>
                      <p className="mt-2 text-[11px] text-gray-500">
                        {copy.attachmentHelp}
                      </p>
                    </div>
                  </div>
                  {attachments.length > 0 && (
                    <div className="mt-4 grid gap-2">
                      {attachments.map((file, index) => (
                        <div
                          key={`${file.name}-${index}`}
                          className="flex items-center justify-between rounded-lg border bg-white px-4 py-3 text-xs"
                        >
                          <span className="min-w-0 truncate font-bold">
                            {file.name}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setAttachments((files) =>
                                files.filter(
                                  (_, itemIndex) => itemIndex !== index,
                                ),
                              )
                            }
                            className={`${isAr ? "mr-3" : "ml-3"} font-black text-red-600`}
                          >
                            {copy.remove}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {submitError && (
                  <p className="mt-5 rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center gap-3 bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700"
                >
                  {copy.submitBrief}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            ) : step === "summary" ? (
              <div>
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.45em] text-red-600">
                  {copy.summaryBadge}
                </p>

                <h2 className="text-3xl font-black text-black">
                  {copy.summaryTitle}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {copy.summaryDesc}
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="border-b border-gray-200 bg-gray-50 px-6 py-5">
                    <h3 className="text-lg font-black text-black">
                      {copy.summaryCardTitle}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {copy.summaryCardDesc}
                    </p>
                  </div>

                  <SummaryRow
                    label={copy.fields.fullName}
                    value={form.fullName}
                  />
                  <SummaryRow
                    label={copy.fields.company}
                    value={form.company}
                  />
                  <SummaryRow label={copy.fields.email} value={form.email} />
                  <SummaryRow label={copy.fields.phone} value={form.phone} />
                  <SummaryRow
                    label={copy.destination}
                    value={`${displayCountryName}${form.city ? ` / ${form.city}` : ""}`}
                  />
                  <SummaryRow
                    label={copy.fields.targetDate}
                    value={form.targetDate}
                  />
                  <SummaryRow
                    label={copy.fields.lineType}
                    value={displayLineType}
                  />
                  <SummaryRow
                    label={copy.fields.capacity}
                    value={form.capacity}
                  />
                  <SummaryRow label={copy.fields.budget} value={form.budget} />
                  <SummaryRow
                    label={copy.fields.rawMaterial}
                    value={form.rawMaterial}
                  />
                  <SummaryRow
                    label={copy.fields.finalProduct}
                    value={form.finalProduct}
                  />
                  <SummaryRow
                    label={copy.fields.factorySpace}
                    value={displayFactorySpace}
                  />

                  <div className="px-6 py-5">
                    <p className="mb-2 text-sm font-black text-black">
                      {copy.fields.details}
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
                    {copy.backEdit}
                  </button>

                  <button
                    type="button"
                    onClick={finalSubmit}
                    disabled={submitLoading}
                    className="w-full bg-red-600 px-8 py-4 text-sm font-black text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitLoading ? copy.submitting : copy.finalSubmit}
                  </button>
                </div>
                {submitError && (
                  <p className="mt-5 rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700">
                    {submitError}
                  </p>
                )}
              </div>
            ) : (
              <div className="py-16 text-center">
                <CheckCircle className="mx-auto h-16 w-16 text-emerald-600" />
                <h2 className="mt-6 text-3xl font-black">
                  {copy.successTitle}
                </h2>
                <p className="mt-3 text-gray-600">{copy.successDesc}</p>
                <p className="mt-5 font-black text-red-600">
                  {copy.reference}: {referenceCode}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
