import React from 'react'
import NavSlider from './navSlider'
import Header from './Header'
import Footer from './Footer'
import Banner from './Home/Banner'
import BestSeller from './Home/BestSeller'
import Ebook from './Home/Ebook'
import Founders from './Home/Founders'
import Subscribe from './Home/Subscribe'
import { AnimatePresence } from 'framer-motion'

const Home = ({slideHandle, isSlide, mail}) => {
  return (
    <section className='w-full min-h-[100vh] flex flex-col items-start justify-center text-[--whiteColor]'>
        <AnimatePresence>
          {isSlide && <NavSlider slideHandle={slideHandle} isSlide={isSlide} mail={mail}/>}
        </AnimatePresence>
        <Header slideHandle={slideHandle} mail={mail}/>
        <Banner/>
        <BestSeller/>
        <Ebook/>
        <Founders/>
        <Subscribe/>
        <Footer/>
    </section>
  )
}

export default Home