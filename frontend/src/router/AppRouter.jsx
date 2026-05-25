import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../config/siteRoutes";

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
import ProductionLinesPage from "../pages/ProductionLinesPage";
import ProductionLineDetails from "../pages/ProductionLineDetails";
import ProjectBriefFormPage from "../pages/ProjectBriefFormPage";
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
      {/* Main Home */}
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.solutions.solarEnergy} element={<SolarHome />} />{" "}
      {/* solar */}
      <Route
        path={ROUTES.solutions.electricScooters}
        element={<PlaceholderPage title="Electric Scooters" />}
      />
      <Route path="/smart-storage" element={<SmartStorage />} />
      <Route path="/factory" element={<Factory />} />
      <Route path="/gigawatt-projects" element={<GigawattProjects />} />
      <Route path={ROUTES.rd} element={<Rd />} />
      {/* productions lines  */}
      <Route
        path="/solutions/complete-industrial-production-lines/:slug"
        element={<ProductionLineDetails />}
      />
      <Route
        path="/solutions/complete-industrial-production-lines"
        element={<ProductionLinesPage />}
      />
      <Route
        path="/solutions/production-lines/let-build"
        element={<ProjectBriefFormPage />}
      />

      {/* kitchen */}
      <Route
        path={ROUTES.solutions.kitchenware}
        element={<PlaceholderPage title="Kitchenware" />}
      />
      <Route
        path={ROUTES.solutions.hotelSupplies}
        element={<PlaceholderPage title="Hotel Supplies" />}
      />
      <Route
        path={ROUTES.solutions.toolsHardware}
        element={<PlaceholderPage title="Tools & Hardware" />}
      />
      {/* OLD ROUTES (temporary support) */}
      <Route
        path={ROUTES.oldSolutions.bikes}
        element={<PlaceholderPage title="Electric Scooters" />}
      />
      <Route
        path={ROUTES.oldSolutions.hotel}
        element={<PlaceholderPage title="Hotel Supplies" />}
      />
      <Route
        path={ROUTES.oldSolutions.tools}
        element={<PlaceholderPage title="Tools & Hardware" />}
      />
      {/* Existing Pages */}
      <Route path={ROUTES.whyUs} element={<Whyus />} />
      <Route path={ROUTES.contact} element={<Contact />} />
      <Route path={ROUTES.letsBuild} element={<LetsBuild />} />
      <Route path="/partners" element={<Partners />} />
      {/* Legal */}
      <Route path={ROUTES.terms} element={<TermsOfService />} />
      <Route path={ROUTES.privacy} element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRouter;
