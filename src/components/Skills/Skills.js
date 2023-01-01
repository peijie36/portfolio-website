import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiVisualstudiocode,
  SiFirebase,
  SiSqlite,
} from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import "./Skills.css";

const Languages = {
  languages: [
    { img: <FaJava />, name: "Java" },
    { img: <FaHtml5 />, name: "HTML" },
    { img: <FaCss3Alt />, name: "CSS" },
    { img: <SiJavascript />, name: "JavaScript" },
    { img: <DiDatabase />, name: "SQL" },
  ],
};

const Tools = {
  tools: [
    { img: <SiVisualstudiocode />, name: "VSCode" },
    { img: <FaGitAlt />, name: "Git" },
    { img: <FaReact />, name: "ReactJS" },
    { img: <SiFirebase />, name: "Firebase" },
    { img: FaCss3Alt, name: "Node.js" },
    { img: <SiSqlite />, name: "SQLite3" },
  ],
};

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__container">
        <div className="languages">
          <h2>Languages</h2>
          {Languages.languages.map((skill) => (
            <li key={skill.language} className="item">
              {skill.img}
              <h4>{skill.name}</h4>
            </li>
          ))}
        </div>
        <div className="tools">
          <h2>Tools & Frameworks</h2>
          {Tools.tools.map((skill) => (
            <li key={skill.tool} className="item">
              {skill.img}
              <h4>{skill.name}</h4>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
