import React from 'react'
import Header from '../Header'
import NavSlider from '../navSlider'
import Cart from './Cart.jsx'
import Recommended from './Recommended.jsx'
import Footer from '../Footer.jsx'
import { AnimatePresence } from 'framer-motion'

const ShoppingCart = ({slideHandle, isSlide, mail}) => {
  return (
    <section className='w-full min-h-[100vh] flex flex-col items-start justify-center text-[--whiteColor]'>
        <AnimatePresence>
          {isSlide && <NavSlider slideHandle={slideHandle} isSlide={isSlide} mail={mail}/>}
        </AnimatePresence>
        <Header slideHandle={slideHandle} mail={mail}/>
        <Cart/>
        <Recommended/>
        <Footer/>
    </section>
  )
}

export default ShoppingCart