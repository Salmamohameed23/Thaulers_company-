import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Sidebar />
      <main className="ml-72 min-h-screen">
        <Navbar title={title} />
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
