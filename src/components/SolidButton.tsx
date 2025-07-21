interface SolidButtonProps {
  buttonText: string;
}

function SolidButton({ buttonText }: SolidButtonProps) {
  return (
    <div className="w-full">
      <button className="w-full px-6 py-3 sm:px-4 mt-2 rounded-md font-semibold text-white bg-blue-600 text-sm sm:text-base transition-all duration-200 shadow hover:bg-blue-700 active:scale-95">
        {buttonText}
      </button>
    </div>
  );
}

export default SolidButton;
