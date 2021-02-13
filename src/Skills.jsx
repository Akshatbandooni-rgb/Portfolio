import React from "react";
import "./Skills.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__heading">
        <p>Skills</p>
      </div>

      <ul className="skills__container">
        <li>
          <p>Javascript</p>
          <span className="javascript"></span>
        </li>
        <li>
          <p>Reactjs</p>
          <span className="react"></span>
        </li>
        <li>
          <p>Python</p>
          <span className="python"></span>
        </li>
        <li>
          <p>Django</p>
          <span className="django"></span>
        </li>
        <li>
          <p>C#</p>
          <span className="csharp"></span>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
