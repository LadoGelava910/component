import React from 'react'
import Header from '../../components/Header/Header'
import "./Services.css"
const Services = ({language, setLanguage}) => {
  return (
    <div className="services_wrapper"><Header language={language} setLanguage={setLanguage}/>
        <section className="services">
            <h3>ჩვენი სერვისები</h3>
            <div className="services_grid">
                <img src="https://res.cloudinary.com/dzxxb95vy/image/upload/v1649328714/services_component_soeply.png" alt="კომპონენტ ქონსთრაქშენი - Component Construction" />
                <div className="services_content">
                    <ul>
                        <li>საპროექტო მომსახურება      </li>
                        <li>კარკასული მშენებლობა</li>
                        <li>ფასადის მოპირკეთება</li>
                        <li>თბო-ხმის იზოლაცია</li>
                        <li>მოჭიმვის მოწყობა</li>
                        <li>ჰიდროიზოლაციის მოწყობა</li>
                        <li>სარემონტო სამუშაოები</li>


                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services