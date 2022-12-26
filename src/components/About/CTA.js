import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import './About.css'
/* import resume from '../../assets/resume.pdf' */


const style = { fill: "blue", fontSize: "1.5em" }

const CTA = () => {
  return (
    <div className='cta'>
      <a href="http://linkedin.com/in/peijiezheng" target="_blank" className="socials"><AiFillLinkedin style={{fill: "#0077B5", fontSize: "1.7em" }}/></a>
      <a href="https://github.com/peijie36" target="_blank" className="socials"><AiFillGithub style={{fill: "black", fontSize: "1.7em" }}/></a>
    </div>
  )
}

export default CTA