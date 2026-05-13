import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react";


import bgImg from "../assets/images/build_bg.png";
// PROJECT IMAGES
import villaImg from "../assets/images/build_1.png";
import hotelImg from "../assets/images/build_2.png";
import commercialImg from "../assets/images/build_3.png";
import factoryImg from "../assets/images/build_4.png";
import desertImg from "../assets/images/build_5.png";
import otherImg from "../assets/images/build_6.png";

// SOLUTION IMAGES
import solarImg from "../assets/images/build_7.png";
import batteryImg from "../assets/images/build_8.png";
import offgridImg from "../assets/images/build_9.png";
import epcImg from "../assets/images/build_10.png";

const projectTypes = [
  {
    label: "Villa / Residence",
    sub: "Home or private estate",
    image: villaImg,
  },
  { label: "Resort / Hotel", sub: "Hospitality property", image: hotelImg },
  {
    label: "Commercial Building",
    sub: "Office or retail space",
    image: commercialImg,
  },
  {
    label: "Industrial / Factory",
    sub: "Large-scale facility",
    image: factoryImg,
  },
  { label: "Desert / Remote Camp", sub: "Off-grid location", image: desertImg },
  { label: "Other", sub: "Custom requirement", image: otherImg },
];

const solutionTypes = [
  { label: "Solar PV System", sub: "Generate clean energy", image: solarImg },
  {
    label: "Battery Storage",
    sub: "Store and optimize power",
    image: batteryImg,
  },
  {
    label: "Off-Grid System",
    sub: "Independent power solution",
    image: offgridImg,
  },
  { label: "EPC / Full Turnkey", sub: "Design to execution", image: epcImg },
];

const sizes = [
  "Small — under 20 kW",
  "Medium — 20–100 kW",
  "Large — 100–500 kW",
  "Utility scale — 500 kW+",
  "Not sure yet",
];

const timelines = [
  "ASAP / urgent",
  "Within 3 months",
  "3–6 months",
  "6–12 months",
  "Planning stage",
];

const steps = ["Project Type", "Solution", "Scale", "Contact", "Review"];

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
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [locationQuery, setLocationQuery] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);

  const [form, setForm] = useState({
    projectType: "",
    solutions: [],
    size: "",
    timeline: "",
    location: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });

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

  const filteredLocations = locations.filter((item) =>
    item.name.toLowerCase().includes(locationQuery.toLowerCase()),
  );

  const selectedLocation = locations.find(
    (item) => item.name === form.location,
  );

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

  const submitInquiry = () => {
    setSubmitted(true);
  };

  const resetWizard = () => {
    setStep(1);
    setSubmitted(false);
    setLocationQuery("");
    setLocationOpen(false);
    setForm({
      projectType: "",
      solutions: [],
      size: "",
      timeline: "",
      location: "",
      name: "",
      company: "",
      email: "",
      phone: "",
      notes: "",
    });
  };

  const progress = submitted ? 100 : (step / 5) * 100;

  const renderOptionCard = (item, active, onClick) => {
    return (
      <motion.button
        key={item.label}
        type="button"
        onClick={onClick}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className={`group relative overflow-hidden rounded-[28px] border text-left transition-all duration-300 ${
          active
            ? "border-red-600 bg-red-50 shadow-[0_24px_70px_rgba(220,38,38,0.18)]"
            : "border-black/10 bg-white hover:border-red-500/40 hover:shadow-[0_22px_55px_rgba(0,0,0,0.10)]"
        }`}
      >
        <div className="relative h-[175px] w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.label}
            className="h-full w-full scale-[1.5] object-cover object-center transition-transform duration-700 group-hover:scale-[2]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          {active && (
            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_0_25px_rgba(220,38,38,0.65)]">
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
  };

  return (
    <main
      className="relative min-h-screen text-neutral-950"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="relative overflow-hidden py-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="overflow-visible rounded-[34px] bg-white/85 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.12)]"
          >
            <div className="bg-neutral-950 px-6 py-7 text-white sm:px-8">
              <div className="grid gap-7 md:grid-cols-[1fr_0.85fr] md:items-center">
                <div>
                  <h1 className="text-[28px] font-black leading-tight tracking-[-0.03em] sm:text-[35px]">
                    Let&apos;s Build Your Solar Solution
                  </h1>

                  <p className="mt-3 text-sm font-medium text-white/65">
                    Tell us about your project — takes less than 2 minutes
                  </p>

                  <p className="mt-3 text-sm font-medium text-white/65">
                    {submitted
                      ? "Your inquiry has been prepared successfully."
                      : `Step ${step} of 5 — ${steps[step - 1]}`}
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
                    {steps.map((item, index) => (
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

            <div className="p-6 sm:p-8 lg:p-9">
              {!submitted && (
                <>
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h2 className="text-[26px] font-black leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[30px]">
                        What type of project are you planning?
                      </h2>

                      <p className="mt-3 text-[15px] font-medium leading-7 text-neutral-500">
                        Select the option that best describes your site.
                      </p>

                      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                    >
                      <h2 className="text-[26px] font-black leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[30px]">
                        What solution are you looking for?
                      </h2>

                      <p className="mt-3 text-[15px] font-medium leading-7 text-neutral-500">
                        You can select more than one solution.
                      </p>

                      <div className="mt-8 grid gap-5 md:grid-cols-2">
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
                    >
                      <h2 className="text-[26px] font-black leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[30px]">
                        Project scale & timeline
                      </h2>

                      <p className="mt-3 text-[15px] font-medium leading-7 text-neutral-500">
                        Help us understand the project size and expected
                        delivery direction.
                      </p>

                      <div className="mt-8 grid gap-8 lg:grid-cols-2">
                        <div>
                          <p className="mb-4 text-sm font-medium text-neutral-800">
                            Estimated system size
                          </p>

                          <div className="flex flex-wrap gap-3">
                            {sizes.map((item) => (
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
                            Timeline
                          </p>

                          <div className="flex flex-wrap gap-3">
                            {timelines.map((item) => (
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
                          Project location / country
                        </label>

                        <div className="">
                          <input
                            type="text"
                            value={locationQuery || form.location}
                            onFocus={() => setLocationOpen(true)}
                            onChange={(e) => {
                              setLocationQuery(e.target.value);
                              setLocationOpen(true);
                              update("location", "");
                            }}
                            placeholder="Search city or country..."
                            className="h-14 w-full rounded-2xl border border-black/10 bg-white px-5 text-[15px] font-medium outline-none transition focus:border-red-600"
                          />

                          {locationOpen && filteredLocations.length > 0 && (
                            <div className="mt-3 max-h-[240px] overflow-y-auto rounded-2xl border border-black/10 bg-white shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
                              {filteredLocations.map((item) => (
                                <button
                                  key={item.name}
                                  type="button"
                                  onClick={() => {
                                    update("location", item.name);
                                    setLocationQuery(item.name);
                                    setLocationOpen(false);
                                  }}
                                  className="block w-full px-5 py-4 text-left text-[15px] font-semibold text-neutral-700 transition hover:bg-red-50 hover:text-red-600"
                                >
                                  {item.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {selectedLocation && (
                          <div className="mt-6 rounded-[28px] border border-black/10 bg-neutral-50 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                            <div className="mb-5">
                              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-600">
                                Monthly Temperature Overview
                              </p>

                              <p className="mt-2 text-sm font-medium text-neutral-500">
                                Average monthly temperature for{" "}
                                {selectedLocation.name}
                              </p>
                            </div>

                            <div className="grid grid-cols-6 gap-3 md:grid-cols-12">
                              {selectedLocation.temps.map((temp, index) => {
                                const height = Math.max(36, temp * 2.2);

                                return (
                                  <div
                                    key={months[index]}
                                    className="flex flex-col items-center gap-2"
                                  >
                                    <div className="flex h-[110px] items-end">
                                      <div
                                        className="w-5 rounded-full bg-red-600/80 shadow-[0_8px_20px_rgba(220,38,38,0.22)]"
                                        style={{ height: `${height}px` }}
                                      />
                                    </div>

                                    <p className="text-[11px] font-bold text-neutral-400">
                                      {months[index]}
                                    </p>

                                    <p className="text-[12px] font-black text-neutral-900">
                                      {temp}°
                                    </p>
                                  </div>
                                );
                              })}
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
                    >
                      <h2 className="text-[26px] font-black leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[30px]">
                        Your contact details
                      </h2>

                      <p className="mt-3 text-[15px] font-medium leading-7 text-neutral-500">
                        We’ll use this information to prepare your enquiry for
                        the team.
                      </p>

                      <div className="mt-8 grid gap-5 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-neutral-800">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            placeholder="Your name"
                            className="h-14 w-full rounded-2xl border border-black/10 px-5 text-[15px] font-medium outline-none transition focus:border-red-600"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-neutral-800">
                            Company
                          </label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) => update("company", e.target.value)}
                            placeholder="Company name"
                            className="h-14 w-full rounded-2xl border border-black/10 px-5 text-[15px] font-medium outline-none transition focus:border-red-600"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-neutral-800">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            placeholder="you@example.com"
                            className="h-14 w-full rounded-2xl border border-black/10 px-5 text-[15px] font-medium outline-none transition focus:border-red-600"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-neutral-800">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            placeholder="+1 234 567 890"
                            className="h-14 w-full rounded-2xl border border-black/10 px-5 text-[15px] font-medium outline-none transition focus:border-red-600"
                          />
                        </div>
                      </div>

                      <div className="mt-5">
                        <label className="mb-2 block text-sm font-medium text-neutral-800">
                          Extra details
                        </label>
                        <textarea
                          rows="5"
                          value={form.notes}
                          onChange={(e) => update("notes", e.target.value)}
                          placeholder="Budget range, site conditions, special requirements..."
                          className="w-full resize-none rounded-2xl border border-black/10 px-5 py-4 text-[15px] font-medium outline-none transition focus:border-red-600"
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
                    >
                      <h2 className="text-[26px] font-black leading-tight tracking-[-0.02em] text-neutral-950 sm:text-[30px]">
                        Review your inquiry
                      </h2>

                      <p className="mt-3 text-[15px] font-medium leading-7 text-neutral-500">
                        Check the details before submitting.
                      </p>

                      <div className="mt-8 overflow-hidden rounded-3xl border border-black/10">
                        {[
                          ["Project type", form.projectType],
                          ["Solutions", form.solutions.join(", ")],
                          ["System size", form.size],
                          ["Timeline", form.timeline],
                          ["Location", form.location],
                          ["Name", form.name],
                          ["Company", form.company || "—"],
                          ["Email", form.email],
                          ["Phone", form.phone],
                          ["Notes", form.notes || "—"],
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
                    </motion.div>
                  )}

                  <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-neutral-950"
                      >
                        <ArrowLeft size={16} />
                        Back
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < 5 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!canContinue}
                        className="inline-flex items-center gap-3 rounded-2xl bg-red-600 px-8 py-4 text-sm font-medium text-white transition hover:bg-neutral-950 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-400"
                      >
                        Next
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={submitInquiry}
                        className="inline-flex items-center gap-3 rounded-2xl bg-red-600 px-8 py-4 text-sm font-medium text-white transition hover:bg-neutral-950"
                      >
                        Submit Inquiry
                        <Send size={16} />
                      </button>
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

                  <h2 className="text-3xl font-black">
                    Inquiry Submitted Successfully
                  </h2>

                  <p className="mx-auto mt-4 max-w-2xl text-[16px] font-medium leading-8 text-neutral-600">
                    Thank you for your inquiry. Our engineering team will
                    carefully study your application and technical requirements.
                    We will contact you soon with feedback and the best suitable
                    solution for your project.
                  </p>

                  <div className="mx-auto mt-7 w-fit rounded-2xl border border-black/10 bg-neutral-50 px-6 py-4 text-sm text-neutral-600">
                    Reference:{" "}
                    <span className="font-medium text-neutral-950">
                      THL-{Date.now().toString().slice(-6)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={resetWizard}
                    className="mt-8 rounded-2xl bg-neutral-950 px-7 py-4 text-sm font-medium text-white transition hover:bg-red-600"
                  >
                    Start New Inquiry
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
