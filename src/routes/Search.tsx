import Navbar from "../components/Navbar";
import { MdOutlineFilterList } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Search() {
  const [sortModal, setSortModal] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      {/* Content area */}
      <div className="flex flex-1 flex-col">
        {/* static */}
        <div className="px-3 py-4 flex flex-row items-center justify-between bg-white rounded-md shadow-sm">
          {/* Filter Button with Icon */}
          <button className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-all duration-200">
            Filter
            <MdOutlineFilterList className="text-lg" />
          </button>
          

          {/* Sort Text */}
          <div
            className="text-sm sm:text-base font-semibold text-gray-700"
            onClick={() => setSortModal(true)}
          >
            Sort By: <span className="font-normal">Best Match </span>
          </div>
        </div>
        {/* sort Modal */}
        {sortModal && (
          <div className="fixed bottom-0 left-0 w-full rounded-t-2xl bg-white p-4 shadow-lg z-50 half-md:w-52 half-md:h-52 half-md:rounded-xl border border-blue-400 half-md:top-32 half-md:left-auto half-md:right-3">
            <div className="flex justify-end text-2xl text-blue-500 cursor-pointer">
              <IoClose onClick={() => setSortModal(false)} />
            </div>

            <div className="font-semibold mb-2">Sort by</div>
            <button className="w-full text-black py-2 px-4 rounded hover:bg-blue-300 nt-2">
              New
            </button>
            <button className="w-full text-black py-2 px-4 rounded hover:bg-blue-300 mt-2">
              Best Match
            </button>
          </div>
        )}

        {/* scroll down section */}
        <div className="h-full px-1 py-4 half-md:grid half-md:grid-cols-2 gap-2 lg:grid-cols-3">
          {/* card 1 */}
          <div className="flex flex-row half-md:flex-col-reverse border rounded-lg p-4 bg-white shadow-sm  w-full max-w-3xl">
            {/* Left Content */}
            <div className="flex flex-col space-y-2 flex-1">
              {/* Free Trial Badge */}
              <span className="border border-black text-xs font-semibold rounded-full py-0.5 px-2 w-fit">
                Free Trial
              </span>

              {/* Logo and Provider */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://learnatadistance.files.wordpress.com/2020/08/external-content.duckduckgo.com_.png"
                  alt="IBM logo"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm font-medium text-gray-800">IBM</span>
              </div>

              {/* Course Title */}
              <h2 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                Introduction to Artificial Intelligence (AI)
              </h2>

              {/* Skills */}
              <p className="text-sm text-gray-700 line-clamp-3">
                <span className="font-semibold">Skills you will gain:</span>{" "}
                Generative AI, ChatGPT, Natural Language Processing, Data
                Governance, Computer Science, Business Intelligence, Business
                Ethics, Robotic Process Automation, Content Creation, Risk
                Mitigation
              </p>

              {/* Rating and Views */}
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="flex items-center space-x-1">
                  <FiStar className="text-yellow-500" />
                  <span className="font-semibold">4.7</span>
                </div>
                <span className="text-gray-400">•</span>
                <span>20K views</span>
              </div>

              {/* Course Meta */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="font-medium">Beginner</span>
                <span className="text-gray-400">•</span>
                <span>Course</span>
                <span className="text-gray-400">•</span>
                <span>1–4 Weeks</span>
              </div>
            </div>

            {/* Right Image */}
            <div className=" max-w-xs sm:max-w-sm half-md::max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
              <img
                src="https://learnatadistance.files.wordpress.com/2020/08/external-content.duckduckgo.com_.png"
                alt="Course preview"
                className="w-20 h-20 half-md:w-auto half-md:h-48 rounded-md object-cover"
              />
            </div>
          </div>
          {/* card 2 */}
          <div className="flex flex-row half-md:flex-col-reverse border rounded-lg p-4 bg-white shadow-sm w-full max-w-3xl">
            {/* Left Content */}
            <div className="flex flex-col space-y-2 flex-1">
              {/* Free Trial Badge */}
              <span className="border border-black text-xs font-semibold rounded-full py-0.5 px-2 w-fit">
                Free Trial
              </span>

              {/* Logo and Provider */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.Bs2PlI-wmfFiYzgWNRO0pgHaDO?pid=Api&P=0&h=180"
                  alt="IBM logo"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm font-medium text-gray-800">IBM</span>
              </div>

              {/* Course Title */}
              <h2 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                Introduction to Artificial Intelligence (AI)
              </h2>

              {/* Skills */}
              <p className="text-sm text-gray-700 line-clamp-3">
                <span className="font-semibold">Skills you will gain:</span>{" "}
                Generative AI, ChatGPT, Natural Language Processing, Data
                Governance, Computer Science, Business Intelligence, Business
                Ethics, Robotic Process Automation, Content Creation, Risk
                Mitigation
              </p>

              {/* Rating and Views */}
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="flex items-center space-x-1">
                  <FiStar className="text-yellow-500" />
                  <span className="font-semibold">4.7</span>
                </div>
                <span className="text-gray-400">•</span>
                <span>20K views</span>
              </div>

              {/* Course Meta */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="font-medium">Beginner</span>
                <span className="text-gray-400">•</span>
                <span>Course</span>
                <span className="text-gray-400">•</span>
                <span>1–4 Weeks</span>
              </div>
            </div>

            {/* Right Image */}
            <div className=" max-w-xs sm:max-w-sm half-md::max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
              <img
                src="https://learnatadistance.files.wordpress.com/2020/08/external-content.duckduckgo.com_.png"
                alt="Course preview"
                className="w-20 h-20 half-md:w-auto half-md:h-48 rounded-md object-cover"
              />
            </div>
          </div>
          {/* card 3 */}
          <div className="flex flex-row half-md:flex-col-reverse border rounded-lg p-4 bg-white shadow-sm  w-full max-w-3xl">
            {/* Left Content */}
            <div className="flex flex-col space-y-2 flex-1">
              {/* Free Trial Badge */}
              <span className="border border-black text-xs font-semibold rounded-full py-0.5 px-2 w-fit">
                Free Trial
              </span>

              {/* Logo and Provider */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.Bs2PlI-wmfFiYzgWNRO0pgHaDO?pid=Api&P=0&h=180"
                  alt="IBM logo"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm font-medium text-gray-800">IBM</span>
              </div>

              {/* Course Title */}
              <h2 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                Introduction to Artificial Intelligence (AI)
              </h2>

              {/* Skills */}
              <p className="text-sm text-gray-700 line-clamp-3">
                <span className="font-semibold">Skills you will gain:</span>{" "}
                Generative AI, ChatGPT, Natural Language Processing, Data
                Governance, Computer Science, Business Intelligence, Business
                Ethics, Robotic Process Automation, Content Creation, Risk
                Mitigation
              </p>

              {/* Rating and Views */}
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="flex items-center space-x-1">
                  <FiStar className="text-yellow-500" />
                  <span className="font-semibold">4.7</span>
                </div>
                <span className="text-gray-400">•</span>
                <span>20K views</span>
              </div>

              {/* Course Meta */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="font-medium">Beginner</span>
                <span className="text-gray-400">•</span>
                <span>Course</span>
                <span className="text-gray-400">•</span>
                <span>1–4 Weeks</span>
              </div>
            </div>

            {/* Right Image */}
            <div className=" max-w-xs sm:max-w-sm half-md::max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
              <img
                src="https://learnatadistance.files.wordpress.com/2020/08/external-content.duckduckgo.com_.png"
                alt="Course preview"
                className="w-20 h-20 half-md:w-auto half-md:h-48 rounded-md object-cover"
              />
            </div>
          </div>
          {/* card 4 */}
          <div className="flex flex-row half-md:flex-col-reverse border rounded-lg p-4 bg-white shadow-sm  w-full max-w-3xl">
            {/* Left Content */}
            <div className="flex flex-col space-y-2 flex-1">
              {/* Free Trial Badge */}
              <span className="border border-black text-xs font-semibold rounded-full py-0.5 px-2 w-fit">
                Free Trial
              </span>

              {/* Logo and Provider */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.Bs2PlI-wmfFiYzgWNRO0pgHaDO?pid=Api&P=0&h=180"
                  alt="IBM logo"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm font-medium text-gray-800">IBM</span>
              </div>

              {/* Course Title */}
              <h2 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                Introduction to Artificial Intelligence (AI)
              </h2>

              {/* Skills */}
              <p className="text-sm text-gray-700 line-clamp-3">
                <span className="font-semibold">Skills you will gain:</span>{" "}
                Generative AI, ChatGPT, Natural Language Processing, Data
                Governance, Computer Science, Business Intelligence, Business
                Ethics, Robotic Process Automation, Content Creation, Risk
                Mitigation
              </p>

              {/* Rating and Views */}
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="flex items-center space-x-1">
                  <FiStar className="text-yellow-500" />
                  <span className="font-semibold">4.7</span>
                </div>
                <span className="text-gray-400">•</span>
                <span>20K views</span>
              </div>

              {/* Course Meta */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="font-medium">Beginner</span>
                <span className="text-gray-400">•</span>
                <span>Course</span>
                <span className="text-gray-400">•</span>
                <span>1–4 Weeks</span>
              </div>
            </div>

            {/* Right Image */}
            <div className=" max-w-xs sm:max-w-sm half-md::max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
              <img
                src="https://learnatadistance.files.wordpress.com/2020/08/external-content.duckduckgo.com_.png"
                alt="Course preview"
                className="w-20 h-20 half-md:w-auto half-md:h-48 rounded-md object-cover"
              />
            </div>
          </div>
          {/* card 5 */}
          <div className="flex flex-row half-md:flex-col-reverse border rounded-lg p-4 bg-white shadow-sm  w-full max-w-3xl">
            {/* Left Content */}
            <div className="flex flex-col space-y-2 flex-1">
              {/* Free Trial Badge */}
              <span className="border border-black text-xs font-semibold rounded-full py-0.5 px-2 w-fit">
                Free Trial
              </span>

              {/* Logo and Provider */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.Bs2PlI-wmfFiYzgWNRO0pgHaDO?pid=Api&P=0&h=180"
                  alt="IBM logo"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm font-medium text-gray-800">IBM</span>
              </div>

              {/* Course Title */}
              <h2 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                Introduction to Artificial Intelligence (AI)
              </h2>

              {/* Skills */}
              <p className="text-sm text-gray-700 line-clamp-3">
                <span className="font-semibold">Skills you will gain:</span>{" "}
                Generative AI, ChatGPT, Natural Language Processing, Data
                Governance, Computer Science, Business Intelligence, Business
                Ethics, Robotic Process Automation, Content Creation, Risk
                Mitigation
              </p>

              {/* Rating and Views */}
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="flex items-center space-x-1">
                  <FiStar className="text-yellow-500" />
                  <span className="font-semibold">4.7</span>
                </div>
                <span className="text-gray-400">•</span>
                <span>20K views</span>
              </div>

              {/* Course Meta */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="font-medium">Beginner</span>
                <span className="text-gray-400">•</span>
                <span>Course</span>
                <span className="text-gray-400">•</span>
                <span>1–4 Weeks</span>
              </div>
            </div>

            {/* Right Image */}
            <div className=" max-w-xs sm:max-w-sm half-md::max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
              <img
                src="https://learnatadistance.files.wordpress.com/2020/08/external-content.duckduckgo.com_.png"
                alt="Course preview"
                className="w-20 h-20 half-md:w-auto half-md:h-48 rounded-md object-cover"
              />
            </div>
          </div>
          {/* card 6 */}
          <div className="flex flex-row half-md:flex-col-reverse border rounded-lg p-4 bg-white shadow-sm  w-full max-w-3xl">
            {/* Left Content */}
            <div className="flex flex-col space-y-2 flex-1">
              {/* Free Trial Badge */}
              <span className="border border-black text-xs font-semibold rounded-full py-0.5 px-2 w-fit">
                Free Trial
              </span>

              {/* Logo and Provider */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.Bs2PlI-wmfFiYzgWNRO0pgHaDO?pid=Api&P=0&h=180"
                  alt="IBM logo"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm font-medium text-gray-800">IBM</span>
              </div>

              {/* Course Title */}
              <h2 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                Introduction to Artificial Intelligence (AI)
              </h2>

              {/* Skills */}
              <p className="text-sm text-gray-700 line-clamp-3">
                <span className="font-semibold">Skills you will gain:</span>{" "}
                Generative AI, ChatGPT, Natural Language Processing, Data
                Governance, Computer Science, Business Intelligence, Business
                Ethics, Robotic Process Automation, Content Creation, Risk
                Mitigation
              </p>

              {/* Rating and Views */}
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="flex items-center space-x-1">
                  <FiStar className="text-yellow-500" />
                  <span className="font-semibold">4.7</span>
                </div>
                <span className="text-gray-400">•</span>
                <span>20K views</span>
              </div>

              {/* Course Meta */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span className="font-medium">Beginner</span>
                <span className="text-gray-400">•</span>
                <span>Course</span>
                <span className="text-gray-400">•</span>
                <span>1–4 Weeks</span>
              </div>
            </div>

            {/* Right Image */}
            <div className=" max-w-xs sm:max-w-sm half-md::max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
              <img
                src="https://learnatadistance.files.wordpress.com/2020/08/external-content.duckduckgo.com_.png"
                alt="Course preview"
                className="w-20 h-20 half-md:w-auto half-md:h-48 rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
