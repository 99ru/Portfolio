
import ProjectItem from "./ProjectItem";
import wallet from "../images/wallet.png";
import Alphalete from "../images/screenshot.png";
import Workouts from "../images/GIF.gif"
import Insurance from "../images/Insurance.png"
import Poster from "../images/poster.png"
import CardGame from "../images/CardGame.png"

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
              code="https://github.com/99ru/Clothing"
              demo="https://gymclothing.netlify.app/"
             
              />

              <ProjectItem
              title="E-Wallet"
              img={wallet}
              toolUsed1="Vue"
              toolUsed2="CSS"
              desc="First single page application with my first framework Vue.js. Create a new card and it will be added to your stack of cards, you can also click on which card you want to be displayed as active. Goal of this was to learn how to use Props and Emits"
              code="https://github.com/99ru/e-wallet"
              demo="https://chic-toffee-e0fbd8.netlify.app/"
              />

              <ProjectItem
              title="Workouts"
              img={Workouts}
              toolUsed1="React"
              toolUsed2="CSS"
              desc="simple workout application fetches exercises with their data from a mock API and displays it on the page. you can sort exercises by male and female, and also choose exercises by muscle groups."
              code="https://github.com/99ru/WorkoutAppReact"
              demo="https://earnest-macaron-5e6bd8.netlify.app/"
              />

              <ProjectItem
              title="Inge-Bra-Bygg-AB"
              img={Poster}
              toolUsed1="Nodejs"
              toolUsed2="Sequlize"
              desc="Rest API for construction company in Nodejs"
              code="https://github.com/99ru/Inge-Bra-Bygg-AB"
              demo=""
              />

              <ProjectItem
              title="Higher lower"
              img={CardGame}
              toolUsed1="Vanilla JS"
              toolUsed2="CSS"
              desc="Higer lower card game i made while learning vanilla JS"
              code="https://github.com/99ru/card-game"
              demo="https://vocal-cuchufli-05b609.netlify.app/"
              
              />

              <ProjectItem
              title="Insurance"
              img={Insurance}
              toolUsed1="HTML"
              toolUsed2="CSS"
              desc="For our first school project in HTML and CSS, we collaborated as a team of two and used a mob programming approach. goal of this project was to create a website that was responsive on all devices."
              code="https://github.com/99ru/html-css-slutprojekt"
              demo="https://imaginative-parfait-e60184.netlify.app/"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
