import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
const Header = ({ language, setLanguage, active }) => {
  return (
    <header>
      <div className="top_header">
        <div className="number">
          <p>{language ? "Call:" : "ზარი:"}</p>
          <a href="tel:+995551059292">+995 551 059 292</a>
        </div>
        <div className="contact_info">
          <div className="email">
            <p>{language ? "Email Adddress:" : "ელ-ფოსტა:"}</p>
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
              src="https://res.cloudinary.com/dzxxb95vy/image/upload/v1649050992/FullLogo_NoBuffer_3_hcxhe5.png"
              alt="Component Construction"
            />
          </Link>
          <ul>
            <li className={active==="home" && "active"}>
              <Link className="menu_link " to="/">
                {language ? "Home" : "მთავარი"}
              </Link>
            </li>
            <li className={active==="about" && "active"}>
              <Link className="menu_link" to="/about">
                {language ? "About us" : "ჩვენ შესახებ"}
              </Link>
            </li>
             {/* <li>
              <Link className="menu_link" to="/projects">
                {language ? "Projects" : "პროექტები"}
              </Link>
            </li>
            <li>
              <Link className="menu_link" to="/services">
                {language ? "Services" : "სერვისები"}
              </Link>
            </li>
            <li>
              <Link className="menu_link" to="/contact">
                {language ? "Contact" : "კონტაქტი"}
              </Link>
            </li> */}
          </ul> 
        </nav>
      </div>
    </header>
  );
};

export default Header;
