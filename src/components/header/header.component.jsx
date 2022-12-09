
import { useState } from "react";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/01/path_2.png";
import personImg from "../../assets/01/shape.png";
import "./header.styles.scss";

const Header = () => {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  return (
    <div>
      <header>
        <div>
          <nav className="nav-links-container">
            <div className="nav-links-container">
              <Link to="/" className="link">
                SO FUNKTIONEIRTS
              </Link>
              <Link to="/" className="link">
                SUNDERANGEBOTE
              </Link>
              <Link to="/" className="link">
                <span>
                  <img src={personImg}></img>
                </span>
                MEIN BEREICH
                <span>
                  <img src={arrowImg}></img>
                </span>
              </Link>
            </div>
            <button
              className="toggle-button"
              onClick={() => setIsNavBarOpen(!isNavBarOpen)}
            >
              <span className="toggle-button__bar"></span>
              <span className="toggle-button__bar"></span>
              <span className="toggle-button__bar"></span>
            </button>
          </nav>
        </div>
      </header>
      <nav className={isNavBarOpen ? "open mobile-nav" : "mobile-nav"}>
        <div className="mobile-nav__items">
          <Link to="/" className="mobile-nav__item">
            SO FUNKTIONEIRTS
          </Link>
          <Link to="/" className="mobile-nav__item">
            SUNDERANGEBOTE
          </Link>
          <Link to="/" className="mobile-nav__item">
            <span>
              <img src={personImg}></img>
            </span>
            MEIN BEREICH
            <span>
              <img src={arrowImg}></img>
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
