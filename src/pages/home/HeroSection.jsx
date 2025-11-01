import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaRegPlayCircle } from "react-icons/fa";
import heroImage from "../../assets/banner.png";

const HeroSection = () => {
  return (
    <div className="bg-bg">
      <div className="container mx-auto max-w-screen-2xl px-5 py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* left side  */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 class="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight leading-[1.02] mb-6">
            <span>Your Vision </span>
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Our Code
            </span>
          </h1>
          <p className="text-md lg:text-lg text-gray-700 mb-8">
            From sleek portfolios to powerful business sites — we bring your
            ideas to life with clean design and modern technology.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="flex gap-2 bg-primary hover:bg-blue-800 items-center text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span>Get Started</span>
              <FiArrowRight />
            </button>
            <button className="border-2 font-semibold border-blue-600 rounded-md text-primary hover:text-white hover:bg-primary ml-2 px-6 py-2 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
        {/* Right side  */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-end">
          <div className="relative group">
            <img
              src={heroImage}
              alt="Hero-Image"
              className="group-hover:opacity-70 transition duration-300"
            />
            <button className="absolute inset-0 flex justify-center items-center rounded-full ">
              <FaRegPlayCircle className="text-primary text-6xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
