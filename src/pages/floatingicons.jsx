import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import birdAnimation from "./bird.json";
import messageIcon from "../assets/message.png"; // Import the image from src/assets

const FloatingIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    // Set a delay of 3 seconds before showing the icons
    const timer = setTimeout(() => {
      setShowIcons(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <>
      {showIcons && (
        <div className="floating-icons">
          {/* Shaking Image */}
          <img
            src={messageIcon} // Use the imported image
            alt="Shaking Icon"
            className="shaking-image"
          />

          {/* Lottie Animation */}
          <a
            href="https://wa.me/916369219827"
            target="_blank"
            rel="noopener noreferrer"
            className="bird-animation"
          >
            <Lottie animationData={birdAnimation} loop={true} />
          </a>
        </div>
      )}
    </>
  );
};

export default FloatingIcons;
