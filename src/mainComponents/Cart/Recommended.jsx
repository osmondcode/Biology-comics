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
const customSlideDown = {
    hidden: {
        opacity: 0,
        y: '-50'
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3 * i,
        }
    })
}
    // FRAMER MOTION VARIABLES

const Recommended = () => {
    const books = [
        {
            imageUrl: 'https://i.pinimg.com/236x/48/e1/82/48e182eb65ff881e087aea9cdd7c1837.jpg'
        },
        {
            imageUrl: 'https://i.pinimg.com/236x/22/4a/e2/224ae2ef11d2751fd6decd5fb0b03002.jpg'
        },
        {
            imageUrl: 'https://i.pinimg.com/236x/90/49/69/9049697a40b397dc5790d992e89abdb2.jpg'
        },
    ]
  return (
    <section className='w-full min-h-[60vh] flex items-start justify-center overflow-hidden my-[5vh]'>
        <div className='2sm:w-[85%] w-[90%] min-h-fit flex flex-col gap-10 items-center justify-start pt-[5vh]'>
            <h1 className='text-[22px] font-medium text-[#555]/90 mb-2'>Recommended Books</h1>

            <span className='w-fit h-fit flex flex-wrap items-center justify-center gap-9'>
                {books.map((book, i) => (
                    <motion.div key={1}
                                variants={customSlideDown}
                                initial='hidden'
                                whileInView='visible'
                                custom={i}
                    >
                        <img src={book.imageUrl} alt='book' className='w-[140px] h-[190px] cursor-pointer hover-image-filter duration-300'/>
                    </motion.div>
                ))}
            </span>

            <motion.button className='px-3.5 py-2 text-[--blackColor] bg-[--yellowColor] rounded font-medium text-[13px]'
                                variants={slideUp}
                                initial='hidden'
                                whileInView='visible'
                                transition={{delay: 0.8}}
            >Show All Books</motion.button>
        </div>
    </section>
  )
}

export default Recommended