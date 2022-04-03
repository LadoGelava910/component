import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/HeroContent/Hero";
import "./MainPage.css";
const MainPage = ({ language, setLanguage }) => {
  return (
    <>
      <div className="all_wrapper">
        <Header language={language} setLanguage={setLanguage} />
        <Hero language={language} />
      </div>
    </>
  );
};

export default MainPage;
