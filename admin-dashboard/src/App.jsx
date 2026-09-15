import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import BuildRequests from "./pages/BuildRequests";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ProjectBriefs from "./pages/ProjectBriefs";
import ShipmentPortfolio from "./pages/ShipmentPortfolio";
import Archive from "./pages/Archive";
import Users from "./pages/Users";
import { apiRequest } from "./services/api";

const ProtectedRoute = ({ children, authenticated, loading }) => {
  if (loading) return <div className="flex min-h-screen items-center justify-center font-bold">Loading...</div>;
  return authenticated ? children : <Navigate to="/" replace />;
};

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try { await apiRequest("/api/auth/me"); setAuthenticated(true); }
    catch { setAuthenticated(false); }
    finally { setLoading(false); }
  };

  useEffect(() => { checkAuth(); }, []);

  const protectedPage = (page) => <ProtectedRoute authenticated={authenticated} loading={loading}>{page}</ProtectedRoute>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={authenticated ? <Navigate to="/dashboard" replace /> : <Login onLogin={() => setAuthenticated(true)} />} />

        <Route
          path="/dashboard"
          element={
            protectedPage(<Dashboard />)
          }
        />

        <Route
          path="/messages"
          element={
            protectedPage(<Messages />)
          }
        />

        <Route
          path="/build-requests"
          element={
            protectedPage(<BuildRequests />)
          }
        />
        <Route path="/categories" element={protectedPage(<Categories />)} />
        <Route path="/products" element={protectedPage(<Products />)} />
        <Route path="/project-briefs" element={protectedPage(<ProjectBriefs />)} />
        <Route path="/shipment-portfolio" element={protectedPage(<ShipmentPortfolio />)} />
        <Route path="/archive" element={protectedPage(<Archive />)} />
        <Route path="/users" element={protectedPage(<Users />)} />
        <Route path="*" element={<Navigate to={authenticated ? "/dashboard" : "/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
