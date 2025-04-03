import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { TbBrandBootstrap } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { MdOutlineBrowserNotSupported } from "react-icons/md";
import { SiCypress } from "react-icons/si";
import { SiPuppeteer } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { SiPhp, SiMysql } from "react-icons/si";


const Experience = () => {
  return (
    <section id="experience">
      <div className="grids" data-aos="fade-up">
        <h5>Technologies I Use and Learn</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <AiFillHtml5 className="experience__details-icon" />
                <h4>HTML</h4>
              </article>

              <article className="experience__details">
                <TbBrandCss3 className="experience__details-icon" />
                <h4>CSS</h4>
              </article>

              <article className="experience__details">
                <FaSass className="experience__details-icon" />
                <h4>Sass</h4>
              </article>

              <article className="experience__details">
                <TbBrandBootstrap className="experience__details-icon" />
                <h4>Bootstrap</h4>
              </article>

              <article className="experience__details">
                <SiTailwindcss className="experience__details-icon" />
                <h4>Tailwind</h4>
              </article>

              <article className="experience__details">
                <TbBrandJavascript className="experience__details-icon" />
                <h4>Javascript</h4>
              </article>

              <article className="experience__details">
                <FaReact className="experience__details-icon" />
                <h4>React</h4>
              </article>
            </div>
          </div>

          <div className="experience__frontend">
            <h3>QA Testing | Automated Testing</h3>
            <div className="experience__content">
              <article className="experience__details">
                <MdOutlineBrowserNotSupported className="experience__details-icon" />
                <h4>Playwright</h4>
              </article>

              <article className="experience__details">
                <SiCypress className="experience__details-icon" />
                <h4>Cypress</h4>
              </article>

              <article className="experience__details">
                <SiPuppeteer className="experience__details-icon" />
                <h4>Puppeteer</h4>
              </article>

              <article className="experience__details">
                <SiJirasoftware className="experience__details-icon" />
                <h4>JIRA</h4>
              </article>

            </div>
          </div>

          <div className="experience__frontend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <SiPhp className="experience__details-icon" />
                <h4>PHP</h4>
              </article>

              <article className="experience__details">
              <SiMysql className="experience__details-icon" />
                <h4>SQL</h4>
              </article>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
