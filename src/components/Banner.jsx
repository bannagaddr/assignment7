import React from "react";
import bgImage from "../assets/vector1.png";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-gray-100 px-4 py-10 sm:px-10 sm:py-16 text-black grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
      {/* progress----------------- */}
      <div className="relative btnColor text-white px-6 py-10 sm:px-10 sm:py-16 rounded-lg text-center space-y-3 sm:space-y-5 overflow-hidden">
        <img
          src={bgImage}
          alt="Background"
          className="absolute top-0 left-0 h-full w-auto object-contain"
        />
        <img
          src={bgImage}
          alt="Background"
          className="absolute top-0 right-0 h-full w-auto object-contain scale-x-[-1]"
        />

        <p className="relative text-lg sm:text-xl font-medium">In Progress</p>
        <span className="relative text-4xl sm:text-5xl font-bold">
          {inProgressCount}
        </span>
      </div>

      {/* resolved----------------- */}
      <div className="relative bg-gradient-to-r from-green-400 to-teal-600 text-white px-6 py-10 sm:px-10 sm:py-16 rounded-lg text-center space-y-3 sm:space-y-5 overflow-hidden">
        <img
          src={bgImage}
          alt="Background"
          className="absolute top-0 left-0 h-full w-auto object-contain"
        />
        <img
          src={bgImage}
          alt="Background"
          className="absolute top-0 right-0 h-full w-auto object-contain scale-x-[-1]"
        />
        <p className="text-lg sm:text-xl font-medium">Resolved</p>
        <span className="text-4xl sm:text-5xl font-bold">{resolvedCount}</span>
      </div>
    </div>
  );
};

export default Banner;
