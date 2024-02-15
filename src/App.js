import React, { useState } from 'react';
import {BrowserRouter as Router,Link, Route, Routes} from 'react-router-dom'

function Logo(){
  return(
    <span className='font-black text-secondary-color '>DB</span>
  )

  // border-2 border-rose-500
}


function Nav(){
  const links = [
      {name:'HOME',link:'/'},
      {name:'ABOUT US',link:'/about'},
      {name:'PRODUCTS',link:'/product'},
      {name:'CONTACT',link:'/contact'}
  ];

  let [open,setOpen] = useState(false);
  
  return(
  <nav className='fixed top-0 w-full  bg-nav-bar-bg-color-sm md:bg-primary-color '>
{/* border-2 border-green-500 */}
    <div className='md:flex items-center justify-between p-5 pr-10 '>
    {/* border-2 border-yellow-300 */}

      <Logo />

      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-5 top-5 cursor-pointer
      md:hidden 
      '>

        <ion-icon name={open?'close':'menu'}></ion-icon>

      </div>

      <ul className={ `flex flex-col md:flex-row md:item-center md:justify-between     
       md:static absolute left-0 
       md:pl-0 pl-5
       md:pb-0 pb-4
       mt:pb-0 pt-2
       bg-nav-bar-bg-color-sm md:bg-primary-color
       md:z-auto z-[-1] w-full md:w-auto 
       transition-all duration-100 ease-in
       
      ${open ? 'top-auto opacity-100':'top-[-490px] opacity-0'} 
      md:opacity-100`}>
        {/* border-2 border-rose-500 */}

        {
          links.map(link=>(
            <Link key={link.name} to={link.link} className='md:mr-8
            my-2 md:my-0 
            
            text-secondary-color font-main font-extrabold text-xs'> {link.name} </Link>
            ))
        }

      </ul>
    
    </div>
  </nav>

  )}

function Home(){

  return(
    <>
      <div class='page'>

          <h1 
          class="main-text">HELLO <br /> DONUTS</h1> 

          <p class='sub-text '>A healthy taste of deliciousness</p>

      </div>


        {/* <button class='cta'> CONTACT US</button> */}
      
    </>
  )
}

function About(){
  return(
    <div class="page">
      <h1 class="main-text">About us</h1>
      <p>Leran more about our company and mission</p>
    </div>
  )
}


function Product(){
  return(
    <div class="page">
      <h1 class="main-text"> Products</h1>
      <p>This is a line up of our products</p>
    </div>
  )
}


function Contact(){
  return(
    <div class="page">
      <h1 class="main-text">Contact us</h1>
      <p>Get in touch with us!</p>
    </div>
  )
}

function App() {

  return (
    <Router >
        <Nav />
        
        
        <div className=' bg-primary-color  h-screen ' > 
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='product' element={<Product/>} />
            <Route path='contact' element={<Contact/>} />
          </Routes>
        </div>
        
    </Router>
  )
}

export default App;

  {/* <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/product">Products</Link>
        <Link to="/contact">Contact</Link> */}


// material UI styling.