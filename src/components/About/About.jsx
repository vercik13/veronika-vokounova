import React, { useEffect } from "react";
import "./about.css";
import { FiAward } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="about">
      <div className="grids" data-aos="fade-up">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-img">
              <div className="about__img"></div>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FiAward className="about__icon" />
                <h5>Python</h5>
                <small>Udemy, Czechitas</small>
              </article>

              <article className="about__card">
                <FiAward className="about__icon" />
                <h5>Javascript, React</h5>
                <small>Udemy, Czechitas</small>
              </article>

              <article className="about__card">
                <FiAward className="about__icon" />
                <h5>HTML & CSS</h5>
                <small>Udemy, Czechitas</small>
              </article>
            </div>
            <div>
              <p>
              I enjoy frontend development and software testing – I find it rewarding to help create applications that not only perform well but are also enjoyable to use.

For over a year and a half, I have been working in manual testing of web applications, mainly e-commerce websites. I have experience in bug hunting, testing new features, and verifying that everything works as expected by users. I am also gradually learning automated testing and have basic experience with Cypress, Puppeteer, and Playwright.

In addition to testing, I enjoy frontend development. I have experience with HTML, CSS, JavaScript, and React, and I enjoy fine-tuning interfaces to ensure they make sense both visually and functionally.

I am looking for opportunities where I can continue to grow, learn from more experienced colleagues, and gradually specialize in automated testing or frontend development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
