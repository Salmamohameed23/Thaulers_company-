import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../config/siteRoutes";
// home
import Home from "../pages/Home";
import Whyus from "../pages/whyus";
import Contact from "../pages/Contact";
import TermsOfService from "../pages/TermsOfService";
import PrivacyPolicy from "../pages/PrivacyPolicy";
// solar
import SolarHome from "../pages/SolarHome";
import SmartStorage from "../pages/SmartStorage";
import Factory from "../pages/Factory";
import GigawattProjects from "../pages/GigawattProjects";
import LetsBuild from "../pages/LetsBuild";
import Rd from "../pages/Rd";
// import Partners from "../pages/Partners";

// import Production Lines
import ProductionLinesPage from "../pages/ProductionLinesPage";
import ProductionLineDetails from "../pages/ProductionLineDetails";
import ProjectBriefFormPage from "../pages/ProjectBriefFormPage";
// kitchenware
import KitchenwarePage from "../pages/KitchenwarePage";
import KitchenwareCategoryPage from "../pages/KitchenwareCategoryPage";
import KitchenwareProductDetails from "../pages/KitchenwareProductDetails";
// hotel supplies
import HotelSuppliesPage from "../pages/HotelSuppliesPage";
import HotelSuppliesCategoryPage from "../pages/HotelSuppliesCategoryPage";
import HotelSupplyDetailsPage from "../pages/HotelSupplyDetailsPage";

// tools and hardware 
import ToolsHardwarePage from "../pages/ToolsHardwarePage";
import ToolsHardwareCategoryPage from "../pages/ToolsHardwareCategoryPage";
import ToolsHardwareProductDetails from "../pages/ToolsHardwareProductDetails";
const AppRouter = () => {
  return (
    <Routes>
      {/* Main Home */}
      <Route path={ROUTES.home} element={<Home />} />
      
      <Route path={ROUTES.whyUs} element={<Whyus />} />
      <Route path={ROUTES.contact} element={<Contact />} />
      <Route path={ROUTES.letsBuild} element={<LetsBuild />} />
      {/* <Route path="/partners" element={<Partners />} /> */}
      {/* Legal */}
      <Route path={ROUTES.terms} element={<TermsOfService />} />
      <Route path={ROUTES.privacy} element={<PrivacyPolicy />} />
      {/*  */}
      {/* solar */}
      <Route path={ROUTES.solutions.solarEnergy} element={<SolarHome />} />{" "}
      <Route path="/smart-storage" element={<SmartStorage />} />
      <Route path="/factory" element={<Factory />} />
      <Route path="/gigawatt-projects" element={<GigawattProjects />} />
      <Route path={ROUTES.rd} element={<Rd />} />
      {/*  */}
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
      {/*  */}
      {/* kitchen */}
      <Route path="/solutions/kitchenware" element={<KitchenwarePage />} />
      <Route
        path="/solutions/kitchenware/:categorySlug"
        element={<KitchenwareCategoryPage />}
      />
      <Route
        path="/solutions/kitchenware/:categorySlug/:productSlug"
        element={<KitchenwareProductDetails />}
      />
      {/*  */}
      {/* hotel */}
      <Route path="/solutions/hotel-supplies" element={<HotelSuppliesPage />} />
      <Route
        path="/solutions/hotel-supplies/:categorySlug"
        element={<HotelSuppliesCategoryPage />}
      />
      <Route
        path="/solutions/hotel-supplies/:categorySlug/:productSlug"
        element={<HotelSupplyDetailsPage />}
      />
      {/*  */}
      {/* toolsand hardware */}
      <Route path="/solutions/tools-hardware" element={<ToolsHardwarePage />} />
      <Route
        path="/solutions/tools-hardware/:categorySlug"
        element={<ToolsHardwareCategoryPage />}
      />
      <Route
        path="/solutions/tools-hardware/:categorySlug/:productSlug"
        element={<ToolsHardwareProductDetails />}
      />
      
      {/*  */}
      {/* bikes  */}
    </Routes>
  );
};

export default AppRouter;
