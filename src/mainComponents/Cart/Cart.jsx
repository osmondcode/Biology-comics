import React from 'react'
import {FaMinus, FaPlus, } from 'react-icons/fa'
import {CiTrash} from 'react-icons/ci'
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
const slideLeft = {
    hidden: {
        opacity: 0,
        x: 50
    },
    visible: {
        opacity: 1,
        x: 0
    }
}
const slideRight = {
    hidden: {
        opacity: 0,
        x: '-50px'
    },
    visible: {
        opacity: 1,
        x: 0
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

const Cart = () => {

  const comicItem = [
    {
      name: 'black panther marvel comic',
      price: 700,
      studio: 'Super-hero',
      quantity: 1,
      imageUrl: 'https://i.pinimg.com/474x/1c/5f/98/1c5f98c7ecbb61819a2480e061e873e6.jpg'
    },
    {
      name: 'batman gotham city',
      price: 1200,
      studio: 'Super-hero',
      quantity: 4,
      imageUrl: 'https://i.pinimg.com/236x/fb/1a/98/fb1a98e6f67543184224f0206a56e907.jpg'
    },
  ]
  return (
    <section className="w-full min-h-[90vh] flex items-start justify-center pt-[18vh]">
        <div className='2sm:w-[85%] w-[90%] min-h-fit flex flex-col  items-start justify-start '>
          <h1 className='lg:text-[3.1em] 2sm:text-[2.8em] sm:text-[2.3em] text-[1.8em] font-semibold flex flex-col items-end justify-end leading-10 mt-'>
            Shopping Cart
          </h1>

          {/* CART ITEMS */}
             <div className='w-full min-h-fit flex flex-col 2md:flex-row 2md:items-start items-center 2md:justify-between justify-center 2md:mt-[8vh] mt-[5vh] gap-y-8'>
             {/* ITEMS SECTION */}
                <span className='2md:w-[50%] md:w-[70%] w-full 2md:h-[55vh] h-fit text-[--whiteColor] flex flex-col items-start justify-start  gap-3 overflow-hidden'>
                  {comicItem.map((book, i) => (
                    <div key={i} className='w-full flex items-center justify-between 2md:gap-3 gap-2 px-1 hover:bg-[#555]/10 cursor-pointer'>
                      <div className='w-fit 2sm:gap-3 gap-1.5 h-fit flex items-center'>
                        <span className='2sm:min-w-[90px] sm:min-w-[110px] min-w-[70px] 2sm:h-[120px] sm:h-[140px] h-[100px] bg-[#555]'>
                          <img src={book.imageUrl} alt='comic book' className='w-full h-full '/>
                        </span>


                        <span className='w-fit lg:h-[140px] h-[110px] lg:py-3 py-1 flex flex-col items-start justify-between '>
                          <motion.h3 className='lg:text-[18px] sm:text-[16px] text-[14px] capitalize 2sm:font-semibold font-medium leading-5'
                                variants={slideUp}
                                initial='hidden'
                                whileInView='visible'
                                transition={{delay: 0.5}}
                          >{book.name}</motion.h3>
                          <motion.h5 className='sm:text-[14px] text-[12px] text-[#888]'
                                variants={slideUp}
                                initial='hidden'
                                whileInView='visible'
                                transition={{delay: 0.6}}
                          >{book.studio}</motion.h5>
                          <motion.p className='font-light sm:text-[15px] text-[12px]'
                                variants={slideUp}
                                initial='hidden'
                                whileInView='visible'
                                transition={{delay: 0.7}}
                          >£{book.price}</motion.p>
                          <button className='underline 2sm:text-[15px] sm:text-[13px] text-[11px]'>Move to favourites</button>
                        </span>
                      </div>

                      <span className='w-fit lg:h-[140px] h-[110px] flex items-center justify-between lg:px-3 px-0 '>
                        <div className='flex items-center lg:gap-3 gap-2'>
                          <motion.button className='w-fit h-fit flex items-center justify-center hover:bg-[#888]/20 rounded lg:p-2 p-1 text-[14px] lg:text-[16px]'
                            variants={appear}
                            initial='hidden'
                            whileInView='visible'
                            transition={{delay: 0.6}}
                          ><FaMinus/></motion.button>
                          <motion.h2
                            variants={appear}
                            initial='hidden'
                            whileInView='visible'
                            transition={{delay: 0.7}}
                          >{book.quantity}</motion.h2>
                          <motion.button className='w-fit h-fit flex items-center justify-center hover:bg-[#888]/20 rounded lg:p-2 p-1 text-[14px] lg:text-[16px]'
                            variants={appear}
                            initial='hidden'
                            whileInView='visible'
                            transition={{delay: 0.8}}
                          ><FaPlus/></motion.button>
                        </div>

                        <motion.button className='w-fit h-fit flex items-center justify-center hover:bg-[#888]/20 rounded lg:p-2 p-1 text-[14px] lg:text-[16px]'
                            variants={appear}
                            initial='hidden'
                            whileInView='visible'
                            transition={{delay: 0.9}}
                        ><CiTrash/></motion.button>
                      </span>
                    </div>
                  ))}
                </span>
             {/* ITEMS SECTION */}

              {/* CHECKOUT SECTION */}
                <span className='2md:w-[45%] md:w-[70%] 2sm:w-[80%] sm:w-[90%] w-full min-h-[40vh] flex flex-col items-center justify-center mb-5'>
                  <div className='lg:w-[354px] md:w-[80%] w-full 2md:w-[324px]  flex flex-col items-start justify-start gap-1 lg:py-3 py-1 px-1 overflow-hidden'>
                    <motion.h1 className='text-[23px] my-1 font-semibold'
                        variants={appear}
                        initial='hidden'
                        whileInView='visible'
                        transition={{delay: 0.5}}
                    >Order Summary</motion.h1>

                    <span className='w-full h-fit flex flex-col items-starr justify-start gap-2 my-1'>
                      <div className='w-full flex items-center justify-between text-[17px] my-1'>
                        <motion.h2
                            variants={slideRight}
                            initial='hidden'
                            whileInView='visible'
                            transition={{delay: 0.6}}
                        >SUBTOTAL</motion.h2>
                        <motion.h2
                          variants={slideLeft}
                          initial='hidden'
                          whileInView='visible'
                          transition={{delay: 0.6}}
                        >£2900</motion.h2>
                      </div>

                      <div className='w-full flex items-center justify-between text-[17px] my-1 '>
                        <motion.h2
                          variants={slideLeft}
                          initial='hidden'
                          whileInView='visible'
                          transition={{delay: 0.6}}
                        >DELIVERY</motion.h2>
                        <motion.h2
                            variants={slideRight}
                            initial='hidden'
                            whileInView='visible'
                            transition={{delay: 0.6}}
                        >£600</motion.h2>
                      </div>

                      <div className='w-full flex items-center justify-between font-semibold text-[19px] my-3'>
                        <motion.h2
                            variants={slideRight}
                            initial='hidden'
                            whileInView='visible'
                            transition={{delay: 0.6}}
                        >TOTAL PRICE</motion.h2>
                        <motion.h2
                          variants={slideLeft}
                          initial='hidden'
                          whileInView='visible'
                          transition={{delay: 0.6}}
                        >£3500</motion.h2>
                      </div>
                    </span>

                    <span className='w-full flex flex-col items-start justify-center gap-2 mt-2'>
                      <h2 className='font-medium text-[17px]'>Do you have a discount?</h2>
                      <motion.div className='w-full flex items-center justify-between'
                            variants={slideUp}
                            initial='hidden'
                            whileInView='visible'
                            transition={{delay: 0.7}}
                      >
                        <input type='text' placeholder='DISCOUNT CODE' className='w-[68%] px-2 py-1.5 text-[13px] border-[1px] border-[--yellowColor] rounded bg-[--whiteColor] text-[--blackColor] placeholder:text-[#555] font-medium outline-none uppercase'/>
                        <button className='w-[30%] py-1  border-[1px] border-[--yellowColor] rounded bg-[--yellowColor] font-medium text-[--blackColor] flex items-center justify-center'>APPLY</button>
                      </motion.div>
                    </span>

                    <motion.button className='w-full flex items-center justify-center py-1  border-[1px] border-[--yellowColor] rounded bg-[--yellowColor] font-medium text-[--blackColor] mt-2'
                            variants={slideUp}
                            initial='hidden'
                            whileInView='visible'
                            transition={{delay: 0.8}} 
                    >CHECKOUT</motion.button>
                    <motion.p className='flex self-end justify-self-end underline text-[13px] cursor-pointer'
                            variants={appear}
                            initial='hidden'
                            whileInView='visible'
                            transition={{delay: 0.9}}
                    >CONTINUE SHOPPING</motion.p>
                  </div>
                </span>
              {/* CHECKOUT SECTION */}
             </div>
          {/* CART ITEMS */}
        </div>
    </section>
  )
}

export default Cart