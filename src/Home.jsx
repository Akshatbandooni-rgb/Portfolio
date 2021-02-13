import React from "react";
import avatar from "./avatar.png";
import ReactRoundedImage from "react-rounded-image";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = ({ about }) => {
  return (
    <div className="home" id="home">
      <div className="home__avatar">
        <ReactRoundedImage
          image={avatar}
          roundedColor="#111"
          imageWidth="400"
          imageHeight="400"
          roundedSize="0"
        />
      </div>
      <div className="home__intro">
        <Typewriter
          options={{
            strings: [`I am ${about.name}!!`],
            autoStart: true,
            loop: true,
            deleteChars: 1,
          }}
        />
      </div>
      <div className="home__info">
        <div className="home__info__primary">
          <p>{`Based in ${about.residence} `}|</p>
          <p>{` Currently ${about.current_designation} at ${about.current_employer} `}</p>
        </div>
        <p>{about.passion}🚀</p>
      </div>
      <div className="home__socials">
        <div className="home__social">
          <a href="https://www.facebook.com/akshat.bandooni.5/">
            <FacebookIcon className="home__social__icon" />
          </a>
        </div>
        <div className="home__social">
          <a href="https://www.instagram.com/what_d_duck/">
            <InstagramIcon className="home__social__icon" />
          </a>
        </div>
        <div className="home__social">
          <a href="https://github.com/Akshatbandooni-rgb">
            <GitHubIcon className="home__social__icon" />
          </a>
        </div>
        <div className="home__social">
          <a href="https://www.linkedin.com/in/akshat-bandooni-846596174/">
            <LinkedInIcon className="home__social__icon" />
          </a>
        </div>
      </div>
      <div className="home--fadebottom"></div>
    </div>
  );
};

export default Home;
