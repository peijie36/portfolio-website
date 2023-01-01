import './About.css'
import CTA from './CTA'


const About = () => {
  return (
    <div className='about'>
        <h2>Hello! I'm <h1 style={{display: "inline", color: "orange"}}>Peijie Zheng</h1>,</h2>
        <h3 className = "roles">Front-End Developer</h3>
        <CTA />  
      </div>
  )
}

export default About