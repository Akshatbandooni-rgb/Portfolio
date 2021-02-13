import React from "react";
import "./Projects.css";
import netflix from "./Netflix.png";
import googlekeep from "./Googlekeep.png";
import hulu from "./hulu.png";
import ecommerce from "./Ecommerce.png";

const Projects = () => {
  return (
    <div id="project" className="project">
      <div className="project__title">
        <p>CHECK OUT SOME OF MY WORK</p>
      </div>
      <div className="project__poster">
        <img src={netflix}></img>
        <img src={hulu}></img>
        <img src={ecommerce}></img>
        <img src={googlekeep}></img>
      </div>
    </div>
  );
};

export default Projects;
