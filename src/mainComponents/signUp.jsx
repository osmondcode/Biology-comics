import React from 'react'
import { FaGoogle, FaApple, FaFacebook} from 'react-icons/fa6'
import { motion } from 'framer-motion'

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
const scaleBig = {
    hidden: {
        scale: 0
    },
    visible: {
        scale: 1
    }
}

const signUp = ({signInToggle}) => {
  return (
    <section className="w-full h-screen flex items-center justify-center duration-500">
        <div className="xl:w-[70%] 2sm:w-[80%] w-[90%] h-[80vh] flex items-center justify-center rounded overflow-hidden">

{/* LEFT WELCOME DIV */}
        <span className='w-1/2 h-full bg-[--yellowColor] hidden 2md:flex flex-col items-center justify-center'>
            <motion.h1 className='font-semibold text-[30px] mb-[25px]'
                variants={slideUp}
                initial="hidden"
                animate="visible"
                transition={{delay: 0.4, duration: 0.6}}
            >Hello There!</motion.h1>
            <motion.h3 className='font-medium text-[17px]'
                variants={slideUp}
                initial="hidden"
                animate="visible"
                transition={{delay: 0.5, duration: 0.6}}
            >Sign up</motion.h3>
            <motion.p className='text-[15px] font-light'
                variants={slideUp}
                initial="hidden"
                animate="visible"
                transition={{delay: 0.6, duration: 0.6}}
            >you are just one step away to your feed.</motion.p>

            <motion.p className='my-[55px] text-[14px] font-semibold text-[#555]'
                variants={appear}
                initial="hidden"
                animate="visible"
                transition={{delay: 1, duration: 0.6}}
            >Already have an account?</motion.p>

            <motion.button className='px-6 py-1.5 text-[16px] font-medium border-[0.4px] border-[--blackColor] rounded hover:bg-[#FFC107]/80 duration-500 mt-[15px]' onClick={signInToggle}
                variants={appear}
                initial="hidden"
                animate="visible"
                transition={{delay: 0.5, duration: 0.65}}
            >Sign In</motion.button>
        </span>
{/* LEFT WELCOME DIV */}



        <span className='2md:w-1/2 w-full h-full bg-[--whiteColor] flex flex-col 2md:items-start items-center justify-center 2md:gap-3 gap-2 2sm:px-[4%] px-[10px]'>

{/* MINI HEADING */}
                        <span className='w-full flex 2md:hidden flex-col items-center justify-start text-center'>
                            <motion.h1 className='font-semibold sm:text-[25px] text-[20px]'
                                variants={appear}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.5, duration: 0.6}}
                            >Welcome Back!</motion.h1>
                            <motion.p className='sm:text-[17px] text-[16px] font-extralight'
                                variants={appear}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.6, duration: 0.6}}
                            >Sign in to continue from where you stopped.</motion.p>
                        </span>
{/* MINI HEADING */}


            <motion.h1 className="font-semibold text-[22px] hidden 2md:flex ml-7"
                variants={appear}
                initial="hidden"
                animate="visible"
                transition={{delay: 0.5, duration: 0.6}}
            >SIGN UP</motion.h1>

{/* FORM */}
            <form className="2md:w-full sm:w-[80%] w-[90%] h-fit flex flex-col items-start justify-center 2md:gap-4 gap-2">
                <span className="w-full">
                    <motion.p className="mb-1 font-medium text-[14px]"
                        variants={appear}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 0.7, duration: 0.5}}
                    >Email</motion.p>
                    <motion.input type='email' className="w-full rounded  border-[0.5px] border-[--blackColor] sm:text-[17px] text-[15px] font-semibold px-2 py-1 outline-none"
                        variants={appear}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 0.8, duration: 0.6}}
                    />
                </span>

                <span className="w-full">
                    <motion.p className="mb-1 font-normal text-[14px]"
                        variants={appear}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 0.7, duration: 0.5}}
                    >Password</motion.p>
                    <motion.input type='password' className="w-full rounded  border-[0.5px] border-[--blackColor] sm:text-[17px] text-[15px] font-semibold px-2 py-1 outline-none"
                        variants={appear}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 0.8, duration: 0.6}}
                    />
                </span>

                <span className="w-full">
                    <motion.p className="mb-1 font-normal text-[14px]"
                        variants={appear}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 0.7, duration: 0.5}}
                    > Confirm Password</motion.p>
                    <motion.input type='password' className="w-full rounded  border-[0.5px] border-[--blackColor] sm:text-[17px] text-[15px] font-semibold px-2 py-1 outline-none"
                        variants={appear}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 0.8, duration: 0.6}}
                    />
                </span>


                <motion.button className="w-full rounded flex items-center justify-center bg-[--yellowColor] py-1 font-semibold text-[17px] hover:bg-[#FFC107]/70 duration-500 mt-2"
                    variants={appear}
                    initial="hidden"
                    animate="visible"
                    transition={{delay: 0.5, duration: 0.6}}
                >Sign Up</motion.button>
            </form>
{/* FORM */}

{/* SOCIAL MEDIA SIGN IN */}
            <span className='w-full flex flex-col items-center justify-center 2md:mt-4 mt-2 2md:gap-[15px] gap-[5px]'>
                <motion.p className='text-[14px] font-extralight'
                    variants={appear}
                    initial="hidden"
                    animate="visible"
                    transition={{delay: 0.6, duration: 0.6}}
                >Or, Use social media to sign up</motion.p>

                <div className='flex items-center justify-center gap-[15px]'>
                <motion.button className='2md:w-[35px] w-[25px] 2md:h-[35px] h-[25px] flex items-center justify-center 2md:text-[23px] text-[20px] hover:text-[#333]/80 duration-500'
                        variants={scaleBig}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 0.5}}
                            >
                                <FaGoogle/>
                </motion.button>
                <motion.button className='2md:w-[35px] w-[25px] 2md:h-[35px] h-[25px] flex items-center justify-center 2md:text-[23px] text-[20px] hover:text-[#333]/80 duration-500'
                        variants={scaleBig}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 0.6}}
                            >
                                <FaApple/>
                </motion.button>
                <motion.button className='2md:w-[35px] w-[25px] 2md:h-[35px] h-[25px] flex items-center justify-center 2md:text-[23px] text-[20px] hover:text-[#333]/80 duration-500'
                        variants={scaleBig}
                        initial="hidden"
                        animate="visible"
                        transition={{delay: 0.7}}
                            >
                    <FaFacebook/>
                </motion.button>
                </div>
            </span>
{/* SOCIAL MEDIA SIGN IN */}

{/* MINI SIGN UP INFO */}
            <motion.p className='2sm:text-[15px] text-[14px] font-thin flex 2md:hidden mt-2'
                variants={scaleBig}
                initial="hidden"
                animate="visible"
                transition={{delay: 0.6, duration: 0.5}}
            >Already have an account? <button onClick={signInToggle}> Sign In</button></motion.p>
{/* MINI SIGN UP INFO */}
        </span>
    </div>

    </section>
  )
}

export default signUp