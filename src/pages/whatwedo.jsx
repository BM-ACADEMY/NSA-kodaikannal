import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animation duration: 1s
  }, []);

  return (
    <Container className="text-center whatwedo my-5" id="Whatwedo">
      <Row className="justify-content-center">
        <Col md={10}>
        <h2 className="text pb-4 text-uppercase" data-aos="zoom-in">What We Do</h2>
          <p className="mt-3" data-aos="zoom-in">
          We provide personalized travel packages, including local sightseeing, South India tours, and unique stays such as hotels, homestays, tent stays, and A-frame accommodations. Whether you're traveling with family, friends, or as a couple, our team offers 24/7 support to ensure a seamless and memorable trip to Kodaikanal.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatWeDo;
