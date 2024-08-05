import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { motion } from 'framer-motion'

// FRAMER MOTION VARIABLES

const appear = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

    // FRAMER MOTION VARIABLES

const futureComic = () => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-between 2md:mt-[10vh] mt-0">
        <div className='2lg:w-[80%] w-[90%] min-h-fit flex flex-col 2md:flex-row items-start justify-center mt-[5vh] 2md:pt-[0] pt-[15vh] gap-[30px]'>
            <div className='w-full min-h-[70vh] bg-[--whiteColor] text-[--blackColor] relative p-5 flex flex-col items-center'>
                <h1 className='2sm:text-[25px] text-[22px] font-semibold text-center'>The future of book reading is here <br className='hidden sm:flex'/> with E-book</h1>

                {/* CURVEY IMAGES DIV */}
                    <span className='w-full min-h-[50vh] relative flex items-center justify-evenly gap-4 flex-wrap my-[5vh] md:my-0'>
                    {/* FROM LEFT TO RIGHT */}
                            <motion.div className='w-[130px] h-[180px] bg-[#555] flex items-center justify-center translate-y-0 md:translate-y-[-50px] cursor-pointer hover:shadow hover:shadow-[#333] duration-500'
                                variants={appear}
                                initial='hidden'
                                whileInView='visible'
                                transition={{delay: 0.4, duration: 0.5}}
                            >
                              <img src='https://i.pinimg.com/236x/04/ab/06/04ab061224e5aa2ca6cc60ca05cef3c0.jpg' alt='comic book' className='w-full h-full '/>
                            </motion.div>
                            <motion.div className='w-[130px] h-[180px] bg-[#555] flex items-center justify-center md:translate-y-[0px] cursor-pointer hover:shadow hover:shadow-[#333] duration-500'
                                variants={appear}
                                initial='hidden'
                                whileInView='visible'
                                transition={{delay: 0.5, duration: 0.5}}
                            >
                              <img src='https://i.pinimg.com/236x/40/09/ed/4009ed3494ac0cf96508c90f9400f378.jpg' alt='comic book' className='w-full h-full '/>
                            </motion.div>
                            <motion.div className='w-[130px] h-[180px] bg-[#555] 2md:flex md:hidden flex items-center justify-center translate-y-0 md:translate-y-[50px] cursor-pointer hover:shadow hover:shadow-[#333] duration-500'
                                variants={appear}
                                initial='hidden'
                                whileInView='visible'
                                transition={{delay: 0.6, duration: 0.5}}
                            >
                              <img src='https://i.pinimg.com/236x/af/fe/12/affe1261893f932c4fd01fecd3f90ea4.jpg' alt='comic book' className='w-full h-full '/>
                            </motion.div>
                            <motion.div className='w-[130px] h-[180px] bg-[#555] lg:flex md:hidden flex items-center justify-center translate-y-0 md:translate-y-[50px] cursor-pointer hover:shadow hover:shadow-[#333] duration-500'
                                variants={appear}
                                initial='hidden'
                                whileInView='visible'
                                transition={{delay: 0.7, duration: 0.5}}
                            >
                              <img src='https://i.pinimg.com/236x/c0/36/ce/c036ce3130803329a728c15d19878eab.jpg' alt='comic book' className='w-full h-full '/>
                            </motion.div>
                            <motion.div className='w-[130px] h-[180px] bg-[#555] flex items-center justify-center translate-y-0 md:translate-y-[0px] cursor-pointer hover:shadow hover:shadow-[#333] duration-500'
                                variants={appear}
                                initial='hidden'
                                whileInView='visible'
                                transition={{delay: 0.8, duration: 0.5}}
                            >
                              <img src='https://i.pinimg.com/236x/26/de/80/26de806d593e91734d7487cc27d69e07.jpg' alt='comic book' className='w-full h-full '/>
                            </motion.div>
                            <motion.div className='w-[130px] h-[180px] bg-[#555] flex items-center justify-center translate-y-0 md:translate-y-[-50px] cursor-pointer hover:shadow hover:shadow-[#333] duration-500'
                                variants={appear}
                                initial='hidden'
                                whileInView='visible'
                                transition={{delay: 0.9, duration: 0.5}}
                            >
                              <img src='https://i.pinimg.com/236x/f1/d2/57/f1d2579a0d8aef4fbeac79cb5adbb5a4.jpg' alt='comic book' className='w-full h-full '/>
                            </motion.div>
                    {/* FROM LEFT TO RIGHT */}
                    </span>
                {/* CURVEY IMAGES DIV */}

                <button className='2md:py-3 sm:py-2.5 py-2 2md:px-4 sm:px-3.5 px-3 text-[20px] absolute right-5 bottom-5 z-40 bg-[--yellowColor] rounded-md shadow shadow-[#333]'><FaArrowRight/></button>
            </div>
        </div>
    </section>
  )
}

export default futureComic