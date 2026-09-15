import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";

const Navbar = ({ title }) => {
  const navigate = useNavigate();

  const logout = async () => {
    await apiRequest("/api/auth/logout", { method: "POST" }).catch(() => {});
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b bg-white px-8">
      <div>
        <h2 className="text-xl font-black text-black">{title}</h2>
        <p className="text-xs text-neutral-500">
          TOUGH HAULERS backend management
        </p>
      </div>

      <button
        onClick={logout}
        className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-black"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;
