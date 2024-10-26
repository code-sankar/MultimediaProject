import React from "react";

function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 p-4">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">We'll Be Back Soon!</h1>
        <p className="text-gray-700 mb-6">
          This site is currently under maintenance. We’re working hard to improve your experience. Please check back soon!
        </p>
        <div className="flex justify-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
