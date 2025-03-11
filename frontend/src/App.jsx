import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Contact from './Components/Contact';
import About from './Components/About';
import HeroSection from './Components/HeroSection';
import Service from './Components/Service';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  </Router>
  
  )
}

export default App
