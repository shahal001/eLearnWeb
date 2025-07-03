import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";

interface CourseContent {
  heading: string;
  mapData: MapItem[];
}

interface MapItem {
  label: string;
  urlLink: string;
}

function CourseContent({ heading, mapData }: CourseContent) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleDiv = () => setIsModalOpen((prev) => !prev);

  return (
    <div>
      <div className=" p-3 bg-blue-50 flex gap-4">
        <button
          type="button"
          aria-label="Show more"
          className={`text-2xl focus:outline-none transition-transform duration-200  ${
            isModalOpen ? "rotate-180" : ""
          }`}
          onClick={toggleDiv}
        >
          <MdKeyboardArrowDown />
        </button>
        <h1 className="font-semibold">{heading}</h1>
      </div>
      {isModalOpen && (
        <div className="flex flex-col space-y-3 border p-4">
          {mapData.map((data, index) => (
            <div key={index} className="flex items-center gap-2">
              <MdOutlineOndemandVideo className="text-blue-600 text-xl" />
              <a
                href={data.urlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 text-sm"
              >
                {data.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseContent;
