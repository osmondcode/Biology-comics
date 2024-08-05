import React, { useState } from 'react'
import { IoMdCheckmark} from 'react-icons/io'
import { FaRegEnvelope } from 'react-icons/fa6'

const Subscribe = () => {

    const [email, setEmail] = useState('')

    const [subs, setSubs] = useState(false);
    
    const handleSub = () => {
        setSubs(true)
    }
    const [subsT, setSubsT] = useState(false);
    const handleSubTrue = () => {
        if(email.length >= 8){
            setSubs(false)
            setSubsT(true)
        }else{
            alert('Email incomplete, please try again!')
        }
    }
    const targetEmail = (e) => {
        setEmail(e.target.value)
    }
  return (
    <section className='w-full min-h-[50vh] flex items-start justify-center overflow-hidden pb-[5vh]'>
        <span className='sm:w-[80%] w-[90%] min-h-fit flex flex-col items-center justify-start gap-[35px] text-center'>
            <h1 className='lg:text-[2.5rem] 2md:text-[2.3rem] 2sm:text-[2.1rem] sm:text-[1.8rem] text-[1.6rem] font-semibold leading-9 2sm:leading-normal'>Subscribe to join our Book Club</h1>
            <span>
                <p>Stay ahead in the world of comics, Join our book club to receive Exclusive access to new releases and rare comics. Early notifications for sales and special promotions.</p>
            </span>
            <span className={subs ? 'w-fit sm:h-[40px] h-[30px] flex items-center justify-center bg-[--whiteColor]' : 'w-fit sm:h-[40px] h-[30px] flex items-center justify-center bg-[--blackColor] rounded-[30px]'}>
                {subs ? 
                    <span className='flex items-center justify-between 2sm:w-[380px] sm:w-[330px] w-full sm:h-[40px] h-[30px] border-[0.5px] border-[--whiteColor]'>
                    <p className='w-1/6 h-full flex items-center justify-center text-[--whiteColor] bg-[--blackColor] text-[22px]'>
                        <FaRegEnvelope/>
                    </p>
                    <input type='email' placeholder='abc@example.com' className='w-4/6 h-full px-2 sm:text-[18px] text-[16px] border-none outline-none font-semibold text-[--blackColor] placeholder:text-[#444]' onChange={targetEmail} />
                    <button className='w-1/6 h-full flex items-center justify-center bg-[--yellowColor] text-[22px] text-[--blackColor]' onClick={handleSubTrue}>
                        <IoMdCheckmark/>
                    </button>
                </span>     :

                <button className={subsT ? 'w-fit h-fit px-6 py-1.5 rounded-[30px] bg-[--whiteColor] text-[--blackColor] font-semibold text-[19px] hidden' : 'w-fit h-fit px-6 py-1.5 rounded-[30px] bg-[--whiteColor] text-[--blackColor] font-semibold text-[19px] flex items-center justify-center'} onClick={handleSub}>Subscribe</button>
                }
                <button className={subsT ? 'w-fit h-fit px-6 py-1.5 rounded-[30px] bg-[--yellowColor] text-[--blackColor] font-semibold text-[19px] flex items-center justify-center' : 'w-fit h-fit px-6 py-1.5 rounded-[30px] bg-[--whiteColor] text-[--blackColor] font-semibold text-[19px] hidden items-center justify-center'}>Subscribed</button>
            </span>
            
        </span>
    </section>
  )
}

export default Subscribe