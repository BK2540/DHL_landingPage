import { useState } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Service from './components/shippingService/Service'
import Solutions from './components/solutions/Solutions'
import Informations from './components/information/Informations'
import Help from './components/help/Help'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/scroll/ScrollToTop'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
    <Solutions/>
    <Informations/>
    <Help/>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default App
