import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
// import SmartStoragePreview from "../components/home/SmartStoragePreview";
// import FactoryPreview from "../components/home/FactoryPreview";
// import GigawattScalePreview from "../components/home/GigawattScalePreview";
import PartnersPreview from "../components/home/PartnersPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
// import FinalCTA from "../components/home/FinalCTA";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <HeroStats /> */}
      <AboutPreview />
      <ServicesPreview />
      {/* <SmartStoragePreview /> */}
      {/* <FactoryPreview /> */}
      {/* <GigawattScalePreview /> */}
      <PartnersPreview />
      <WhyChooseUs />
      {/* <FinalCTA /> */}
    </>
  );
};

export default Home;
