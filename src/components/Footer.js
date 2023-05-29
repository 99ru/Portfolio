function Footer() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Get in touch!</h3>
            </div>
            <div className="contact__icons">

             <div className="contact__icon-box">
                <span>
                  <i class="fas fa-envelope"></i>
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:yan.99ru@gmail.com">
                    yan.99ru@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <i class="fas fa-map-marker-alt"></i>
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Stockholm, Sweden</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
