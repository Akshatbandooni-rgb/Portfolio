import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Link } from "react-scroll";
import "./Nav.css";
function Navbar() {
  return (
    // BEM Naming Convention
    <div className="navbar">
      <div className="navbar__icons">
        {/* Icons Here */}

        <Link activeClass="active" to="home" spy={true} smooth={true}>
          <div className="navbar__icon">
            <HomeIcon className="navbar__icon_" />
            <p>Home</p>
          </div>
        </Link>

        <Link to="aboutme" spy={true} smooth={true}>
          <div className="navbar__icon">
            <InfoIcon className="navbar__icon_" />
            <p>About Me</p>
          </div>
        </Link>

        <Link to="skills" spy={true} smooth={true}>
          <div className="navbar__icon">
            <AssessmentIcon className="navbar__icon_" />
            <p>Skills</p>
          </div>
        </Link>

        <Link to="project" spy={true} smooth={true}>
          <div className="navbar__icon">
            <LocalLibraryIcon className="navbar__icon_" />
            <p>Projects</p>
          </div>
        </Link>
      </div>

      <img
        src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png"
        alt="Hulu Logo"
        className="navbar__logo"
      ></img>
    </div>
  );
}

export default Navbar;
