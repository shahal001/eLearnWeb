import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type CourseData = {
  title: string;
  provider: string;
  bannerImage: string;
  category: string;
  level: string;
  type: string;
  duration: string;
  instructor: string;
  price: string;
  offerPrice: string;
  previewVideo: string;
};

const initialCourseData: CourseData = {
  title: "",
  provider: "",
  bannerImage: "",
  category: "",
  level: "",
  type: "",
  duration: "",
  instructor: "",
  price: "",
  offerPrice: "",
  previewVideo: "",
};

const DynamicFieldList = ({
  label,
  values,
  onChange,
  onAdd,
  onRemove,
  placeholderPrefix,
}: {
  label: string;
  values: string[];
  onChange: (index: number, value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
  placeholderPrefix: string;
}) => (
  <div>
    <label className="block font-medium text-gray-700 mb-2">{label}</label>
    {values.map((value, index) => (
      <div key={index} className="flex gap-2 mb-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(index, e.target.value)}
          placeholder={`${placeholderPrefix} ${index + 1}`}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="text-red-500 hover:text-red-700"
        >
          ✖
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={onAdd}
      className="text-blue-600 hover:underline text-sm mt-1"
    >
      + Add More
    </button>
  </div>
);

const AddNewCourse = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState<CourseData>(initialCourseData);
  const [whatYouLearn, setWhatYouLearn] = useState<string[]>([""]);
  const [requirements, setRequirements] = useState<string[]>([""]);
  const [description, setDescription] = useState("");

  const updateList = (setter: React.Dispatch<React.SetStateAction<string[]>>) => ({
    add: () => setter((prev) => [...prev, ""]),
    remove: (index: number) => setter((prev) => prev.filter((_, i) => i !== index)),
    change: (index: number, value: string) =>
      setter((prev) => {
        const updated = [...prev];
        updated[index] = value;
        return updated;
      }),
  });

  const { add: addLearn, remove: removeLearn, change: changeLearn } = updateList(setWhatYouLearn);
  const { add: addReq, remove: removeReq, change: changeReq } = updateList(setRequirements);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCourseData = {
      ...courseData,
      whatYouLearn,
      requirements,
      description,
    };
    console.log(fullCourseData); // Connect to backend
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-700">Add New Course</h2>

      {[
        { name: "title", placeholder: "Course Title" },
        { name: "provider", placeholder: "Course Provider" },
        { name: "category", placeholder: "Category" },
        { name: "duration", placeholder: "Duration (e.g. 10 hours)" },
        { name: "instructor", placeholder: "Instructor Name" },
        { name: "price", placeholder: "Price ₹", type: "number" },
        { name: "offerPrice", placeholder: "Offer Price ₹", type: "number" },
      ].map(({ name, placeholder, type = "text" }) => (
        <input
          key={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={(courseData as any)[name]}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
      ))}

      {/* Banner Image */}
      <label>Banner Image</label>
      <input
        name="bannerImage"
        type="file"
        className="w-full px-4 py-2 border rounded-md"
        // handle file upload in real usage
      />

      {/* Select Inputs */}
      <select
        name="level"
        value={courseData.level}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
      >
        <option value="">Select Level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <select
        name="type"
        value={courseData.type}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
      >
        <option value="">Select Type</option>
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
      </select>

      {/* Preview Video */}
      <label>Preview Video</label>
      <input
        name="previewVideo"
        type="file"
        accept="video/*"
        className="w-full px-4 py-2 border rounded-md"
        // handle file upload in real usage
      />

      {/* What You’ll Learn */}
      <h2 className="text-2xl font-bold text-gray-800">📘 Course Details</h2>
      <DynamicFieldList
        label="What You'll Learn"
        values={whatYouLearn}
        onChange={changeLearn}
        onAdd={addLearn}
        onRemove={removeLearn}
        placeholderPrefix="Point"
      />

      {/* Requirements */}
      <DynamicFieldList
        label="Requirements"
        values={requirements}
        onChange={changeReq}
        onAdd={addReq}
        onRemove={removeReq}
        placeholderPrefix="Requirement"
      />

      {/* Description */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">Course Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write a detailed course description..."
        />
      </div>

      <button
        type="button"
        onClick={() => navigate("/admin/addNewCourseFormTwo")}
        className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
      >
        Next ➡
      </button>
    </form>
  );
};

export default AddNewCourse;
