import React from 'react'
import './contact.css'
import {RiMailSendFill} from 'react-icons/ri'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9d022em', 'template_9n142yn', form.current, '_M9aAl7FkVZB9f1Fg')
      .then((result) => {
        alert("Message sent successfully")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <div className='grids' data-aos="fade-up">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">

        <a href="mailto:vero.vokounova@gmail.com" target="_blank" >
          <article className='contact__option'>
             <h4 className='contact__icon'><RiMailSendFill/></h4>
              <h4>Email</h4>
          </article>
        </a>

        <a href="https://api.whatsapp.com/send?phone=733113957" target="_blank">
          <article className='contact__option'>
            <h4 className='contact__icon'><BsWhatsapp/></h4>
              <h4>733113957</h4>
          </article>
        </a>

        <a href="https://www.linkedin.com/in/veronika-vokounova/" target="_blank">
          <article className='contact__option'>
              <h4 className='contact__icon'><BsLinkedin/></h4>
              <h4>LinkedIn</h4>
          </article>
        </a>
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <div className="contact__form-div">
            <label className='contact__form-tag'>Name</label>
            <input type="text" name='name' required />
          </div>
            
          <div className="contact__form-div">
            <label className='contact__form-tag'>Email</label>
            <input type="email" name='email' required />
          </div>

          <div className="contact__form-div">
            <label className='contact__form-tag'>Message</label>
            <textarea name="message"  rows="7" required></textarea>
          </div>

          <div className='submit'>
            <button type='submit' className='btn btn-blue'>Send Message</button>
          </div>
          
        </form>
      </div>
      </div>
    </section>
  )
}

export default Contact