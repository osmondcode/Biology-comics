import React from 'react'
import { AnimatePresence } from 'framer-motion'
import NavSlider from '../navSlider'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Item from './Item.jsx'

const ItemPage = ({isSlide, slideHandle, mail, }) => {

    return (
        <section className='w-full min-h-screen flex flex-col items-start justify-center text-[--whiteColor]'>
            <AnimatePresence>
                {isSlide && <NavSlider slideHandle={slideHandle} isSlide={isSlide} mail={mail}/>}
            </AnimatePresence>
            <Header slideHandle={slideHandle} mail={mail}/>

            <Item/>
            <Footer/>
        </section>
  )
}

export default ItemPage