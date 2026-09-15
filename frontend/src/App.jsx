import Navbar from "./components/layout/Navbar";
import AppRouter from "./router/AppRouter";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/analytics/visit`, {
      method: "POST",
      credentials: "include",
    }).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#07090C] text-white">
      {" "}
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
