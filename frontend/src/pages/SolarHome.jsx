import Hero from "../components/home/Hero";
// import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
// import PartnersPreview from "../components/home/PartnersPreview";
// import WhyChooseUs from "../components/home/WhyChooseUs";
import CleanEnergySection from "../components/home/CleanEnergySection";
import SolarActionSections from "../components/home/SolarActionSections";
const Home = () => {
  return (
    <>
      <Hero />
      <CleanEnergySection />
      {/* <AboutPreview /> */}
      <ServicesPreview />
      <SolarActionSections />

      {/* <PartnersPreview />
      <WhyChooseUs /> */}
    </>
  );
};

export default Home;
