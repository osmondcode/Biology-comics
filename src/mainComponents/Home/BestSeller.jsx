import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IoMdStar } from 'react-icons/io'

// FRAMER MOTION VARIABLES
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

const BestSeller = () => {

    // ARRAY OF COMIC BOOKS
        const comic = [
            {
                name: 'amazing spider-man',
                studio: 'marvel comic books',
                price: '3,800',
                imageUrl: 'https://i.pinimg.com/564x/79/17/68/7917686d287c4d0082723a6802f80e61.jpg'
            },
            {
                name: 'hot case comic',
                studio: 'N/A',
                price: '2,150',
                imageUrl: 'https://i.pinimg.com/236x/80/cf/1e/80cf1e900ac20e74e6186e8aa73304e6.jpg'
            },
            {
                name: 'spider-man noir',
                studio: 'marvel studio',
                price: '1,980',
                imageUrl: 'https://i.pinimg.com/236x/0a/95/64/0a956421ffe409e18d9b892f41083338.jpg'
            },
            {
                name: 'invisible woman',
                studio: 'marvel comic',
                price: '3,000',
                imageUrl: 'https://i.pinimg.com/736x/99/f6/c0/99f6c0ce0f9c09dd93f93cd656e6df66.jpg'
            },
        ]
    // ARRAY OF COMIC BOOKS
    return(
        <section className='w-full min-h-[80vh] flex items-center justify-center overflow-hidden mt-[5vh]'>
            <span className='sm:w-[80%] w-[90%] min-h-fit flex flex-col items-start justify-center gap-[25px]'>
                <h1 className='2md:text-[3rem] 2sm:text-[2.7rem] text-[2.5rem] font-bold'>Bestseller</h1>

    {/* BEST SELLER COMIC BOOKS */}
                <div className='w-full flex items-center md:justify-between justify-center flex-wrap gap-5'>
                    {comic.map((book, i) => (
                        <motion.span key={i} className='w-[220px] h-[350px] flex flex-col items-start justify-start bg-[--whiteColor] text-[--blackColor] p-2 cursor-pointer'
                            variants={customSlideUp}
                            initial='hidden'
                            whileInView='visible'
                            custom={i}
                            whileHover={{
                                scale: 1.01
                            }}
                            transition={{
                                duration: 0.4
                            }}
                        >
                        <Link to='/item' className='w-full h-full'>

                                <span className='w-full h-[60%] flex items-center justify-center bg-[#555]'>
                                    <img src={book.imageUrl} alt='comic book' className='w-full h-full '/>
                                </span>

                                <h3 className='font-semibold capitalize mt-3 leading-4'>{book.name}</h3>
                                <h3 className='font-semibold capitalize'>{book.studio}</h3>

                                <span className='w-full flex items-center justify-between text-[11px] font-bold text-[#555] mt-1'>
                                    <p>Comic Rating</p>
                                    <p>Price</p>
                                </span>

                                <span className='w-full flex items-center justify-between text-[15px] font-bold mb-2'>
                                    <div className='flex gap-0.5 items-center text-[--yellowColor] text-[14px]'>
                                        <IoMdStar/>
                                        <IoMdStar/>
                                        <IoMdStar/>
                                        <IoMdStar className='text-[#555]'/>
                                        <IoMdStar className='text-[#555]'/>
                                    </div>
                                    <p>{book.price}</p>
                                </span>

                                <span className='w-full flex items-center justify-between text-[14px] font-bold px-1'>
                                    <button className='w-fit h-fit px-5 py-1 border-[0.5px] border-[--yellowColor] bg-[--yellowColor] rounded hover:shadow hover:shadow-[#222] duration-300'>Buy</button>
                                    <button className='w-fit h-fit px-3 py-1 border-[0.5px] border-[--blackColor] rounded hover:shadow hover:shadow-[#222] duration-300'>Add to cart</button>
                                </span>
                        </Link>
                        </motion.span>
                    ))}
                </div>
    {/* BEST SELLER COMIC BOOKS */}
            </span>
        </section>
    )
}

export default BestSeller;