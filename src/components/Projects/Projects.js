import "./Projects.css";
import {AiFillGithub} from 'react-icons/ai'

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="project__header" >Projects</h2>
      <div className="project__grid">
        <div className="project">
            <h3 className="project__title">Moments</h3>
            <p className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus sem malesuada, sollicitudin dui in, eleifend augue. Nam tortor diam, luctus in massa vitae, suscipit imperdiet odio. Phasellus fringilla mattis nulla at ultricies. Sed vel dui a massa hendrerit ultrices.</p>
            <a href="https://github.com/peijie36" target="_blank" className="github"><AiFillGithub style={{fill: "black"}}/></a>
        </div>
        <div className="project">
            <h3 className="project__title">Moments</h3>
            <p className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus sem malesuada, sollicitudin dui in, eleifend augue. Nam tortor diam, luctus in massa vitae, suscipit imperdiet odio. Phasellus fringilla mattis nulla at ultricies. Sed vel dui a massa hendrerit ultrices.</p>
            <a href="https://github.com/peijie36" target="_blank" className="github"><AiFillGithub style={{fill: "black"}}/></a>
        </div>
        
        <div className="project">
            <h3 className="project__title">Moments</h3>
            <p className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus sem malesuada, sollicitudin dui in, eleifend augue. Nam tortor diam, luctus in massa vitae, suscipit imperdiet odio. Phasellus fringilla mattis nulla at ultricies. Sed vel dui a massa hendrerit ultrices.</p>
            <a href="https://github.com/peijie36" target="_blank" className="github"><AiFillGithub style={{fill: "black"}}/></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
