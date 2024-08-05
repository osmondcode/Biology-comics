import React from 'react'
import { motion } from 'framer-motion'

// FRAMER MOTION VARIABLES

const customSlideDown = {
    hidden: {
        opacity: 0,
        y: '-50px'
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2 * i,
            duration: 0.1 * i
        }
    })
}

    // FRAMER MOTION VARIABLES

const OtherEbooks = () => {

            // ARRAY OF COMIC BOOKS
            const eComics = [
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
                    imageUrl: 'https://i.pinimg.com/236x/18/60/17/186017f737c14d987a66a60afd9deeb6.jpg'
                },
                {
                    name: 'Wolverine',
                    studio: 'marvel comic',
                    time: '12 hrs 14 mins',
                    imageUrl: 'https://i.pinimg.com/474x/69/e8/c7/69e8c7c39ecc200fe5a77db12f3534c8.jpg'
                },
                {
                    name: 'black panther',
                    studio: 'marvel comic',
                    time: '6 hrs 10 mins',
                    imageUrl: 'https://i.pinimg.com/236x/0f/2f/bd/0f2fbd9b69b4dde01446fd8b8b8bc346.jpg'
                },
                {
                    name: 'The West Coast Avengers Comic series',
                    studio: 'marvel comic',
                    time: '9 hrs 7 mins',
                    imageUrl: 'https://i.pinimg.com/236x/b2/ff/2c/b2ff2ccbaa96c3a79d899c58f1263040.jpg'
                },
                {
                    name: "x-men'97",
                    studio: 'marvel comic',
                    time: '14 hrs 7 mins',
                    imageUrl: 'https://i.pinimg.com/474x/be/fb/24/befb246811efa9270251d0c07f891ba1.jpg'
                },
                {
                    name: 'batman',
                    studio: 'marvel comic',
                    time: '20 hrs 7 mins',
                    imageUrl: 'https://i.pinimg.com/236x/2e/c0/a4/2ec0a417dca17238da780daa2cd34312.jpg'
                },
                {
                    name: 'The joker',
                    studio: 'marvel comic',
                    time: '11 hrs 7 mins',
                    imageUrl: 'https://i.pinimg.com/236x/69/46/3d/69463db9e7c43712ee55990b1aa056d2.jpg'
                },
            ]
        // ARRAY OF COMIC BOOKS
  return (
    <section className='w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-[10vh]'>
        <div className='sm:w-[80%] w-[90%] min-h-fit flex flex-col items-start justify-center gap-[25px]'>
            {/* BEST SELLER COMIC BOOKS */}
            <div className='w-full flex items-center lg:justify-between justify-center flex-wrap gap-5'>
                    {eComics.map((book, i) => (
                        <motion.div key={i} className='w-[280px] h-[130px] flex items-start justify-start bg-[--whiteColor] text-[--blackColor] p-2 gap-2 cursor-pointer relative'
                                variants={customSlideDown}
                                initial='hidden'
                                whileInView='visible'
                                custom={i}
                        >
                            <span className='w-[35%] h-full flex items-center justify-center bg-[#555] overflow-hidden'>
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
        </div>
    </section>
  )
}

export default OtherEbooks