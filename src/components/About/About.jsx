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
              I enjoy working at the intersection of software testing and development, where I can improve user experiences while diving into the technical aspects of applications. Over the past year and a half, I have gained practical experience as a manual tester, primarily testing web applications, particularly e-commerce platforms. At the same time, I have started learning automated testing with tools like Cypress, Puppeteer, and Playwright, and I'm excited to deepen my knowledge in this area.

Alongside my testing career, I have also studied PHP to broaden my understanding of backend development. While I am still a junior in this field, my goal is to continue expanding my skills in both software testing and development, particularly in automation, to become a well-rounded professional in the industry.

I am looking for opportunities where I can further develop my skills, learn from more experienced colleagues, and contribute to meaningful projects that enhance the user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
