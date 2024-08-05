import React from 'react'
import { AnimatePresence } from 'framer-motion'
import NavSlider from '../navSlider'
import Header from '../Header.jsx'
import Banner from './Banner.jsx'
import BooksOne from './BooksOne.jsx'
import FutureComic from './futureComic.jsx'
import OtherEbooks from './OtherEbooks.jsx'
import BookDiscount from './BookDiscount.jsx'
import Footer from '../Footer.jsx'

const Product = ({isSlide, slideHandle, mail, }) => {
    return (
        <section className='w-full min-h-[100vh] flex flex-col items-start justify-center text-[--whiteColor]'>
            <AnimatePresence>
                {isSlide && <NavSlider slideHandle={slideHandle} isSlide={isSlide} mail={mail}/>}
            </AnimatePresence>
            <Header slideHandle={slideHandle} mail={mail}/>
            <Banner/>
            <BooksOne/>
            <FutureComic/>
            <OtherEbooks/>
            <BookDiscount/>
            <Footer/>
        </section>
    )
}

export default Product;