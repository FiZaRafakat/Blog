"use client";
import React from "react";

const SecPage = () => {
  return (
    <div>  
   <div className="flex md:flex-row flex-col items-center bg-[#f3f1f6]" id="about">
     <div className="md:w-3/5 lg:pr-20 lg:px-20  sm:px-10  sm:pt-8 px-5 lg:pl-24 lg:py-20 md:py-16 md:px-16 sm:space-y-5 space-y-3 md:space-y-8 text-gray-900">
      <div>
      <h2 className="font-bold md:text-5xl text-4xl mt-6 my-5  tracking-wider">Welcome to Your Creative Hub</h2>
      <p className="text-lg tracking-wider">Welcome to a space where ideas take shape, and creativity flourishes. Whether you&apos;re an experienced writer or just starting, this platform is your gateway to express thoughts, share knowledge, and connect with like-minded individuals.</p>
      </div>
      <div className="lg:block hidden">
        <ul className="md:space-y-4 space-y-2">
            <li className="text-lg tracking-wider"><span className="font-medium italic">Write & Share Your Voice:</span> Whether you&apos;re into personal experiences, lifestyle, technology, art, or any other niche, this platform allows you to write and share articles on a variety of topics. There are no boundaries here — you can express any thought or idea that inspires you.</li>
            <li className="text-lg tracking-wider"><span className="font-medium italic">Collaborate & Build Connections:</span> Writing doesn&apos;t have to be a solitary activity. Collaborate with other writers, share ideas, and grow together. Interact with the community by commenting, liking, and sharing articles to help them grow. Collaboration is key to creating something bigger than yourself.</li>
            <li className="text-lg tracking-wider"><span className="font-medium italic">Read, Learn, and Get Inspired:</span> Whether you&apos;re looking for inspiration or a fresh perspective, there are articles covering almost every topic you can think of. From career advice to personal growth, lifestyle, health, and beyond, this is the place to read about and contribute to an endless variety of subjects.</li>
        </ul>
      </div>
     <div>
        <p className="text-2xl  text-center max-w-[28rem]  md:mt-5 mb-2 font-semibold tracking-wider leading-snug " >&ldquo;Reading gives us someplace to go when we have to stay where we are.&ldquo; </p>
        <p className="flex justify-end lg:mr-[15rem] text-lg italic mb-2 md:mb-5"> — Mason Cooley</p>
        <p className="text-lg tracking-wider">Engaging with articles is more than just reading; it&apos;s about building a conversation. Leave comments, share your thoughts, and connect with both writers and readers. Every interaction, whether a like, a share, or a thoughtful comment, contributes to a dynamic and collaborative community. The more you engage, the more you help foster a vibrant, creative space.</p>
     </div>
     </div>
     <div className="md:w-2/5 flex flex-col items-center md:pt-5 ">
     <img src="/blog6.png" alt="" className="w-[350px] md:block hidden" data-aos="zoom-in"/>
     <img src="/blog9.png" alt="" className="w-[350px] md:block hidden" data-aos="zoom-in"/>
     <img src="/blog10.png" alt="" className="md:w-[350px] sm:w-[400px] " data-aos="zoom-in"/>
     </div>
    </div>
 
    </div>
  )
}

export default SecPage