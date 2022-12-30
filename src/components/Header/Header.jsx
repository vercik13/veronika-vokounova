import React from 'react'
import CTA from './CTA'
import Nav from '../Nav/Nav'
import './header.css'


const Header = () => {
  return (
    
    <header>
      <Nav />
      <div className="container header__container">
        <div className="header__flex">
          <div className="header__content">
            <h3>Hi, I'm</h3>
            <h1 className='header__title'>Veronika Vokounová</h1>
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