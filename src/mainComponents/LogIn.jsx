import { useState } from 'react';
import { FaGoogle, FaApple, FaFacebook} from 'react-icons/fa6'
import SignUp from './signUp'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

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
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0
    }
}
const slideRight = {
    hidden: {
        opacity: 0,
        x: '-100px'
    },
    visible: {
        opacity: 1,
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

const Login = ({codeVal, emailVal, onChangeMail, onChangeCode, stored}) => {

    const [isUser, setIsUser] = useState(true)
    const signInToggle = () => {
        setIsUser(!isUser)
    }

    const navigate = useNavigate()
    const loggedIn = () => {
        if(emailVal.length >= 6 && codeVal.length >= 4){
            stored()
            navigate(-1)
            setTimeout(() => {
              window.location.reload()
          }, 0)
        }else{
          alert('Email or Password is incomplete. Please try again!')
        }
      }

    return(
        <section className="w-full h-screen flex items-center justify-center">
            {isUser ? 
                <div className="xl:w-[70%] 2sm:w-[80%] w-[90%] h-[80vh] flex items-center justify-center rounded overflow-hidden">

{/* LEFT WELCOME DIV */}
                <span className='w-1/2 h-full bg-[--yellowColor] hidden 2md:flex flex-col items-center justify-center'>
                    <motion.h1 className='font-semibold text-[30px] mb-[25px]'
                       variants={slideUp}
                       initial="hidden"
                       animate="visible"
                       transition={{delay: 0.4, duration: 0.6}}
                    >Hey There!</motion.h1>
                    <motion.h3 className='font-medium text-[17px]'
                       variants={slideUp}
                       initial="hidden"
                       animate="visible"
                       transition={{delay: 0.5, duration: 0.6}}
                    >Welcome Back</motion.h3>
                    <motion.p className='text-[15px] font-light'
                       variants={slideUp}
                       initial="hidden"
                       animate="visible"
                       transition={{delay: 0.6, duration: 0.6}}
                    >Sign in to continue from where you stopped.</motion.p>

                    <motion.p className='my-[55px] text-[14px] font-semibold text-[#555]'
                       variants={appear}
                       initial="hidden"
                       animate="visible"
                       transition={{delay: 1, duration: 0.6}}
                    >Don't have an account?</motion.p>

                    <motion.button className='px-6 py-1.5 text-[16px] font-medium border-[0.4px] border-[--blackColor] rounded hover:bg-[#FFC107]/80 duration-500 mt-[15px]' onClick={signInToggle}
                       variants={appear}
                       initial="hidden"
                       animate="visible"
                       transition={{delay: 1, duration: 0.6}}
                    >Sign Up</motion.button>
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
                        <motion.p className='sm:text-[17px] text-[16px] font-light'
                            variants={appear}
                            initial="hidden"
                            animate="visible"
                            transition={{delay: 0.6, duration: 0.6}}
                        >Sign in to continue from where you stopped.</motion.p>
                    </span>
{/* MINI HEADING */}


                    <motion.h1 className="font-semibold text-[25px] hidden 2md:flex ml-7"
                       variants={appear}
                       initial="hidden"
                       animate="visible"
                       transition={{delay: 0.5, duration: 0.6}}
                    >SIGN IN</motion.h1>

{/* FORM */}
                    <form className="2md:w-full sm:w-[80%] w-[90%] h-fit flex flex-col items-start justify-center 2md:gap-4 gap-2 overflow-hidden">
                        <span className="w-full">
                            <motion.p className="mb-1 font-medium 2md:text-[14px] text-[16px]"
                                variants={appear}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.7, duration: 0.5}}
                            >Email</motion.p>
                            <motion.input type='email' className="w-full rounded  border-[0.5px] border-[--blackColor] text-[17px] font-semibold px-2 py-1 outline-none"
                                variants={appear}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.8, duration: 0.6}}
                                onChange={onChangeMail}
                            />
                        </span>

                        <span className="w-full">
                            <motion.p className="mb-1 font-medium 2md:text-[14px] text-[16px]"
                                variants={appear}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.7, duration: 0.6}}
                            >Password</motion.p>
                            <motion.input type='password' className="w-full rounded  border-[0.5px] border-[--blackColor] text-[17px] font-semibold px-2 py-1 outline-none"
                                variants={appear}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.8, duration: 0.6}}
                                onChange={onChangeCode}
                            />
                        </span>

                        <span className="w-full h-[35px] flex items-center justify-between">
                            <motion.div className="flex items-center justify-start sm:gap-2 gap-1"
                                variants={slideRight}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.4, duration: 0.6}}
                            >
                                <input type='checkbox' className=""/>
                                <p className='sm:text-[13px] text-[12px]'>Keep me logged in</p>
                            </motion.div>

                            <motion.p className="text-[#F97719] sm:text-[13px] text-[12px] cursor-pointer"
                                variants={slideLeft}
                                initial="hidden"
                                animate="visible"
                                transition={{delay: 0.4, duration: 0.6}}
                            >
                                Forgot password?
                            </motion.p>
                        </span>

                        <motion.button className="w-full rounded flex items-center justify-center bg-[--yellowColor] py-1 font-semibold text-[17px] hover:bg-[#FFC107]/70 duration-500"
                            variants={appear}
                            initial="hidden"
                            animate="visible"
                            transition={{delay: 0.5, duration: 0.6}}
                            onClick={loggedIn}
                        >Sign In</motion.button>
                    </form>
{/* FORM */}

{/* SOCIAL MEDIA SIGN IN */}
                    <span className='w-full flex flex-col items-center justify-center 2md:mt-4 mt-2 2md:gap-[15px] gap-[5px]'>
                        <motion.p className='text-[14px] '
                            variants={appear}
                            initial="hidden"
                            animate="visible"
                            transition={{delay: 0.6, duration: 0.6}}
                        >Or, Use social media to sign in</motion.p>

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
                    >Don't have an account? <button onClick={signInToggle}> Sign Up</button></motion.p>
{/* MINI SIGN UP INFO */}
                </span>
            </div>

                        :

                    <SignUp signInToggle={signInToggle}/>
                }
        </section>
    )
}
export default Login;