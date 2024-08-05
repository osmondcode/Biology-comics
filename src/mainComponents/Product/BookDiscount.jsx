import React from 'react'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6'
import {motion} from 'framer-motion'


// FRAMER MOTION VARIABLES
const appear = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}
const customSlideUp = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3 * i,
            duration: 0.4 * i
        }
    })
}
    // FRAMER MOTION VARIABLES

const BookDiscount = () => {

        // ARRAY OF COMIC BOOKS
        const comic = [
            {
                name: 'black spider-man',
                studio: 'marvel comic books',
                rating: <FaStar/>,
                price: '3,800',
                imageUrl: 'https://i.pinimg.com/236x/ab/81/12/ab8112930c647f0540fb0734cef94ce0.jpg'
            },
            {
                name: 'thanos comic',
                studio: 'N/A',
                rating: <FaStar/>,
                price: '2,150',
                imageUrl: 'https://i.pinimg.com/236x/28/c0/ae/28c0ae7ffd169c8e7a29b8eddc9c4454.jpg'
            },
            {
                name: 'deadpool',
                studio: 'marvel studio',
                rating: <FaStar/>,
                price: '1,980',
                imageUrl: 'https://i.pinimg.com/236x/75/2c/73/752c73e2bbbeedfefb74dccf906542ea.jpg'
            }
        ]
    // ARRAY OF COMIC BOOKS


        // ARRAY OF SECOND COMIC BOOKS
        const secondComic = [
            {
                name: 'amazing spider-man',
                studio: 'marvel comic books',
                rating: <FaStar/>,
                price: '3,800',
                imageUrl: 'https://i.pinimg.com/564x/79/17/68/7917686d287c4d0082723a6802f80e61.jpg'
            },
            {
                name: 'hot case comic',
                studio: 'N/A',
                rating: <FaStar/>,
                price: '2,150',
                imageUrl: 'https://i.pinimg.com/236x/80/cf/1e/80cf1e900ac20e74e6186e8aa73304e6.jpg'
            },
            {
                name: 'zombie captain america',
                studio: 'marvel studio',
                rating: <FaStar/>,
                price: '1,980',
                imageUrl: 'https://i.pinimg.com/236x/2c/4e/b5/2c4eb5d794318fefb21e6157d5547f47.jpg'
            },
            {
                name: 'wonder woman',
                studio: 'marvel comic',
                rating: <FaStar/>,
                price: '3,000',
                imageUrl: 'https://i.pinimg.com/736x/99/f6/c0/99f6c0ce0f9c09dd93f93cd656e6df66.jpg'
            },
        ]
    // ARRAY OF SECOND COMIC BOOKS
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-between ">
        <div className='sm:w-[85%] 2md:w-[80%] w-[90%] min-h-fit flex flex-col lg:flex-row items-start justify-center mt-[5vh] 2md:pt-[0] pt-[15vh] gap-[30px] relative'>
            <motion.span className='lg:w-[320px] w-full  sm:h-[350px] h-[300px] bg-white/50 flex flex-col items-center justify-start text-[--blackColor] relative'
                    variants={appear}
                    initial='hidden'
                    whileInView='visible'
                    transition={{delay: 0.6, duration: 0.4}}
            >
                <img src='https://i.pinimg.com/564x/02/ec/57/02ec57235e5f6cefda6b02064db7d522.jpg' alt='comic book' className='w-full h-full object-cover image-filter'/>

                <span className='w-full h-full absolute flex flex-col items-center justify-center text-center gap-2 lg:text-[35px] 2sm:text-[29px] sm:text-[26px] text-[22px] left-0 bottom-0 z-40 text-[--whiteColor] font-semibold'>
                    <h2>Book on sales </h2>
                    <h1 className='lg:text-[40px] 2sm:text-[37px] sm:text-[35px] text-[27px]'>20% Discount</h1>
                </span>
            </motion.span>

            <div className='lg:w-[calc(100%-350px)] w-full min-h-fit flex flex-wrap items-start lg:justify-start justify-center gap-4'>
                    {comic.map((book, i) => (
                        <motion.div key={i} className='w-[220px] h-[350px] flex flex-col items-start justify-start bg-[--whiteColor] text-[--blackColor] p-2 cursor-pointer'
                            variants={customSlideUp}
                            initial='hidden'
                            whileInView='visible'
                            custom={i}
                        >
                            <span className='w-full h-[60%] flex items-center justify-center bg-[#555] overflow-hidden'>
                                <img src={book.imageUrl} alt='comic book' className='w-full h-full '/>
                            </span>

                            <h3 className='font-semibold capitalize mt-3 leading-4'>{book.name}</h3>
                            <h3 className='font-semibold capitalize'>{book.studio}</h3>

                            <span className='w-full flex items-center justify-between text-[11px] font-bold text-[#555] mt-1'>
                                <p>Comic Rating</p>
                                <p>Price</p>
                            </span>

                            <span className='w-full flex items-center justify-between text-[15px] font-bold mb-2'>
                                <div className='flex gap-0.5 items-center text-[--yellowColor] text-[12px]'>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar className='text-[#555]'/>
                                    <FaStar className='text-[#555]'/>
                                </div>
                                <p>{book.price}</p>
                            </span>

                            <span className='w-full flex items-center justify-between text-[14px] font-bold px-1'>
                                <button className='w-fit h-fit px-5 py-1 border-[0.5px] border-[--yellowColor] bg-[--yellowColor] rounded hover:shadow hover:shadow-[#222] duration-300'>Buy</button>
                                <button className='w-fit h-fit px-3 py-1 border-[0.5px] border-[--blackColor] rounded hover:shadow hover:shadow-[#222] duration-300'>Add to cart</button>
                            </span>
                        </motion.div>
                    ))}
                    </div>
        {/* BEST SELLER COMIC BOOKS */}
        </div>

        {/* LOWER E-BOOKS COLLECTION */}
        <div className='sm:w-[85%] 2md:w-[80%] w-[90%] min-h-fit flex flex-wrap items-start justify-center mt-[5vh] 2md:pt-[0] pt-[10vh] gap-[30px] '>
        {secondComic.map((book, i) => (
                        <motion.div key={i} className='sm:w-[200px] w-[230px] sm:h-[300px] h-[330px] flex flex-col items-start justify-start bg-[--whiteColor] text-[--blackColor] p-2 cursor-pointer'
                            variants={customSlideUp}
                            initial='hidden'
                            whileInView='visible'
                            custom={i}
                        >
                            <span className='w-full h-[60%] flex items-center justify-center bg-[#555] overflow-hidden'>
                                <img src={book.imageUrl} alt='comic book' className='w-full h-full '/>
                            </span>

                            <h3 className='text-[14px] font-semibold capitalize mt-2 leading-4'>{book.name}</h3>
                            <h3 className='text-[13px] font-medium capitalize w-full h-[18px] '>{book.studio}</h3>

                            <span className='w-full flex items-center justify-between text-[11px] font-bold text-[#555] mt-1'>
                                <p>Comic Rating</p>
                                <p>Price</p>
                            </span>

                            <span className='w-full flex items-center justify-between text-[15px] font-bold mb-2'>
                                <div className='flex gap-0.5 items-center text-[--yellowColor] text-[12px]'>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar className='text-[#555]'/>
                                    <FaStar className='text-[#555]'/>
                                </div>
                                <p>{book.price}</p>
                            </span>

                            <span className='w-full flex items-center justify-between text-[13px] font-bold px-1'>
                                <button className='w-fit h-fit px-5 py-1 border-[0.5px] border-[--yellowColor] bg-[--yellowColor] rounded hover:shadow hover:shadow-[#222] duration-300'>Buy</button>
                                <button className='w-fit h-fit px-3 py-1 border-[0.5px] border-[] rounded shadow shadow-[#333] duration-300'>Add to cart</button>
                            </span>
                        </motion.div>
                    ))}
        </div>
        {/* LOWER E-BOOKS COLLECTION */}

        {/* NEXT AND PREVIOUS BUTTON SECTION */}
        <div className='flex w-fit py-3 px-2 bg-[--whiteColor] text-[--blackColor] gap-4 my-10'>
            <button className='flex items-center gap-2 text-[12px] px-2 py-1 hover:bg-[--blackColor] hover:text-[--whiteColor]'><FaArrowLeft/>PREVIOUS</button>

            <span className='flex items-center justify-center gap-3'>
                    <p className='flex items-center justify-center h-[28px] w-[28px] rounded-md hover:bg-[--blackColor] hover:text-[--whiteColor] cursor-pointer'>1</p>
                    <p className='flex items-center justify-center h-[28px] w-[28px] rounded-md hover:bg-[--blackColor] hover:text-[--whiteColor] cursor-pointer'>2</p>
                    <p className='flex items-center justify-center h-[28px] w-[28px] rounded-md hover:bg-[--blackColor] hover:text-[--whiteColor] cursor-pointer'>3</p>
                    <p>...</p>
                    <p className='flex items-center justify-center h-[28px] w-[28px] rounded-md hover:bg-[--blackColor] hover:text-[--whiteColor] cursor-pointer'>18</p>
                    <p className='flex items-center justify-center h-[28px] w-[28px] rounded-md hover:bg-[--blackColor] hover:text-[--whiteColor] cursor-pointer'>19</p>
                    <p className='flex items-center justify-center h-[28px] w-[28px] rounded-md hover:bg-[--blackColor] hover:text-[--whiteColor] cursor-pointer'>20</p>
            </span>

            <button className='flex items-center gap-2 text-[12px] px-2 py-1 hover:bg-[--blackColor] hover:text-[--whiteColor]'>NEXT<FaArrowRight/></button>
        </div>
        {/* NEXT AND PREVIOUS BUTTON SECTION */}
    </section>
  )
}

export default BookDiscount