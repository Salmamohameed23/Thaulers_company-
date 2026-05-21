import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { apiRequest } from "../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState({
    messages: 0,
    builds: 0,
    today: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const messages = await apiRequest("/api/admin/contact-messages");
        const builds = await apiRequest("/api/admin/build-requests");

        setStats({
          messages: messages.count,
          builds: builds.count,
          today: messages.data.filter((m) => {
            const today = new Date().toDateString();
            return new Date(m.createdAt).toDateString() === today;
          }).length,
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchStats();
  }, []);

  return (
    <Layout title="Dashboard">
      <h1 className="mb-6 text-2xl font-black">Welcome Back 👋</h1>

      <div className="grid grid-cols-3 gap-6">
        <Card title="Messages" value={stats.messages} />
        <Card title="Build Requests" value={stats.builds} />
        <Card title="New Today" value={stats.today} />
      </div>
    </Layout>
  );
};

const Card = ({ title, value }) => (
  <div className="rounded-2xl bg-white p-6 shadow-sm">
    <p className="text-sm text-neutral-500">{title}</p>
    <h2 className="mt-2 text-3xl font-black text-black">{value}</h2>
  </div>
);

export default Dashboard;
