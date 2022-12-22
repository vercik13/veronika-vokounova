import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/veronika-vokounova/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/vercik13" target="_blank"><BsGithub/></a>
      <a href="mailto:vero.vokounova@gmail.com" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocials