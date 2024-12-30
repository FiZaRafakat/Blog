"use client"
import { useState, useEffect } from "react";
import GenerateBlogButton from "./GenerateButton";

const Hero = () => {
  const firstSet = [
    {
      src: "book.png",
      position: "xl:bottom-40 lg:bottom-60 sm:bottom-[255px] sm:left-[150px] xl:left-[330px]",
      size: "xl:h-[200px] hidden sm:block  lg:h-[160px] ",
      delay: "0s", 
    },
    {
      src: "bookwithglasses.png",
      position: "xl:bottom-28 bottom-60 xl:right-[320px] right-[100px]  ",
      size: "xl:h-[170px] h-[180px] max-[500px]:h-[140px] ",
      delay: "0.5s",
    },
    {
      src: "books.png",
      position: "md:bottom-3 bottom-16 sm:left-0 xl:left-0 lg:left-10 left-0 ",
      size: "xl:h-[350px] lg:h-[250px] h-[250px] max-[500px]:h-[220px]",
      delay: "0s",
    },
    {
      src: "cup.png",
      position: "xl:bottom-7 bottom-4  right-0 sm:right-24 min-[460px]:right-10 xl:right-0",
      size: "xl:h-[350px] lg:h-[280px]  h-[250px] max-[500px]:h-[225px]",
      delay: "0.5s",
    },
    {
      src: "book2.png",
      position: "xl:bottom-8  md:bottom-24  md:right-auto md:left-[250px]  left-auto  lg:left-[320px]  xl:left-[430px]",
      size: "xl:w-[230px] lg:w-[200px] hidden md:block sm:w-[180px] md:w-[200px] transform -rotate-[24deg]",
      delay: "0s",
    },
    {
      src: "pen2.png",
      position: "md:bottom-20 md:right-[300px] lg:right-[350px] xl:right-[520px]",
      size: "xl:h-[180px] lg:h-[190px] hidden md:block h-[120px]",
      delay: "0.5s",
    },
  ];

  const secondSet = [
    {
      src: "book-2.png",
      position: "xl:bottom-12 hidden md:block md:bottom-48 lg:bottom-44  lg:left-[270px] md:left-[230px] xl:left-auto xl:right-[340px]",
      size: "xl:h-[250px] md:h-[140px] lg:h-[180px] transform rotate-[30deg]",
      delay: "0s",
    },
    {
      src: "beautiful-book.png",
      position: "bottom-0  right-0  xl:left-[250px]",
      size: "min-[400px]:h-[160px] min-[500px]:h-[190px] md:h-[250px] h-[150px]",
      delay: "0s",
    },
    {
      src: "images.png",
      position: "md:bottom-0 hidden min-[470px]:block right-[100px] md:right-[250px]  sm:right-[200px] bottom-20 min-[540px]:right-[150px]  lg:right-[470px]",
      size: "xl:h-[250px] md:h-[230px] sm:h-[190px] ",
      delay: "0.5s",
    },
    {
      src: "writing.png",
      position: "lg:bottom-24 sm:bottom-44 lg:bottom-48 min-[500px]:bottom-44 md:bottom-40 bottom-32 left-0",
      size: "xl:h-auto lg:h-[240px] sm:h-[180px] md:h-[200px] min-[500px]:h-[180px] h-[150px]",
      delay: "0s",
    },
    {
      src: "writing2.png",
      position: "bottom-0 left-5 min-[400px]:left-5 min-[400px]:right-auto md:left-[60px] lg:left-auto lg:right-[300px] xl:right-0",
      size: "xl:h-auto lg:h-[220px] min-[500px]:h-[180px] sm:h-[200px] md:h-[180px] h-[140px]",
      delay: "0s",
    },
    {
      src: "pen.png",
      position: "lg:bottom-5 bottom-32 sm:bottom-48 min-[500px]:right-[100px] min-[500px]:bottom-40  max-[500px]:right-6 sm:right-20 lg:left-0",
      size: "transform lg:-rotate-[90deg] rotate-[7deg] sm:h-[170px] h-[120px] min-[500px]:h-[130px] lg:h-[200px]",
      delay: "lg:0.5s 0s",
    },
  ];

const [currentSet, setCurrentSet] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet === 0 ? 1 : 0)); 
    }, 10000); 

    return () => clearInterval(interval); 
}, []);

const illustrations = currentSet === 0 ? firstSet : secondSet;

return (
    <div className=""id="home">
      <div className="lg:mx-20 md:mx-16 sm:mx-10 mx-5 mt-8 text-gray-900">
        <div className="flex flex-col justify-center mx-auto items-center text-center ">
          <h1 className="md:text-5xl lg:text-5xl text-4xl leading-snug tracking-wider font-bold">
            Where Ideas Flourish and Articles Begin !
          </h1>
          <p className="xl:mt-5 lg:mt-3 mt-2 leading-snug text-lg tracking-wide lg:max-w-[50rem] md:max-w-[40rem]" >
            Welcome to your go-to space for inspiration, where creativity meets
            words. Whether you&apos;re a seasoned writer or just starting, this is
            your hub to create, share, and connect.
          </p>
          <GenerateBlogButton />
        </div>

        {/* Illustrations Section */}
        {illustrations.map((illustration, index) => (
          <div
            key={index}
            className={`absolute ${illustration.position} animate-slide-up-down`}
            style={{ animationDelay: illustration.delay }}
          >
            <img
              src={`${illustration.src}`}
              alt={`Illustration ${index + 1}`}
              className={`${illustration.size}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
