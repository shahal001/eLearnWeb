import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlinePersonOutline } from "react-icons/md";

interface PriceCardProp {
  title: string;
  tag: string;
  price: number;
  billingInfo: string;
  countOfMembers: string;
  btnLabel: string;
  features: { label: string }[];
}

function PriceCard({
  title,
  tag,
  price,
  billingInfo,
  countOfMembers,
  btnLabel,
  features,
}: PriceCardProp) {
  const [isOpen, setIsOpen] = React.useState(false);

  // Automatically toggle based on screen size
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Initial check
    handleChange(mediaQuery);

    // Add listener
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleDiv = () => setIsOpen((prev) => !prev);

  return (
    <div className="border rounded-xl border-gray-400 overflow-hidden">
      <div className="bg-blue-50 p-7">
        <div className="flex flex-row items-center justify-between">
          <span className="font-semibold text-xl lg:text-2xl font-playfair">
            {title}
          </span>
          <button
            type="button"
            aria-label="Show more"
            className={`text-2xl focus:outline-none transition-transform duration-200 lg:hidden ${
              isOpen ? "rotate-180" : ""
            }`}
            onClick={toggleDiv}
          >
            <MdKeyboardArrowDown />
          </button>
        </div>
        <div className="text-xs lg:text-sm text-gray-600 font-rubik">{tag}</div>
        <div className="flex flex-row items-center pt-2 gap-3 text-sm text-gray-600 font-rubik lg:text-lg font-light">
          <MdOutlinePersonOutline />
          <span>{countOfMembers}</span>
        </div>
      </div>

      {isOpen && (
        <div className="p-7">
          <h1 className="font-rubik font-semibold lg:text-lg">
            Starting at <span>₹{price}</span> per month
          </h1>
          <p className="text-sm text-gray-500">{billingInfo}</p>
          <button className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-200">
            {btnLabel}
          </button>
          <ul className="mt-4 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex flex-row gap-2 items-baseline text-sm">
                <span className="text-blue-600">
                  <FaRegCheckCircle />
                </span>
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PriceCard;