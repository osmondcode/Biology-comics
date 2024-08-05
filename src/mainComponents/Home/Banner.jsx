import React from 'react'
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
const scaleBig = {
    hidden: {
        scale: 0,
        opacity: 0
      },
      visible: {
          scale: 1,
          opacity: 1
        }
    }
    // FRAMER MOTION VARIABLES
    
    const Banner = () => {
        return (
    <section className="w-full min-h-screen flex items-center justify-center ">
        <div className='sm:w-[80%] w-[90%] min-h-fit flex flex-col 2md:flex-row items-center justify-center mt-[5vh] 2md:pt-[0] pt-[5vh]'>

        {/* TEXTS DIV */}
            <motion.span className='2md:w-[55%] md:w-[70%] 2sm:w-[80%] sm:w-[90%] w-full 2md:h-[55vh] h-fit bg-[--whiteColor] text-[--blackColor] flex flex-col items-start justify-center 2md:gap-6 sm:gap-3 gap-1 sm:px-6 px-3 2sm:py-6 py-4 2md:py-0 overflow-hidden'
                    variants={appear}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 0.6, duration: 0.5}}
            >

                <motion.h1 className='2md:text-[30px] 2sm:text-[27px] sm:text-[24px] text-[20px] font-bold '
                    variants={slideUp}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 0.8, duration: 0.5}}
                >Explore The World Of <br/> Comics With Biology</motion.h1>

                <motion.p className='text-[#555] 2md:text-[18px] md:text-[16px] 2sm:text-[15px] text-[14px]'
                    variants={slideUp}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 1, duration: 0.5}}
                >Your go-to corner shop for high quality, <br/> authentic comic books.</motion.p>

                <motion.button className='2md:px-3 px-2 2sm:py-2 py-1.5 bg-[--yellowColor] rounded-md font-semibold lg:text-[15px] 2sm:text-[14px] text-[13px] 2md:mt-4 mt-2 shadow shadow-[--blackColor] '
                    variants={slideUp}
                    initial='hidden'
                    animate='visible'
                    transition={{delay: 1.2, duration: 0.5,}}
                    whileHover={{
                        scale: 1.08,
                        transition:{
                            delay: 0,
                            duration: 0.5
                        }
                    }}
                >Browse Our Collection Now</motion.button>
            </motion.span>
        {/* TEXTS DIV */}

            <span className='2md:w-[45%] md:w-[70%] 2sm:w-[80%] sm:w-[90%] w-full 2md:h-[55vh] h-[40vh] bg-transparent flex items-center justify-center overflow-hidden'>
              <motion.img src='https://i.pinimg.com/736x/65/55/a0/6555a0dc8da9841e141814697a0cea46.jpg' alt='ads' className='w-full h-full object-cover'
                  variants={scaleBig}
                  initial='hidden'
                  animate='visible'
                  transition={{delay: 1.1, duration: 0.9}}
              />
            </span>
        </div>
    </section>
  )
}

export default Banner