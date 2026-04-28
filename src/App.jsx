import Navbar from "./components/layout/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="min-h-screen bg-[#07090C] text-white">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
