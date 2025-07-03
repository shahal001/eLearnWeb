import { TiStar } from "react-icons/ti";

interface RatingCardAndHeadingProps {
  nameOfPerson: string;
  postTime: string;
  shortReview: string;
  fullReview: string;
}

function RatingCardAndHeading({
  nameOfPerson,
  postTime,
  shortReview,
  fullReview,
}: RatingCardAndHeadingProps) {
  return (
    <div className="border p-5 rounded-lg bg-white shadow space-y-4 w-full h-full">
      {/* Header: Avatar and Info */}
      <div className="flex items-center justify-between">
        <div>
          <span className="block text-base font-semibold text-gray-800">{nameOfPerson}</span>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            {Array.from({ length: 5 }).map((_, idx) => (
              <TiStar key={idx} className="text-yellow-500" />
            ))}
            <span className="ml-2 text-xs text-gray-400">{postTime}</span>
          </div>
        </div>

        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">
            {nameOfPerson.slice(0, 2).toUpperCase()}
          </span>
        </div>
      </div>

      {/* Short Review */}
      <p className="text-sm text-gray-600 italic">“{shortReview}.”</p>

      {/* Full Review */}
      <p className="text-sm text-gray-800 leading-relaxed">{fullReview}.</p>
    </div>
  );
}

export default RatingCardAndHeading;
