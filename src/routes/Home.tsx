import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/images/logoOfAcdmx.png";
import student from "../assets/images/studentImg.png";
import stepImg from "../assets/images/stepimage.png";
import { IoIosStar } from "react-icons/io";
import { FiTarget } from "react-icons/fi";
import { PiCertificateLight } from "react-icons/pi";
import { FiStar } from "react-icons/fi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import FullBorderCard from "../components/FullBorderCard";
import HeadingAndSmallText from "../components/HeadingAndSmallText";
import HalfBorderCard from "../components/HalfBorderCard";
import BorderLessCard from "../components/BorderLessCard";
import InfiniteScroll from "../components/InfiniteScroll";
import {
  cardData,
  courseFilter,
  HalfBorderCardData,
  BorderLessCardData,
  PricingPlans,
  infiniteAutoScrolling,
} from "../assets/DummyDatas/CardData";
import ScrollFiltere from "../components/ScrollFiltere";
import PriceCard from "../components/PriceCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      {/* section1 */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-16 lg:px-20 relative overflow-hidden">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start z-10">
          <img
            className="h-10 md:h-14 object-contain mb-4"
            src={logo}
            alt="logo"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Empower Your Future with{" "}
            <span className="text-blue-600">Acdmx</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-3">
            Learn in-demand skills, earn industry-recognized certificates, and
            get ready for your dream job.
          </p>
          <ul className="mb-6 space-y-2 text-gray-700 text-base">
            <li className="flex items-center gap-2">
              <FaRegCheckCircle className="text-blue-500" /> 10,000+ expert-led
              courses
            </li>
            <li className="flex items-center gap-2">
              <FaRegCheckCircle className="text-blue-500" /> Hands-on projects &
              real-world scenarios
            </li>
            <li className="flex items-center gap-2">
              <FaRegCheckCircle className="text-blue-500" /> Flexible learning,
              anytime, anywhere
            </li>
            <li className="flex items-center gap-2">
              <FaRegCheckCircle className="text-blue-500" /> Career support &
              job-ready credentials
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="px-7 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-all duration-200">
              Start 7-day Free Trial
            </button>
            <button className="px-7 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
              Browse Courses
            </button>
          </div>
          <a
            className="text-blue-600 font-bold mt-4 cursor-pointer text-left hover:underline"
            tabIndex={0}
          >
            or ₹25,000/year with 14-day money-back guarantee
          </a>
          <p className="mt-4 text-gray-500 text-sm">
            Open your mind to new possibilities. Join thousands of learners
            building their future with{" "}
            <span className="font-semibold text-blue-600">Acdmx</span>.
          </p>
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 z-10">
          <div className="relative">
            <img
              className="h-60 sm:h-72 md:h-96 lg:h-[420px] xl:h-[500px] object-contain drop-shadow-xl rounded-2xl"
              src={student}
              alt="student"
            />
            {/* Decorative floating cards */}
            <div className="absolute top-4 left-0 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2 animate-float hidden md:flex">
              <IoIosStar className="text-yellow-400" />
              <span className="font-semibold text-gray-700">4.8/5.0</span>
              <span className="text-xs text-gray-400">Avg. Rating</span>
            </div>
            <div className="absolute bottom-8 right-0 bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center gap-2 animate-float2 hidden md:flex">
              <PiCertificateLight className="text-xl" />
              <span className="font-semibold">Certified</span>
            </div>
            <div className="absolute bottom-0 left-0 bg-white shadow rounded-lg px-3 py-1 flex items-center gap-2 animate-float3 hidden md:flex">
              <MdOutlinePersonOutline className="text-blue-600" />
              <span className="text-gray-700 text-sm">16,000+ learners</span>
            </div>
          </div>
        </div>
        {/* Decorative background shapes */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
      </section>
      {/* section2 */}
      <div className=" px-5 md:px-10 lg:px-20 py-5  ">
        <HeadingAndSmallText />
      </div>
      {/* card1 3 */}
      <div className="px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardData.map((card, idx) => (
          <FullBorderCard
            key={idx}
            id={card.id}
            image={card.image}
            heading={card.heading}
            rating={card.rating}
            enrolled={card.enrolled}
            hours={card.hours}
          />
        ))}

        <div className="pt-3 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={() => navigate("/courseDetail")}
            className="px-7 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
          >
            Show all courses
          </button>
        </div>
      </div>
      {/* section 4 */}
      <div className=" px-5 md:px-10 lg:px-20 py-10  ">
        <div>
          <span className="font-semibold text-2xl md:text-3xl  lg:text-4xl font-playfair block">
            All the skills you need in one place
          </span>
          <span className="block text-gray-500 font-rubik text-md md:text-lg lg:text-xl mt-2">
            Master skills, gain experience, and accelerate your career with
            expert-led courses.
          </span>
        </div>
      </div>
      {/* section line 5 */}
      <div className="px-5 md:px-10 lg:px-20 ">
        <div className="w-full border-t border-gray-300 mb-3"></div>
        <div className="font-semibold text-lg lg:text-xl font-playfair">
          Top courses
        </div>
      </div>
      {/* section scroller  6 */}
      <div className="flex flex-row gap-3 px-5 md:px-10 lg:px-20 py-5 overflow-x-auto hide-scrollbar">
        {courseFilter.map((data, id) => (
          <ScrollFiltere
            key={id}
            course={data.course}
            learners={data.learners}
          />
        ))}
      </div>
      {/* card2     7 */}
      <div className="my-5 px-5 md:px-10 lg:px-20 overflow-x-auto hide-scrollbar">
        <div className="flex flex-row gap-4 w-max">
          {HalfBorderCardData.map((data, index) => (
            <HalfBorderCard
              key={index}
              image={data.image}
              heading={data.heading}
              mentors={data.mentors}
              view={data.view}
              offerPrice={data.offerPrice}
              price={data.price}
              sellStatus={data.sellStatus}
            />
          ))}
        </div>
      </div>
      <div className="my-5 px-5 md:px-10 lg:px-20 pt-3 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <button className="px-7 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
          Show all courses
        </button>
      </div>
      {/* section 9 */}
      <div className="py-6 text-center">
        <div className="md:text-xl lg:text-2xl py-4 font-playfair font-semibold text-gray-500 mb-6">
          Trusted by over 16,000 companies and millions of learners around the
          world
        </div>
        <InfiniteScroll logos={infiniteAutoScrolling} />
      </div>
      {/* section line 10 */}
      <div className="p-5 md:px-10 lg:px-20 ">
        <div className="font-semibold text-lg lg:text-2xl font-playfair ">
          Artificial Intelligence
        </div>
      </div>
      {/* card3     11 */}
      <div className="my-5 px-5 md:px-10 lg:px-20 overflow-x-auto hide-scrollbar">
        <div className="flex flex-row gap-4 w-max">
          {BorderLessCardData.map((data, index) => (
            <BorderLessCard
              key={index}
              image={data.image}
              heading={data.heading}
              mentors={data.mentors}
              view={data.view}
              offerPrice={data.offerPrice}
              price={data.price}
              sellStatus={data.sellStatus}
            />
          ))}
        </div>
      </div>
      <div className="my-5 px-5 md:px-10 lg:px-20 pt-3 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <button className="px-7 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
          Show all
        </button>
      </div>
      {/* section line 12 */}
      <div className="p-5 md:px-10 lg:px-20 ">
        <div className="font-semibold text-lg lg:text-2xl font-playfair ">
          Recent Search
        </div>
      </div>
      {/* card3     13 */}
      <div className="my-5 px-5 md:px-10 lg:px-20 overflow-x-auto hide-scrollbar">
        <div className="flex flex-row gap-4 w-max">
          {BorderLessCardData.map((data, index) => (
            <BorderLessCard
              key={index}
              image={data.image}
              heading={data.heading}
              mentors={data.mentors}
              view={data.view}
              offerPrice={data.offerPrice}
              price={data.price}
              sellStatus={data.sellStatus}
            />
          ))}
        </div>
      </div>
      <div className="my-5 px-5 md:px-10 lg:px-20 pt-3 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <button className="px-7 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200">
          Show all
        </button>
      </div>
      {/* section 14 */}
      <div className="px-5 md:px-10 lg:px-20 py-5 bg-blue-50 flex flex-col items-center">
        <div className="font-semibold pt-6 text-2xl lg:text-3xl font-playfair">
          Invest in your career
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-center md:items-baseline py-6 gap-6">
          <div className="flex-1 flex flex-col items-center  text-center p-4 ">
            <FiTarget className="text-2xl lg:text-3xl mb-2 text-gray-600" />
            <h1 className="font-semibold mb-1 lg:text-xl">
              Explore new skills
            </h1>
            <p className="text-gray-500 text-sm">
              Access 10,000+ courses in AI, business, technology, and more.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center p-4 ">
            <PiCertificateLight className="text-3xl lg:text-4xl mb-2 text-gray-600" />
            <h1 className="font-semibold mb-1 lg:text-xl">
              Earn valuable credentials
            </h1>
            <p className="text-gray-500 text-sm">
              Get certificates for every course you finish and boost your
              chances of getting hired after your trial ends at no additional
              cost.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center p-4 ">
            <FiStar className="text-2xl lg:text-3xl mb-2 text-gray-600" />
            <h1 className="font-semibold mb-1 lg:text-xl">
              Learn from the best
            </h1>
            <p className="text-gray-500 text-sm">
              Take your skills to the next level with expert-led courses and
              Coursera Coach, your AI-powered guide.
            </p>
          </div>
        </div>
      </div>
      {/* section 18 */}
      <div className="px-5 md:px-10 lg:px-20 ">
        <div className="flex flex-col lg:flex-row  items-center">
          {/* section 1.1 */}
          <div className=" space-y-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-playfair">
              AI for Business Leaders
            </h1>
            <p className="text-sm lg:text-md">
              Build an AI-habit for you and your team that builds hands-on
              skills to help you lead effectively.
            </p>
            <button className="mt-4 border border-blue-600 text-blue-600 px-3 py-1 lg:px-5 lg:py-2 rounded-md font-semibold hover:bg-blue-50 active:scale-95 transition-all duration-150 flex items-center gap-2">
              Start Learning <span className="text-lg">&rarr;</span>
            </button>
          </div>
          {/* section 1.2 */}
          <div>
            <img
              className="max-w-[80%] max-h-[80%] pt-5 lg:py-2"
              src={stepImg}
              alt="noImage"
            />
          </div>
        </div>
      </div>
      {/* section 17 */}
      <div className="px-5 pt-5 md:px-10 lg:px-20 bg-blue-50  ">
        <div className="py-10">
          {/* sec 1.1 */}
          <div>
            <h2 className="text-3xl font-semibold py-5 font-playfair">
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
              <div className="text-blue-600">
                Achieved dream job at TechCorp
              </div>
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
              <div className="text-blue-600">
                Achieved dream job at TechCorp
              </div>
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
              <div className="text-blue-600">
                Achieved dream job at TechCorp
              </div>
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
              <div className="text-blue-600">
                Achieved dream job at TechCorp
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 15 */}
      <div className="px-5 md:px-10 lg:px-20 ">
        <div className="pt-7 ">
          <h1 className="font-semibold font-playfair text-2xl py-3">
            Accelerate growth — for you or your organization
          </h1>
          <p className="text-gray-500 text-sm lg:text-lg mb-5 font-rubik ">
            Reach goals faster with one of our plans or programs. Try one free
            today or contact sales to learn more.
          </p>
        </div>
      </div>
      {/* section 16 */}
      <div className="px-5 pt-5 pb-5 md:px-10 lg:px-20 grid lg:grid-cols-3 gap-3 ">
        {PricingPlans.map((data, index) => (
          <PriceCard
            key={index}
            title={data.title}
            tag={data.tag}
            price={data.price}
            billingInfo={data.billingInfo}
            countOfMembers={data.countOfMembers}
            btnLabel={data.btnLabel}
            features={data.features}
          />
        ))}
      </div>
      {/* section 19 */}
      <Footer />
    </div>
  );
};

export default Home;
