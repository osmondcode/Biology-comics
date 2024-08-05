import { IoMdCall, IoMdPerson, IoIosPersonAdd  } from 'react-icons/io'
import { FiAlignRight, FiSearch } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const appear = {
  hidden: {
      opacity: 0,
  },
  visible: {
      opacity: 1,
  }
}


const Header = ({slideHandle, mail}) => {

  return (
    <nav className='w-full h-[10vh] flex items-center justify-between md:px-[60px] 2sm:px-[40px] px-[20px] border-b border-b-[--whiteColor] font-semibold absolute z-40 top-0 left-0'>
        <motion.h1 className='md:text-[26px] 2sm:text-[25px] text-[23px] italic cursor-pointer'
        
            variants={appear}
            initial='hidden'
            animate='visible'
            transition={{delay: 0.7, duration: 0.6}}
        >Biology</motion.h1>

{/* NAVIGATION LINKS */}
        <span className='gap-3 hidden md:flex items-center 2md:text-[18px] text-[16px]'>
            <motion.button className='w-fit h-fit relative hoverEff'
              
                variants={appear}
                initial='hidden'
                animate='visible'
                transition={{delay: 0.9, duration: 0.6}}
            ><Link to='/'>Home</Link></motion.button>
            <motion.button className='w-fit h-fit relative hoverEff'
              
                variants={appear}
                initial='hidden'
                animate='visible'
                transition={{delay: 1, duration: 0.6}}
            ><Link to='/product'>Product</Link></motion.button>
            <motion.button className='w-fit h-fit relative hoverEff'
              
                variants={appear}
                initial='hidden'
                animate='visible'
                transition={{delay: 1.1, duration: 0.6}}
            ><Link to='/cart'>Cart</Link></motion.button>
            <motion.button className='w-fit h-fit relative hoverEff'
              
                variants={appear}
                initial='hidden'
                animate='visible'
                transition={{delay: 1.2, duration: 0.6}}
            ><Link to='/checkout'>Checkout</Link></motion.button>
            <motion.button className='w-fit h-fit relative hoverEff'
              
                variants={appear}
                initial='hidden'
                animate='visible'
                transition={{delay: 1.3, duration: 0.6}}
            ><Link to='/policy'>Our Policy</Link></motion.button>
        </span>
{/* NAVIGATION LINKS */}

{/* SEARCH & PROFILE */}
        <span className='gap-4 hidden md:flex items-center '>
            <motion.button className='w-[30px] h-[30px] rounded-md text-[20px] border-[0.5px] border-transparent hover:border-[--yellowColor] duration-500 flex items-center justify-center'
                variants={appear}
                initial='hidden'
                animate='visible'
                transition={{delay: 1.5, duration: 0.6}}
            ><FiSearch/></motion.button>
            <motion.button className='w-[30px] h-[30px] rounded-md text-[20px] border-[0.5px] border-transparent hover:border-[--yellowColor] duration-500 flex items-center justify-center'
                variants={appear}
                initial='hidden'
                animate='visible'
                transition={{delay: 1.6, duration: 0.6}}
            ><Link to='/contact'><IoMdCall/></Link></motion.button>
            <motion.button className='w-[30px] h-[30px] rounded-md text-[20px] border-[0.5px] border-transparent hover:border-[--yellowColor] duration-500 flex items-center justify-center'
                variants={appear}
                initial='hidden'
                animate='visible'
                transition={{delay: 1.7, duration: 0.6}}
            >{mail !== null ? <IoMdPerson/> : <Link to='/signup'><IoIosPersonAdd/></Link> }</motion.button>
        </span>

        <motion.button onClick={slideHandle} className='text-[23px] flex md:hidden items-center justify-center'
            variants={appear}
            initial='hidden'
            animate='visible'
            transition={{delay: 1, duration: 0.6}}
        ><FiAlignRight/></motion.button>
{/* SEARCH & PROFILE */}
    </nav>
  )
}

export default Header