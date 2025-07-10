import { useNavigate } from "react-router-dom";

interface BorderButtonProps {
  buttonText: string;
  navigateTo?: string;
}

function BorderButton({ buttonText, navigateTo }: BorderButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigateTo
      ? navigate(navigateTo)
      : console.warn("No navigation path provided.");
  };

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className="w-full px-6 py-3 sm:px-4 mt-2 rounded-md font-semibold text-blue-600 border border-blue-600 text-sm sm:text-base transition-all duration-200 shadow hover:bg-blue-50 active:scale-95"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default BorderButton;
