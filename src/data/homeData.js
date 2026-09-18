import { ROUTES } from "../config/siteRoutes";

export const homeData = {
  categories: [
    {
      key: "solarEnergy",
      icon: "sun",
      image: "/images/home_imgs/categories1.webp",
      path: ROUTES.solutions.solarEnergy,
    },
    {
      key: "productionLines",
      icon: "factory",
      image: "/images/production-lines/hero.webp",
      path: ROUTES.solutions.productionLines,
    },
    {
      key: "electricScooters",
      icon: "bike",
      image: "/images/bikes/home.jpg",
      path: ROUTES.solutions.electricScooters,
    },
    {
      key: "kitchenware",
      icon: "utensils",
      image: "/images/kitchenware/categories/hero.webp",
      path: ROUTES.solutions.kitchenware,
    },
    {
      key: "hotelSupplies",
      icon: "hotel",
      image: "/images/Hotelsupply/hero.jpg",
      path: ROUTES.solutions.hotelSupplies,
    },
    {
      key: "toolsHardware",
      icon: "wrench",
      image: "/images/Toolsandhardware/hero.webp",
      path: ROUTES.solutions.toolsHardware,
    },
  ],
};
