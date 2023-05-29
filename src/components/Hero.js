import Html from "../images/html.svg";
import Css from "../images/css.svg";
import Js from "../images/js.svg";
import React from "../images/react.svg";
import Vue from "../images/vue.png";
import Angular from "../images/angular.png";
import Typescript from "../images/typescript.svg";
import Sass from "../images/sass.svg";
import Wave from "../images/wave.png";
import MongoDB from "../images/MongoDB.png";
import Node from "../images/Node.png";

function Hero() {
  const Icons = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Sass,
      title: "Scss",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: React,
      title: "React",
    },
    {
      img: Vue,
      title: "Vue",
    },
    {
      img: Angular,
      title: "Angular",
    },
    {
      img: Typescript,
      title: "Typescript",
    },
     {
      img: Node,
      title: "Node.js",
    },
     {
      img: MongoDB,
      title: "MongoDB",
    },
   
  ];



  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Junior Javascript Developer </h1>
                <img src={Wave} alt="waving_hand" />
                <p>
                  Javascript graduate from IT-Högskolan in Stockholm, Sweden 🎓
                </p>

                <span>
                  <a
                    href="https://www.linkedin.com/in/yanrudish/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/99ru" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            <div className="skills">
              <p>Skills</p>
              <div className="logos">
                <ul>
                  {Icons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
                </div>
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
