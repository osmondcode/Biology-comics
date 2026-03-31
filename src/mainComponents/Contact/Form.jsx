"use client";
import React, { useState } from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
import { FaEnvelope, FaLocationPin } from 'react-icons/fa6'
import frappe from '@/src/services/frappe'

const Form = () => {
  const [formData, setFormData] = useState({ sender: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.sender || !formData.email || !formData.message) return;
    
    setLoading(true);
    setStatus(null);
    try {
      await frappe.db_insert("Inquiry", {
        name: `INQ-${Date.now()}`,
        sender: formData.sender,
        email: formData.email,
        message: formData.message,
        status: "Pending",
        creation: new Date().toISOString()
      });
      setStatus("success");
      setFormData({ sender: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-[85vh] flex items-start justify-center pt-[15vh] mb-[5vh]">
        <div className='2sm:w-[85%] w-[90%] flex flex-col items-center justify-center text-center'>
            <h1 className='lg:text-[2.4em] text-[2.1em] font-semibold flex flex-col items-end justify-end leading-10 mb-4'>
                Get In Touch
            </h1>
            <p>Feel free to contact us anytime. We will get back to you as soon as we can!</p>

            <span className='w-full flex items-center justify-evenly flex-wrap mt-[5vh] gap-y-10 gap-4'>

                <div className='2md:w-[300px] sm:w-[350px] w-full 2sm:min-h-[45vh] min-h-fit flex flex-col items-start justify-start text-start gap-3 px-5 py-6 bg-[--yellowColor] text-[--blackColor] rounded-md'>
                    <h2 className='font-semibold text-[20px]'>Contact Information</h2>
                    <p className='text-[15px] leading-4'>Feel free to contact us anytime. We will get back to you as soon as we can!</p>
                    <span className='flex items-center gap-3'>
                        <p className='text-[20px]'>
                            <FaPhoneAlt/>
                        </p>
                        <div className='text-[14px]'>
                            <p>+234 (0) 901 234 4567</p>
                            <p>+234 (0) 807 654 3210</p>
                        </div>
                    </span>
                    <span className='flex text-[15px] items-center gap-3'>
                        <p className='text-[20px]'>
                            <FaEnvelope/>
                        </p>
                        <p className='text-[15px]'>winnie@biology.com</p>
                    </span>
                    <span className='flex items-center gap-3'>
                        <p className='text-[20px]'>
                            <FaLocationPin/>
                        </p>
                        <p className='text-[15px]'>Lagos, Nigeria</p>
                    </span>
                </div>
                
                <form onSubmit={handleSubmit} className='sm:w-[400px] w-full min-h-[45vh] flex flex-col items-start justify-start gap-5'>
                    {status === 'success' && (
                        <div className='w-full bg-green-500/10 text-green-500 border border-green-500/20 p-3 rounded text-sm'>
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className='w-full bg-red-500/10 text-red-500 border border-red-500/20 p-3 rounded text-sm'>
                            Something went wrong. Please try again.
                        </div>
                    )}
                    <span className='2md:w-[350px] w-full flex flex-col items-start justify-start'>
                        <h4 className='text-[13px]'>Your Name</h4>
                        <input type='text' name='sender' value={formData.sender} onChange={handleChange} required className='w-full px-2 py-1 bg-[--blackColor] border-b-[1px] outline-none border-b-[--whiteColor] capitalize font-medium text-[15px]'/>
                    </span>

                    <span className='2md:w-[350px] w-full flex flex-col items-start justify-start'>
                        <h4 className='text-[13px]'>Your Email</h4>
                        <input type='email' name='email' value={formData.email} onChange={handleChange} required className='w-full px-2 py-1 bg-[--blackColor] border-b-[1px] outline-none border-b-[--whiteColor] font-medium text-[15px]'/>
                    </span>
                    
                    <span className='2md:w-[350px] w-full flex flex-col items-start justify-start gap-1'>
                        <h4 className='text-[13px]'>Your Message</h4>
                        <textarea name='message' value={formData.message} onChange={handleChange} required className='w-full h-[90px] px-2 py-1 bg-[--blackColor] border-b-[2.5px] outline-none border-b-[--yellowColor] font-medium resize-none text-[15px]'/>
                    </span>

                    <button type="submit" disabled={loading} className='text-[--blackColor] font-bold px-6 py-2 rounded bg-[--yellowColor] 2sm:w-fit w-full 2sm:my-0 my-2 hover:brightness-110 transition-all active:scale-[0.98] disabled:opacity-50'>
                        {loading ? 'Sending...' : 'Submit'}
                    </button>
                </form>
            </span>
        </div>
    </section>
  )
}

export default Form