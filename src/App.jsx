import React from 'react';
import './style.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Porfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
  <>
    <Header />
    <About/>
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
</>
  )
}

export default App

