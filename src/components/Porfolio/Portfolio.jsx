import React from "react";
import data from "../../data";
import "./porfolio.css";

const Portfolio = () => {

  const workProjects = data.filter(project => project.type === "work");
  const studyProjects = data.filter(project => project.type === "study");


  return (
    <section id="portfolio">
      <div className="grids" data-aos="fade-up">
        <h5>Work Experience Projects</h5>
        <h2>Work Portfolio</h2>

        <div className="container portfolio__container">
          {workProjects.map(({ id, img, title, github, demo, text }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
                  <img src={img} />
                  <div className="overlay">
                    <div className="text">{text}</div>
                  </div>
                </div>
                <h4>{title}</h4>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn btn-secondary"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="grids" data-aos="fade-up">
        <h5>Study Projects</h5>
        <h2>Study Portfolio</h2>

        <div className="container portfolio__container">
          {studyProjects.map(({ id, img, title, github, demo, text }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
                  <img src={img} />
                  <div className="overlay">
                    <div className="text">{text}</div>
                  </div>
                </div>
                <h4>{title}</h4>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn btn-secondary"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
