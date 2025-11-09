import React from "react";
import HeroSection from "./HeroSection";
import ToolsSection from "./ToolsSection";
import CompanyLogos from "./CompanyLogos";
import ServicesSection from "./ServicesSection";
import Testimonials from "./Testimonials";
import Blogs from "../blogs/Blogs";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <ToolsSection />
      <CompanyLogos />
      <ServicesSection />
      <Testimonials />
      <Blogs />
    </div>
  );
};

export default Home;
