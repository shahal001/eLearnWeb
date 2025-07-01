
interface SolidButtonProps {
  buttonText:string;
}

function SolidButton({buttonText}:SolidButtonProps) {
  return (
    <div>
      <button className="px-7 py-3 w-full bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-all duration-200">
       {buttonText}
      </button>
    </div>
  );
}

export default SolidButton;
