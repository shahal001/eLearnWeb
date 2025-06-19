import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/images/logoOfAcdmx.png";
import student from "../assets/images/studentImg.png";
import { IoIosStar } from "react-icons/io";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* section1 */}
      <div className="bg-blue-50 flex flex-col md:flex-row items-center justify-between px-6 py-10 md:px-10 lg:px-20 lg:py-18 relative">
        {/* Text Content */}
        <div className="w-full md:w-2/3 flex flex-col items-start">
          <img
            className="h-8 md:h-10 lg:h-12 xl:h-14 object-contain my-2"
            src={logo}
            alt="logo"
          />
          <p className="text-2xl md:text-3xl font-semibold text-gray-700 text-left mt-2">
            Unlock your potential, one lesson at a time.
          </p>
          <span className="text-sm md:text-base text-gray-500 mt-2">
            Subscribe to build job-ready skills from world-class institutions.
          </span>
          <button className="w-full md:w-auto mt-4 md:mt-6 px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 active:scale-95 transition-all duration-200 font-medium">
            Start 7-day Free Trial
          </button>
          <a
            className="text-blue-600 font-bold mt-2 md:mt-4 cursor-pointer text-left active:scale-95 transition-transform duration-100"
            tabIndex={0}
          >
            or ₹25,000/year with 14-day money-back guarantee
          </a>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0 order-2 md:order-1">
          <img
            className="h-44 sm:h-56 md:h-72 lg:h-96 xl:h-[500px] object-contain"
            src={student}
            alt="student"
          />
        </div>
      </div>
      {/* section2 */}
      <div className=" px-5 md:px-10 lg:px-20 py-10 ">
        {/* sec 1.1 */}
        <div>
          <span className="font-semibold text-3xl block">
            Ready to reimagine your career?
          </span>
          <span className="block text-gray-500 font-medium text-md mt-2">
            Get the skills and real-world experience employers want with Career
            Accelerators.
          </span>
        </div>
        {/* sec 1.2 */}
        <div className="mt-6">
          <div className="p-2 border rounded-lg">
            <img
              src="https://www.siecindia.com/uploads/blog/blog_36b4e5301c6c2dcae787b510a0b942e3_1737112538data-science-online-courses.jpg"
              alt="career accelerator"
              className="rounded-md"
            />
            <h1 className="font-bold text-lg">Full Stack Web Developer</h1>
            <div className="flex gap-1 mt-2 flex-row flex-wrap">
              <div className="flex items-center border border-gray-300 rounded px-2 py-1 w-fit text-xs">
                <IoIosStar color="#FFD700" className="mr-1" size={14} />
                <span className="whitespace-nowrap">4.5</span>
              </div>
              <div className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs w-fit">
                <span className="whitespace-nowrap">12K+ Enrolled</span>
              </div>
              <div className="flex items-center border border-gray-300 rounded px-2 py-1 w-fit text-xs">
                <span className="whitespace-nowrap">108.5 total hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
