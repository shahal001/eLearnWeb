import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/images/logoOfAcdmx.png";
import student from "../assets/images/studentimg.webp";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-50 flex flex-col items-start justify-center px-10">
        <img className="h-10 w-40 object-contain my-2" src={logo} alt="logo" />
        <p className="text-3xl font-semibold text-gray-700  text-left">
          Unlock your potential, one lesson at a time.
        </p>
        <span className="text-md text-gray-500 mt-2">
          Subscribe to build job-ready skills from world-class institutions.
        </span>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 active:scale-95 transition-all duration-200 font-medium">
          <span>Start 7-day Free Trial</span>
        </button>
        <div>
          <img src={student} alt="noImage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
