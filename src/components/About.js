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
                Hello there! I'm a passionate Web Developer with expertise in
                JavaScript. Recently graduated, with over 2 years of practical
                experience. Ready to tackle exciting challenges as a Frontend
                Developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
