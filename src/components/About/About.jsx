import React from 'react'
import './about.css'
import verca from '../../assets/verca-vokounova.png'
import {FiAward} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={verca} alt="verca-vokounova-photo" />
          </div>
            
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>React</h5>
              <small>Czechitas</small>
            </article>

            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Javascript</h5>
              <small>Udemy, Czechitas</small>
            </article>

            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>HTML & CSS</h5>
              <small>Udemy, Czechitas</small>
            </article>

          </div>

          
          <p>I enjoy creating things, that live on the internet. I learn Javascript, React and also recently launched a course that covers everything you need to build a web app using Node.js and React.</p>

        </div>
      </div>
    </section>
  )
}

export default About