import ProjectItem from "./ProjectItem";
import Alphalete from "../images/screenshot.png";
import Poster from "../images/poster.png";
import Portfolio from "../images/Portfolio.png";
import Rickandmorty from "../images/rickandmorty.png"
import GymApp from "../images/GymApp.png"

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Some of my projects</h3>
            <div className="projects-grid">

            <ProjectItem
                title="Gym App (IN PROGRESS)"
                img={GymApp}
                toolUsed1="React Next.js"
                toolUsed2="Tailwind css"
                desc="First project in Nextjs. Simply a gym planner app where you can add workouts and add sets, reps, weight."
                code="https://github.com/99ru/gym-app"
                demo="https://gym-planner-app.netlify.app/"
              />


              <ProjectItem
                title="Gym Clothing"
                img={Alphalete}
                toolUsed1="React"
                toolUsed2="SCSS"
                desc="Clothing store for Alphalete. I used React and SCSS to build this project. I also used routing and the Context API to manage the state of the cart and the products."
                code="https://github.com/99ru/Clothing"
                demo="https://gymclothing.netlify.app/"
              />

                <ProjectItem
                title="Rick and morty API"
                img={Rickandmorty}
                toolUsed1="React"
                toolUsed2="CSS"
                desc="Rick and morty API, you can search for characters and see their details by clicking on the image. You can also use the filters to sort by different categories."
                code="https://github.com/99ru/rick-n-morty-api"
                demo="https://courageous-medovik-4c32f2.netlify.app/"
              />

              <ProjectItem title="Portfolio"
               img={Portfolio}
               toolUsed1={"React"}
               toolUsed2={"CSS"}
               desc={"The portfolio you are viewing right now."}
               code={"https://github.com/99ru/Portfolio"}
              />

              <ProjectItem
                title="Inge-Bra-Bygg-AB"
                img={Poster}
                toolUsed1="Nodejs"
                toolUsed2="Sequlize"
                desc="Rest API for construction company in Nodejs."
                code="https://github.com/99ru/Inge-Bra-Bygg-AB"
                demo=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
