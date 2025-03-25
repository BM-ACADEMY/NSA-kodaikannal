import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function CourseCards() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const courses = [
    {
      title: "Trekking Tour - Kodaikanal",
      places: [
        "La Saleth Church",
        "Liril Falls",
        "Chocolates & Spices Shopping",
        "Vattakanal Falls",
        "Mountain Beauty",
        "Dolphin Nose",
        "Echo Rock",
        "Bryant Park",
        "Kodaikanal Lake",
      ],
    },
    {
      title: "Village Tour - Kodaikanal",
      places: [
        "Palani Hill View",
        "Mahalakshmi Temple",
        "Poombarai Village View",
        "Sai Baba Temple",
        "Kulandhai Velappar Temple",
        "Sheep & Rabbit Farm",
        "Mannavanur Lake View",
        "Mannavanur Lake",
        "Upper Lake View",
        "Bryant Park",
        "Kodaikanal Lake",
      ],
    },
    {
      title: "Wild Ways Tour - Kodaikanal",
      places: [
        "La Saleth Church",
        "Silent Valley View",
        "Caps Fly Valley",
        "Fire Watching Tower",
        "Berijam Lake View",
        "Memory Loss Forest View",
        "Berijam Lake",
        "Bryant Park",
        "Kodaikanal Lake",
      ],
    },
    {
      title: "Valley Tour - Kodaikanal",
      places: [
        "Coakers Walk",
        "La Saleth Church",
        "Liril Falls",
        "Chocolates & Spices Shopping",
        "Green Valley View",
        "Golf Course",
        "Pillar Rocks",
        "Guna Cave",
        "Pine Forest",
        "Moir Point",
        "Upper Lake View",
        "Bryant Park",
        "Kodaikanal Lake",
      ],
    },
    {
      title: "Kookal Tour",
      places: [
        "Palani View",
        "Mahalakshmi Temple",
        "Poombarai Village View",
        "Kookal Lake",
        "Kookal Private Waterfalls",
        "Kookal Mountain Valley View",
        "Kodaikanal Lake",
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "50px 0" }}>
      <div className="container coursecard" id="Services">
        <h2
          className="text-center coursecard-head mb-1 text-uppercase"
          data-aos="zoom-in"
          style={{ fontWeight: "600", color:"red" }}
        >
          Tour Packages
        </h2>

        {/* Carousel Wrapper */}
        <div className="position-relative">
          {/* Left Navigation Button */}
          <button
            className="carousel-control-prev custom-nav"
            type="button"
            data-bs-target="#courseCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          {/* Bootstrap Carousel */}
          <div
            id="courseCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {courses.map((_, index) => {
                if (index % 2 === 0) {
                  return (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="d-flex justify-content-center gap-3">
                        {/* First Card */}
                        <div className="card shadow-lg" style={cardStyle}>
                          <div className="card-body text-center p-3">
                            <h5 className="card-title font-weight-bold text-uppercase mb-3" style={{color:"red"}}>
                              {courses[index].title}
                            </h5>
                            <ul className="list-unstyled text-start">
                              {courses[index].places.map((place, idx) => (
                                <li key={idx} style={listItemStyle}>
                                  <span style={arrowStyle}>➤</span> {place}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Second Card (if exists) */}
                        {courses[index + 1] && (
                          <div className="card shadow-lg" style={cardStyle}>
                            <div className="card-body text-center p-3">
                              <h5 className="card-title font-weight-bold text-uppercase mb-3"  style={{color:"red"}}>
                                {courses[index + 1].title}
                              </h5>
                              <ul className="list-unstyled text-start">
                                {courses[index + 1].places.map((place, idx) => (
                                  <li key={idx} style={listItemStyle}>
                                    <span style={arrowStyle}>➤</span> {place}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            className="carousel-control-next custom-nav"
            type="button"
            data-bs-target="#courseCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Styles
const cardStyle = {
  width: "40%",
  minHeight: "260px",
  backgroundColor: "white",
  border: "2px solid red",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
};

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  transition: "transform 0.2s ease-in-out",
};

const arrowStyle = {
  color: "red",
  fontWeight: "bold",
  marginRight: "5px",
};

/* Navigation Button Styles */
const navButtonStyle = `
  .custom-nav .carousel-control-prev-icon,
  .custom-nav .carousel-control-next-icon {
    background-color: black;
    border-radius: 50%;
    padding: 10px;
  }
`;

// Injecting styles dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = navButtonStyle;
document.head.appendChild(styleSheet);
