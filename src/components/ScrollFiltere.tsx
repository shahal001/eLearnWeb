interface ScrollFilterProps{
  course:string;
  learners:string;
}

function ScrollFiltere({course,learners}:ScrollFilterProps) {
  return (
    <div className="gap-4 w-max">
      <div className="px-6 py-2 bg-gray-500 rounded-full font-rubik text-white min-w-max">
        <span className="block font-semibold">{course}</span>
        <span className="text-sm font-thin">{learners}</span>
      </div>
    </div>
  );
}

export default ScrollFiltere;
