import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {FaSass} from 'react-icons/fa'
import {TbBrandBootstrap} from 'react-icons/tb'
import {SiTailwindcss} from 'react-icons/si'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'

import {FaNodeJs} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <h4>HTML</h4>
              
            </article>

            <article className='experience__details'>
              <TbBrandCss3 className='experience__details-icon'/>
              <h4>CSS</h4>
            </article>

            <article className='experience__details'>
              <FaSass className='experience__details-icon'/>
              <h4>Sass</h4>
            </article>

            

            <article className='experience__details'>
              <TbBrandBootstrap className='experience__details-icon'/>
              <h4>Bootstrap</h4>
              
            </article>

            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <h4>Tailwind</h4> 
            </article>

            <article className='experience__details'>
              <TbBrandJavascript className='experience__details-icon'/>
              <h4>Javascript</h4>
              
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <h4>React</h4>
              
            </article>

            


          </div>
        </div>

      </div>

    </section>
  )
}

export default Experience