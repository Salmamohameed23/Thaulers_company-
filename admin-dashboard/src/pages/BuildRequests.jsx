import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import { apiRequest } from "../services/api";
import {
  Search,
  MapPin,
  Mail,
  Phone,
  Building2,
  CalendarDays,
  X,
} from "lucide-react";

const statusStyles = {
  new: "bg-red-50 text-red-700 border-red-200",
  reviewed: "bg-blue-50 text-blue-700 border-blue-200",
  contacted: "bg-emerald-50 text-emerald-700 border-emerald-200",
  closed: "bg-neutral-100 text-neutral-700 border-neutral-300",
};

const monthsOrder = [
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

const BuildRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const res = await apiRequest("/api/admin/build-requests");
      setRequests(res.data || []);
    } catch (error) {
      console.error("Failed to load build requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const updateStatus = async (id, status) => {
    await apiRequest(`/api/admin/build-requests/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
    fetchRequests();
  };

  const filteredRequests = useMemo(() => {
    return requests.filter((item) => {
      const text =
        `${item.name || ""} ${item.email || ""} ${item.company || ""} ${item.location || ""} ${item.projectType || ""}`.toLowerCase();
      const matchesSearch = text.includes(search.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [requests, search, statusFilter]);

  return (
    <Layout title="Build Requests">
      <div className="mb-8 rounded-3xl bg-black p-8 text-white shadow-xl">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500">
          Project Intelligence
        </p>
        <h1 className="mt-3 text-3xl font-black">Let’s Build / RFQ Requests</h1>
        <p className="mt-2 max-w-2xl text-sm text-neutral-400">
          Full project submissions with client details, selected solutions,
          location, timeline, system size, notes, and climate profile.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by client, company, location..."
            className="w-full rounded-2xl border border-neutral-200 bg-white py-4 pl-12 pr-4 text-sm outline-none transition focus:border-red-500"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-sm font-semibold outline-none focus:border-red-500"
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="reviewed">Reviewed</option>
          <option value="contacted">Contacted</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {loading ? (
        <div className="grid gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-36 animate-pulse rounded-3xl bg-white shadow-sm"
            />
          ))}
        </div>
      ) : (
        <div className="grid gap-5">
          {filteredRequests.map((req) => (
            <div
              key={req._id}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-bold uppercase ${
                        statusStyles[req.status] || statusStyles.new
                      }`}
                    >
                      {req.status || "new"}
                    </span>

                    {req.referenceCode && (
                      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-600">
                        {req.referenceCode}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-black text-black">
                    {req.projectType || "Project Request"}
                  </h2>

                  <div className="mt-3 grid gap-2 text-sm text-neutral-600 md:grid-cols-2">
                    <p className="flex items-center gap-2">
                      <Building2 size={16} />
                      {req.company || "No company"}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin size={16} />
                      {req.location || "No location"}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={16} />
                      {req.email || "No email"}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={16} />
                      {req.phone || "No phone"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelected(req)}
                    className="rounded-xl bg-black px-4 py-3 text-sm font-bold text-white transition hover:bg-red-600"
                  >
                    View Details
                  </button>

                  {["reviewed", "contacted", "closed"].map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(req._id, status)}
                      className="rounded-xl border border-neutral-200 px-4 py-3 text-sm font-bold capitalize transition hover:border-red-600 hover:text-red-600"
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <RequestModal
          request={selected}
          onClose={() => setSelected(null)}
          onStatusChange={updateStatus}
        />
      )}
    </Layout>
  );
};

const RequestModal = ({ request, onClose, onStatusChange }) => {
  const temps =
    request.monthlyTemperatures || request.climate?.monthlyTemperatures || [];
  const maxTemp = temps.length
    ? Math.max(...temps.map((m) => Number(m.temp) || 0))
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-black px-8 py-6 text-white">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              Full Request Details
            </p>
            <h2 className="mt-2 text-2xl font-black">
              {request.projectType || "Build Request"}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-3 transition hover:bg-red-600"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-6 p-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Section title="Project Scope">
              <Info label="Project Type" value={request.projectType} />
              <Info
                label="Solutions"
                value={
                  Array.isArray(request.solutions)
                    ? request.solutions.join(", ")
                    : request.solutions
                }
              />
              <Info
                label="System Size"
                value={
                  request.size || request.systemSize || request.projectSize
                }
              />
              <Info label="Timeline" value={request.timeline} />
              <Info label="Location" value={request.location} />
            </Section>

            <Section title="Monthly Temperature Overview">
              {temps.length ? (
                <div>
                  <p className="mb-5 text-sm font-semibold text-neutral-500">
                    Average monthly temperature for{" "}
                    {request.location || "selected location"}
                  </p>

                  <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                    <div className="grid grid-cols-12 items-end gap-3">
                      {monthsOrder.map((month) => {
                        const item = temps.find((t) => t.month === month);
                        const temp = item ? Number(item.temp) : null;
                        const height =
                          temp && maxTemp
                            ? Math.max(28, (temp / maxTemp) * 90)
                            : 28;

                        return (
                          <div
                            key={month}
                            className="flex flex-col items-center gap-2"
                          >
                            <div
                              className="w-5 rounded-full bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.35)]"
                              style={{ height }}
                            />
                            <span className="text-xs font-bold text-neutral-400">
                              {month}
                            </span>
                            <span className="text-xs font-black text-black">
                              {temp !== null ? `${temp}°` : "-"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-neutral-500">
                  No climate data was saved with this request.
                </p>
              )}
            </Section>

            <Section title="Client Notes">
              <div className="rounded-2xl bg-neutral-50 p-5 text-sm leading-7 text-neutral-700">
                {request.notes || "No notes provided."}
              </div>
            </Section>
          </div>

          <div className="space-y-6">
            <Section title="Client Information">
              <Info label="Name" value={request.name} />
              <Info label="Company" value={request.company} />
              <Info label="Email" value={request.email} />
              <Info label="Phone" value={request.phone} />
            </Section>

            <Section title="Request Status">
              <div className="mb-4">
                <span
                  className={`rounded-full border px-4 py-2 text-xs font-black uppercase ${
                    statusStyles[request.status] || statusStyles.new
                  }`}
                >
                  {request.status || "new"}
                </span>
              </div>

              <div className="grid gap-2">
                {["new", "reviewed", "contacted", "closed"].map((status) => (
                  <button
                    key={status}
                    onClick={() => onStatusChange(request._id, status)}
                    className="rounded-xl border px-4 py-3 text-left text-sm font-bold capitalize transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
                  >
                    Mark as {status}
                  </button>
                ))}
              </div>
            </Section>

            <Section title="System Info">
              <Info
                label="Submitted"
                value={
                  request.createdAt
                    ? new Date(request.createdAt).toLocaleString()
                    : "-"
                }
              />
              <Info label="Database ID" value={request._id} />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
    <h3 className="mb-5 text-sm font-black uppercase tracking-[0.25em] text-red-600">
      {title}
    </h3>
    <div className="space-y-4">{children}</div>
  </div>
);

const Info = ({ label, value }) => (
  <div>
    <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
      {label}
    </p>
    <p className="mt-1 break-words text-sm font-bold text-black">
      {value || "-"}
    </p>
  </div>
);

export default BuildRequests;
