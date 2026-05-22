import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SolarHome from "../pages/SolarHome";

import Whyus from "../pages/whyus";
import SmartStorage from "../pages/SmartStorage";
import Factory from "../pages/Factory";
import GigawattProjects from "../pages/GigawattProjects";
import Partners from "../pages/Partners";
import Contact from "../pages/Contact";
import LetsBuild from "../pages/LetsBuild";
import Rd from "../pages/Rd";

import TermsOfService from "../pages/TermsOfService";
import PrivacyPolicy from "../pages/PrivacyPolicy";

// Placeholder component
const PlaceholderPage = ({ title }) => {
  return (
    <main className="min-h-screen bg-white px-6 py-32 text-center">
      <h1 className="text-4xl font-black text-neutral-950">{title}</h1>
      <p className="mt-4 text-neutral-600">This page will be designed later.</p>
    </main>
  );
};

const AppRouter = () => {
  return (
    <Routes>
      {/* New Main Home */}
      <Route path="/" element={<Home />} />

      {/* Solar Energy Page */}
      <Route path="/solutions/solar-energy" element={<SolarHome />} />

      {/* Solutions (Temporary Pages) */}
      <Route
        path="/solutions/bikes"
        element={<PlaceholderPage title="Bikes" />}
      />
      <Route
        path="/solutions/kitchenware"
        element={<PlaceholderPage title="Kitchenware" />}
      />
      <Route
        path="/solutions/complete-industrial-production-lines"
        element={
          <PlaceholderPage title="Complete Industrial Production Lines" />
        }
      />
      <Route
        path="/solutions/hotel"
        element={<PlaceholderPage title="Hotel" />}
      />
      <Route
        path="/solutions/tools"
        element={<PlaceholderPage title="Tools" />}
      />

      {/* Existing Pages */}
      <Route path="/whyus" element={<Whyus />} />
      <Route path="/smart-storage" element={<SmartStorage />} />
      <Route path="/factory" element={<Factory />} />
      <Route path="/gigawatt-projects" element={<GigawattProjects />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/lets-build" element={<LetsBuild />} />

      {/* R&D (hidden from navbar) */}
      <Route path="/rd" element={<Rd />} />

      {/* Legal */}
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRouter;
