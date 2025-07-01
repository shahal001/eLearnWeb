interface BorderButtonProps {
  buttonText: string;
}

function BorderButton({ buttonText }: BorderButtonProps) {
  return (
    <div className="w-full">
      <button className="w-full px-6 py-3 sm:px-4 mt-2 rounded-md font-semibold text-blue-600 border border-blue-600 text-sm sm:text-base transition-all duration-200 shadow hover:bg-blue-50 active:scale-95">
        {buttonText}
      </button>
    </div>
  );
}

export default BorderButton;
