import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { requestCategories } from "./requestConfig";
import { API_BASE_URL } from "../config/api";

const categoryBySlug = Object.fromEntries(
  Object.entries(requestCategories).map(([key, value]) => [value.slug, key]),
);

export default function RequestCenter() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [categoryKey, setCategoryKey] = useState(
    categorySlug ? categoryBySlug[categorySlug] || null : null,
  );
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState([]);
  const [imageError, setImageError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [referenceCode, setReferenceCode] = useState("");

  useEffect(() => {
    const key = categorySlug ? categoryBySlug[categorySlug] : null;
    setCategoryKey(key || null);
    setStep(0);
    setSubmitted(false);
    setFormData({});
    setImages([]);
  }, [categorySlug]);

  const category = useMemo(
    () => (categoryKey ? requestCategories[categoryKey] : null),
    [categoryKey],
  );
  const imagePreviews = useMemo(
    () => images.map((file) => ({ file, url: URL.createObjectURL(file) })),
    [images],
  );

  useEffect(
    () => () => imagePreviews.forEach((item) => URL.revokeObjectURL(item.url)),
    [imagePreviews],
  );

  const openCategory = (key) => {
    navigate(`/request/${requestCategories[key].slug}`);
  };

  const reset = () => {
    navigate("/request");
  };

  const setValue = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleImages = (event) => {
    const files = Array.from(event.target.files || []);
    const allowed = new Set([
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/avif",
    ]);
    if (files.length > 8) {
      setImageError("You can upload up to 8 reference images.");
      return;
    }
    if (
      files.some(
        (file) => !allowed.has(file.type) || file.size > 10 * 1024 * 1024,
      )
    ) {
      setImageError("Use JPG, PNG, WebP or AVIF images up to 10 MB each.");
      return;
    }
    setImageError("");
    setImages(files);
  };

  const submitRequest = async () => {
    if (
      !formData.fullName ||
      !formData.phone ||
      !/^\S+@\S+\.\S+$/.test(formData.email || "")
    ) {
      setSubmitError("Full name, phone and a valid email are required.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    try {
      const body = new FormData();
      body.append("payload", JSON.stringify({ categoryKey, formData }));
      images.forEach((file) => body.append("images", file));

      const response = await fetch(`${API_BASE_URL}/api/product-requests`, {
        method: "POST",
        body,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Request submission failed.");
      }
      setReferenceCode(result.referenceCode || "");
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error.message || "Request submission failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const renderField = (field) => {
    if (field.type === "file") {
      return (
        <div key={field.key} className="md:col-span-2">
          <label className="text-sm font-bold block mb-2">{field.label}</label>
          <label className="block border-2 border-dashed border-neutral-300 rounded-2xl p-8 text-center cursor-pointer hover:border-red-400 hover:bg-red-50/30 transition">
            <input
              type="file"
              className="hidden"
              accept={field.accept || "image/*"}
              multiple={field.multiple}
              onChange={handleImages}
            />
            <div className="mx-auto w-12 h-12 rounded-full bg-neutral-100 grid place-items-center text-2xl">
              ↑
            </div>
            <div className="font-extrabold mt-3">Upload reference images</div>
            <div className="text-sm text-neutral-500 mt-1">{field.help}</div>
            <div className="text-xs text-neutral-400 mt-2">
              JPG, PNG, WEBP • Multiple images allowed
            </div>
          </label>

          {images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {imagePreviews.map(({ file, url }, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="border rounded-xl p-2 bg-white"
                >
                  <img
                    src={url}
                    alt={file.name}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div className="text-xs truncate mt-2">{file.name}</div>
                </div>
              ))}
            </div>
          )}
          {imageError && (
            <p className="mt-3 text-sm font-bold text-red-600">{imageError}</p>
          )}
        </div>
      );
    }

    if (field.type === "textarea") {
      return (
        <label key={field.key} className="text-sm font-bold md:col-span-2">
          {field.label}
          <textarea
            rows={field.rows || 5}
            value={formData[field.key] || ""}
            onChange={(e) => setValue(field.key, e.target.value)}
            className="mt-2 w-full border rounded-xl px-4 py-4 font-normal resize-y min-h-[140px] focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400"
            placeholder={field.placeholder}
          />
        </label>
      );
    }

    if (field.type === "select") {
      return (
        <label key={field.key} className="text-sm font-bold">
          {field.label}
          <select
            value={formData[field.key] || ""}
            onChange={(e) => setValue(field.key, e.target.value)}
            className="mt-2 w-full border rounded-xl px-4 py-3 font-normal bg-white"
          >
            <option value="">Select option</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      );
    }

    return (
      <label key={field.key} className="text-sm font-bold">
        {field.label}
        <input
          type={field.type === "email" ? "email" : "text"}
          value={formData[field.key] || ""}
          onChange={(e) => setValue(field.key, e.target.value)}
          className="mt-2 w-full border rounded-xl px-4 py-3 font-normal"
          placeholder={field.placeholder}
        />
      </label>
    );
  };

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-950">
      <section className="bg-neutral-950 text-white px-6 md:px-14 py-14">
        <div className="text-red-500 text-xs font-extrabold tracking-[.3em] uppercase">
          Request a Quote
        </div>
        <h1 className="text-4xl md:text-6xl font-black mt-3">
          Tell Us What You Need
        </h1>
        <p className="max-w-2xl text-neutral-300 mt-4 text-lg leading-8">
          Select a product category and send us your requirements. Our sourcing
          team will review your request and prepare the right solution, factory
          options, and quotation.
        </p>
      </section>

      {!category && (
        <section className="px-6 md:px-14 py-12">
          <div className="text-red-500 text-xs font-extrabold tracking-[.28em] uppercase">
            Choose a Category
          </div>
          <h2 className="text-3xl md:text-4xl font-black mt-3">
            Select the product category for your request
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
            {Object.entries(requestCategories).map(([key, c]) => (
              <button
                key={key}
                onClick={() => openCategory(key)}
                className="text-left bg-white border border-neutral-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition"
              >
                <div className="h-36 rounded-xl bg-neutral-100 mb-5 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-contain p-3"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="flex justify-between gap-4 items-start">
                  <h3 className="text-xl font-extrabold">{c.name}</h3>
                  <span className="w-8 h-8 rounded-full border grid place-items-center">
                    →
                  </span>
                </div>
                <p className="text-sm text-neutral-500 mt-2">{c.description}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      {category && (
        <section className="px-6 md:px-14 py-12 grid lg:grid-cols-[280px,1fr] gap-6">
          <aside className="bg-white border rounded-2xl p-5 h-fit lg:sticky lg:top-24">
            <button
              onClick={reset}
              className="w-full border rounded-xl px-4 py-3 font-bold"
            >
              ← Change Category
            </button>
            <h3 className="font-black text-xl mt-6">Request Summary</h3>
            <div className="mt-5 text-sm text-neutral-500">
              Selected Category
            </div>
            <div className="font-bold">{category.name}</div>
            <div className="mt-5 text-sm text-neutral-500">Current Step</div>
            <div className="font-bold">
              {submitted
                ? "Completed"
                : `${step + 1} of ${category.steps.length}`}
            </div>
            <div className="h-2 bg-neutral-100 rounded-full mt-4 overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all"
                style={{
                  width: `${submitted ? 100 : ((step + 1) / category.steps.length) * 100}%`,
                }}
              />
            </div>
            {formData.quantity && (
              <>
                <div className="mt-5 text-sm text-neutral-500">Quantity</div>
                <div className="font-bold">{formData.quantity}</div>
              </>
            )}
            {formData.destinationCountry && (
              <>
                <div className="mt-5 text-sm text-neutral-500">Destination</div>
                <div className="font-bold">{formData.destinationCountry}</div>
              </>
            )}
          </aside>

          <div className="bg-white border rounded-2xl overflow-hidden">
            <div className="bg-neutral-950 text-white p-8">
              <div className="text-red-500 text-xs font-extrabold tracking-[.25em] uppercase">
                Product Request
              </div>
              <h2 className="text-3xl font-black mt-2">
                {category.name} Request
              </h2>
              <p className="text-neutral-400 mt-2">{category.description}</p>
            </div>

            {!submitted ? (
              <div className="p-8">
                <div className="text-red-500 text-xs font-extrabold tracking-[.25em] uppercase">
                  Step {step + 1} of {category.steps.length}
                </div>
                <h3 className="text-2xl font-black mt-2">
                  {category.steps[step].title}
                </h3>
                {category.steps[step].description && (
                  <p className="text-neutral-500 mt-2 max-w-3xl">
                    {category.steps[step].description}
                  </p>
                )}

                <div className="grid md:grid-cols-2 gap-4 mt-7">
                  {category.steps[step].fields.map(renderField)}
                </div>

                <div className="flex justify-between mt-8 pt-6 border-t">
                  <button
                    disabled={step === 0}
                    onClick={() => setStep(step - 1)}
                    className="border rounded-xl px-5 py-3 font-bold disabled:opacity-40"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() =>
                      step < category.steps.length - 1
                        ? setStep(step + 1)
                        : submitRequest()
                    }
                    disabled={submitting}
                    className="bg-neutral-950 text-white rounded-xl px-6 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {step === category.steps.length - 1
                      ? submitting
                        ? "Submitting..."
                        : "Submit Request →"
                      : "Continue →"}
                  </button>
                </div>
                {submitError && (
                  <p className="mt-4 text-sm font-bold text-red-600">
                    {submitError}
                  </p>
                )}
              </div>
            ) : (
              <div className="p-16 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-100 grid place-items-center text-3xl">
                  ✓
                </div>
                <h3 className="text-3xl font-black mt-5">Request Received</h3>
                <p className="text-neutral-500 mt-3">
                  Our team will review the requirements and contact you with the
                  next steps.
                </p>
                {referenceCode && (
                  <p className="mx-auto mt-5 w-fit rounded-full bg-neutral-100 px-5 py-2 text-sm font-black">
                    Reference: {referenceCode}
                  </p>
                )}
                <button
                  onClick={reset}
                  className="bg-neutral-950 text-white rounded-xl px-6 py-3 font-bold mt-7"
                >
                  Create Another Request
                </button>
                <Link
                  to="/"
                  className="ml-3 inline-block rounded-xl border px-6 py-3 font-bold"
                >
                  Back to Website
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
