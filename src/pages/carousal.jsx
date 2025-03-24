import React from "react";
import { Carousel } from "react-bootstrap";
import school from "../assets/carousel/room1.jpg";
import school2 from "../assets/carousel/room2.jpg";
import school3 from "../assets/carousel/room3.jpg";
import "../pages/css/Style.css";

const CarouselComponent = () => {
  return (
    <div className="carousel-container" id="home">
      <Carousel fade interval={3000} controls={true} indicators={false}>
        <Carousel.Item>
          <img
            className="carousel-img"
            src={school} // Use the imported image
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-center jk text-uppercase fw-bold">
              Welcome to NSA Holidays-Kodaikanal
            </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-img"
            src={school2} // Use the imported image
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
            src={school3} // Use the imported image
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
