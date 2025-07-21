import Navbar from "../components/Navbar";
import ProductTag from "../components/ProductTag";
import { BsPatchExclamation } from "react-icons/bs";
import { SlGlobe } from "react-icons/sl";
import { MdOutlineSubtitles } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { MdOutlineGroup } from "react-icons/md";
import SolidButton from "../components/SolidButton";
import { MdOutlineTimer } from "react-icons/md";
import { TiStar } from "react-icons/ti";
import BorderButton from "../components/BorderButton";
import {
  whatYouLearn,
  courseReviews,
  courseMentors,
  courseDescription,
  courseContentData,
} from "../assets/DummyDatas/CardData";
import HeadingAndPoints from "../components/courseDetails/HeadingAndPoints";
import Footer from "../components/Footer";
import CourseIncludes from "../components/courseDetails/CourseIncludes";
import HeadingAndParagraph from "../components/courseDetails/HeadingAndParagraph";
import MentorDetail from "../components/courseDetails/MentorDetail";
import RatingCardAndHeading from "../components/courseDetails/RatingCardAndHeading";
import CourseContent from "../components/courseDetails/CourseContent";

function CourseDetail() {
  return (
    <div>
      <div className="md:px-20 lg:px-52">
        <Navbar />
        <img
          src="https://www.onlinecourserank.com/wp-content/uploads/best-online-computer-science-courses-1536x864.jpg"
          alt="no image"
        />
        <div className="p-6  space-y-3">
          {/* section 1 */}
          <div className=" space-y-4 pb-5">
            <h1 className="font-rubik font-semibold text-2xl text-gray-800">
              The Complete AI Guide: Learn ChatGPT, Generative AI & More
            </h1>
            <h3 className="text-gray-600 font-medium">
              50+ Generative AI Tools to 10x Business, Productivity, Creativity
              | ChatGPT, Artificial Intelligence, Prompt Engineering
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
            <div className="text-sm text-gray-500 space-y-2">
              <div className="flex items-center gap-2">
                <BsPatchExclamation className="text-base" />
                <span>Last updated 6/2025</span>
              </div>
              <div className="flex items-center gap-2">
                <SlGlobe className="text-base" />
                <span>English</span>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineSubtitles className="text-lg" />
                <span>English [CC], Arabic [CC]</span>
              </div>
            </div>
          </div>
          {/* card */}
          <div className="flex border rounded-lg overflow-hidden shadow-sm divide-x divide-gray-200 text-center py-3">
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
          {/* price section */}
          <div className="space-y-2 text-sm">
            {/* Price Section */}
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">₹639</span>
              <span className="line-through text-gray-400">₹2999</span>
              <span className="text-green-600 font-medium">80% off</span>
            </div>

            {/* Countdown Section */}
            <div className="flex items-center space-x-1 text-red-600 font-medium">
              <MdOutlineTimer className="text-lg" />
              <span>Only 11 hours left at this price!</span>
            </div>
          </div>
          {/* buy button and cart */}
          <div className="pb-3">
            <SolidButton buttonText="Add to Cart" />
            <BorderButton buttonText="Buy Now" />
          </div>
          {/* what you will learn */}
          {
            <HeadingAndPoints
              heading={whatYouLearn.heading}
              points={whatYouLearn.points}
            />
          }
          {/* course includes */}
          <CourseIncludes />
          <h1 className="font-semibold text-xl pt-2 font-playfair">
            Course content
          </h1>
          <div className="text-sm text-gray-800">
            <h1 className="font-medium">
              51 sections &bull; 494 lectures &bull;{" "}
              <span className="text-gray-600">36h 43m</span> total length
            </h1>
          </div>
          <h1 className="font-semibold text-blue-600">Expand All Sections</h1>

          {/* course video section */}
          <div>
            {courseContentData.map((data, idx) => (
              <CourseContent
                key={idx}
                heading={data.title}
                mapData={data.videos}
              />
            ))}
          </div>
          <BorderButton buttonText="10 more section" />
          {/* course description */}
          <HeadingAndParagraph
            heading={courseDescription.heading}
            paragraph={courseDescription.paragraph}
          />
          {/* mentor details */}
          <div>
            <h1 className="font-semibold text-xl pt-2 font-playfair">
              Instructors
            </h1>
          </div>
          {courseMentors.map((data, idx) => (
            <MentorDetail
              key={idx}
              bio={data.bio}
              name={data.name}
              designation={data.designation}
              image={data.image}
              instructorRating={data.rating}
              reviewsCount={data.reviews}
              totalStudents={data.students}
              totalCourses={data.courses}
            />
          ))}
          {/* Review */}
          <div className="flex items-baseline gap-1">
            <TiStar className="text-yellow-500 text-base" />
            <span className=" text-lg font-bold font-rubik text-gray-700">
              4.5 . 49K ratings.
            </span>
          </div>
          <div className="overflow-x-auto w-full hide-scrollbar ">
            <div className="flex gap-4 w-max px-4 py-2">
              {courseReviews.map((data, idx) => (
                <div
                  key={`${data.nameOfPerson}-${idx}`}
                  className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[360px] lg:w-[320px]"
                >
                  <RatingCardAndHeading
                    nameOfPerson={data.nameOfPerson}
                    postTime={data.postTime}
                    shortReview={data.shortReview}
                    fullReview={data.fullReview}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default CourseDetail;

// readme
// {npm install react-player} is used for playing video in the browser  .
