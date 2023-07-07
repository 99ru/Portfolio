import dev from "../images/dev.png";
import dev2 from "../images/programmer.png";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={dev2} alt="emoji" className="about-image" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <p>
                I am a junior developer with expertise in Javascript development. Recently graduated, with over 2 years of practical experience. Ready to tackle exciting challenges as a Frontend Developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
