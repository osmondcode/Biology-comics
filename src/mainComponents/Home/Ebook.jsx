import React from 'react'
import { motion } from 'framer-motion'

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

const Ebook = () => {
        // ARRAY OF COMIC BOOKS
        const comic = [
            {
                name: 'The West Coast Avengers Comic series',
                studio: 'marvel comic',
                time: '15 hrs 55 mins',
                imageUrl: 'https://i.pinimg.com/236x/db/93/a8/db93a89082f14771f8629b2bb2c30f95.jpg'
            },
            {
                name: 'The Mighty Avengers',
                studio: 'DC Comic',
                time: '12 hrs 3 mins',
                imageUrl: 'https://i.pinimg.com/236x/18/60/17/186017f737c14d987a66a60afd9deeb6.jpg'
            },
            {
                name: 'The West Coast Avengers Comic series',
                studio: 'marvel studio',
                time: '9 hrs 23 mins',
                imageUrl: 'https://i.pinimg.com/236x/d9/fb/a5/d9fba53b199459f2f408d2d11d500433.jpg'
            },
            {
                name: 'Wolverine',
                studio: 'marvel comic',
                time: '12 hrs 14 mins',
                imageUrl: 'https://i.pinimg.com/474x/69/e8/c7/69e8c7c39ecc200fe5a77db12f3534c8.jpg'
            },
            {
                name: 'The West Coast Avengers Comic series',
                studio: 'marvel comic',
                time: '6 hrs 10 mins',
                imageUrl: 'https://i.pinimg.com/236x/87/80/c9/8780c96fb47385d445fb6c80a5fe39e8.jpg'
            },
            {
                name: 'The West Coast Avengers Comic series',
                studio: 'marvel comic',
                time: '17 hrs 7 mins',
                imageUrl: 'https://i.pinimg.com/236x/cc/c5/cd/ccc5cdac5695479cad2dc68b602a9b5b.jpg'
            },
        ]
    // ARRAY OF COMIC BOOKS
  return (
    <section className='w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-[10vh]'>
            <span className='sm:w-[80%] w-[90%] min-h-fit flex flex-col items-start justify-center gap-[25px]'>
                <h1 className='2md:text-[3rem] 2sm:text-[2.7rem] text-[2.5rem] font-bold'>E-book</h1>

    {/* BEST SELLER COMIC BOOKS */}
                <div className='w-full flex items-center md:justify-between justify-center flex-wrap gap-5'>
                    {comic.map((book, i) => (
                        <motion.div key={i} className='w-[280px] h-[130px] flex items-start justify-start bg-[--whiteColor] text-[--blackColor] p-2 gap-2 cursor-pointer relative'
                            variants={customSlideUp}
                            initial='hidden'
                            whileInView='visible'
                            custom={i}
                        >
                            <span className='w-[35%] h-full flex items-center justify-center bg-[#555]'>
                                <img src={book.imageUrl} alt='comic book' className='w-full h-full '/>
                            </span>
                            <span className='w-[64%] h-full flex flex-col items-start justify-between'>
                                <h3 className='font-semibold capitalize mt-3 leading-4 text-wrap text-[14px]'>{book.name}</h3>
                                <h4 className='font-semibold text-[#555] text-[12px] capitalize'>{book.studio}</h4>
                                <h5 className='text-[14px] font-bold'>{book.time}</h5>
                            </span>

                            <button className='px-3 py-1.5 bg-[--yellowColor] rounded text-[14px] font-semibold absolute bottom-2 right-2 hover:shadow hover:shadow-[#333] duration-300'>Get</button>
                        </motion.div>
                    ))}
                </div>
    {/* BEST SELLER COMIC BOOKS */}
            </span>
        </section>
  )
}

export default Ebook