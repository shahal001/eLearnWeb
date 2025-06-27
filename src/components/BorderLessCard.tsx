import { IoIosStar } from "react-icons/io";

interface BorderLessCardProps {
  image: string;
  heading: string;
  mentors: string;
  view: string;
  offerPrice: string;
  price: string;
  sellStatus: string;
}
function BorderLessCard({
  image,
  heading,
  mentors,
  view,
  offerPrice,
  price,
  sellStatus,
}: BorderLessCardProps) {
  return (
    <div className="min-w-[220px] md:min-w-[250px] max-w-[250px] bg-white rounded-lg shadow-sm">
      <img
        className="w-full h-32 object-cover rounded-t-lg"
        src={image}
        alt="card image"
      />
      <div className=" rounded-b-lg py-2">
        <h1
          className="text-sm font-semibold text-gray-800 mb-1"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {heading}
        </h1>
        <h2 className="truncate text-xs text-gray-600">{mentors}</h2>
        <div className="flex items-center mt-2 text-sm text-yellow-500">
          <span className="text-gray-500 text-xs mr-1">4.5</span>
          {[...Array(5)].map((_, i) => (
            <IoIosStar key={i} size={16} />
          ))}
          <span className="text-gray-500 text-xs ml-2">{view}</span>
        </div>
        <div className="flex items-center gap-2 mt-2 text-sm">
          <div className="text-black font-bold">₹{offerPrice}</div>
          <div className="line-through text-gray-400">₹{price}</div>
        </div>
        <span className="text-xs font-medium text-blue-500 bg-blue-100 px-2 py-0.5 rounded inline-block mt-2">
          {sellStatus}
        </span>
      </div>
    </div>
  );
}

export default BorderLessCard;
