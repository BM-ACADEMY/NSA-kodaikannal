import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Style.css';

export default function CourseCards() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Function to open WhatsApp link
  const openWhatsApp = () => {
    window.open("https://wa.me/917397180444", "_blank");
  };

  return (
    <div style={{ backgroundColor: '#00345b' }}>
      <div className="container pt-3 pb-5 coursecard" id="Services">
        <h2 className="text-center text-white coursecard-head mb-5 text-uppercase" data-aos="zoom-in" style={{ fontWeight: '600' }}>
          Our Services
        </h2>

        <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center align-items-stretch pt-4">

          {/* Trekking Tour - Kodaikanal Card */}
          <div className="col d-flex" data-aos="zoom-in">
            <div className="card h-100 course-card hindi-bg shadow-lg">
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">
                <h5 className="card-title font-weight-bold text-uppercase mb-3" style={{ fontWeight: '800' }}>
                  Trekking Tour - Kodaikanal
                </h5>
                <ul className="list-unstyled text-start">
                  <li>➤ La Saleth Church</li>
                  <li>➤  Liril Falls</li>
                  <li>➤  Chocolates & Spices Shopping</li>
                  <li>➤  Vattakanal Falls</li>
                  <li>➤  Mountain Beauty</li>
                  <li>➤  Dolphin Nose</li>
                  <li>➤  Echo Rock</li>
                  <li>➤  Bryant Park</li>
                  <li>➤  Kodaikanal Lake</li>
                </ul>
               
              </div>
            </div>
          </div>

          {/* Village Tour - Kodaikanal Card */}
          <div className="col d-flex" data-aos="zoom-in">
            <div className="card h-100 course-card skills-bg shadow-lg">
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">
                <h5 className="card-title font-weight-bold text-uppercase mb-3" style={{ fontWeight: '800' }}>
                  Village Tour - Kodaikanal
                </h5>
                <ul className="list-unstyled text-start">
                  <li>➤  Palani Hill View</li>
                  <li>➤  Mahalakshmi Temple</li>
                  <li>➤  Poombarai Village View</li>
                  <li>➤  Sai Baba Temple</li>
                  <li>➤  Kulandhai Velappar Temple</li>
                  <li>➤  Sheep & Rabbit Farm</li>
                  <li>➤  Mannavanur Lake View</li>
                  <li>➤  Mannavanur Lake</li>
                  <li>➤  Upper Lake View</li>
                  <li>➤  Bryant Park</li>
                  <li>➤  Kodaikanal Lake</li>
                </ul>
                
              </div>
            </div>
          </div>

          {/* Wild Ways Tour - Kodaikanal Card */}
          <div className="col d-flex" data-aos="zoom-in">
            <div className="card h-100 course-card online-bg shadow-lg">
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">
                <h5 className="card-title font-weight-bold text-uppercase mb-3" style={{ fontWeight: '800' }}>
                  Wild Ways Tour - Kodaikanal
                </h5>
                <ul className="list-unstyled text-start">
                <li>➤  La Saleth Church</li>
                  <li>➤  Silent Valley View</li>
                  <li>➤ Caps Fly Valley</li>
                  <li>➤ Fire Watching Tower</li>
                  <li>➤  Berijam Lake View</li>
                  <li>➤ Memory Loss Forest View</li>
                  <li>➤  Berijam Lake</li>
                  <li>➤  Bryant Park</li>
                  <li>➤  Kodaikanal Lake</li>
                  
                </ul>
            
              </div>
            </div>
          </div>

          {/* Valley Tour - Kodaikanal Card */}
          <div className="col d-flex" data-aos="zoom-in">
            <div className="card h-100 course-card adventure-bg shadow-lg">
              <div className="card-body d-flex flex-column justify-content-center align-items-center text-center p-4">
                <h5 className="card-title font-weight-bold text-uppercase mb-3" style={{ fontWeight: '800' }}>
                  Valley Tour - Kodaikanal
                </h5>
                <ul className="list-unstyled text-start">
                  <li>➤ Coakers Walk</li>
                  <li>➤  La Saleth Church</li>
                  <li>➤  Liril Falls</li>
                  <li>➤  Sai Baba Temple</li>
                  <li>➤  Kulandhai Velappar Temple</li>
                  <li>➤  Sheep & Rabbit Farm</li>
                  <li>➤  Mannavanur Lake View</li>
                  <li>➤  Mannavanur Lake</li>
                  <li>➤  Upper Lake View</li>
                  <li>➤  Bryant Park</li>
                  <li>➤  Kodaikanal Lake</li>
                </ul>
          
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
