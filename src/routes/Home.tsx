import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/images/logoOfAcdmx.png";
import student from "../assets/images/studentImg.png";
import { IoIosStar } from "react-icons/io";
import { FiTarget } from "react-icons/fi";
import { PiCertificateLight } from "react-icons/pi";
import { FiStar } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);

  const toggleDiv = () => setIsOpen((prev) => !prev);
  const toggleDiv2 = () => setIsOpen2((prev) => !prev);
  const toggleDiv3 = () => setIsOpen3((prev) => !prev);

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
      {/* section line 10 */}
      <div className="px-5 md:px-10 lg:px-20 ">
        <div className="w-full border-t border-gray-300 mb-3"></div>
        <div className="font-semibold text-lg ">Data Science</div>
      </div>
      {/* card3     11 */}
      <div className="my-5 px-5 md:px-10 lg:px-20 flex flex-row gap-2 overflow-x-auto hide-scrollbar">
        {/* c1 */}
        <div className="w-52 md:w-64 lg:w-80">
          <img
            src="https://images.vexels.com/media/users/3/197141/raw/3a4ed40c62437272f5e7d42ba1311b55-online-course-slider-template.jpg"
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
            src="https://images.vexels.com/media/users/3/197141/raw/3a4ed40c62437272f5e7d42ba1311b55-online-course-slider-template.jpg"
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
            src="https://images.vexels.com/media/users/3/197141/raw/3a4ed40c62437272f5e7d42ba1311b55-online-course-slider-template.jpg"
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
            src="https://images.vexels.com/media/users/3/197141/raw/3a4ed40c62437272f5e7d42ba1311b55-online-course-slider-template.jpg"
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
            src="https://images.vexels.com/media/users/3/197141/raw/3a4ed40c62437272f5e7d42ba1311b55-online-course-slider-template.jpg"
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
            src="https://images.vexels.com/media/users/3/197141/raw/3a4ed40c62437272f5e7d42ba1311b55-online-course-slider-template.jpg"
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
      {/* section line 12 */}
      <div className="px-5 md:px-10 lg:px-20 ">
        <div className="w-full border-t border-gray-300 mb-3"></div>
        <div className="font-semibold text-lg ">Data Science</div>
      </div>
      {/* card3     13 */}
      <div className="my-5 px-5 md:px-10 lg:px-20 flex flex-row gap-2 overflow-x-auto hide-scrollbar">
        {/* c1 */}
        <div className="w-52 md:w-64 lg:w-80">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p0pWhqqaYVGXhAu-nz2ILkx_vqSXq2Ca6A&s"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p0pWhqqaYVGXhAu-nz2ILkx_vqSXq2Ca6A&s"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p0pWhqqaYVGXhAu-nz2ILkx_vqSXq2Ca6A&s"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p0pWhqqaYVGXhAu-nz2ILkx_vqSXq2Ca6A&s"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p0pWhqqaYVGXhAu-nz2ILkx_vqSXq2Ca6A&s"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8p0pWhqqaYVGXhAu-nz2ILkx_vqSXq2Ca6A&s"
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
      {/* section 14 */}
      <div className="px-5 md:px-10 lg:px-20 bg-blue-50 flex flex-col items-center">
        <div className="font-semibold py-5 text-2xl">Invest in your career</div>
        <div className="w-full flex flex-col md:flex-row md:justify-center md:items-stretch gap-6">
          <div className="flex-1 flex flex-col items-center text-center p-4 ">
            <FiTarget className="text-2xl mb-2 text-gray-600" />
            <h1 className="font-semibold mb-1">Explore new skills</h1>
            <p className="text-gray-500 text-sm">
              Access 10,000+ courses in AI, business, technology, and more.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center p-4 ">
            <PiCertificateLight className="text-3xl mb-2 text-gray-600" />
            <h1 className="font-semibold mb-1">Earn valuable credentials</h1>
            <p className="text-gray-500 text-sm">
              Get certificates for every course you finish and boost your
              chances of getting hired after your trial ends at no additional
              cost.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center p-4 ">
            <FiStar className="text-2xl mb-2 text-gray-600" />
            <h1 className="font-semibold mb-1">Learn from the best</h1>
            <p className="text-gray-500 text-sm">
              Take your skills to the next level with expert-led courses and
              Coursera Coach, your AI-powered guide.
            </p>
          </div>
        </div>
      </div>
      {/* section 15 */}
      <div className="px-5 md:px-10 lg:px-20 ">
        <div>
          <h1 className="font-semibold text-2xl py-3">
            Accelerate growth — for you or your organization
          </h1>
          <p className="text-gray-500 text-sm mb-5">
            Reach goals faster with one of our plans or programs. Try one free
            today or contact sales to learn more.
          </p>
        </div>
      </div>
      {/* section 16 */}
      <div className="px-5 pt-5 pb-5 md:px-10 lg:px-20 grid lg:grid-cols-3 gap-3 ">
        {/* section 1.1 */}
        <div className="border rounded-xl border-gray-400 overflow-hidden">
          <div className=" bg-blue-50 p-7">
            <div className="flex flex-row items-center justify-between">
              <span className="font-semibold">Personal Plan</span>
              <button
                type="button"
                aria-label="Show more"
                className={`text-2xl focus:outline-none transition-transform duration-200 lg:hidden ${
                  isOpen ? "rotate-180" : ""
                }`}
                onClick={toggleDiv}
              >
                <MdKeyboardArrowDown />
              </button>
            </div>
            <div className="text-sm text-gray-600">for you</div>
            <div className="flex flex-row items-center gap-3 text-sm text-gray-600">
              <MdOutlinePersonOutline />
              <span>Personal Plan</span>
            </div>
          </div>
          {/* section 1.2 */}
          {isOpen && (
            <div className=" p-7">
              <h1>
                Starting at <span>₹500</span> per month
              </h1>
              <p className="text-sm text-gray-500">
                Billed monthly or annually. Cancel anytime.
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200">
                Start Free Trial
              </button>
              <ul className="mt-4 space-y-4">
                <li className="flex flex-row gap-2 items-baseline text-sm ">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Access to 26,000+ top courses
                </li>
                <li className="flex flex-row items-baseline gap-2 text-sm">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Certification prep
                </li>
                <li className="flex flex-row gap-2 items-baseline  text-sm">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Goal-focused recommendations
                </li>
                <li className="flex flex-row gap-2 items-baseline text-sm ">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  AI-powered coding exercises
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* section 1.2 */}
        <div className="border rounded-xl border-gray-400 overflow-hidden">
          <div className=" bg-blue-50 p-7">
            <div className="flex flex-row items-center justify-between">
              <span className="font-semibold">Personal Plan</span>
              <button
                type="button"
                aria-label="Show more"
                className={`text-2xl focus:outline-none transition-transform duration-200 lg:hidden ${
                  isOpen2 ? "rotate-180" : ""
                }`}
                onClick={toggleDiv2}
              >
                <MdKeyboardArrowDown />
              </button>
            </div>
            <div className="text-sm text-gray-600">for you</div>
            <div className="flex flex-row items-center gap-3 text-sm text-gray-600">
              <MdOutlinePersonOutline />
              <span>Personal Plan</span>
            </div>
          </div>
          {/* section 1.2 */}
          {isOpen2 && (
            <div className=" p-7">
              <h1>
                Starting at <span>₹500</span> per month
              </h1>
              <p className="text-sm text-gray-500">
                Billed monthly or annually. Cancel anytime.
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200">
                Start Free Trial
              </button>
              <ul className="mt-4 space-y-4">
                <li className="flex flex-row gap-2 items-baseline text-sm ">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Access to 26,000+ top courses
                </li>
                <li className="flex flex-row items-baseline gap-2 text-sm">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Certification prep
                </li>
                <li className="flex flex-row gap-2 items-baseline  text-sm">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Goal-focused recommendations
                </li>
                <li className="flex flex-row gap-2 items-baseline text-sm ">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  AI-powered coding exercises
                </li>
                <li className="flex flex-row gap-2 items-baseline text-sm ">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Analytics and adoption reports
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* section 1.3 */}
        <div className="border rounded-xl border-gray-400 overflow-hidden">
          <div className=" bg-blue-50 p-7">
            <div className="flex flex-row items-center justify-between">
              <span className="font-semibold">Personal Plan</span>
              <button
                type="button"
                aria-label="Show more"
                className={`text-2xl focus:outline-none transition-transform lg:hidden duration-200 ${
                  isOpen3 ? "rotate-180" : ""
                }`}
                onClick={toggleDiv3}
              >
                <MdKeyboardArrowDown />
              </button>
            </div>
            <div className="text-sm text-gray-600">for you</div>
            <div className="flex flex-row items-center gap-3 text-sm text-gray-600">
              <MdOutlinePersonOutline />
              <span>Personal Plan</span>
            </div>
          </div>
          {/* section 1.2 */}
          {isOpen3 && (
            <div className=" p-7">
              <h1>
                Starting at <span>₹500</span> per month
              </h1>
              <p className="text-sm text-gray-500">
                Billed monthly or annually. Cancel anytime.
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200">
                Start Free Trial
              </button>
              <ul className="mt-4 space-y-4">
                <li className="flex flex-row gap-2 items-baseline text-sm ">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Access to 26,000+ top courses
                </li>
                <li className="flex flex-row items-baseline gap-2 text-sm">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Certification prep
                </li>
                <li className="flex flex-row gap-2 items-baseline  text-sm">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Goal-focused recommendations
                </li>
                <li className="flex flex-row gap-2 items-baseline text-sm ">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  AI-powered coding exercises
                </li>
                <li className="flex flex-row gap-2 items-baseline text-sm ">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Dedicated customer success team
                </li>
                <li className="flex flex-row gap-2 items-baseline text-sm ">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  International course collection featuring 15 languages
                </li>
                <li className="flex flex-row gap-2 items-baseline text-sm ">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Customizable content
                </li>
                <li className="flex flex-row gap-2 items-baseline text-sm ">
                  <span>
                    <FaRegCheckCircle />
                  </span>
                  Hands-on tech training with add-on
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* section 17 */}
      <div className="px-5 pt-5 md:px-10 lg:px-20 bg-blue-50  ">
        {/* sec 1.1 */}
        <div>
          <h2 className="text-3xl font-semibold">
            See what others are achieving through learning
          </h2>
        </div>
        {/* sec 1.2 */}
        <div className="flex flex-row gap-6 overflow-x-auto hide-scrollbar py-4">
          <div className="bg-white p-10 rounded-lg space-y-8 max-w-96 min-w-[320px] flex-shrink-0">
            <RiDoubleQuotesL className="text-2xl" />
            <p>
              Because of this course I was able to clear my two interviews...
              Thanks for making such wonderful content.{" "}
            </p>
            <div>
              <div className="flex flex-row items-center gap-2 mt-3">
                <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
                  <h1 className="text-white text-base font-semibold">AV</h1>
                </div>
                <div>
                  <h3 className="font-semibold">Aarav Bavir</h3>
                  <p className="text-gray-500 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="text-blue-600">Achieved dream job at TechCorp</div>
          </div>
          <div className="bg-white p-10 rounded-lg space-y-8 max-w-96 min-w-[320px] flex-shrink-0">
            <RiDoubleQuotesL className="text-2xl" />
            <p>
              Because of this course I was able to clear my two interviews...
              Thanks for making such wonderful content.{" "}
            </p>
            <div>
              <div className="flex flex-row items-center gap-2 mt-3">
                <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
                  <h1 className="text-white text-base font-semibold">AV</h1>
                </div>
                <div>
                  <h3 className="font-semibold">Aarav Bavir</h3>
                  <p className="text-gray-500 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="text-blue-600">Achieved dream job at TechCorp</div>
          </div>
          <div className="bg-white p-10 rounded-lg space-y-8 max-w-96 min-w-[320px] flex-shrink-0">
            <RiDoubleQuotesL className="text-2xl" />
            <p>
              Because of this course I was able to clear my two interviews...
              Thanks for making such wonderful content.{" "}
            </p>
            <div>
              <div className="flex flex-row items-center gap-2 mt-3">
                <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
                  <h1 className="text-white text-base font-semibold">AV</h1>
                </div>
                <div>
                  <h3 className="font-semibold">Aarav Bavir</h3>
                  <p className="text-gray-500 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="text-blue-600">Achieved dream job at TechCorp</div>
          </div>
          <div className="bg-white p-10 rounded-lg space-y-8 max-w-96 min-w-[320px] flex-shrink-0">
            <RiDoubleQuotesL className="text-2xl" />
            <p>
              Because of this course I was able to clear my two interviews...
              Thanks for making such wonderful content.{" "}
            </p>
            <div>
              <div className="flex flex-row items-center gap-2 mt-3">
                <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
                  <h1 className="text-white text-base font-semibold">AV</h1>
                </div>
                <div>
                  <h3 className="font-semibold">Aarav Bavir</h3>
                  <p className="text-gray-500 text-sm">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="text-blue-600">Achieved dream job at TechCorp</div>
          </div>
        </div>
      </div>
      {/* section 18 */}
      <footer className="bg-gray-900 text-gray-200 py-10 px-5 md:px-10 lg:px-20 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex-1 mb-8 md:mb-0">
            <img src={logo} alt="logo" className="h-10 mb-3" />
            <p className="text-gray-400 text-sm">
              Unlock your potential, one lesson at a time.
            </p>
          </div>
          {/* Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Acdmx eLearn. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
