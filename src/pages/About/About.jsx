import React from 'react'
import Header from '../../components/Header/Header'
import "./About.css"
import ConstructionIcon from '@mui/icons-material/Construction';
import FoundationIcon from '@mui/icons-material/Foundation';
import PeopleIcon from '@mui/icons-material/People';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import {Link} from "react-router-dom"
const About = ({language, setLanguage}) => {
  return (
    <div className="about_wrapper">
        <Header language={language} setLanguage={setLanguage} active="about"/>
        <div className="about_section">
            <section>
                <h2>{language ? "Component Construction" : "კომპონენტ ქონსთრაქშენი"}</h2>
                <h3>{language ? "Quality and Affordable Service" : "ხარისხიანი და ხელმისაწვდომი მომსახურება"}</h3>
                <p>კომპონენტ ქონსთრაქშენი  შეიქმნა ქართულ ბაზარზე არსებული
სამშენებლო მოთხოვნების სრულად დასაკმაყოფილებლად.
ჩვენი გუნდი დაკომპლექტებულია სამშენებლო სფეროში
 სხვადასხვა გამოცდილების მქონე მაღალკვალიფიციური
 თანამშრომლებით.
<br></br>
<br></br>

პრიორიტეტი: მომხმარებელმა მიიღოს მაღალი
 ხარისხის მომსახურება, რაც გარანტია
უმოკლეს დროში მაქსიმალური შედეგის
მიღების.
<br></br>
<br></br>

ჩვენი მიზანი: მომხმარებლამდე 
მივიტანოთ ევროპული
სტანდარტის შესაბამისი
მომსახურება.

 </p>
 <div className="white_divs">
 <Link className="white_div" to="/services"><FoundationIcon style={{color: "orange",  fontSize: "54px"}}/><h4>{language ? "Architecture" : "არქიტექტურა"}</h4></Link >
     <Link className="white_div" to="/services"><ConstructionIcon style={{color: "orange", fontSize: "54px"}}/><h4>{language ? "Construction" : "კონსტრუქცია"}</h4></Link >
     <Link className="white_div" to="/services"><CarpenterIcon style={{color: "orange",  fontSize: "54px"}}/><h4>{language ? "Refit, repair" :  "რემონტი"}</h4></Link>
     <Link className="white_div" to="/services"><PeopleIcon style={{color: "orange",  fontSize: "54px"}}/><h4>{language ? "Consulting" : "კონსულტაცია"}</h4></Link >
 </div>
            </section>
            <div className="about_banner_wrapper">
            <img className="about_banner" src="https://res.cloudinary.com/dzxxb95vy/image/upload/v1649052212/zp-construction-banner_khpjyk.png" alt="ხარისხიანი და ხელმისაწვდომი კონსტრუქტორი"/>
            </div>
        </div>
    </div>
  )
}

export default About