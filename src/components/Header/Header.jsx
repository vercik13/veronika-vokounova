import React, {useState} from 'react'
import {useEffect} from 'react'
import CTA from './CTA'
import Nav from '../Nav/Nav'
import './header.css'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'


const Header = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['V', 'e', 'r', 'o', 'n', 'i', 'k', 'a',' ','V', 'o', 'k', 'o','u', 'n', 'o', 'v', 'á']



  useEffect(() => {
    return setTimeout(() =>{
    setLetterClass('text-animate-hover')
  }, 4000)
}, [])
  
  return (
    
    <header>
      <Nav />
      <div className="container header__container">
        <div className="header__flex">
          <div className="header__content">
            <h3>Hi, I´m</h3>
            <h1 className='header__title'>
              <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15}
              /></h1>
            <h2 className='header__subtitle'>Junior Web Developer</h2>

            <CTA />
          </div>
        </div>

        <div className="header__item">
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header