import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Solutions from "../pages/Solutions";
import SmartStorage from "../pages/SmartStorage";
import Factory from "../pages/Factory";
import GigawattProjects from "../pages/GigawattProjects";
import Partners from "../pages/Partners";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/smart-storage" element={<SmartStorage />} />
      <Route path="/factory" element={<Factory />} />
      <Route path="/gigawatt-projects" element={<GigawattProjects />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;
