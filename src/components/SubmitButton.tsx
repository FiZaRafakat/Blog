"use client"
import { useState } from "react";
import { BsSend } from "react-icons/bs";

const SubmitButton = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <button
        className="mt-5 sm:py-3 py-2 text-white bg-gray-800 font-medium relative w-[160px] mx-auto rounded-md flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false) }
      >
        {/* The hidden text when hover */}
        <span
          className={`transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}
        >
          Submit
        </span>
  
        {/* The icons will slide in/out */}
        <div
          className={`absolute left-[40%] flex items-center transform transition-all duration-500 ${
            isHovered ? "translate-x-0" : "-translate-x-[300%]"
          }`}
        >
          <BsSend 
            className={`text-2xl transition-transform duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* <AiOutlineFileText
            className={`ml-2 text-2xl transition-transform duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          /> */}
        </div>
      </button>
    );
}

export default SubmitButton