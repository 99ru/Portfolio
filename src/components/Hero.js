import Html from "../images/html.svg";
import Css from "../images/css.svg";
import Js from "../images/js.svg";
import React from "../images/react.svg";
import Vue from "../images/vue.png";
import Typescript from "../images/typescript.svg";
import Node from "../images/Node.png";
import Nextjs from "../images/nextjs.svg";
import Tailwind from "../images/tailwind.svg";

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
      img: Tailwind,
      title: "Tailwind",
    },
    {
      img: Js,
      title: "Javascript",
    },
    {
      img: Typescript,
      title: "Typescript",
    },
    {
      img: React,
      title: "React",
    },
    {
      img: Nextjs,
      title: "Next.js",
    },
    {
      img: Vue,
      title: "Vue",
    },
    {
      img: Node,
      title: "Node.js",
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
                <h1>I'm a web developer</h1>
                <p>Recent graduate from IT-Högskolan, Stockholm 🎓 </p>
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
