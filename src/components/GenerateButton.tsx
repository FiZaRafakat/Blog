"use client"
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";

const GenerateBlogButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="xl:mt-5 lg:mt-3 mt-2 sm:py-3 py-2 text-white bg-gray-950 md:font-medium relative w-[160px] rounded-md flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} data-aos="zoom-in"
    >
      {/* The hidden text when hover */}
      <span
        className={`transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
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

