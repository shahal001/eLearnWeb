import { FiStar } from "react-icons/fi";

interface SearchScreenCardProps {
  badge: string;
  logo: string;
  provider: string;
  title: string;
  skills: string[];
  rating: string;
  views: string;
  level: string;
  type: string;
  duration: string;
  preview: string;
}

function SearchScreenCard({
  badge,
  logo,
  provider,
  title,
  skills,
  rating,
  views,
  level,
  type,
  duration,
  preview,
}: SearchScreenCardProps) {
  return (
    <div className="flex flex-row half-md:flex-col-reverse border rounded-lg p-4 bg-white shadow-sm w-full max-w-3xl">
      {/* Left Content */}
      <div className="flex flex-col space-y-2 flex-1">
        {/* Badge */}
        <span className="mt-2 border border-black text-xs font-semibold rounded-full py-0.5 px-2 w-fit">
          {badge}
        </span>

        {/* Logo and Provider */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Provider logo" className="w-5 h-5 object-contain" />
          <span className="text-sm font-medium text-gray-800">{provider}</span>
        </div>

        {/* Course Title */}
        <h2 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
          {title}
        </h2>

        {/* Skills */}
        <p className="text-sm text-gray-700 line-clamp-3">
          <span className="font-semibold">Skills you will gain:</span>{" "}
          {skills.join(", ")}
        </p>

        {/* Rating and Views */}
        <div className="flex items-center space-x-2 text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <FiStar className="text-yellow-500" />
            <span className="font-semibold">{rating}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span>{views}</span>
        </div>

        {/* Course Meta */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="font-medium">{level}</span>
          <span className="text-gray-400">•</span>
          <span>{type}</span>
          <span className="text-gray-400">•</span>
          <span>{duration}</span>
        </div>
      </div>

      {/* Right Preview Image */}
      <div className="mx-auto max-w-xs sm:max-w-sm half-md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <img
          src={preview}
          alt="Course preview"
          className="w-20 h-20 half-md:w-full half-md:h-48 rounded-md object-cover"
        />
      </div>
    </div>
  );
}

export default SearchScreenCard;
