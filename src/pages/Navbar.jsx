import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import logo from "../assets/logo.png"; 
import "./Style.css";

function Navbarsection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`navbar-custom ${expanded ? "expanded-navbar" : ""}`} // Add class when expanded
      fixed="top"
      expanded={expanded}
    >
      <Container className="d-flex align-items-center section1-row">
        <Navbar.Brand href="#">
          <img
            src={logo} // Use the imported logo here
            width="120"
            height="120"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        {/* Custom Toggle Button with Rotation Animation */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="custom-toggler"
        >
          <span className={`toggle-icon ${expanded ? "rotate" : ""}`}>
            {expanded ? <FaTimes size={25} /> : <FaBars size={25} />}
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex flex-wrap justify-content-center gap-lg-5 gap-3 fade-in">
            <Nav.Link href="#home" className="nav-item" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#Whoweare" className="nav-item" onClick={() => setExpanded(false)}>Who we are</Nav.Link>
            <Nav.Link href="#Whatwedo" className="nav-item" onClick={() => setExpanded(false)}>What we do</Nav.Link>
            <Nav.Link href="#Services" className="nav-item" onClick={() => setExpanded(false)}>Services</Nav.Link>
            <Nav.Link href="#Gallery" className="nav-item" onClick={() => setExpanded(false)}>Gallery</Nav.Link>
            <Nav.Link href="#reviews" className="nav-item" onClick={() => setExpanded(false)}>Testimonial</Nav.Link>
            <Nav.Link href="#contact" className="nav-item" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarsection;
