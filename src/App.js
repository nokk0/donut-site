import React, { useState } from 'react';
import {BrowserRouter as Router,Link, Route, Routes} from 'react-router-dom'

function Logo(){
  return(
    <span> DB</span>
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
  <nav >

    <div >
    {/* border-2 border-yellow-300 */}

      <Logo />

      <div >

        <ion-icon name={open?'close':'menu'}></ion-icon>

      </div>

      <ul>
        {/* border-2 border-rose-500 */}

        {
          links.map(link=>(
            <Link key={link.name} to={link.link} > {link.name} </Link>
            ))
        }

      </ul>
    
    </div>
  </nav>

  )}

function Home(){

  return(
    <>
      <div >

          <h1 
          >HELLO <br /> DONUTS</h1> 

          <p>A healthy taste of deliciousness</p>

      </div>


        {/* <button class='cta'> CONTACT US</button> */}
      
    </>
  )
}

function About(){
  return(
    <div >
      <h1 >About us</h1>
      <p>Leran more about our company and mission</p>
    </div>
  )
}


function Product(){
  return(
    <div >
      <h1 > Products</h1>
      <p>This is a line up of our products</p>
    </div>
  )
}


function Contact(){
  return(
    <div>
      <h1>Contact us</h1>
      <p>Get in touch with us!</p>
    </div>
  )
}

function App() {

  return (
    <Router >
        <Nav />
        
        
        <div > 
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