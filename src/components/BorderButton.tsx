function BorderButton() {
  return (
    <div className="my-5 px-5 md:px-10 lg:px-15 flex flex-row gap-2 overflow-x-auto hide-scrollbar">
      <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-bold mt-2 hover:bg-blue-50 active:scale-95 transition-all duration-150">
        Show all Machine Learning courses
      </button>
    </div>
  );
}

export default BorderButton;
