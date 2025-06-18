import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/images/logoOfAcdmx.png";
import student from "../assets/images/studentImg.png";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-50 flex flex-col items-start justify-center px-4 py-8 md:px-10 md:py-16 lg:px-20">
        <img
          className="h-8 w-32 md:h-10 md:w-40 object-contain my-2"
          src={logo}
          alt="logo"
        />
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 text-left">
          Unlock your potential, one lesson at a time.
        </p>
        <span className="text-sm md:text-md text-gray-500 mt-2">
          Subscribe to build job-ready skills from world-class institutions.
        </span>
        <button className="mt-4 md:mt-6 w-full max-w-xs sm:w-auto px-4 py-2 md:px-6 md:py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 active:scale-95 transition-all duration-200 font-medium">
          <span>Start 7-day Free Trial</span>
        </button>
        <a
          className="text-blue-600 font-bold mt-2 md:mt-4 cursor-pointer text-center active:scale-95 transition-transform duration-100 inline-block"
          tabIndex={0}
        >
          or/ ₹ 25,000 year with 14-day money-back guarantee
        </a>
        <div className="relative mt-6 md:absolute md:top-1/4 md:right-4 md:mt-0 md:w-1/3 lg:w-1/5">
          <img
            className="w-full h-auto md:h-[250px] object-contain"
            src={student}
            alt="noImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
