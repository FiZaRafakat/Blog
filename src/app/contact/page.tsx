"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SubmitButton from '@/components/SubmitButton'
import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const Page = () => {
  
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

  return (
    <div className='bg-[#f3f1f6] text-gray-900'>
        <Header />
        <div className='md:w-[600px] sm:w-[500px] min-[500px]:w-[450px] px-10  mx-auto pb-16 pt-10 '>
          <div className='lg:mx-12 md:mx-5 mb-5'>
          <h2 className='font-medium text-xl tracking-wider text-center'>At <span className='font-bold italic text-2xl'>DizzyBlog</span> , we love to connect, inspire, and grow together. Reach out to share your thoughts, ideas, or just to say hi – because every great story starts with a conversation ! </h2>
          </div>
         {/* Form Div */}
         <form action="" method='POST' className=" md:space-y-1 flex flex-col shadow-[#113946] shadow-md lg:px-8 lg:mx-12 md:mx-5 text-lg tracking-wide sm:px-8 px-3 rounded-xl md:pb-10 md:pt-10 pt-5 pb-2 gap-2">

          <label htmlFor="name" className="flex flex-col gap-1">
            <p className="text-[16px] font-medium">Your Name</p>
            <input type="text" name="name" id="name" placeholder="Fiza" className="focus:border focus:border-[#113946] bg-gray-200 border-gray-100 border placeholder:text-gray-600 min-[400px]:text-base text-sm w-full min-[400px]:px-4 px-2 py-2 min-[400px]:rounded-xl rounded-md outline-none  " />
          </label>
         
          <label htmlFor="email" className="flex flex-col gap-1">
            <p className="text-[16px] font-medium">Email Address</p>
            <input type="text" name="email" id="email" placeholder="fiza@gmail.com" className="focus:border focus:border-[#113946] bg-gray-200 border-gray-100 border placeholder:text-gray-600 min-[400px]:text-base text-sm w-full min-[400px]:px-4 px-2 py-2 min-[400px]:rounded-xl rounded-md outline-none " />
          </label>
        
          <label htmlFor="msg" className="flex flex-col gap-1">
            <p className="text-[16px] font-medium">Message</p>
            <textarea  name="msg" rows={5} cols={10} id="msg" placeholder="Hi! I'd like to ask about" className="focus:border focus:border-[#113946] border-gray-100 border bg-gray-200 placeholder:text-gray-600 min-[400px]:text-base text-sm w-full min-[400px]:px-4 px-2 py-2 min-[400px]:rounded-xl rounded-md outline-none " />
          </label>
        <SubmitButton  />
         </form>
         </div>
         <Footer />
    </div>
  )
}
export default Page