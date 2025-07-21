import { IoIosStar } from "react-icons/io";

interface FullBorderCardProps {
  id: string;
  image: string;
  heading: string;
  rating: string;
  enrolled: string;
  hours: string;
}

function FullBorderCard({
  image,
  heading,
  rating,
  enrolled,
  hours,
}: FullBorderCardProps) {
  return (
    <div className="p-2 lg:p-4 border rounded-2xl flex flex-col h-full">
      <div className="w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt="career accelerator"
          className="object-cover w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64"
        />
      </div>
      <h1 className="font-bold text-lg lg:text-xl font-lato mt-2">{heading}</h1>
      <div className="flex gap-1 mt-2 flex-row flex-wrap">
        <div className="flex items-center border border-gray-300 rounded px-2 py-1 w-fit text-xs lg:text-sm">
          <IoIosStar color="#FFD700" className="mr-1" size={14} />
          <span className="whitespace-nowrap">{rating}</span>
        </div>
        <div className="flex items-center border border-gray-300 rounded px-2 py-1 text-xs lg:text-sm w-fit">
          <span className="whitespace-nowrap">{enrolled}</span>
        </div>
        <div className="flex items-center border border-gray-300 rounded px-2 py-1 w-fit text-xs lg:text-sm">
          <span className="whitespace-nowrap">{hours}</span>
        </div>
      </div>
    </div>
  );
}

export default FullBorderCard;

