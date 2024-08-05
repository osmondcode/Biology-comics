import React from 'react'
import {Link} from 'react-router-dom'
import { IoMdStar, IoIosSearch } from 'react-icons/io'
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

const BooksOne = () => {

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
                studio: '',
                price: '2,150',
                imageUrl: 'https://i.pinimg.com/236x/80/cf/1e/80cf1e900ac20e74e6186e8aa73304e6.jpg'
            },
            {
                name: 'captain america',
                studio: 'marvel studio',
                price: '1,980',
                imageUrl: 'https://i.pinimg.com/236x/83/9d/c9/839dc98ae68240c8e0a6811df72636eb.jpg'
            },
            {
                name: 'the batman',
                studio: '',
                price: '1,600',
                imageUrl: 'https://i.pinimg.com/236x/e1/04/89/e10489360811c87e0f171dec8ce0c378.jpg'
            },
            {
                name: "x-men'97",
                studio: 'marvel comic',
                price: '2,000',
                imageUrl: 'https://i.pinimg.com/236x/89/42/9f/89429f76c67145f4377cd239d29c60b2.jpg'
            },
            {
                name: 'the hulk',
                studio: 'marvel comic',
                price: '1,000',
                imageUrl: 'https://i.pinimg.com/236x/bc/04/87/bc0487cbee9c718331e67f21bf5caf27.jpg'
            },
        ]
    // ARRAY OF COMIC BOOKS

    // ARRAY OF LOWER COMIC BOOKS
        const lowerComic = [
            {
                name: 'black-panther',
                studio: 'marvel comic books',
                price: '6,800',
                imageUrl: 'https://i.pinimg.com/236x/4c/7a/5c/4c7a5c17483f0e5626b88fa2801499e8.jpg'
            },
            {
                name: 'the mighty avengers',
                studio: '',
                price: '250',
                imageUrl: 'https://i.pinimg.com/236x/6e/76/7a/6e767a29695cf1214341e7aed495cf8c.jpg'
            },
            {
                name: 'batman & amazing spider-man',
                studio: '',
                price: '980',
                imageUrl: 'https://i.pinimg.com/236x/31/2f/bc/312fbcbaa88566d74e141d7105efdedb.jpg'
            },
            {
                name: 'the superman',
                studio: '',
                price: '600',
                imageUrl: 'https://i.pinimg.com/474x/4a/e3/01/4ae301699df57720b4f438982a52d980.jpg'
            }
        ]
    // ARRAY OF LOWER COMIC BOOKS
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-between ">
        <div className='sm:w-[85%] 2md:w-[80%] w-[90%] min-h-fit flex flex-col 2md:flex-row items-start justify-center mt-[5vh] 2md:pt-[0] pt-[15vh] gap-[30px] relative'>

        {/* SIDE FILTER DIV */}
            <motion.span className='2md:w-[320px] w-full 2md:min-h-[90vh] min-h-fit bg-[--whiteColor] flex flex-col items-center justify-start text-[--blackColor] p-5 2md:sticky relative left-0 top-0'
                variants={slideUp}
                initial='hidden'
                whileInView='visible'
                transition={{delay: 0.5, duration: 0.5}}
            >

            {/* SEARCH BAR */}
                <div className='2md:w-[220px] sm:w-fit w-[240px] h-[35px] rounded oveflow-hidden flex items-center justify-center border-[2px] border-[--yellowColor]'>
                    <input type='text' placeholder='Search Product' className='2md:w-[80%] sm:w-[250px] w-[80%] h-full px-2 text-[14px] bg-[--whiteColor] outline-none border-none'/>
                    <button className='2md:w-[20%] sm:w-[60px] w-[20%] h-full flex items-center justify-center text-[18px] bg-[--yellowColor] text-[#666]'><IoIosSearch/></button>
                </div>
            {/* SEARCH BAR */}

                <span className='w-full h-fit flex 2md:flex-col flex-row items-start 2md:justify-start 2sm:justify-center justify-between mt-[4vh] gap-x-6 flex-wrap'>
            {/* PRODUCT CATEGORY DIV */}
                    <div className='mb-[4vh] w-fit flex flex-col items-start justify-start gap-3'>
                        <h2 className='font-semibold text-[15px]'>PRODUCT CATEGORY</h2>
                        
                        <span className='flex items-center gap-2'>
                            <input type='checkbox' className='border-[1px] border-[--blackColor] bg-transparent checked:text-[--yellowColor]'/>
                            <h3 className='text-[13px]'>Action & Adventure</h3>
                        </span>
                        <span className='flex items-center gap-2'>
                            <input type='checkbox' className='border-[1px] border-[--blackColor] bg-transparent checked:text-[--yellowColor]'/>
                            <h3 className='text-[13px]'>Historical</h3>
                        </span>
                        <span className='flex items-center gap-2'>
                            <input type='checkbox' className='border-[1px] border-[--blackColor] bg-transparent checked:text-[--yellowColor]'/>
                            <h3 className='text-[13px]'>Romance</h3>
                        </span>
                        <span className='flex items-center gap-2'>
                            <input type='checkbox' className='border-[1px] border-[--blackColor] bg-transparent checked:text-[--yellowColor]'/>
                            <h3 className='text-[13px]'>Game Fiction</h3>
                        </span>
                    </div>
                {/* PRODUCT CATEGORY DIV */}

                {/* FILTER BY PRICE */}
                    <div className='mb-[4vh] w-fit flex flex-col items-start justify-start gap-3'>
                        <h2 className='font-semibold text-[15px]'>FILTER BY PRICE</h2>
                        <span className='w-[160px] relative flex items-center justify-center'>
                            <div className='w-[13px] h-[13px] border-[2px] border-[--blackColor] rounded-full absolute top-auto bottom-auto left-0 bg-[--whiteColor] z-40'></div>
                            <div className='w-full h-[1px] border-[1.5px] border-[--blackColor]'></div>
                            <div className='w-[13px] h-[13px] border-[2px] border-[--blackColor] rounded-full absolute top-auto bottom-auto right-0 bg-[--whiteColor] z-40'></div>
                        </span>
                        <h4 className='text-[12px] font-semibold'>Price: $30 -- $3,000</h4>
                    </div>
                {/* FILTER BY PRICE */}


                {/* AVERAGE RATING */}
                    <div className='mb-[4vh] w-fit flex flex-col items-start justify-start gap-3'>
                        <h2 className='font-semibold text-[15px]'>AVERAGE RATING</h2>

                        <span className='w-fit relative flex flex-col items-start justify-start'>
                            <div className='flex items-center justify-between gap-1 text-[--yellowColor] text-[13px]'>
                                <span className='flex items-center gap-1'>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                </span>

                                <p className='text-[#555] mx-2'>(20)</p>
                            </div>

                            <div className='flex items-center justify-between gap-1 text-[--yellowColor] text-[13px]'>
                                <span className='flex items-center gap-1'>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar className='text-[#555]'/>
                                </span>

                                <p className='text-[#555] mx-2'> (7)</p>
                            </div>

                            <div className='flex items-center justify-between gap-1 text-[--yellowColor] text-[13px]'>
                                <span className='flex items-center gap-1'>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar className='text-[#555]'/>
                                    <IoMdStar className='text-[#555]'/>
                                </span>

                                <p className='text-[#555] mx-2'>(10)</p>
                            </div>

                        </span>
                    </div>
                {/* AVERAGE RATING */}

                {/* PRODUCT TAGS */}
                    <div className='w-fit flex flex-col items-start justify-start gap-3'>
                        <h2 className='font-semibold text-[15px]'>PRODUCT TAGS</h2>
                        <span className='w-fit h-fit flex flex-col gap-2'>
                            <span className='flex items-center justify-start gap-2'>
                                <div className='w-fit h-fit px-3 py-1 bg-[--yellowColor] rounded text-[13px] font-semibold'>COMIC</div>
                                <div className='w-fit h-fit px-3 py-1 bg-[--yellowColor] rounded text-[13px] font-semibold'>E-BOOK</div>
                            </span>
                            <div className='px-3 py-1 bg-[--yellowColor] rounded text-[13px] font-semibold flex items-center justify-center'>SUPER-HERO</div>
                        </span>
                    </div>
            {/* PRODUCT TAGS */}
                </span>

            </motion.span>
        {/* SIDE FILTER DIV */}


        {/* E-BOOKS COLLECTION */}
            <span className='2md:w-[calc(100%-350px)] w-full 2md:min-h-[90vh] min-h-fit flex flex-wrap items-start lg:justify-start justify-center gap-4'>
                {comic.map((book, i) => (
                        <motion.span key={i} className='sm:w-[200px] w-[230px] sm:h-[300px] h-[330px] flex flex-col items-start justify-start bg-[--whiteColor] text-[--blackColor] p-2 cursor-pointer'
                            variants={customSlideUp}
                            initial='hidden'
                            whileInView='visible'
                            custom={i}
                        >
                            <Link to='/item' className='w-full h-[60%] flex items-center justify-center bg-[#555] overflow-hidden'>
                                <img src={book.imageUrl} alt='comic book' className='w-full h-full object-fit'/>
                            </Link>

                            <h3 className='text-[14px] font-semibold capitalize mt-2 leading-4'>{book.name}</h3>
                            <h3 className='text-[13px] font-medium capitalize w-full h-[18px] '>{book.studio}</h3>

                            <span className='w-full flex items-center justify-between text-[11px] font-bold text-[#555] mt-1'>
                                <p>Comic Rating</p>
                                <p>Price</p>
                            </span>

                            <span className='w-full flex items-center justify-between text-[15px] font-bold mb-2'>
                                <div className='flex gap-0.5 items-center text-[--yellowColor] text-[12px]'>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar className='text-[#555]'/>
                                    <IoMdStar className='text-[#555]'/>
                                </div>
                                <p>{book.price}</p>
                            </span>

                            <span className='w-full flex items-center justify-between text-[13px] font-bold px-1'>
                                <button className='w-fit h-fit px-5 py-1 border-[0.5px] border-[--yellowColor] bg-[--yellowColor] rounded hover:shadow hover:shadow-[#222] duration-300'>Buy</button>
                                <button className='w-fit h-fit px-3 py-1 border-[0.5px] border-[] rounded shadow shadow-[#333] duration-300'>Add to cart</button>
                            </span>
                        </motion.span>
                    ))}
            </span>
        {/* E-BOOKS COLLECTION */}
        </div>

        {/* LOWER E-BOOKS COLLECTION */}
        <div className='sm:w-[85%] 2md:w-[80%] w-[90%] min-h-fit flex flex-wrap items-start justify-center mt-[5vh] 2md:pt-[0] pt-[10vh] gap-[30px] '>
        {lowerComic.map((book, i) => (
                        <motion.div key={i} className='sm:w-[200px] w-[230px] sm:h-[300px] h-[330px] flex flex-col items-start justify-start bg-[--whiteColor] text-[--blackColor] p-2 cursor-pointer'
                            variants={customSlideUp}
                            initial='hidden'
                            whileInView='visible'
                            custom={i}
                        >
                            <Link to='/item' className='w-full h-[60%] flex items-center justify-center bg-[#555] overflow-hidden'>
                                <img src={book.imageUrl} alt='comic book' className='w-full h-full '/>
                            </Link>

                            <h3 className='text-[14px] font-semibold capitalize mt-2 leading-4'>{book.name}</h3>
                            <h3 className='text-[13px] font-medium capitalize w-full h-[18px] '>{book.studio}</h3>

                            <span className='w-full flex items-center justify-between text-[11px] font-bold text-[#555] mt-1'>
                                <p>Comic Rating</p>
                                <p>Price</p>
                            </span>

                            <span className='w-full flex items-center justify-between text-[15px] font-bold mb-2'>
                                <div className='flex gap-0.5 items-center text-[--yellowColor] text-[12px]'>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar/>
                                    <IoMdStar className='text-[#555]'/>
                                    <IoMdStar className='text-[#555]'/>
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
    </section>
  )
}

export default BooksOne