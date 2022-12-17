import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import './About.css'
/* import resume from '../../assets/resume.pdf' */

const CTA = () => {
  return (
    <div className='cta'>
      <a href="http://linkedin.com/in/peijiezheng" target="_blank" className="socials"><AiFillLinkedin /></a>
      <a href="https://github.com/peijie36" target="_blank" className="socials"><AiFillGithub /></a>
    </div>
  )
}

export default CTA