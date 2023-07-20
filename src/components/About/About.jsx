import React, {useEffect} from 'react'
import './about.css'
import {FiAward} from 'react-icons/fi'
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    
    <section id='about' >
      <div className='grids' data-aos="fade-up">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
          <div className='about__img'></div>
          </div>
            
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Python</h5>
              <small>Udemy, Czechitas</small>
            </article>

            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Javascript, React</h5>
              <small>Udemy, Czechitas</small>
            </article>

            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>HTML & CSS</h5>
              <small>Udemy, Czechitas</small>
            </article>

          </div>

          
          <p>I enjoy exploring and bringing the technical and visual aspects of digital products to life. I'm studying Javascript, React, Python and also recently launched a course that prepares me to become a SW Tester.</p>

        </div>
      </div>
      </div>
    </section>

  )
}

export default About