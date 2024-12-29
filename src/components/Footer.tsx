"use client";

import { usePathname, useRouter } from "next/navigation";

import Link from 'next/link'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  
  const handleHomeClick = () => {
    if (pathname === "/") {
      scrollToHome();
    } else {
      router.push("/");
    }
  };
  const handleAboutClick = () => {
    if (pathname === "/") {
      scrollToAbout();
    } else {
      router.push("/");
      scrollToAbout()
    }
  };


  const scrollToHome = () => {
    const servicesSection = document.getElementById('home');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const scrollToAbout = () => {
    const servicesSection = document.getElementById('about');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className='bg-[#113946] lg:pt-10 pt-5 md:px-10 px-5 lg:px-32'>
  <div className='flex flex-col md:flex-row   md:py-10 py-5 gap-5 gap-y-3 justify-around'>
  <div className=''>
      <Link href="/" className='flex gap-2 max-[400px]:justify-center max-[400px]:gap-4 items-center'>
      <img src="/logo-DB.png" alt=""  className='w-[50px] h-[50px] rounded-full' />
      <h2 className='md:text-3xl sm:text-2xl text-xl text-white font-serif tracking-wide italic'><span className='font-semibold' >Dizzy</span> Blog</h2>
      </Link>
      <p className='lg:mt-5 mt-3 max-w-[19rem] text-white/60'>
      Discover the art of storytelling, share your passions, and connect with a world of ideas—one blog at a time!
      </p>
    </div>

  <div className=''>
   <h3 className='text-white md:text-xl font-medium text-lg mb-3  md:mb-6'>Quick Access</h3>
   <ul className='flex flex-col md:text-base text-sm gap-3 text-white/60 tracking-wider'>
      <li><button className="hover:underline hover:underline-offset-4 hover:text-white"
        onClick={handleHomeClick} > Home </button></li>
     <li><button  className='hover:underline hover:underline-offset-4 hover:text-white cursor-pointer' onClick={handleAboutClick}>About</button></li>
     <li><Link href="/blogs" className='hover:underline hover:underline-offset-4 hover:text-white'>Blogs</Link></li>
     <li><Link href="/contact"className='hover:underline hover:underline-offset-4 hover:text-white ' >Contact</Link></li>
   </ul>
  </div>
  <div>
    <p className='max-w-[20rem] text-white'>We love connecting! Reach us via email, phone, or find us on social media – let&apos;s stay in touch!</p>
    <div className='my-5 text-white/60 italic space-y-1'>
    <p className='hover:text-white cursor-default'><span className='hover:underline hover:underline-offset-4 mr-2 tracking-wide'>Email : </span> fizarafakat@gmail.com</p>
    <p className='hover:text-white cursor-default'><span className='hover:underline hover:underline-offset-4 mr-2 tracking-wide'>Phone : </span> +92 30675 02568</p>
    <p className='hover:text-white cursor-default'><span className='hover:underline hover:underline-offset-4 mr-2 tracking-wide'>Location : </span> Karachi , Pakistan</p>
    </div>
  <nav className='flex md:gap-6 gap-4 text-white/80 max-[400px]:justify-center'>
        <a href="https://www.facebook.com/share/mSGcNUx7ToQ7v65T/" className='p-2 rounded-full border hover:text-white border-white/90 hover:border-white'> 
        <FaFacebookF className=' size-4 md:size-5' />
        </a>
        <a href="https://www.linkedin.com/in/fiza-rafakat" className='p-2 rounded-full border hover:text-white border-white/90 hover:border-white'>
        <FaLinkedinIn className=' size-4 md:size-5' /> 
        </a>
        <a href="https://github.com/FiZaRafakat" className='p-2 rounded-full border hover:text-white border-white/90 hover:border-white'>
        <FaGithub className='size-4 md:size-5' />
        </a>
  </nav>
  </div>

  </div>
  <div className='md:py-3 py-2 text-center'>
        <p className='text-white/70 md:text-sm text-xs  tracking-widest'>Copyright &copy; <a href="https://portfolio-milestone2-seven.vercel.app/"><span className='text-white/80 hover:text-white'>Fiza Rafakat</span></a> </p>
    </div>
    </div>
  )
}

export default Footer
