import { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import { apiRequest } from "../services/api";
import { Search, Mail, Building2, CalendarDays, X } from "lucide-react";

const statusStyles = {
    new: "bg-red-50 text-red-700 border-red-200",
    reviewed: "bg-blue-50 text-blue-700 border-blue-200",
    contacted: "bg-emerald-50 text-emerald-700 border-emerald-200",
    closed: "bg-neutral-100 text-neutral-700 border-neutral-300",
};

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const res = await apiRequest("/api/admin/contact-messages");
      setMessages(res.data || []);
    } catch (error) {
      console.error("Failed to load messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const updateStatus = async (id, status) => {
    await apiRequest(`/api/admin/contact-messages/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
    fetchMessages();
  };

  const filteredMessages = useMemo(() => {
    return messages.filter((msg) => {
      const text =
        `${msg.name || ""} ${msg.email || ""} ${msg.company || ""} ${msg.message || ""}`.toLowerCase();
      const matchesSearch = text.includes(search.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || msg.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [messages, search, statusFilter]);

  return (
    <Layout title="Messages">
      <div className="mb-8 rounded-3xl bg-black p-8 text-white shadow-xl">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-500">
          Client Communication
        </p>
        <h1 className="mt-3 text-3xl font-black">Contact Messages</h1>
        <p className="mt-2 max-w-2xl text-sm text-neutral-400">
          Review incoming website enquiries, track follow-ups, and manage
          message status.
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
            placeholder="Search by name, email, company..."
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
              className="h-32 animate-pulse rounded-3xl bg-white shadow-sm"
            />
          ))}
        </div>
      ) : (
        <div className="grid gap-5">
          {filteredMessages.map((msg) => (
            <div
              key={msg._id}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-bold uppercase ${
                        statusStyles[msg.status] || statusStyles.new
                      }`}
                    >
                      {msg.status || "new"}
                    </span>

                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-neutral-600">
                      {msg.createdAt
                        ? new Date(msg.createdAt).toLocaleDateString()
                        : "-"}
                    </span>
                  </div>

                  <h2 className="text-xl font-black text-black">
                    {msg.name || "Unknown Client"}
                  </h2>

                  <div className="mt-3 grid gap-2 text-sm text-neutral-600 md:grid-cols-2">
                    <p className="flex items-center gap-2">
                      <Mail size={16} />
                      {msg.email || "No email"}
                    </p>

                    <p className="flex items-center gap-2">
                      <Building2 size={16} />
                      {msg.company || "No company"}
                    </p>

                    <p className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {msg.createdAt
                        ? new Date(msg.createdAt).toLocaleString()
                        : "-"}
                    </p>
                  </div>

                  <p className="mt-4 line-clamp-2 max-w-4xl text-sm leading-6 text-neutral-700">
                    {msg.message}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelected(msg)}
                    className="rounded-xl bg-black px-4 py-3 text-sm font-bold text-white transition hover:bg-red-600"
                  >
                    View Message
                  </button>

                  {["reviewed", "contacted", "closed"].map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(msg._id, status)}
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
        <MessageModal
          message={selected}
          onClose={() => setSelected(null)}
          onStatusChange={updateStatus}
        />
      )}
    </Layout>
  );
};

const MessageModal = ({ message, onClose, onStatusChange }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b bg-black px-8 py-6 text-white">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              Contact Message
            </p>
            <h2 className="mt-2 text-2xl font-black">
              {message.name || "Client Message"}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-3 transition hover:bg-red-600"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-6 p-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Section title="Message">
              <div className="rounded-2xl bg-neutral-50 p-5 text-sm leading-7 text-neutral-700">
                {message.message || "-"}
              </div>
            </Section>
          </div>

          <div className="space-y-6">
            <Section title="Client">
              <Info label="Name" value={message.name} />
              <Info label="Email" value={message.email} />
              <Info label="Company" value={message.company} />
            </Section>

            <Section title="Status">
              <div className="mb-4">
                <span
                  className={`rounded-full border px-4 py-2 text-xs font-black uppercase ${
                    statusStyles[message.status] || statusStyles.new
                  }`}
                >
                  {message.status || "new"}
                </span>
              </div>

              <div className="grid gap-2">
                {["new", "reviewed", "contacted", "closed"].map((status) => (
                  <button
                    key={status}
                    onClick={() => onStatusChange(message._id, status)}
                    className="rounded-xl border px-4 py-3 text-left text-sm font-bold capitalize transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
                  >
                    Mark as {status}
                  </button>
                ))}
              </div>
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

export default Messages;
