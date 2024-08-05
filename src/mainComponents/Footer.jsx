import React from 'react'
import { TfiInstagram } from 'react-icons/tfi'
import { FaXTwitter } from 'react-icons/fa6'
import { FiFacebook, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  return (
    <section className='w-full min-h-[12vh] flex items-center justify-center py-4 border-t border-t-[--whiteColor]'>
     <div className='md:w-[80%] w-[90%] flex items-center 2sm:justify-between justify-center text-center flex-wrap 2sm:gap-3 gap-5'>
       <span>
        <h3 className='2md:text-[16px] 2sm:text-[15px] text-[13px]'>Designed by <span>Winnie</span></h3>
       </span>


       <span>
        <h2 className='lg:text-[17px] 2md:text-[16px] 2sm:text-[15px] text-[13px] font-semibold mb-2'>Follow Us on Social Media</h2>
        <div className='flex items-center justify-center gap-4'>
          <button className='2md:text-[22px] md:text-[20px] 2sm:text-[18px] text-[16px] hover:scale-[1.08] duration-500'>
            <TfiInstagram/>
          </button>
          <button className='2md:text-[22px] md:text-[20px] 2sm:text-[18px] text-[16px] hover:scale-[1.08] duration-500'>
            <FaXTwitter/>
          </button>
          <button className='2md:text-[22px] md:text-[20px] 2sm:text-[18px] text-[16px] hover:scale-[1.08] duration-500'>
            <FiFacebook/>
          </button>
          <button className='2md:text-[22px] md:text-[20px] 2sm:text-[18px] text-[16px] hover:scale-[1.08] duration-500'>
            <FiYoutube/>
          </button>
        </div>
       </span>


       <span>
        <h3 className='2md:text-[16px] 2sm:text-[15px] text-[13px]'>Developed by <span>Osmondcode</span></h3>
       </span>
     </div>
    </section>
  )
}

export default Footer