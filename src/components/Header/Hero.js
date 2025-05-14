import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const typed = new window.Typed(textRef.current, {
        strings: [
          "Étudiant en Informatique",
          "Développeur Full Stack",
          "Passionné de Technologie",
          "Alternant chez Wartner",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${process.env.PUBLIC_URL}/asset/img/intro-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>
      <Container className="hero-container">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="hero-content"
            >
              <h1 className="hero-title">Je suis Emilio Cyriaque</h1>
              <div className="hero-text">
                <span ref={textRef}></span>
              </div>
              <div className="hero-buttons mt-4">
                <motion.a
                  href="#about"
                  className="btn btn-primary btn-lg me-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  À propos de moi
                </motion.a>
                <motion.a
                  href="#projects"
                  className="btn btn-outline-light btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Mes projets
                </motion.a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
