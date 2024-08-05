import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
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
const scaleBig = {
    hidden: {
        scale: 0,
        opacity: 0
      },
      visible: (i) => ({
          scale: 1,
          opacity: 1,
          transition: {
              delay: 0.3 * i,
          }
        })
    }
    // FRAMER MOTION VARIABLES




const PaymentForm = () => {

    const cards = [
        {
            imageUrl: 'https://i.pinimg.com/236x/47/d1/e4/47d1e4d6d27d2b48dae83cb26e48889a.jpg'
        },
        {
            imageUrl: 'https://i.pinimg.com/236x/07/73/4c/07734cf160091516ce46a0e71b9f1cab.jpg'
        },
        {
            imageUrl: 'https://i.pinimg.com/236x/9d/11/12/9d11120cff8d43e5247f15792db146a4.jpg'
        },
        {
            imageUrl: 'https://i.pinimg.com/236x/bf/52/b8/bf52b87c9c500e5502da41ccb04c9ef1.jpg'
        },
    ]
  return (
    <section className="w-full min-h-[85vh] flex items-start justify-center pt-[15vh] mb-[5vh]">
        <div className='2sm:w-[85%] w-[90%] flex flex-col items-center justify-center '>
                <h1 className='lg:text-[2.4em] text-[2.1em] font-semibold flex flex-col items-end justify-end leading-10 mb-5'>
                Checkout
                </h1>
            <span className='2sm:w-[400px] w-full flex flex-col items-start justify-start'>
                <h2 className='text-[18px] font-medium'>Card Details</h2>
                <div className='flex gap-4 items-center my-3 '>
                    {cards.map((book, i) => (
                        <span key={i} className='sm:w-[55px] w-[45px] sm:h-[35px] h-[30px] flex items-center justify-center border-[1px] border-[--whiteColor] duration-300 cursor-pointer hover-image-filter'>
                            <motion.img src={book.imageUrl} className='sm:w-[45px] w-[35px] sm:h-[25px] h-[20px]' alt='card'
                                variants={scaleBig}
                                initial='hidden'
                                whileInView='visible'
                                custom={i}
                            />
                        </span>
                    ))}
                </div>

                <div className='w-full flex flex-col gap-4'>
                    <span className='w-full flex flex-col gap-3'>
                        <h3>Name On Card</h3>
                        <motion.input type='text' className='py-1 px-2 bg-[--blackColor] border-[1.5px] border-[#555] rounded text-[--whiteColor] outline-[0.2px] outline-[--whiteColor] font-medium capitalize' 
                            variants={slideUp}
                            initial='hidden'
                            animate='visible'
                            transition={{delay: 0.6}}
                        />
                    </span>

                    <span className='w-full flex flex-col gap-3'>
                        <h3>Card Number</h3>
                        <motion.input type='number' className='py-1 px-2 bg-[--blackColor] border-[1.5px] border-[#555] rounded text-[--whiteColor] outline-[0.2px] outline-[--whiteColor] font-medium' max={16} 
                            variants={slideUp}
                            initial='hidden'
                            animate='visible'
                            transition={{delay: 0.7}}
                        />
                    </span>

                    <span className='w-full flex items-center justify-between gap-3'>
                        <div className='w-[45%] flex flex-col gap-3'>
                            <h3>Expiry Date</h3>
                            <motion.input type='month' className='py-1 px-2 bg-[--blackColor] border-[1.5px] border-[#555] rounded text-[--whiteColor] outline-[0.2px] outline-[--whiteColor] font-medium' 
                                variants={slideUp}
                                initial='hidden'
                                animate='visible'
                                transition={{delay: 0.8}}
                            />
                        </div>

                        <div className='w-[45%] flex flex-col gap-3'>
                            <h3>CVV</h3>
                            <motion.input type='number' className='py-1 px-2 bg-[--blackColor] border-[1.5px] border-[#555] rounded text-[--whiteColor] outline-[0.2px] outline-[--whiteColor] font-medium' max={3} 
                                variants={slideUp}
                                initial='hidden'
                                animate='visible'
                                transition={{delay: 0.8}}
                            />
                        </div>
                    </span>

                    <motion.button className='w-full flex items-center justify-between px-4 font-semibold text-[17px] bg-[--yellowColor] text-[--blackColor] py-3 rounded'
                                variants={slideUp}
                                initial='hidden'
                                animate='visible'
                                transition={{delay: 0.9}}
                    >
                        <h2>£3500.99</h2>

                        <h2 className='flex items-center gap-2'>Checkout <FaArrowRight/></h2>
                    </motion.button>
                </div>
            </span>
      </div>
    </section>
  )
}

export default PaymentForm