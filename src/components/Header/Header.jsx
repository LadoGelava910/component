import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
const Header = ({ language, setLanguage }) => {
  return (
    <header>
      <div className="top_header">
        <div className="number">
          <p>{language ? "Call:" : "ზარი:"}</p>
          <a href="tel:+995551059292">+995 551 059 292</a>
        </div>
        <div className="contact_info">
          <div className="email">
            <p>{language ? "Email Adddress:" : "ელ-ფოსტა"}</p>
            <a href="mailto:info@component.ge">info@component.ge</a>
          </div>
          <div className="social_media">
            <a href="https://www.facebook.com/componentconstruction">
              <FacebookSharpIcon style={{ fontSize: "25px", color: "white" }} />
            </a>
          </div>
        </div>
        <button onClick={() => setLanguage(!language)}>
          {language ? "ქარ" : "ENG"}
        </button>
      </div>
      <div className="bottom_header">
        <nav>
          <Link className="nav_brand" to="/">
            <img
              src="https://res.cloudinary.com/dzxxb95vy/image/upload/v1648801536/component_logo_lpxmqn.png"
              alt="Component Construction"
            />
          </Link>
          <ul>
            <li className="active">
              <Link className="menu_link " to="/home">
                {language ? "Home" : "მთავარი"}
              </Link>
            </li>
            <li>
              <Link className="menu_link" to="/home">
                {language ? "About us" : "ჩვენ შესახებ"}
              </Link>
            </li>
            <li>
              <Link className="menu_link" to="/home">
                {language ? "Projects" : "პროექტები"}
              </Link>
            </li>
            <li>
              <Link className="menu_link" to="/home">
                {language ? "Services" : "სერვისები"}
              </Link>
            </li>
            <li>
              <Link className="menu_link" to="/home">
                {language ? "Contact" : "კონტაქტი"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
