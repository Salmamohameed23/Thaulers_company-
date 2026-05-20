import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import bgImg from "../assets/images/build_bg.png";
import villaImg from "../assets/images/build_1.png";
import hotelImg from "../assets/images/build_2.png";
import commercialImg from "../assets/images/build_3.png";
import factoryImg from "../assets/images/build_4.png";
import desertImg from "../assets/images/build_5.png";
import otherImg from "../assets/images/build_6.png";

import solarImg from "../assets/images/build_7.png";
import batteryImg from "../assets/images/build_8.png";
import offgridImg from "../assets/images/build_9.png";
import epcImg from "../assets/images/build_10.png";
import API_BASE_URL from "../../backend/src/config/api.js";
const projectImages = [
  villaImg,
  hotelImg,
  commercialImg,
  factoryImg,
  desertImg,
  otherImg,
];

const solutionImages = [solarImg, batteryImg, offgridImg, epcImg];

const locations = [
  {
    name: "Riyadh, Saudi Arabia",
    temps: [15, 18, 22, 27, 33, 36, 38, 38, 35, 29, 23, 17],
  },
  {
    name: "Dubai, UAE",
    temps: [19, 21, 24, 28, 33, 36, 38, 38, 35, 31, 26, 21],
  },
  {
    name: "Cairo, Egypt",
    temps: [14, 16, 19, 23, 27, 30, 31, 31, 29, 25, 20, 16],
  },
  {
    name: "Yiwu, China",
    temps: [5, 7, 11, 17, 22, 25, 29, 29, 24, 19, 13, 7],
  },
  {
    name: "Shenzhen, China",
    temps: [15, 16, 19, 23, 26, 28, 30, 30, 28, 25, 21, 17],
  },
  {
    name: "São Paulo, Brazil",
    temps: [23, 23, 22, 20, 17, 16, 16, 18, 19, 20, 21, 22],
  },
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LetsBuild = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";
  const page = t.letsBuildPage;

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);
const [locationResults, setLocationResults] = useState([]);
const [selectedLocation, setSelectedLocation] = useState(null);
const [climateLoading, setClimateLoading] = useState(false);
const [locationError, setLocationError] = useState("");
const [form, setForm] = useState({
  projectType: "",
  solutions: [],
  size: "",
  timeline: "",
  location: "",
  latitude: "",
  longitude: "",
  timezone: "",
  monthlyTemperatures: [],
  name: "",
  company: "",
  email: "",
  phone: "",
  notes: "",
});
const [submitLoading, setSubmitLoading] = useState(false);
const [submitError, setSubmitError] = useState("");
const [referenceCode, setReferenceCode] = useState("");
  const projectTypes = page.projectTypes.map((item, index) => ({
    ...item,
    image: projectImages[index],
  }));

  const solutionTypes = page.solutionTypes.map((item, index) => ({
    ...item,
    image: solutionImages[index],
  }));

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleSolution = (value) => {
    setForm((prev) => {
      const exists = prev.solutions.includes(value);

      return {
        ...prev,
        solutions: exists
          ? prev.solutions.filter((item) => item !== value)
          : [...prev.solutions, value],
      };
    });
  };

const handleLocationSearch = async (value) => {
  setLocationQuery(value);
  setLocationOpen(true);
  setLocationError("");
  update("location", "");
  setSelectedLocation(null);

  if (value.trim().length < 2) {
    setLocationResults([]);
    return;
  }

  try {
    const res = await fetch(
      `${API_BASE_URL}/api/locations/search?q=${encodeURIComponent(
        value,
      )}&lang=${lang}`,
    );

    const data = await res.json();

    if (data.success) {
      setLocationResults(data.data);
    }
  } catch (error) {
    console.error(error);
    setLocationError("Location search failed. Please try again.");
  }
};

const handleSelectLocation = async (item) => {
  setLocationQuery(item.displayName);

  update("location", item.displayName);
  update("latitude", item.latitude);
  update("longitude", item.longitude);
  update("timezone", item.timezone || "auto");

  setLocationOpen(false);
  setLocationResults([]);
  setClimateLoading(true);
  setLocationError("");

  try {
    const params = new URLSearchParams({
      latitude: item.latitude,
      longitude: item.longitude,
      name: item.name,
      country: item.country,
      countryCode: item.countryCode || "",
      timezone: item.timezone || "auto",
    });

const res = await fetch(
  `${API_BASE_URL}/api/locations/climate/monthly?${params.toString()}`,
);

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Climate request failed");
    }

    update("monthlyTemperatures", data.data.monthlyTemperatures);

    setSelectedLocation({
      ...item,
      monthlyTemperatures: data.data.monthlyTemperatures,
    });
  } catch (error) {
    console.error(error);
    setLocationError("Climate data failed. Please select another city.");
  } finally {
    setClimateLoading(false);
  }
};
  const canContinue = useMemo(() => {
    if (step === 1) return Boolean(form.projectType);
    if (step === 2) return form.solutions.length > 0;
    if (step === 3) return Boolean(form.size && form.timeline && form.location);
    if (step === 4) return Boolean(form.name && form.email && form.phone);
    return true;
  }, [step, form]);

  const nextStep = () => {
    if (step < 5 && canContinue) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };



const submitInquiry = async () => {
  setSubmitLoading(true);
  setSubmitError("");

  try {
    const res = await fetch(`${API_BASE_URL}/api/build-requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || "Failed to submit request");
    }

    setReferenceCode(data.referenceCode);
    setSubmitted(true);
  } catch (error) {
    console.error(error);
    setSubmitError("Request submission failed. Please try again.");
  } finally {
    setSubmitLoading(false);
  }
};

const resetWizard = () => {
  setStep(1);
  setSubmitted(false);
  setLocationQuery("");
  setLocationOpen(false);
  setLocationResults([]);
  setSelectedLocation(null);
  setClimateLoading(false);
  setLocationError("");
  setSubmitError("");
  setReferenceCode("");

  setForm({
    projectType: "",
    solutions: [],
    size: "",
    timeline: "",
    location: "",
    latitude: "",
    longitude: "",
    timezone: "",
    monthlyTemperatures: [],
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });
};
  const progress = submitted ? 100 : (step / 5) * 100;

  const renderOptionCard = (item, active, onClick) => (
    <motion.button
      key={item.label}
      type="button"
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden rounded-[28px] border transition-all duration-300 ${
        isAr ? "text-right" : "text-left"
      } ${
        active
          ? "border-red-600 bg-red-50 shadow-[0_24px_70px_rgba(220,38,38,0.18)]"
          : "border-black/10 bg-white hover:border-red-500/40 hover:shadow-[0_22px_55px_rgba(0,0,0,0.10)]"
      }`}
    >
      <div className="relative h-[145px] sm:h-[165px] lg:h-[175px] w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.label}
          className="h-full w-full scale-[1.5] object-cover object-center transition-transform duration-700 group-hover:scale-[2]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        {active && (
          <div
            className={`absolute top-5 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.65)] ${
              isAr ? "left-5" : "right-5"
            }`}
          >
            <Check size={18} />
          </div>
        )}

        <div className="absolute bottom-5 left-6 right-6">
          <p className="text-[20px] font-black leading-6 text-white">
            {item.label}
          </p>

          <p className="mt-2 text-[14px] font-medium leading-6 text-white/75">
            {item.sub}
          </p>
        </div>
      </div>
    </motion.button>
  );

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className={`relative min-h-screen overflow-x-hidden text-neutral-950 ${
        isAr ? "font-[Cairo]" : ""
      }`}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      <section className="relative overflow-hidden py-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="overflow-hidden rounded-[24px] sm:rounded-[34px] bg-white/85 shadow-[0_30px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          >
            <div className="bg-neutral-950 px-6 py-7 text-white sm:px-8">
              <div className="grid gap-7 md:grid-cols-[1fr_0.85fr] md:items-center">
                <div className={isAr ? "text-right" : ""}>
                  <h1 className="text-[24px] font-black leading-tight tracking-[-0.03em] sm:text-[35px]">
                    {page.title}
                  </h1>

                  <p className="mt-3 text-sm font-medium text-white/65">
                    {page.subtitle}
                  </p>

                  <p className="mt-3 text-sm font-medium text-white/65">
                    {submitted
                      ? page.prepared
                      : `${page.stepLabel} ${step} ${page.ofLabel} 5 — ${
                          page.steps[step - 1]
                        }`}
                  </p>
                </div>

                <div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-red-600 transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {page.steps.map((item, index) => (
                      <div
                        key={item}
                        className={`h-1 rounded-full transition ${
                          submitted || index + 1 <= step
                            ? "bg-red-600"
                            : "bg-white/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-8 lg:p-9">
              {!submitted && (
                <>
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className={isAr ? "text-right" : ""}
                    >
                      <h2 className="text-[26px] font-black leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[30px]">
                        {page.projectQuestion}
                      </h2>

                      <p className="mt-3 text-[15px] font-medium leading-7 text-neutral-500">
                        {page.projectDesc}
                      </p>

                      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {projectTypes.map((item) =>
                          renderOptionCard(
                            item,
                            form.projectType === item.label,
                            () => update("projectType", item.label),
                          ),
                        )}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className={isAr ? "text-right" : ""}
                    >
                      <h2 className="text-[26px] font-black leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[30px]">
                        {page.solutionQuestion}
                      </h2>

                      <p className="mt-3 text-[15px] font-medium leading-7 text-neutral-500">
                        {page.solutionDesc}
                      </p>

                      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {solutionTypes.map((item) =>
                          renderOptionCard(
                            item,
                            form.solutions.includes(item.label),
                            () => toggleSolution(item.label),
                          ),
                        )}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className={isAr ? "text-right" : ""}
                    >
                      <h2 className="text-[26px] font-black leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[30px]">
                        {page.scaleTitle}
                      </h2>

                      <p className="mt-3 text-[15px] font-medium leading-7 text-neutral-500">
                        {page.scaleDesc}
                      </p>

                      <div className="mt-8 grid gap-8 lg:grid-cols-2">
                        <div>
                          <p className="mb-4 text-sm font-medium text-neutral-800">
                            {page.sizeLabel}
                          </p>

                          <div className="flex flex-wrap gap-3">
                            {page.sizes.map((item) => (
                              <button
                                key={item}
                                type="button"
                                onClick={() => update("size", item)}
                                className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
                                  form.size === item
                                    ? "border-red-600 bg-red-50 text-red-600"
                                    : "border-black/10 text-neutral-600 hover:border-red-600/35 hover:text-red-600"
                                }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="mb-4 text-sm font-medium text-neutral-800">
                            {page.timelineLabel}
                          </p>

                          <div className="flex flex-wrap gap-3">
                            {page.timelines.map((item) => (
                              <button
                                key={item}
                                type="button"
                                onClick={() => update("timeline", item)}
                                className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
                                  form.timeline === item
                                    ? "border-red-600 bg-red-50 text-red-600"
                                    : "border-black/10 text-neutral-600 hover:border-red-600/35 hover:text-red-600"
                                }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <label className="mb-3 block text-sm font-medium text-neutral-800">
                          {page.locationLabel}
                        </label>

                        <input
                          type="text"
                          value={locationQuery || form.location}
                          onFocus={() => setLocationOpen(true)}
                          onChange={(e) => handleLocationSearch(e.target.value)}
                          placeholder={page.locationPlaceholder}
                          className={`h-14 w-full rounded-2xl border border-black/10 bg-white px-5 text-base font-medium outline-none sm:text-[15px] transition focus:border-red-600 ${
                            isAr ? "text-right" : ""
                          }`}
                        />

                        {locationOpen && locationResults.length > 0 && (
                          <div className="mt-3 max-h-[240px] overflow-y-auto rounded-2xl border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
                            {locationResults.map((item) => (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => handleSelectLocation(item)}
                                className={`block w-full px-5 py-4 text-[15px] font-semibold text-neutral-700 transition hover:bg-red-50 hover:text-red-600 ${
                                  isAr ? "text-right" : "text-left"
                                }`}
                              >
                                {item.displayName}
                              </button>
                            ))}
                          </div>
                        )}

                        {climateLoading && (
                          <p className="mt-3 text-sm font-semibold text-red-600">
                            Loading monthly temperature data...
                          </p>
                        )}

                        {locationError && (
                          <p className="mt-3 text-sm font-semibold text-red-600">
                            {locationError}
                          </p>
                        )}

                        {selectedLocation && (
                          <div className="mt-6 rounded-[28px] border border-black/10 bg-neutral-50 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                            <div className="mb-5">
                              <p
                                className={`text-sm font-black text-red-600 ${
                                  isAr
                                    ? "tracking-normal text-right"
                                    : "uppercase tracking-[0.22em]"
                                }`}
                              >
                                {page.weatherTitle}
                              </p>

                              <p className="mt-2 text-sm font-medium text-neutral-500">
                                {page.weatherDesc} {selectedLocation.name}
                              </p>
                            </div>

                            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 md:grid-cols-12">
                              {selectedLocation.monthlyTemperatures.map(
                                (item, index) => {
                                  const temp = item.temp;
                                  const height = Math.max(36, temp * 2.2);

                                  return (
                                    <div
                                      key={item.month}
                                      className="flex flex-col items-center gap-2"
                                    >
                                      <div className="flex h-[90px] sm:h-[110px] items-end">
                                        <div
                                          className="w-5 rounded-full bg-red-600/80 shadow-[0_8px_20px_rgba(220,38,38,0.22)]"
                                          style={{ height: `${height}px` }}
                                        />
                                      </div>

                                      <p className="text-[11px] font-bold text-neutral-400">
                                        {item.month}{" "}
                                      </p>

                                      <p className="text-[12px] font-black text-neutral-900">
                                        {temp}°
                                      </p>
                                    </div>
                                  );
                                },
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className={isAr ? "text-right" : ""}
                    >
                      <h2 className="text-[26px] font-black leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[30px]">
                        {page.contactTitle}
                      </h2>

                      <p className="mt-3 text-[15px] font-medium leading-7 text-neutral-500">
                        {page.contactDesc}
                      </p>

                      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {[
                          ["name", page.fullName, page.namePlaceholder, "text"],
                          [
                            "company",
                            page.company,
                            page.companyPlaceholder,
                            "text",
                          ],
                          ["email", page.email, page.emailPlaceholder, "email"],
                          ["phone", page.phone, page.phonePlaceholder, "tel"],
                        ].map(([key, label, placeholder, type]) => (
                          <div key={key}>
                            <label className="mb-2 block text-sm font-medium text-neutral-800">
                              {label}
                            </label>

                            <input
                              type={type}
                              value={form[key]}
                              onChange={(e) => update(key, e.target.value)}
                              placeholder={placeholder}
                              className={`h-14 w-full rounded-2xl border border-black/10 px-5 text-base font-medium outline-none sm:text-[15px] transition focus:border-red-600 ${
                                isAr ? "text-right" : ""
                              }`}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-neutral-800">
                          {page.extraDetails}
                        </label>

                        <textarea
                          rows="5"
                          value={form.notes}
                          onChange={(e) => update("notes", e.target.value)}
                          placeholder={page.notesPlaceholder}
                          className={`w-full resize-none rounded-2xl border border-black/10 px-5 py-4 text-base font-medium outline-none sm:text-[15px] transition focus:border-red-600 ${
                            isAr ? "text-right" : ""
                          }`}
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className={isAr ? "text-right" : ""}
                    >
                      <h2 className="text-[26px] font-black leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[30px]">
                        {page.reviewTitle}
                      </h2>

                      <p className="mt-3 text-[15px] font-medium leading-7 text-neutral-500">
                        {page.reviewDesc}
                      </p>

                      <div className="mt-8 overflow-hidden rounded-3xl border border-black/10">
                        {[
                          [page.reviewFields.projectType, form.projectType],
                          [
                            page.reviewFields.solutions,
                            form.solutions.join(", "),
                          ],
                          [page.reviewFields.systemSize, form.size],
                          [page.reviewFields.timeline, form.timeline],
                          [page.reviewFields.location, form.location],
                          [page.reviewFields.name, form.name],
                          [page.reviewFields.company, form.company || "—"],
                          [page.reviewFields.email, form.email],
                          [page.reviewFields.phone, form.phone],
                          [page.reviewFields.notes, form.notes || "—"],
                        ].map(([key, value]) => (
                          <div
                            key={key}
                            className="grid gap-3 border-b border-black/5 px-5 py-4 last:border-b-0 sm:grid-cols-[0.35fr_0.65fr]"
                          >
                            <p className="text-sm font-medium text-neutral-500">
                              {key}
                            </p>

                            <p className="text-sm font-medium text-neutral-950">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {selectedLocation && (
                        <motion.div
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-8 rounded-[28px] border border-black/10 bg-neutral-50 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
                        >
                          <div className="mb-5">
                            <p
                              className={`text-sm font-black text-red-600 ${
                                isAr
                                  ? "tracking-normal text-right"
                                  : "uppercase tracking-[0.22em]"
                              }`}
                            >
                              {page.weatherTitle}
                            </p>

                            <p className="mt-2 text-sm font-medium text-neutral-500">
                              {page.weatherDesc} {selectedLocation.name}
                            </p>
                          </div>

                          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 md:grid-cols-12">
                            {selectedLocation.monthlyTemperatures.map(
                              (item, index) => {
                                const temp = item.temp;
                                const height = Math.max(36, temp * 2.2);

                                return (
                                  <div
                                    key={item.month}
                                    className="flex flex-col items-center gap-2"
                                  >
                                    <div className="flex h-[90px] sm:h-[110px] items-end">
                                      <div
                                        className="w-5 rounded-full bg-red-600/80 shadow-[0_8px_20px_rgba(220,38,38,0.22)]"
                                        style={{ height: `${height}px` }}
                                      />
                                    </div>

                                    <p className="text-[11px] font-bold text-neutral-400">
                                      {item.month}
                                    </p>

                                    <p className="text-[12px] font-black text-neutral-900">
                                      {temp}°
                                    </p>
                                  </div>
                                );
                              },
                            )}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}

                  <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className={`inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-neutral-950 ${
                          isAr ? "flex-row-reverse" : ""
                        }`}
                      >
                        {isAr ? (
                          <ArrowRight size={16} />
                        ) : (
                          <ArrowLeft size={16} />
                        )}
                        {page.back}
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < 5 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!canContinue}
                        className={`inline-flex items-center gap-3 rounded-2xl bg-red-600 px-8 py-4 text-sm font-medium text-white transition hover:bg-neutral-950 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400 ${
                          isAr ? "flex-row-reverse" : ""
                        }`}
                      >
                        {page.next}
                        {isAr ? (
                          <ArrowLeft size={16} />
                        ) : (
                          <ArrowRight size={16} />
                        )}
                      </button>
                    ) : (
                      <div>
                        <button
                          type="button"
                          onClick={submitInquiry}
                          disabled={submitLoading}
                          className={`inline-flex items-center gap-3 rounded-2xl bg-red-600 px-8 py-4 text-sm font-medium text-white transition hover:bg-neutral-950 disabled:cursor-not-allowed disabled:bg-neutral-300 ${
                            isAr ? "flex-row-reverse" : ""
                          }`}
                        >
                          {submitLoading ? "Submitting..." : page.submit}
                          <Send size={16} />
                        </button>

                        {submitError && (
                          <p className="mt-4 text-sm font-semibold text-red-600">
                            {submitError}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="py-10 text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white">
                    <Check size={34} />
                  </div>

                  <h2 className="text-3xl font-black">{page.successTitle}</h2>

                  <p className="mx-auto mt-4 max-w-2xl text-[16px] font-medium leading-8 text-neutral-600">
                    {page.successDesc}
                  </p>

                  <div className="mx-auto mt-7 w-fit rounded-2xl border border-black/10 bg-neutral-50 px-6 py-4 text-sm text-neutral-600">
                    {page.reference}{" "}
                    <span className="font-medium text-neutral-950">
                      {referenceCode}{" "}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={resetWizard}
                    className="mt-8 rounded-2xl bg-neutral-950 px-7 py-4 text-sm font-medium text-white transition hover:bg-red-600"
                  >
                    {page.startNew}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default LetsBuild;
