import { useState } from "react";


function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  /* const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };
 */
  return (
    <>
      <nav>
        <h3 className="Dev">
        <a href="#home">Yan.Ru</a>
        </h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li onClick={() => handleMobileMenu()}>
            <i className="fa-solid fa-bars-staggered mobile-menu"></i>
          </li>
        </ul>
      </nav>

      {/* Mobile */}
      <div className={`mobile-nav ${mobileMenu ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => handleMobileMenu()}>
          <i className="fa-solid fa-xmark"></i>
        </span>

        <ul>
          <li onClick={() => handleMobileMenu()}>
            <a href="#home">Home</a>
          </li>

          <li onClick={() => handleMobileMenu()}>
            <a href="#about">About</a>
          </li>

          <li onClick={() => handleMobileMenu()}>
            <a href="#projects">Projects</a>
          </li>

          <li onClick={() => handleMobileMenu()}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
