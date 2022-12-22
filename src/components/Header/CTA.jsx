import React from 'react'
import CV from '../../assets/vokounova-cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn btn-lg'>Download CV</a>
      <a href="#portfolio" className='btn btn-primary btn-lg'>My Work</a>
    </div>
  )
}

export default CTA