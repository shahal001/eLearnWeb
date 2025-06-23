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
      <div className=" px-5 md:px-10 lg:px-20 py-5  ">
        <div>
          <span className="font-semibold text-3xl block">
            Ready to reimagine your career?
          </span>
          <span className="block text-gray-500 font-medium text-md mt-2">
            Get the skills and real-world experience employers want with Career
            Accelerators.
          </span>
        </div>
      </div>
      {/* section 3 */}
      <div className=" px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1 */}
        <div className="p-2 border rounded-2xl flex flex-col h-full">
          <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
            <img
              src="https://www.siecindia.com/uploads/blog/blog_36b4e5301c6c2dcae787b510a0b942e3_1737112538data-science-online-courses.jpg"
              alt="career accelerator"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="font-bold text-lg mt-2">Full Stack Web Developer</h1>
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
        {/* 2 */}
        <div className="p-2 border rounded-2xl flex flex-col h-full">
          <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
            <img
              src="https://www.siecindia.com/uploads/blog/blog_36b4e5301c6c2dcae787b510a0b942e3_1737112538data-science-online-courses.jpg"
              alt="career accelerator"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="font-bold text-lg mt-2">Full Stack Web Developer</h1>
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
        {/* 3 */}
        <div className="p-2 border rounded-2xl flex flex-col h-full">
          <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
            <img
              src="https://www.siecindia.com/uploads/blog/blog_36b4e5301c6c2dcae787b510a0b942e3_1737112538data-science-online-courses.jpg"
              alt="career accelerator"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="font-bold text-lg mt-2">Full Stack Web Developer</h1>
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
      {/* section 4 */}
      <div className=" px-5 md:px-10 lg:px-20 py-5  ">
        <div>
          <span className="font-semibold text-3xl block">
            All the skills you need in one place
          </span>
          <span className="block text-gray-500 font-medium text-md mt-2">
            Master skills, gain experience, and accelerate your career with
            expert-led courses.
          </span>
        </div>
      </div>
      {/* section line 5 */}
      <div className="px-5 md:px-10 lg:px-20 ">
        <div className="w-full border-t border-gray-300 mb-3"></div>
        <div className="font-semibold text-lg">Data Science</div>
      </div>
      {/* section scroller  6 */}
      <div className="px-5 md:px-10 lg:px-20 py-5 overflow-x-auto hide-scrollbar">
        <div className="flex flex-row gap-3 w-max">
          <div className="p-4 bg-gray-500 rounded-full text-white min-w-max">
            <span className="block">AI / ML</span>
          </div>
          <div className="p-4 bg-gray-500 rounded-full text-white min-w-max">
            <span className="block">Data Science</span>
          </div>
          <div className="p-4 bg-gray-500 rounded-full text-white min-w-max">
            <span className="block">Fullstack</span>
          </div>
          <div className="p-4 bg-gray-500 rounded-full text-white min-w-max">
            <span className="block">Big Data</span>
          </div>
        </div>
      </div>
      {/* card2     7 */}
      <div className="my-5 px-5 md:px-10 lg:px-20 flex flex-row gap-2 overflow-x-auto hide-scrollbar">
        {/* c1 */}
        <div className="w-52 md:w-64 lg:w-80">
          <img
            src="https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/52/2023/02/how-to-create-online-course.png"
            alt="no image"
          />
          <h1
            className="block text-md font-bold text-gray-800 mt-2 mb-1"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            The Complete AI Guide: Learn ChatGPT, Generative AI & More
          </h1>
          <span className="block truncate text-gray-600">
            Aarav Bavir, Zayan Samual, Vihaan Loga, Neil Bahami
          </span>
          <div className="flex flex-row">
            <span className="text-gray-500 text-sm">4.5</span>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
            <IoIosStar />
            <span className="text-gray-500 text-sm ml-2">( 458525 )</span>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2">
            <div>₹599</div>
            <div className="line-through text-gray-400">₹1599</div>
          </div>
          <span className="font-semibold text-blue-500 bg-blue-100 px-2 py-0.5 rounded ">
            Bestseller
          </span>
        </div>
        {/* c2 */}
        <div className="w-52 md:w-64 lg:w-80">
          <img
            src="https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/52/2023/02/how-to-create-online-course.png"
            alt="no image"
          />
          <h1
            className="block text-md font-bold text-gray-800 mt-2 mb-1"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            The Complete AI Guide: Learn ChatGPT, Generative AI & More
          </h1>
          <span className="block truncate text-gray-600">
            Aarav Bavir, Zayan Samual, Vihaan Loga, Neil Bahami
          </span>
          <div className="flex flex-row">
            <span className="text-gray-500 text-sm items-center justify-center">
              4.5
            </span>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
            <IoIosStar />
            <span className="text-gray-500 text-sm ml-2">( 458525 )</span>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2">
            <div>₹599</div>
            <div className="line-through text-gray-400">₹1599</div>
          </div>
          <span className="font-semibold text-blue-500 bg-blue-100 px-2 py-0.5 rounded ">
            Bestseller
          </span>
        </div>
        {/* c3 */}
        <div className="w-52 md:w-64 lg:w-80">
          <img
            src="https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/52/2023/02/how-to-create-online-course.png"
            alt="no image"
          />
          <h1
            className="block text-md font-bold text-gray-800 mt-2 mb-1"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            The Complete AI Guide: Learn ChatGPT, Generative AI & More
          </h1>
          <span className="block truncate text-gray-600">
            Aarav Bavir, Zayan Samual, Vihaan Loga, Neil Bahami
          </span>
          <div className="flex flex-row">
            <span className="text-gray-500 text-sm items-center justify-center">
              4.5
            </span>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
            <IoIosStar />
            <span className="text-gray-500 text-sm ml-2">( 458525 )</span>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2">
            <div>₹599</div>
            <div className="line-through text-gray-400">₹1599</div>
          </div>
          <span className="font-semibold text-blue-500 bg-blue-100 px-2 py-0.5 rounded ">
            Bestseller
          </span>
        </div>
        {/* c4 */}
        <div className="w-52 md:w-64 lg:w-80">
          <img
            src="https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/52/2023/02/how-to-create-online-course.png"
            alt="no image"
          />
          <h1
            className="block text-md font-bold text-gray-800 mt-2 mb-1"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            The Complete AI Guide: Learn ChatGPT, Generative AI & More
          </h1>
          <span className="block truncate text-gray-600">
            Aarav Bavir, Zayan Samual, Vihaan Loga, Neil Bahami
          </span>
          <div className="flex flex-row">
            <span className="text-gray-500 text-sm items-center justify-center">
              4.5
            </span>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
            <IoIosStar />
            <span className="text-gray-500 text-sm ml-2">( 458525 )</span>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2">
            <div>₹599</div>
            <div className="line-through text-gray-400">₹1599</div>
          </div>
          <span className="font-semibold text-blue-500 bg-blue-100 px-2 py-0.5 rounded ">
            Bestseller
          </span>
        </div>
        {/* c5 */}
        <div className="w-52 md:w-64 lg:w-80">
          <img
            src="https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/52/2023/02/how-to-create-online-course.png"
            alt="no image"
          />
          <h1
            className="block text-md font-bold text-gray-800 mt-2 mb-1"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            The Complete AI Guide: Learn ChatGPT, Generative AI & More
          </h1>
          <span className="block truncate text-gray-600">
            Aarav Bavir, Zayan Samual, Vihaan Loga, Neil Bahami
          </span>
          <div className="flex flex-row">
            <span className="text-gray-500 text-sm items-center justify-center">
              4.5
            </span>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
            <IoIosStar />
            <span className="text-gray-500 text-sm ml-2">( 458525 )</span>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2">
            <div>₹599</div>
            <div className="line-through text-gray-400">₹1599</div>
          </div>
          <span className="font-semibold text-blue-500 bg-blue-100 px-2 py-0.5 rounded ">
            Bestseller
          </span>
        </div>
        {/* c6 */}
        <div className="w-52 md:w-64 lg:w-80">
          <img
            src="https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/52/2023/02/how-to-create-online-course.png"
            alt="no image"
          />
          <h1
            className="block text-md font-bold text-gray-800 mt-2 mb-1"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            The Complete AI Guide: Learn ChatGPT, Generative AI & More
          </h1>
          <span className="block truncate text-gray-600">
            Aarav Bavir, Zayan Samual, Vihaan Loga, Neil Bahami
          </span>
          <div className="flex flex-row">
            <span className="text-gray-500 text-sm items-center justify-center">
              4.5
            </span>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
            <IoIosStar />
            <span className="text-gray-500 text-sm ml-2">( 458525 )</span>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2">
            <div>₹599</div>
            <div className="line-through text-gray-400">₹1599</div>
          </div>
          <span className="font-semibold text-blue-500 bg-blue-100 px-2 py-0.5 rounded ">
            Bestseller
          </span>
        </div>
      </div>
      {/* button  8*/}
      <div className="my-5 px-5 md:px-10 lg:px-20 flex flex-row gap-2 overflow-x-auto hide-scrollbar">
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-bold mt-2 hover:bg-blue-50 active:scale-95 transition-all duration-150">
          Show all Machine Learning courses
        </button>
      </div>
      {/* section 9 */}
      <div className="px-5 md:px-10 lg:px-20 py-5 text-center">
        <div className="text-2xl font-semibold text-gray-500 mb-6">
          Trusted by over 16,000 companies and millions of learners around the
          world
        </div>
        <div
          className="w-full overflow-x-hidden"
          style={{ position: "relative" }}
        >
          <div
            className="flex flex-nowrap gap-4 justify-center md:justify-between items-center"
            style={{
              animation: "scroll-left 50s linear infinite",
              minWidth: "200%",
              whiteSpace: "nowrap",
              display: "flex",
            }}
          >
            {/* Logos - duplicated for infinite effect */}
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg"
              alt="Volkswagen"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg"
              alt="Samsung"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg"
              alt="Cisco"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg"
              alt="Vimeo"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg"
              alt="Procter & Gamble"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg"
              alt="Hewlett Packard Enterprise"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg"
              alt="Citi"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/7guDRVYa2DZD0wD1SyxREP/b704dfe6b0ffb3b26253ec36b4aab505/ericsson_logo.svg"
              alt="Ericsson"
            />
            {/* Duplicate logos for infinite scroll */}
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg"
              alt="Volkswagen"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg"
              alt="Samsung"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg"
              alt="Cisco"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg"
              alt="Vimeo"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg"
              alt="Procter & Gamble"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg"
              alt="Hewlett Packard Enterprise"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg"
              alt="Citi"
            />
            <img
              className="h-8 md:h-10 lg:h-12 max-w-[120px] object-contain inline-block"
              src="https://cms-images.udemycdn.com/96883mtakkm8/7guDRVYa2DZD0wD1SyxREP/b704dfe6b0ffb3b26253ec36b4aab505/ericsson_logo.svg"
              alt="Ericsson"
            />
          </div>
        </div>
        <style>
          {`
            @keyframes scroll-left {
              0% {
          transform: translateX(0%);
              }
              100% {
          transform: translateX(-50%);
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Home;
