import { IoIosStar } from "react-icons/io";

function FullBorderCard() {
  return (
    <div className="p-2 border rounded-2xl flex flex-col h-full">
      <div className="w-full overflow-hidden rounded-xl">
        <img
          src="https://www.siecindia.com/uploads/blog/blog_36b4e5301c6c2dcae787b510a0b942e3_1737112538data-science-online-courses.jpg"
          alt="career accelerator"
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="font-bold text-lg lg:text-xl mt-2">
        Full Stack Web Developer
      </h1>
      <div className="flex gap-1 mt-2 flex-row flex-wrap">
        <div className="flex items-center border border-gray-300 rounded px-2 py-1 w-fit text-xs">
          <IoIosStar color="#FFD700" className="mr-1" size={14} />
          <span className="whitespace-nowrap">4.5</span>
        </div>
        <div className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs w-fit">
          <span className="whitespace-nowrap">12K+ Enrolled</span>
        </div>
        <div className="flex items-center border border-gray-300 rounded px-2 py-1 w-fit text-xs">
          <span className="whitespace-nowrap">108.5 total hours</span>
        </div>
      </div>
    </div>
  );
}

export default FullBorderCard;
