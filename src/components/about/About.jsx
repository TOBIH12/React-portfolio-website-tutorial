import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg';
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
            <LuUsers className='about__icon' />
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
            <FaRegFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero vel rem debitis maiores ex quibusdam, amet voluptas quae quam dicta quasi, perferendis nostrum praesentium rerum asperiores tempore, soluta dolor?</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
