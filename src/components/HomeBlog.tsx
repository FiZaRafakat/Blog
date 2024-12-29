"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'
import DiscoverButton from './DiscoverButton';

const HomeBlog = () => {
     const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='bg-[#f3f1f6] md:pt-10 lg:px-24 md:px-10 sm:px-12 px-10 md:pb-10 pb-5 text-gray-900 overflow-x-hidden'>
        <h2 className='font-bold lg:text-5xl md:text-4xl text-3xl text-center mb-8 sm:mb-12' data-aos="zoom-in">Explore the Highlighted Blog</h2>
        <div className='flex md:flex-row flex-col justify-around gap-6 items-center'>
            <div className="blog sm:w-[450px]  min-[380px]:w-[350px] w-[300px] max-[300px]:w-[250px]  shadow-md p-3 shadow-[#113946] rounded-xl">
            <div className=''>
               <Link href={"/blogs/1"}><img src="/travel.jpg" alt="AI" className='min-[380px]:h-[230px] h-[200px] w-full  rounded-t-xl' /></Link>
            </div>
            <div className="content">
                <h3 className='font-semibold min-[380px]:text-xl text-lg my-2 sm:my-3' >Does your heart ever scream, &apos;Pack your bags and let&apos;s go!&apos;?</h3>
                <p className='tracking-wide min-[380px]:text-base text-sm leading-snug'>If you&apos;ve ever caught yourself daydreaming about far-off places—where mountains kiss the sky, oceans shimmer in the sunlight, and cultures intertwine in the most beautiful ways—then you&apos;re not alone.<span className='min-[380px]:block hidden'>Travel isn&apos;t just about visiting new places; it&apos;s about discovering a new side of yourself with every step you take.</span></p>
                <Link href={"/blogs/1"} className="mt-2 flex gap-1 min-[380px]:text-base text-sm  items-center font-medium italic"   onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>READ MORE <span><HiArrowLongRight className={`transition-all text-[#113946] duration-500 ${isHovered ? "translate-x-6 text-xl" : "translate-x-0 text-lg" }`} /></span></Link>
            </div>
            <div className="bottom flex justify-between text-sm min-[380px]:mt-2 mt-1 text-gray-700">
           <p>December 24, 2024</p> <div className='flex items-center gap-1'><div className='bg-[#113946] rounded-full w-1.5 h-1.5'></div> <span className='italic'>By Fiza Rafakat</span></div>
           </div>           
            </div>

            {/* Right Side */}
            <div className="right side flex flex-col gap-2 md:items-start items-center">
                <DiscoverButton />
                <img src="/discover-blog.png" alt="discover-blog" className='sm:w-[450px] w-[300px]' data-aos="zoom-in"  />
            </div>
        </div>
    </div>
  )
}

export default HomeBlog