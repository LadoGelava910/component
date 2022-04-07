import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = ({ language }) => {
  return (
    <div className="hero_content">
      <section>
        {language ? (
          <h1>
            Bring your
            <strong style={{ color: "orange" }}> Dream House</strong>
            into Reality
          </h1>
        ) : (
          <h1> <strong>
            აქციე შენი <span style={{ color: "orange" }}></span>
            <span style={{ color: "orange" }}>ოცნების სახლი </span> 
            რეალობად!
            </strong> 
          </h1>
        )}
      </section>
      <Link className="hero_btn_contact" to="/contact">
        {language ? "CONTACT US" : "დაგვიკავშირდი"}
      </Link>
    </div>
  );
};

export default Hero;
