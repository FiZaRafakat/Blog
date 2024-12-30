"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";

const DiscoverButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/blogs"); // Navigate to the blog page
  };

  return (
    <button
      className="mt-5 sm:py-3 py-2 text-white bg-gray-800 font-medium relative w-[160px] rounded-md flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false) }onClick={handleButtonClick} data-aos="zoom-in"
    >
      {/* The hidden text when hover */}
      <span
        className={`transition-opacity text-lg tracking-wider duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
      >
        Discover More
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
        <AiOutlineFileText
          className={`ml-2 text-2xl transition-transform duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </button>
  );
};

export default DiscoverButton;