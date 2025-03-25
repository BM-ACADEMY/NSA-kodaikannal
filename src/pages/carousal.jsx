import React from "react";
import { Carousel } from "react-bootstrap";
import s1 from "../assets/carousel/s1.jpeg";
import s2 from "../assets/carousel/s2.jpg";
import s6 from "../assets/carousel/s6.jpg";

import s4 from "../assets/carousel/s4.jpg";


import "../pages/css/Style.css";

const CarouselComponent = () => {
  return (
    <div className="carousel-container" id="home">
      <Carousel fade interval={3000} controls={true} indicators={false}>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={s1} // Use the imported image
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-center jk text-uppercase fw-bold">
              Welcome to NSA Holidays
            </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img"
            src={s2} // Use the imported image
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="text-center jk text-uppercase fw-bold">
             Our Pride Your Destination
            </h3>
          </Carousel.Caption>
        </Carousel.Item>

    
      
        <Carousel.Item>
          <img
            className="carousel-img"
            src={s6} // Use the imported image
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="text-center jk text-uppercase fw-bold">
              
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      
        <Carousel.Item>
          <img
            className="carousel-img"
            src={s4} // Use the imported image
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="text-center jk text-uppercase fw-bold">
              
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
     
      

      </Carousel>
    </div>
  );
};

export default CarouselComponent;
