import React from 'react'
import './contact.css'
import {CgMail} from 'react-icons/cg'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <a href="mailto:vero.vokounova@gmail.com" className='contact__icon'><CgMail/></a>
          </article>

          <article className='contact__option'>
            <a href="https://www.linkedin.com/in/veronika-vokounova/" target="_blank" className='contact__icon'><BsLinkedin/></a>
            
          </article>

          <article className='contact__option'>
            <a href="https://github.com/vercik13" target="_blank" className='contact__icon'><BsGithub/></a>
            
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact