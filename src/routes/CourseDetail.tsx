import Navbar from "../components/Navbar";
import ProductTag from "../components/productTag";
import { BsPatchExclamation } from "react-icons/bs";
import { SlGlobe } from "react-icons/sl";
import { MdOutlineSubtitles } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { MdOutlineGroup } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import SolidButton from "../components/SolidButton";
import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { PiDeviceMobile } from "react-icons/pi";
import { IoIosInfinite } from "react-icons/io";
import { MdOutlineClosedCaption } from "react-icons/md";
import { FaAudioDescription } from "react-icons/fa6";
import { PiCertificateLight } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { TfiMedall } from "react-icons/tfi";
import { FaCirclePlay } from "react-icons/fa6";
import { FiStar } from "react-icons/fi";

function CourseDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleDiv = () => setIsModalOpen((prev) => !prev);
  return (
    <div className="p-1">
      <Navbar />
      <img
        src="https://www.onlinecourserank.com/wp-content/uploads/best-online-computer-science-courses-1536x864.jpg"
        alt="no image"
      />
      <div className="p-4  space-y-3">
        <h1 className="font-rubik font-semibold text-2xl text-gray-800">
          The Complete AI Guide: Learn ChatGPT, Generative AI & More
        </h1>
        <h3 className="text-gray-600 font-medium">
          50+ Generative AI Tools to 10x Business, Productivity, Creativity |
          ChatGPT, Artificial Intelligence, Prompt Engineering
        </h3>
        <ProductTag tag="BestSeller" />
        <div className="text-sm text-gray-600">
          Created by{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Julian Melanson
          </a>
          ,{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Benza Maman
          </a>
          , and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Leap Year Learning
          </a>
        </div>
        <div className="text-sm text-gray-500">
          <div className="flex flex-row items-baseline gap-3">
            <BsPatchExclamation />
            <span>Last updated 6/2025</span>
          </div>
          <div className="flex flex-row items-baseline gap-3">
            <SlGlobe />
            <span>English</span>
          </div>
          <div className="flex flex-row items-baseline gap-3">
            <MdOutlineSubtitles />
            <span>English [cc] ,Arabic [cc]</span>
          </div>
        </div>

        {/* card */}
        <div className="flex border rounded-lg overflow-hidden shadow-sm divide-x divide-gray-200 text-center  py-3">
          {/* s1 */}
          <div className="flex flex-col flex-[1.5]  items-center justify-center ">
            <h1 className="text-sm font-semibold ">4.5</h1>
            <h2 className="text-yellow-500 text-sm">★★★★★</h2>
            <p className="text-xs text-gray-700">
              42,075 <span className="text-gray-500">ratings</span>
            </p>
          </div>

          {/* s2 */}
          <div className="flex flex-col flex-1 items-center justify-center">
            <SiTicktick className="text-sm text-blue-600" />
            <h1 className="text-xs font-medium">Premium</h1>
          </div>

          {/* s3 */}
          <div className="flex flex-col flex-1 items-center justify-center">
            <MdOutlineGroup className="text-sm " />
            <h1 className="text-xs font-semibold text-gray-800">222,451</h1>
            <p className="text-xs text-gray-600">learners</p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-2 items-baseline">
          <FaRegCircleCheck />
          <p>This Premium course is included in plans</p>
        </div>

        <div className="flex items-baseline space-x-2 text-sm">
          <span className="text-lg font-semibold text-gray-800">₹639</span>
          <span className="line-through text-gray-500">₹2999</span>
          <span className="text-green-600 font-medium">80% off</span>
        </div>
        <div className="flex flex-row items-baseline ">
          <MdOutlineTimer />
          11 hours left at this price!
        </div>
        <SolidButton buttonText="Add to Cart" />
        <SolidButton buttonText="Buy Now" />
        <div className="border-2 p-4 text-lg space-y-4">
          <h1 className="font-semibold">What you'll learn</h1>
          <ul className="list-disc list-inside text-sm text-gray-800">
            <li>
              ChatGPT: Turn your creativity into paid work, generate fresh
              ideas, reach new audiences, and scale your projects!
            </li>
            <li>
              ChatGPT: Turn your creativity into paid work, generate fresh
              ideas, reach new audiences, and scale your projects!
            </li>
            <li>
              ChatGPT: Turn your creativity into paid work, generate fresh
              ideas, reach new audiences, and scale your projects!
            </li>
            <li>
              ChatGPT: Turn your creativity into paid work, generate fresh
              ideas, reach new audiences, and scale your projects!
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-lg font-semibold">This course includes:</p>
          <div className="flex items-center space-x-2 text-sm text-gray-800">
            <MdOutlineOndemandVideo className="text-lg text-gray-600" />
            <span>36.5 hours on-demand video</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-800">
            <MdOutlineArticle className="text-lg text-gray-600" />
            <span>22 articles</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-800">
            <AiOutlineCloudDownload className="text-lg text-gray-600" />
            <span>130 downloadable resources</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-800">
            <PiDeviceMobile className="text-lg text-gray-600" />
            <span>Access on mobile and TV</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-800">
            <IoIosInfinite className="text-lg text-gray-600" />
            <span>Full lifetime access</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-800">
            <MdOutlineClosedCaption className="text-lg text-gray-600" />
            <span>Closed captions</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-800">
            <FaAudioDescription className="text-lg text-gray-600" />
            <span>Audio description in existing audio</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-800">
            <PiCertificateLight className="text-lg text-gray-600" />
            <span>Certificate of completion</span>
          </div>
        </div>
        <h1 className="text-lg font-semibold">Course content</h1>
        <div className="text-sm text-gray-800">
          <h1 className="font-medium">
            51 sections &bull; 494 lectures &bull;{" "}
            <span className="text-gray-600">36h 43m</span> total length
          </h1>
        </div>
        <h1 className="font-semibold text-blue-600">Expand All Sections</h1>
        <div>
          <div className=" p-3 bg-blue-50 flex gap-4">
            <button
              type="button"
              aria-label="Show more"
              className={`text-2xl focus:outline-none transition-transform duration-200 lg:hidden ${
                isModalOpen ? "rotate-180" : ""
              }`}
              onClick={toggleDiv}
            >
              <MdKeyboardArrowDown />
            </button>
            <h1 className="font-semibold">
              The Complete AI Guide Introduction
            </h1>
          </div>
          {isModalOpen && (
            <div className="flex flex-col space-y-3 p-4 border">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MdOutlineOndemandVideo className="text-blue-600 text-xl" />
                  <a
                    href="https://www.youtube.com/watch?v=rZ41y93P2Qo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 text-sm"
                  >
                    Watch course preview
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
        <SolidButton buttonText="10 more section" />
        <div>
          <h1 className="font-semibold text-xl">Description</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            iusto rerum qui adipisci reiciendis nam ducimus aut aperiam, dicta
            deleniti, illum velit ipsum. Earum iste vero commodi libero
            doloremque harum tempora eum dicta officia voluptatum inventore
            asperiores et officiis, fugit perspiciatis numquam sequi animi
            deleniti modi consectetur nesciunt cum praesentium?
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-xl">Instructor</h1>
          <a href="">Dr. Angela Yu, Developer and Lead Instructor</a>
          <p>Developer and Lead Instructor</p>
          <div className="flex items-center gap-4 p-2">
            <img
              src="https://img-c.udemycdn.com/user/200_H/26547450_0400_3.jpg"
              alt="Sam's profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="space-y-2">
              <h1 className="text-sm font-semibold">★ 4.5 Instructor Rating</h1>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <TfiMedall className="text-base" />
                61,362 Reviews
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <MdOutlineGroup className="text-base" />
                497,908 Students
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <FaCirclePlay className="text-base" />7 Courses
              </p>
            </div>
          </div>
          <p>
            My name is Julian, and I am a full-time teacher and bestselling
            instructor who is truly dedicated to helping students realize their{" "}
            . With the honor of teaching over students from countries across the
            globe, I have honed my skills and become an expert in my field. My
            focus is on unlocking your potential to 10x your creativity with AI
            tools and filmmaking techniques I've learned over the years creating
            countless amounts of content for clients from many industries.
          </p>
        </div>
        {/* Rating */}
        <div>
          <div className="flex items-baseline gap-1">
            <FiStar className="text-yellow-500 text-base" />
            <span className="text-sm text-gray-700">4.5 , 49K ratings</span>
          </div>
          <div className="border p-4">
            <div className="flex items-center justify-between gap-4">
              {/* Left section: Reviewer info */}
              <div>
                <span className="block text-sm font-medium text-gray-800">
                  Luigi S. F
                </span>
                <div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
                  {[...Array(5)].map((_, idx) => (
                    <FiStar key={idx} className="text-yellow-500 text-base" />
                  ))}
                  <span className="ml-2 text-xs text-gray-500">a week ago</span>
                </div>
              </div>

              {/* Right section: Avatar circle */}
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <h1 className="text-white text-xs font-semibold">LU</h1>
              </div>
            </div>

            <div>
              However, the editing with cuts every 3-5 seconds is often
              distracting and even cause motion sickness.', However, the editing
              with cuts every 3-5 seconds is often distracting and even cause
              motion sickness.
            </div>

            <div>
              <p>
                The course had plenty of helpful, and up-to-date, content. The
                initial chapters about effecting prompting and technology behind
                ChatGPT are quite insightful. However, the editing with cuts
                every 3-5 seconds is often distracting and even cause motion
                sickness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

// readme
// {npm install react-player} is used for playing video in the browser  .
