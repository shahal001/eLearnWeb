import React, { useState } from "react";
import logo from "../assets/images/logoOfAcdmx.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img className="h-12 w-12 object-contain" src={logo} alt="logo" />
          <span className="text-xl font-bold text-gray-800 hidden sm:inline">
            Explore
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full max-w-md p-3 pl-5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Desktop Links & Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Courses
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            About
          </Link>
          <Link
            to="/admin"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Admin
          </Link>
          <Link
            to="/"
            className="relative text-gray-700 hover:text-blue-600 font-medium"
          >
            Cart
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </Link>
          <Link
            to="/login"
            className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 active:scale-95 transition transform duration-100 text-center"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition transform duration-100"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Dropdown Icon */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
            aria-label="Open menu"
            onClick={toggleModal}
          >
            {/* Hamburger icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Modal Content */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              x
            </button>
            <nav className="flex flex-col flex-1 p-4">
              <ul className="space-y-4 mb-6">
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
                  <Link to="/" onClick={toggleModal}>
                    Home
                  </Link>
                </li>
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
                  About
                </li>
                <li className="text-gray-700 hover:text-blue-500 cursor-pointer">
                  Contact
                </li>
                <li
                  className="text-gray-700 hover:text-blue-500 cursor-pointer"
                  onClick={() => navigate("/admin")}
                >
                  Admin
                </li>
              </ul>
              <div className="mt-auto flex flex-col gap-2">
                <Link
                  to="/login"
                  className="block px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 active:scale-95 transition transform duration-100 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition transform duration-100 text-center"
                >
                  Signup
                </Link>
              </div>
            </nav>
          </div>

          {/* Overlay */}
          <div
            onClick={toggleModal}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>
        </>
      )}
    </div>
  );
};

export default Navbar;
