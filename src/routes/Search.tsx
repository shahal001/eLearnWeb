import Navbar from "../components/Navbar";
import { MdOutlineFilterList } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import SearchScreenCard from "../components/courseSearch/SearchScreenCard";
import { courseCards } from "../assets/DummyDatas/SearchCourse";

function Search() {
  const [sortModal, setSortModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState(true);

  const toggleModal = () => {
    setSearchQuery((prev) => !prev);
  };

  return (
    <div className="lg:px-20 h-screen flex flex-col">
      <Navbar />

      {/* Content area */}
      <div className="flex flex-1 flex-col">
        {/* static */}
        <div className="px-3 py-4 flex flex-row items-center justify-between bg-white rounded-md shadow-sm">
          {/* Filter Button with Icon */}
          <button
            onClick={() => setFilterModal(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 text-sm sm:text-base border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50 transition-all duration-200"
          >
            Filter
            <MdOutlineFilterList className="text-lg" />
          </button>
          {/* filter modal */}
          {filterModal && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="w-screen h-screen bg-white relative px-6 py-8 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Filter By :</h2>
                  <button
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition"
                    onClick={() => setFilterModal(false)}
                  >
                    <span className="text-sm font-medium">Close</span>
                    <IoClose className="text-2xl" />
                  </button>
                </div>

                {/* Your filtering content goes here */}
                <div>
                  <div
                    onClick={toggleModal}
                    className="bg-blue-300 p-2 cursor-pointer"
                  >
                    Subject
                  </div>

                  {searchQuery && (
                    <div className="flex flex-col gap-2 mt-2">
                      {[
                        "Data Science",
                        "Information Technology",
                        "Computer Science",
                        "Business",
                      ].map((subject) => (
                        <label
                          key={subject}
                          className="flex items-center space-x-2"
                        >
                          <input type="checkbox" />
                          <span>{subject}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

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
        <div className=" lg:flex h-full px-1 py-4 ">
          <div className="hidden lg:block  lg:w-[20%] lg:sticky lg:h-screen lg:top-0 ">
            {/* section1 */}
            <div className="font-semibold text-md">subject</div>
            <div className="flex flex-col gap-2 mt-2">
              {[
                "Data Science",
                "Information Technology",
                "Computer Science",
                "Business",
              ].map((subject) => (
                <label key={subject} className="flex items-center space-x-2">
                  <input type="checkbox" className="w-5 h-5 accent-gray-500" />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
            {/* section2 */}
            <div className="font-semibold text-md">New Courses</div>
            <div className="flex flex-col gap-2 mt-2">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Data Science",
                "Deep Learning",
              ].map((subject) => (
                <label key={subject} className="flex items-center space-x-2">
                  <input type="checkbox" className="w-5 h-5 accent-gray-500" />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
            {/* section3 */}
            <div className="font-semibold text-md">New Courses</div>
            <div className="flex flex-col gap-2 mt-2">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Data Science",
                "Deep Learning",
              ].map((subject) => (
                <label key={subject} className="flex items-center space-x-2">
                  <input type="checkbox" className="w-5 h-5 accent-gray-500" />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
            {/* section4 */}
            <div className="font-semibold text-md">New Courses</div>
            <div className="flex flex-col gap-2 mt-2">
              {[
                "Artificial Intelligence",
                "Machine Learning",
                "Data Science",
                "Deep Learning",
              ].map((subject) => (
                <label key={subject} className="flex items-center space-x-2">
                  <input type="checkbox" className="w-5 h-5 accent-gray-500" />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="lg:w-[80%]  half-md:grid half-md:grid-cols-2 gap-2 lg:grid-cols-3">
            {courseCards.map((data, idx) => (
              <SearchScreenCard
                key={idx}
                badge={data.badge}
                logo={data.logo}
                provider={data.provider}
                title={data.title}
                skills={data.skills}
                rating={data.rating}
                views={data.views}
                level={data.level}
                type={data.type}
                duration={data.duration}
                preview={data.preview}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
