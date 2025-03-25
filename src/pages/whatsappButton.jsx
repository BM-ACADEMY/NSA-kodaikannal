import React from "react";
import "../pages/css/WhatsAppButton.css"; // Import the CSS file
import logo from "../assets/whatsapp.jpg"

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919080440506"
      className="whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
       <img src={logo} alt="Logo" className="footer-logo" />
    </a>
  );
};

export default WhatsAppButton;
