import { TfiMedall } from "react-icons/tfi";
import { FaCirclePlay } from "react-icons/fa6";
import { MdOutlineGroup } from "react-icons/md";

function CourseInstructorCard() {
  return (
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
        instructor who is truly dedicated to helping students realize their .
        With the honor of teaching over students from countries across the
        globe, I have honed my skills and become an expert in my field. My focus
        is on unlocking your potential to 10x your creativity with AI tools and
        filmmaking techniques I've learned over the years creating countless
        amounts of content for clients from many industries.
      </p>
    </div>
  );
}

export default CourseInstructorCard;
