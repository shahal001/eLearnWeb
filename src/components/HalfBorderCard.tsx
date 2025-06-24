import { IoIosStar } from "react-icons/io";

function HalfBorderCard() {
  return (
    <div className="w-52 md:w-64 lg:w-80 ">
      <img
        className="rounded-t-lg "
        src="https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/52/2023/02/how-to-create-online-course.png"
        alt="no image"
      />
      <div className="border-l-0 border-r-0 border-b-0 md:border-l md:border-r md:border-b border-gray-300 rounded-b-lg p-2 lg:px-5 lg:pb-5">
        <h1
          className="block text-md font-bold text-gray-800 mt-2 mb-1"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          The Complete AI Guide: Learn ChatGPT, Generative AI & More
        </h1>
        <h2 className="block truncate text-sm text-gray-600">
          Aarav Bavir, Zayan Samual, Vihaan Loga, Neil Bahami
        </h2>
        <div className="flex flex-row mt-2">
          <span className="text-gray-500 text-sm">4.5</span>
          <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
          <span className="text-gray-500 text-sm ml-2">( 458525 )</span>
        </div>
        <div className="flex flex-row items-center gap-2 my-2">
          <div>₹599</div>
          <div className="line-through text-gray-400">₹1599</div>
        </div>
        <span className="font-semibold text-blue-500 bg-blue-100 px-2 py-0.5 rounded ">
          Bestseller
        </span>
      </div>
    </div>
  );
}

export default HalfBorderCard;
