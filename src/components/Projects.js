
import ProjectItem from "./ProjectItem";
import wallet from "../images/wallet4.png";
import Alphalete from "../images/screenshot.png";
import Workouts from "../images/GIF.gif"
import Insurance from "../images/Insurance.png"

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Some of my projects 🖥️</h3>
            <div className="projects-grid">
              <ProjectItem
              title="Gym Clothing"
              img={Alphalete}
               toolUsed1="React"
              toolUsed2="SCSS"
              desc="Clothing store for Alphalete, a gym clothing brand. I used React and SCSS to build this project. I also used the Context API to manage the state of the cart and the products"
              code="https://github.com/99ru/e-wallet"
              demo="https://chic-toffee-e0fbd8.netlify.app/"
             
              />

              <ProjectItem
              title="E-Wallet"
              img={wallet}
              toolUsed1="Vue"
              toolUsed2="CSS"
              desc="First single page application i did with Vue.js. Create a new card and it will be added to your stack of cards, you can also click on which card you want to be displayed as active"
              code="https://github.com/99ru/e-wallet"
              demo="https://chic-toffee-e0fbd8.netlify.app/"
              />

              <ProjectItem
              title="Workouts"
              img={Workouts}
              toolUsed1="React"
              toolUsed2="CSS"
              desc="simple workout application fetches exercises with their data from a mock API and displays it on the page. you can sort exercises by male and female, and also choose exercises by muscle groups."
              code=""
              demo=""
              />

              <ProjectItem
              title
              img={Insurance}
              toolUsed1="Nodejs"
              toolUsed2="Sequlize"
              desc
              code=""
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
