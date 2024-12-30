"use client"
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";

const GenerateBlogButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="xl:mt-5 mt-3  py-3 text-white tracking-wider bg-gray-950 md:font-medium relative w-[180px] rounded-md flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
    >
      {/* The hidden text when hover */}
      <span
        className={`transition-opacity text-lg duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
      >
        Generate your blog
      </span>

      {/* The icons will slide in/out */}
      <div
        className={`absolute left-12 flex items-center transform transition-all duration-500 ${
          isHovered ? "translate-x-0" : "-translate-x-[300%]"
        }`}
      >
        <HiArrowLongRight
          className={`text-2xl transition-transform duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <BsPencilSquare
          className={`ml-2 text-2xl transition-transform duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </button>
  );
};

export default GenerateBlogButton;

