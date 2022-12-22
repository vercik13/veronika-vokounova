import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css'
import foto from '../../assets/veronika-vokounova.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, I´m</h5>
        <h1>Veronika Vokounová</h1>
        <h5>Junior Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="header__foto" >
          <img src={foto} alt="Veronika Vokounová - photo" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header