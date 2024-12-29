"use client"
import React, { useEffect, useState } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SecPage from '@/components/SecPage';
import HomeBlog from '@/components/HomeBlog';
import Footer from '@/components/Footer';
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  
  useEffect(()=>{
    AOS.init({
       easing : "ease-out-back",
       duration : 1200,
       delay : 100 ,
       mirror : true ,
       anchorPlacement : "bottom-bottom",
       offset : 160,
    }) ;
    AOS.refresh()
    },[])


  const backgrounds = [
    "bg-[#cedb77]", 
    "bg-[#e0c097]",
  ];  
  const [currentIndex, setCurrentIndex] = useState(0); 
  useEffect(() => {
          const interval = setInterval(() => {           
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
          }, 10000); 
      
          return () => clearInterval(interval); 
        }, );
  return (
    <main className=''>
      <div className={`hero-section ${backgrounds[currentIndex]} mt-0 transition-colors duration-1000  min-[1440px]:h-[80vh] h-screen 2xl:h-[70vh] relative overflow-hidden`}>
      <Header />
       <Hero />
       </div>
       <SecPage />
       <HomeBlog />
       <Footer />
    </main>
  );
}
