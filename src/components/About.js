import dev from "../images/dev.gif";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={dev} alt="emoji" className="img-side__main-img" />
          
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <p>
               Hi there! I'm a JavaScript developer with a passion for building beautiful and functional websites. With a strong foundation in frontend development and backend experience from school projects, I'm eager to tackle new challenges as I approach graduation. I thrive in diverse work environments, enjoying both team collaborations and independent projects. Outside of coding, i like to spend my time at the gym and play video games.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
