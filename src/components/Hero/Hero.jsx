import React from "react";
import HeroImage from "../../assets/website/HeroImage.png";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="bg-white dark:bg-gray-950 dark:text-white duration-300">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 place-items-center">
          {/* Image Section */}
          <div className="order-1 sm:order-2 relative">
            <img src={HeroImage} alt="Hero Image" />
            <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-xl shadow-md absolute -bottom-5 -right-8">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500"/>
                <p>Projects</p>
              </div>
              <h1 className="font-bold">
                600+ <span className="font-normal">done</span>
              </h1>
            </div>
          </div>
          {/* Text Content Section */}
          <div className="space-y-5 order-2 sm:order-1 ">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              Building Brands in the <span className="text-[#6153cd]">Digital Agency</span>
            </h1>
            <p>
              Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.
            </p>
            <button className="bg-[#6153cd] text-white hover:bg-[#6153cd]/80 duration-300 rounded-lg py-2 px-4 ">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
