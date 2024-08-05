import React from 'react'
import Footer from '../Footer.jsx'
import { AnimatePresence } from 'framer-motion'
import Header from '../Header'
import NavSlider from '../navSlider'
import Form from './Form.jsx'

const Contact = ({slideHandle, isSlide, mail}) => {
    return (
      <section className='w-full min-h-[100vh] flex flex-col items-start justify-center text-[--whiteColor]'>
          <AnimatePresence>
          {isSlide && <NavSlider slideHandle={slideHandle} isSlide={isSlide} mail={mail}/>}
          </AnimatePresence>
          <Header slideHandle={slideHandle} mail={mail}/>
          <Form/>
          <Footer/>
      </section>
  )
}

export default Contact