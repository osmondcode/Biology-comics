import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { motion } from 'framer-motion'

// FRAMER MOTION VARIABLES
const slideUp = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0
    }
}
const appear = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}
    // FRAMER MOTION VARIABLES

const Banner = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center ">
        <div className='sm:w-[80%] w-[90%] min-h-fit flex flex-col 2md:flex-row items-center justify-center mt-[5vh] 2md:pt-[0] pt-[15vh]'>
            
        {/* TEXTS DIV */}
        <motion.span className='2md:w-[55%] md:w-[70%] 2sm:w-[80%] sm:w-[90%] w-full 2md:h-[55vh] h-fit bg-[--whiteColor] text-[--blackColor] flex flex-col items-center justify-center sm:gap-3 gap-1 sm:px-6 px-3 2sm:py-6 py-4 2md:py-0 overflow-hidden text-wrap text-center'
                    variants={appear}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 0.6, duration: 0.5}}
            >

                <motion.h2 className='lg:text-[35px] 2sm:text-[29px] sm:text-[26px] text-[22px] font-semibold lg:mb-5 mb-3 leading-9 lg:leading-normal'
                    variants={slideUp}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 0.8, duration: 0.5}}
                >BEST COMIC OF THE YEAR SALES</motion.h2>

                <motion.h1 className='lg:text-[5.1em] 2sm:text-[5em] text-[4.8em] font-semibold flex flex-col items-end justify-end leading-10'
                    variants={slideUp}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 1, duration: 0.5}}
                >20%<span className='lg:text-[22px] text-[20px] font-semibold'>OFF</span></motion.h1>

                <motion.button className='lg:w-[160px] 2sm:w-[150px] w-[140px] 2sm:h-[40px] h-[35px] bg-[--whiteColor] rounded-md font-bold 2md:mt-4 mt-2 flex items-center justify-center overflow-hidden border-[2.5px] border-[--yellowColor] 2sm:text-[16px] sm:text-[15px] text-[14px]'
                    variants={slideUp}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 1.2, duration: 0.5,}}
                ><span className='w-[65%] h-full flex items-center justify-center'>Shop Now</span> <span className='w-[35%] h-full bg-[--yellowColor] flex items-center justify-center'><FaArrowRight/></span></motion.button>
            </motion.span>
        {/* TEXTS DIV */}

            <motion.span className='2md:w-[45%] md:w-[70%] 2sm:w-[80%] sm:w-[90%] w-full 2md:h-[55vh] h-[40vh] bg-transparent flex items-center justify-center overflow-hidden'
                    variants={appear}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 1, duration: 0.5}}
            >
              <img src='https://i.pinimg.com/564x/44/d2/39/44d239ecde45a8780993510e1bb4866a.jpg' alt='comic book' className='w-full h-full '
              />
            </motion.span>
        </div>
    </section>
  )
}

export default Banner;