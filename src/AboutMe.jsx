import React from "react";
import ReactRoundedImage from "react-rounded-image";
import EmailIcon from "@material-ui/icons/Email";
import avatar from "./avatar.png";
import "./About.css";

const AboutMe = ({ about }) => {
  return (
    <div className="aboutme" id="aboutme">
      <div className="avatar">
        <ReactRoundedImage
          image={avatar}
          roundedColor="#111"
          imageWidth="180"
          imageHeight="180"
          roundedSize="0"
        />
      </div>
      <div className="aboutme__content">
        <p>About Me</p>
        <div className="aboutme__description">{about.combined}</div>
        <div className="contact">
          <p className="contact__heading">Contact Details</p>
          <p className="contact__details">{about.name}</p>
          <p className="contact__details">{about.houseno}</p>
          <p className="contact__details">{about.phone}</p>
          <p className="contact__details">{about.email}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
