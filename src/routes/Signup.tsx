import React from "react";
import signupimg from "../assets/images/signupimg.png";
import googleIcon from "../assets/images/google.png";
import logo from "../assets/images/logofAcadamix.png";

const Signup: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-200 to-blue-100">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 h-full md:h-[85%] rounded-3xl shadow-lg overflow-hidden">
        {/* Left Side: Signup Form */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8 bg-white">
          {/* Logo Image */}
          <div className="mb-6">
            <img
              src={logo}
              alt="ClassRoom Logo"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow mx-auto"
            />
          </div>

          {/* Welcome Message */}
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
            Create Your Account
          </h2>
          <p className="text-sm md:text-lg text-gray-500 mb-6 text-center">
            Sign up to start your learning journey with us!
          </p>

          {/* Signup Form */}
          <form className="w-full max-w-xs">
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                autoComplete="name"
                className="w-full border-b border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-0"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
                className="w-full border-b border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-0"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                autoComplete="new-password"
                className="w-full border-b border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-0"
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Sign Up
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-400 font-semibold">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Signup Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded py-2 px-4 text-gray-700 font-semibold hover:bg-gray-100 transition"
            >
              <img src={googleIcon} alt="Google Icon" className="w-5 h-5" />
              Signup with Google
            </button>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <span className="text-gray-600">Already have an account? </span>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:underline"
              >
                Login
              </a>
            </div>
          </form>
        </div>

        {/* Right Side: Illustration and Message */}
        <div className="hidden md:flex flex-1 flex-col items-center justify-center p-4 bg-green-100">
          <img
            src={signupimg}
            alt="Signup Illustration"
            className="w-1/2 md:w-1/3 h-auto"
          />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-gray-900 tracking-tight drop-shadow-sm">
            Join Our Learning Community!
          </h2>
          <p className="text-base md:text-lg text-gray-400 text-center font-medium">
            Sign up to create your eLearning account and start exploring new
            courses, tracking your progress, and connecting with fellow
            learners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
