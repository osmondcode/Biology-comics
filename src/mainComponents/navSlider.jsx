import React from 'react'
import { IoMdCall, IoMdPerson, IoIosPersonAdd, IoMdClose  } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
const appear = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}
const slideLeft = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0
    }
}
const scaleBig = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 1
    }
}


const navSlider = ({slideHandle, isSlide, mail}) => {
  return (
    
        <motion.div className='w-full h-screen fixed z-50 bg-black/50 top-0 left-0 flex md:hidden'

            variants={appear}
            initial='hidden'
            animate='visible'
            transition={{delay: 0.25, duration: 0.4}}

            >
            <motion.span className='2sm:w-[70%] sm:w-[80%] w-[90%] h-screen absolute right-0 top-0 z-[60] bg-[--blackColor] flex flex-col items-center justify-start py-[20px] gap-3'
                variants={slideLeft}
                initial='hidden'
                animate='visible'
                transition={{delay: 0.5, duration: 0.6}}
                exit='hidden'
            >

            {/* CLOSE BUTTON */}
                <button className='text-[22px] absolute right-[20px] top-[20px]' onClick={slideHandle}><IoMdClose/></button>
            {/* CLOSE BUTTON */}

            {/* SEARCH BAR */}
                <motion.div className='2sm:w-[70%] w-[80%] border-[0.5px] border-[--whiteColor] rounded flex items-center justify-between overflow-hidden mt-11'
                        variants={scaleBig}
                        initial='hidden'
                        animate='visible'
                        transition={{delay: 1, duration: 0.5}}
                        exit='hidden'
                >
                    <input type='text' placeholder='Search a comic title' className='bg-transparent px-2 py-1.5 w-[80%] h-full outline-none border-none text-[15px] sm:text-[16px]'/>
                    <button className='w-[20%] h-full flex items-center justify-center bg-[#555]'><FiSearch/></button>
                </motion.div>
            {/* SEARCH BAR */}

            {/* NAVIGATION LINKS */}
                <nav className='2sm:w-[60%] w-[80%] flex flex-col items-center justify-start gap-2 mt-3'>
                    <motion.button className='w-full h-fit py-1 bg-[#555] relative rounded'
                        variants={scaleBig}
                        initial='hidden'
                        animate='visible'
                        transition={{delay: 1.1, duration: 0.5}}
                        exit='hidden'
                    ><Link to='/' onClick={slideHandle}>Home</Link></motion.button>
                    <motion.button className='w-full h-fit py-1 hover:bg-[#555] relative rounded'
                        variants={scaleBig}
                        initial='hidden'
                        animate='visible'
                        transition={{delay: 1.2, duration: 0.5}}
                        exit='hidden'
                    ><Link to='/product' onClick={slideHandle}>Product</Link></motion.button>
                    <motion.button className='w-full h-fit py-1 hover:bg-[#555] relative rounded'
                        variants={scaleBig}
                        initial='hidden'
                        animate='visible'
                        transition={{delay: 1.3, duration: 0.5}}
                        onClick={slideHandle}
                    ><Link to='/cart' onClick={slideHandle}>Cart</Link></motion.button>
                    <motion.button className='w-full h-fit py-1 hover:bg-[#555] relative rounded'
                        variants={scaleBig}
                        initial='hidden'
                        animate='visible'
                        transition={{delay: 1.4, duration: 0.5}}
                        onClick={slideHandle}
                    ><Link to='/checkout'>Checkout</Link></motion.button>
                    <motion.button className='w-full h-fit py-1 hover:bg-[#555] relative rounded'
                        variants={scaleBig}
                        initial='hidden'
                        animate='visible'
                        transition={{delay: 1.5, duration: 0.5}}
                        onClick={slideHandle}
                    ><Link to='/policy'>Our Policy</Link></motion.button>
                </nav>
            {/* NAVIGATION LINKS */}

            {/* SOCIAL LINKS */}
                <span className='2sm:w-[60%] w-[80%] absolute bottom-[20px] left-auto right-auto gap-3 flex flex-col items-center justify-center'>
                    <motion.button className='w-full h-fit py-1 hover:bg-[#555] relative rounded flex items-center justify-center gap-2'
                        variants={slideUp}
                        initial='hidden'
                        animate='visible'
                        transition={{delay: 1.4, duration: 0.5}}
                        onClick={slideHandle}
                    ><Link to='/contact' className='flex items-center justify-center gap-2'>Contact us <IoMdCall/> </Link></motion.button>
                    <motion.button className='w-full h-fit py-1 hover:bg-[#555] relative rounded flex items-center justify-center gap-2'
                        variants={slideUp}
                        initial='hidden'
                        animate='visible'
                        transition={{delay: 1.5, duration: 0.5}}
                        onClick={slideHandle}
                    >{mail !== null ? <span className='flex items-center gap-[10px]'>Logged In <IoMdPerson/></span> : <Link to='/signup' className='flex items-center gap-[10px]'>No User <IoIosPersonAdd/></Link>}</motion.button>
                </span>
            {/* SOCIAL LINKS */}
            </motion.span>
        </motion.div>
  )
}

export default navSlider