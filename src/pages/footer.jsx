import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png"; // Import logo directly
import instagramIcon from "../assets/instagram.png"; // Import Instagram icon
import whatsappIcon  from "../assets/whatsapp.png"; // Import Facebook icon

const Footer = () => {
  return (
    <footer className="footer-section py-4" id="contact" style={{ backgroundColor: "black" }}>
      <Container>
        <Row className="gap-4 gap-md-0">
          <Col md={3} className="text-start text-white d-flex flex-column align-items-start mb-4 mb-md-0">
            <div className="logo-circle">
            <img src={logo} alt="Logo" className="footer-logo" />
            </div>
            <p className="text-start mt-3">
            NSA Holidays Kodaikanal – Your Trusted Partner for Unforgettable Stays & Scenic Journeys!
            </p>
          </Col>

          <Col md={3} className="text-start text-white mb-4 mb-md-0">
            <h5 style={{color:"#ffdf1a"}}>Useful Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 align-items-start">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#Whoweare" className="text-white text-decoration-none">Who We Are</a></li>
              <li><a href="#Whatwedo" className="text-white text-decoration-none">What We Do</a></li>
              <li><a href="#Services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#Gallery" className="text-white text-decoration-none">Gallery</a></li>
              <li><a href="#reviews" className="text-white text-decoration-none">Testimonials</a></li>
            </ul>
          </Col>

          <Col md={3} className="text-start text-white">
            <h5  style={{color:"#ffdf1a"}}>Contact Us</h5>

            {/* Phone */}
            <p className="d-flex align-items-center">
              <FaPhone className="me-2 calls flex-shrink-0" />
              <a href="tel:+919080440506" className="text-white ps-1 text-decoration-none">+91 90804 40506 /</a>
              <a href="tel:+916369219827" className="text-white ps-1 text-decoration-none">+91 63692 19827 </a>
            </p>

            {/* Email */}
            <p className="d-flex align-items-center">
              <FaEnvelope className="me-2 flex-shrink-0" />
              <a href="mailto:Nsaholidays@gmail.com" className="text-white ps-2 text-decoration-none">nsaholidays@gmail.com</a>
            </p>

            {/* Address */}
            <p className="d-flex align-items-start">
              <FaMapMarkerAlt className="me-2 flex-shrink-0 mt-1" />
              <span className="ps-2">NSA Holidays,Annasalai, <br /> Kodaikanal - 624 101</span>
            </p>
          </Col>

          <Col md={3} className="text-start text-white">
            <h5  style={{color:"#ffdf1a"}}>Follow Us</h5>
            <div className="social-icons d-flex gap-3">
              <a href="https://www.instagram.com/nsa_holidays_kodaikanal/" target="_blank" className="text-white" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram" width="30" height="30" />
              </a>
              <a href="https://wa.me/919080440506" target="_blank" className="text-white" rel="noreferrer">
  <img src={whatsappIcon} alt="WhatsApp" width="30" height="30" />
</a>

            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center text-white">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} 
              <a href="https://bmtechx.in" target="_blank" className="text-white text-decoration-none ms-1" rel="noreferrer">
                BMTECHx
              </a>. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
