import React from 'react'
import data from '../../data'
import './porfolio.css'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {data.map(({id, img, title, github, demo, text}) => {
          return (
        <article key={id} className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={img} />
            <div className="overlay">
              <div className="text">{text}</div>
            </div>
          </div>
            <h4>{title}</h4>
            <div className="portfolio__item-cta">
              <a href={github} className='btn btn-secondary' target='_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        )
      })}
      </div>
    </section>
  )
}

export default Portfolio