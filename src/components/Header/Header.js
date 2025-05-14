import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrolled ? "navbar-custom scrolled" : "navbar-custom"}
      variant={scrolled ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="hero"
          smooth={true}
          duration={500}
          className="logo"
        >
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="hero"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Accueil
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="about"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              À propos
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="experience"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Expérience
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="education"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Formation
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="projects"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Projets
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="skills"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Compétences
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="resume"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              CV
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
