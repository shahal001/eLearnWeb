import { useState } from "react";

interface HeadingAndPointsProps {
  heading: string;
  points: string[];
}

function HeadingAndPoints({ heading, points }: HeadingAndPointsProps) {
  const [showAll, setShowAll] = useState(false);

  const displayedPoints = showAll ? points : points.slice(0, 6);

  return (
    <div className="border-2 p-4 text-lg">
      <h1 className="font-semibold">{heading}</h1>
      <ul className="p-4 list-disc list-outside text-sm text-gray-800 md:grid md:grid-cols-2">
        {displayedPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {points.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 font-medium text-blue-600  text-sm"
        >
          {showAll ? "Compress" : "Show More"}
        </button>
      )}
    </div>
  );
}

export default HeadingAndPoints;