import React from 'react'
import './About.css'
import CTA from './CTA'
import Socials from './Socials'

const About = () => {
  return (
    <div className='about container about__container'>
        <h3>Hello I'm <h1>Peijie Zheng</h1></h3>
        <h4>Front-End Developer</h4>
        <CTA />
        <Socials />
      </div>
  )
}

export default About