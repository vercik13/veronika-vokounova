import React, {useState} from 'react'
import './nav.css'

import logo from '../../assets/logo-1.png'
import CV from '../../assets/vokounova-cv.pdf'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'


const Nav = () => {

const [active, setActive] = useState('nav-links');
const [toggleIcon, setToggleIcon] = useState('nav__toggler');

  const navToggle = () => {
    active === 'nav-links' ? setActive('nav-links nav__active') : setActive('nav-links')

    //TogglerIcon animation
    toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler');
  }
  
  const closeMobileMenu = () => {
    setActive('nav-links');
    setToggleIcon('nav__toggler')
  }

  return (
      <nav>
        <div className='logo'>
          <a href="/">
          <img src={logo} alt="" /></a>
        </div>

        <ul className={active}>
          <li className='nav__item'><a href="#" className='nav__link' onClick={closeMobileMenu}>Home</a></li>
          <li className='nav__item'><a href="/#about" className='nav__link' onClick={closeMobileMenu}>About</a></li>
          <li className='nav__item'><a href="/#experience" className='nav__link' onClick={closeMobileMenu}>Experience</a></li>
          <li className='nav__item'><a href="/#portfolio" className='nav__link' onClick={closeMobileMenu}>Portfolio</a></li>
          <li className='nav__item'><a href="/#contact" className='nav__link' onClick={closeMobileMenu}>Contact</a></li>
          <li><a href={CV} download className='btn btn-lg btn-blue'>Resume</a></li>
        </ul>

        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <div className='nav__socials'>
          <a href="https://www.linkedin.com/in/veronika-vokounova/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/vercik13" target="_blank"><BsGithub/></a>
          <a href="mailto:vero.vokounova@gmail.com" target="_blank"><SiGmail/></a>
        </div>
      </nav>
  )
}

export default Nav