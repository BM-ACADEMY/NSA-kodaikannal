import React, { useEffect } from 'react';
import './App.css';
import './pages/css/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarsection from './pages/Navbar';
import CourseCards from './pages/Card';
import Homesection from './pages/Home';
import WhatsAppButton from './pages/whatsappButton';
import ReviewSlider from './pages/Review';
import Footer from './pages/footer';
import FloatingIcons from './pages/floatingicons';
import IndividualIntervalsExample from './pages/carousal';
import WhatWeDo from './pages/whatwedo';
import Gallery from './pages/Gallery'


export default function App() {
  // Scroll to top when the component mounts (on refresh)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbarsection />
      <IndividualIntervalsExample />
      <Homesection />
      <WhatWeDo />
      <CourseCards />
      <Gallery />
      <ReviewSlider />
      <Footer />
      <WhatsAppButton/>
    </div>
  );
}
