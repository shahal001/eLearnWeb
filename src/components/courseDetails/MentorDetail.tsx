import { useState } from "react";
import { TfiMedall } from "react-icons/tfi";
import { FaCirclePlay } from "react-icons/fa6";
import { MdOutlineGroup } from "react-icons/md";
import { FiStar } from "react-icons/fi";

interface MentorDetailProps {
  bio: string;
  name: string;
  designation: string;
  image: string;
  instructorRating: string;
  reviewsCount: string;
  totalStudents: string;
  totalCourses: string;
}

function MentorDetail({
  bio,
  name,
  designation,
  image,
  instructorRating,
  reviewsCount,
  totalStudents,
  totalCourses,
}: MentorDetailProps) {
  const fullText = bio;
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => setShowMore((prev) => !prev);

  const previewText = fullText.split(" ").slice(0, 50).join(" ") + "...";

  return (
    <div>
      <a
        href=""
        className="font-semibold font-sans text-lg text-blue-500"
      >
        {name}
      </a>
      <p className="font-sm">{designation}</p>
      <div className="flex items-center gap-4 p-2">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="space-y-2">
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <FiStar className="text-base text-yellow-500" />
            {instructorRating}
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <TfiMedall className="text-base" />
            {reviewsCount}
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <MdOutlineGroup className="text-base" />
            {totalStudents}
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <FaCirclePlay className="text-xs" />
            {totalCourses}
          </p>
        </div>
      </div>
      <p className="text-gray-800 text-sm mt-2">
        {showMore ? fullText : previewText}
      </p>
      <button
        onClick={toggleText}
        className="text-blue-400 text-sm mt-1  underline-offset-2"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default MentorDetail;
