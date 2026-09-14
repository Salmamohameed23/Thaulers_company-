import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../config/siteRoutes";

const Home = lazy(() => import("../pages/Home"));
const Whyus = lazy(() => import("../pages/whyus"));
const Contact = lazy(() => import("../pages/Contact"));
const TermsOfService = lazy(() => import("../pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const SolarHome = lazy(() => import("../pages/SolarHome"));
const SmartStorage = lazy(() => import("../pages/SmartStorage"));
const Factory = lazy(() => import("../pages/Factory"));
const GigawattProjects = lazy(() => import("../pages/GigawattProjects"));
const LetsBuild = lazy(() => import("../pages/LetsBuild"));
const Rd = lazy(() => import("../pages/Rd"));
const ProductionLinesPage = lazy(() => import("../pages/ProductionLinesPage"));
const ProjectBriefFormPage = lazy(() => import("../pages/ProjectBriefFormPage"));
const KitchenwarePage = lazy(() => import("../pages/KitchenwarePage"));
const HotelSuppliesPage = lazy(() => import("../pages/HotelSuppliesPage"));
const ToolsHardwarePage = lazy(() => import("../pages/ToolsHardwarePage"));
const ElectricScootersPage = lazy(() => import("../pages/ElectricScootersPage"));

const PageLoader = () => (
  <div className="flex min-h-[45vh] items-center justify-center bg-white">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-neutral-200 border-t-red-600" />
  </div>
);

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route path={ROUTES.whyUs} element={<Whyus />} />
      <Route path={ROUTES.contact} element={<Contact />} />
      <Route path={ROUTES.letsBuild} element={<LetsBuild />} />
      <Route path={ROUTES.terms} element={<TermsOfService />} />
      <Route path={ROUTES.privacy} element={<PrivacyPolicy />} />
      <Route path={ROUTES.solutions.solarEnergy} element={<SolarHome />} />
      <Route path="/smart-storage" element={<SmartStorage />} />
      <Route path="/factory" element={<Factory />} />
      <Route path="/gigawatt-projects" element={<GigawattProjects />} />
      <Route path={ROUTES.rd} element={<Rd />} />
      <Route path="/solutions/complete-industrial-production-lines" element={<ProductionLinesPage />} />
      <Route path="/solutions/production-lines/let-build" element={<ProjectBriefFormPage />} />
      <Route path="/solutions/kitchenware" element={<KitchenwarePage />} />
      <Route path="/solutions/hotel-supplies" element={<HotelSuppliesPage />} />
      <Route path="/solutions/tools-hardware" element={<ToolsHardwarePage />} />
      <Route path="/solutions/electric-scooters" element={<ElectricScootersPage />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
