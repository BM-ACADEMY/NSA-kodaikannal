import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import background from "../assets/whoweare.jpeg"; // Import the image
import "../pages/css/Style.css";

const Homesection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with duration
  }, []);

  return (
    <div className="Homesection1 mb-4 pb-5 pt-5" id="Whoweare">
      <h2 className="text-center pb-4 text-uppercase" data-aos="zoom-in">
        Who We Are
      </h2>
      <Container className="mt-4">
        <Row className="align-items-center flex-lg-row flex-column-reverse">
          {/* Text Section with Zoom Animation */}
          <Col
            lg={6}
            className="text-center text-lg-start pt-md-4 mt-4 mt-md-0"
            data-aos="zoom-in"
          >
            <p>
            Welcome to <strong> NSA Holidays Kodaikanal</strong>, your gateway to unforgettable Kodaikanal experiences! We specialize in crafting personalized travel packages, from local sightseeing to extended South India adventures, ensuring a seamless and memorable journey for every traveler. We arrange hotels / homestays / tent stays / A Frame stays including sightseeing in and around kodai. Whether it is a group of family or friends or couples our team extends 24/7 support to all your enquiries regarding your trip to kodai.


            </p>
          </Col>

          {/* Image Section with Zoom Animation */}
          <Col lg={6} className="text-center" data-aos="zoom-in">
            <Image
              src={background} // Use the imported image
              alt="Academy Background"
              fluid
              style={{
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homesection;
