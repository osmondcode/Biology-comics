import React from 'react'
import { motion } from 'framer-motion'

// FRAMER MOTION VARIABLES
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

const Founders = () => {

    const founder = [
        {
            name: 'Janet Scott',
            position: 'Founder & comic book connoisseur',
            imageUrl: 'https://i.pinimg.com/564x/68/9a/ac/689aac83d90987579e72b67d6b9b8b02.jpg'
        },
        {
            name: 'Brian Sam',
            position: 'Store Manager & Super hero Expert',
            imageUrl: 'https://i.pinimg.com/236x/bc/48/67/bc4867eecf235133329e1e1a7cedaf47.jpg'
        },
        {
            name: 'Jude Lime',
            position: 'Product Curator & Graphic Novel',
            imageUrl: 'https://i.pinimg.com/564x/4a/79/81/4a79813bd44a7ecf6840fcf55681e34d.jpg'
        },
    ]
  return (
    <section className='w-full min-h-[80vh] flex items-start justify-center overflow-hidden pb-[10vh]'>
        <span className='sm:w-[80%] w-[90%] min-h-fit flex flex-col items-center justify-start gap-[35px] text-center'>
            <div className='2md:w-[80%] w-full'>
                <h1 className='lg:text-[2.7rem] 2md:text-[2.5rem] 2sm:text-[2.2rem] sm:text-[2rem] text-[1.8rem] font-semibold leading-9 2sm:leading-normal'>Meet the comic book enthusiasts behind Biology Company</h1>
            </div>

            <div className='2md:w-[90%] w-full md:text-[18px] sm:text-[16px] text-[15px]'>
                <p>Our team is dedicated to sharing their passion for high-quality comics and expectional customer service. With years of experience in the industry, they curate a selection of authentic and rare comic books that will delight any collector or reader. </p>
            </div>

            <div className='w-full flex items-center justify-evenly text-start flex-wrap gap-5'>
                {founder.map((person, i) => (
                    <span key={i} className='w-[240px] h-[320px] p-2 gap-2 flex flex-col items-start justify-start'>
                        <motion.div className='w-full h-[70%] flex items-center justify-center bg-[#555] rounded-md overflow-hidden'
                            variants={scaleBig}
                            initial='hidden'
                            whileInView='visible'
                            transition={{
                                delay: 0.6,
                                duration: 0.5
                            }}
                        >
                          <img src={person.imageUrl} alt='person' className='w-full h-full '/>
                        </motion.div>
                        <h3 className='mt-2 font-semibold'>{person.name}</h3>
                        <h3 className='font-semibold text-[#888]'>{person.position}</h3>
                    </span>
                ))}
            </div>
        </span>
    </section>
  )
}

export default Founders