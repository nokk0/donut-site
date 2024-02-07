import React, { } from 'react';
import {BrowserRouter as Router,Link, Route, Routes} from 'react-router-dom'


function Navbar(){
  return(
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About us</Link>
    <Link to="/product">Products</Link>
    <Link to="/contact">Contact</Link>
  </nav>

  )}

function Home(){
  return(
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page of our website</p>
    </div>
  )
}
function About(){
  return(
    <div>
      <h1>About us</h1>
      <p>Leran more about our company and mission</p>
    </div>
  )
}

function Product(){
  return(
    <div>
      <h1>Products</h1>
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
  <Router>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='product' element={<Product/>} />
      <Route path='contact' element={<Contact/>} />
    </Routes>
  </Router>
  )
}

export default App;
