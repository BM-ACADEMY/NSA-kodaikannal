import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css"; 

const reviews = [
  {
   
    content: "A quite calm hotel situated in a busy area. The staff were very polite, friendly and very helping tendency. Rooms are well maintained.",
  },
  {
    
    content: "Good family room in KOTTAIKANAL reasonable price all facilities except breakfast and good front desk staff",
  },
  {
    content: "NSA Villas, It is a good place to stay, especially for those who wish to spend a short span for ayurvedic treatments.",
  },
  {
    content: "The building owner is too cooperative, which made my stay even more pleasant. Their willingness to assist and accommodate added to the overall positive experience during my stay there",
  },
  {
    content: "The tent stay was a perfect getaway! The location was peaceful, surrounded by nature. The tents were comfortable, and the bonfire night was unforgettable.",
  },
  {
    content: "Affordable yet luxurious! The tent setup was perfect, and the overall vibe was magical. Perfect for a weekend retreat with friends or family!",
  },
];

const renderStars = () => {
  return Array.from({ length: 5 }, (_, index) => (
    <span key={index} className="text-warning">★</span>
  ));
};

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="review-section py-5 mb-5" id="reviews">
      <h2 className="text-center mb-4 text-uppercase" style={{fontWeight: '600'}}>Our Testimonials</h2>
      <Slider {...settings} className="review-slider">
        {reviews.map((review, index) => (
          <div key={index} className="p-3">
            <Card className="review-card text-center pt-5 position-relative">
              <FaQuoteLeft className="quote-icon top-left" />
              <p className="review-content">{review.content}<span className="text-muted">{review.quotes}</span></p>
              <FaQuoteRight className="quote-icon bottom-right" />
              <div className="review-stars">{renderStars()}</div>
              <h5 className="review-name mt-2">{review.name}</h5>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
