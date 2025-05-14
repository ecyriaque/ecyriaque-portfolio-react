import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section section-padding">
      <Container>
        <div className="section-title">
          <h2>Mon CV</h2>
          <p>Téléchargez mon CV et contactez-moi</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="resume-content"
            >
              <h3 className="mb-4">Résumé de mon parcours</h3>
              <ul className="resume-list">
                <li>
                  Expérience en développement d'interfaces utilisateur avec
                  React.js, Node.js, et TypeScript.
                </li>
                <li>
                  Participation à des projets académiques utilisant Flask et
                  Angular pour le développement web.
                </li>
                <li>
                  Compétences en programmation Python, Java, et technologies web
                  (HTML5, CSS3, JavaScript).
                </li>
                <li>
                  Stage au LIASD, axé sur le développement d'interfaces pour la
                  plateforme SPACeL, intégrant des services web et une API en
                  Node.js.
                </li>
                <li>
                  Alternance chez Wartner en tant que développeur full-stack,
                  participant activement à des projets de développement web.
                </li>
                <li>
                  Compétences en bases de données (MySQL, PostgreSQL, MongoDB)
                  et en DevOps (Docker, Jenkins, SonarQube).
                </li>
                <li>
                  Maîtrise des méthodologies agiles et des outils de gestion de
                  projet.
                </li>
              </ul>

              <div className="resume-buttons mt-5 text-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="download-btn me-3"
                >
                  <FaDownload className="me-2" /> Télécharger mon CV
                </Button>
              </div>

              <div className="resume-contact mt-5">
                <h4>Contactez-moi</h4>
                <p>
                  N'hésitez pas à me contacter pour discuter de projets,
                  d'opportunités professionnelles, ou simplement pour échanger
                  sur des sujets liés au développement informatique.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <span>emilio.cyriaque97493@gmail.com</span>
                  </div>
                  <div className="social-links">
                    <a
                      href="https://github.com/ecyriaque"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
