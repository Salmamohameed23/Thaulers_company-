import { ROUTES } from "../config/siteRoutes";

export const homeData = {
  categories: [
    {
      key: "solarEnergy",
      icon: "sun",
      image: "/src/assets/home_imgs/categories1.png",
      path: ROUTES.solutions.solarEnergy,
    },
    {
      key: "productionLines",
      icon: "factory",
      image: "/src/assets/home_imgs/categories2.png",
      path: ROUTES.solutions.productionLines,
    },
    {
      key: "electricScooters",
      icon: "bike",
      image: "/src/assets/home_imgs/categories5.png",
      path: ROUTES.solutions.electricScooters,
    },
    {
      key: "kitchenware",
      icon: "utensils",
      image: "/src/assets/home_imgs/categories6.png",
      path: ROUTES.solutions.kitchenware,
    },
    {
      key: "hotelSupplies",
      icon: "hotel",
      image: "/src/assets/home_imgs/categories4.png",
      path: ROUTES.solutions.hotelSupplies,
    },
    {
      key: "toolsHardware",
      icon: "wrench",
      image: "/src/assets/home_imgs/categories3.png",
      path: ROUTES.solutions.toolsHardware,
    },
  ],

  productionLines: [
    { image: "/src/assets/home_imgs/LINES1.png" },
    { image: "/src/assets/home_imgs/LINES2.png" },
    { image: "/src/assets/home_imgs/LINES3.png" },
    { image: "/src/assets/home_imgs/LINES4.png" },
  ],
};
