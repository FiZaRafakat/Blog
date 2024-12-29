import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='lg:px-20 md:px-10 sm:px-8 px-2  max-[310px]:px-2'>
      <div className='flex justify-between items-center md:mx-10 sm:mx-5 mx-3 py-2 md:py-3'>
        <div >
<Link href="/" className='flex gap-1 items-center'>
<img src="/logo.png" alt=""  className='w-[60px] h-[50px] max-[400px]:w-[40px] max-[400px]:h-[40px] rounded-full' />
  <h2 className='md:text-3xl italic sm:text-2xl text-xl font-serif text-gray-900 tracking-wide'><span className='font-semibold' >Dizzy</span> Blog</h2>
</Link>
        </div>
        <div className="button">
            <button className='bg-gray-900 text-white md:px-4 px-3 py-1 text-base sm:text-lg rounded-2xl'>Sign in</button>
        </div>
    </div>
    </div>
  )
}

export default Header