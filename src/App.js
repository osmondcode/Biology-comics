import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './mainComponents/Home.jsx'
import Product from './mainComponents/Product/Product.jsx'
import Item from './mainComponents/Product/ItemPage.jsx'
import ShoppingCart from './mainComponents/Cart/ShoppingCart.jsx'
import Checkout from './mainComponents/Checkout/Checkout.jsx';
import Contact from './mainComponents/Contact/Contact.jsx';
import Policy from './mainComponents/Policy/Policy.jsx';
import Login from './mainComponents/LogIn.jsx'
import React, { useState } from 'react'

function App() {
  
  // RESPONSIVE NAV BAR
  const [isSlide, setIsSlide] = useState(false)
  const slideHandle = () => {
    setIsSlide(!isSlide)
  }
  // RESPONSIVE NAV BAR

  // LOGIN SCRIPT

  const [emailVal, setEmailVal] = useState('')
  const [codeVal, setCodeVal] = useState('')

  const onChangeMail = (e) => {
    setEmailVal(e.target.value)
  }
  const onChangeCode = (e) => {
    setCodeVal(e.target.value)
  }

  const stored = () => {
    localStorage.setItem('email', emailVal)
    localStorage.setItem('code', codeVal)
  }

  const mail = localStorage.getItem('email')


  // LOGIN SCRIPT


  return (
    <div className="App bg-[--blackColor] w-full min-h-screen flex items-center justify-center">
    <h2 className='flex s:hidden text-[--whiteColor] text-[15px] text-center'>This screen size is too small for this website!!</h2>
     <div className=' w-full min-h-screen hidden s:flex items-center justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home isSlide={isSlide} slideHandle={slideHandle} mail={mail}/>}/>
          <Route path='/signup' element={<Login onChangeMail={onChangeMail} onChangeCode={onChangeCode} emailVal={emailVal} codeVal={codeVal} stored={stored}/>}/>
          <Route path='/product' element={<Product isSlide={isSlide} slideHandle={slideHandle} mail={mail}/>}/>
          <Route path='/cart' element={<ShoppingCart isSlide={isSlide} slideHandle={slideHandle} mail={mail}/>}/>
          <Route path='/checkout' element={<Checkout isSlide={isSlide} slideHandle={slideHandle} mail={mail}/>}/>
          <Route path='/contact' element={<Contact isSlide={isSlide} slideHandle={slideHandle} mail={mail}/>}/>
          <Route path='/policy' element={<Policy isSlide={isSlide} slideHandle={slideHandle} mail={mail}/>}/>
          <Route path='/item' element={<Item isSlide={isSlide} slideHandle={slideHandle} mail={mail}/>}/>
        </Routes>
      </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
