import Html from "../images/html.svg";
import Css from "../images/css.svg";
import Js from "../images/js.svg";
import React from "../images/react.svg";
import Vue from "../images/vue.png";
import Angular from "../images/angular.png";
import Typescript from "../images/typescript.svg";
import Sass from "../images/sass.svg";
/* import Wave from "../images/wave.png";
import Dev from "../images/dev.avif"; */
import MongoDB from "../images/mongodb.svg";
import Node from "../images/Node.png";

function Hero() {
  const Icons = [
    {
      img: Html,
      title: "HTML",
    },
    {
      img: Css,
      title: "CSS",
    },
    {
      img: Sass,
      title: "Scss",
    },
    {
      img: Js,
      title: "Javascript",
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
              <h2>Hi there👋🏼</h2>
                <h1>Im a Web Developer</h1>
              {/*   <img src={Wave} alt="waving_hand" /> */}
                <p>🎓Recent graduate from IT-Högskolan, Stockholm. </p>
                <span>
                  <a
                    href="https://www.linkedin.com/in/yanrudish/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/99ru"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </span>
              </div>
              <div className="hero-img"></div>
            </div>

            <div className="skills">
              <h3>Skills</h3>
              <div className="logos">
                <ul>
                  {Icons.map((icon) => (
                    <li key={icon.title}>
                      <div className="icon-container">
                        <img src={icon.img} alt={icon.title} />
                      </div>
                      <p>{icon.title}</p>
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
