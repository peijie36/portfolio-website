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
    { img: <FaJava />, language: "Java" },
    { img: <FaHtml5 />, language: "HTML" },
    { img: <FaCss3Alt />, language: "CSS" },
    { img: <SiJavascript />, language: "JavaScript" },
    { img: <DiDatabase />, language: "SQL" },
  ],
};

const Tools = {
  tools: [
    { img: <SiVisualstudiocode />, tool: "VSCode" },
    { img: <FaGitAlt />, tool: "Git" },
    { img: <FaReact />, tool: "ReactJS" },
    { img: <SiFirebase />, tool: "Firebase" },
    { img: FaCss3Alt, tool: "Node.js" },
    { img: <SiSqlite />, tool: "SQLite3" },
  ],
};

const Skills = () => {
  return (
    <div id="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__container">
        <section className="languages">
          {Languages.languages.map((skill) => (
            <li key={skill.language} className="languages__item">
              {skill.img}
              {skill.language}
            </li>
          ))}
        </section>
        <section className="tools">
          {Tools.tools.map((skill) => (
            <li key={skill.tool} className="tools__item">
              {skill.img}
              {skill.tool}
            </li>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Skills;
