import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-[#f4f4f5] text-neutral-950">
      <Sidebar />
      <main className="ml-72 min-h-screen">
        <Navbar title={title} />
        <div className="mx-auto max-w-[1600px] p-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
