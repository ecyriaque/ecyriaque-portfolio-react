import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <Container>
        <div className="section-title">
          <h2>À propos de moi</h2>
          <p>Qui suis-je et ce qui me passionne</p>
        </div>

        <Row className="align-items-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-img-container"
            >
              <Image
                src={`${process.env.PUBLIC_URL}/asset/img/moi.png`}
                alt="Emilio Cyriaque"
                className="about-img img-fluid"
                roundedCircle
              />
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="about-content"
            >
              <h3 className="mb-4">
                Bonjour, je suis{" "}
                <span className="text-highlight">Emilio Cyriaque</span>
              </h3>

              <p>
                Je suis diplômé d'un Bachelor Universitaire de Technologie (BUT)
                en Informatique. Ma passion pour la résolution de problèmes
                complexes et l'innovation technologique m'a conduit à explorer
                en profondeur divers aspects de l'informatique, de la
                programmation à l'analyse de données en passant par le
                développement d'applications.
              </p>

              <p>
                Actuellement en Mastère Lead Developer Full Stack à l'ENSITECH
                de Cergy, j'occupe le poste d'alternant développeur full-stack
                chez Wartner. Cette expérience me permet de mettre en pratique
                mes compétences techniques tout en continuant à me former.
                Curieux et motivé, je suis toujours à la recherche
                d'opportunités pour élargir mes compétences et contribuer à des
                projets innovants.
              </p>

              <p>
                En dehors des études, je suis un passionné de musculation, ce
                qui me permet de rester discipliné et concentré. Je trouve dans
                le sport une parfaite échappatoire à l'intensité du monde
                numérique.
              </p>

              <p>
                Les jeux vidéo occupent également une place importante dans ma
                vie. Ils stimulent ma créativité, aiguisent mes réflexes
                stratégiques et me permettent de rester connecté avec une
                communauté dynamique et diversifiée.
              </p>

              <div className="about-info mt-4">
                <Row>
                  <Col md={6} className="info-item">
                    <span className="info-title">Nom:</span>
                    <span className="info-value">Emilio Cyriaque</span>
                  </Col>
                  <Col md={6} className="info-item">
                    <span className="info-title">Email:</span>
                    <span className="info-value">
                      emilio.cyriaque97493@gmail.com
                    </span>
                  </Col>
                  <Col md={6} className="info-item">
                    <span className="info-title">Profil:</span>
                    <span className="info-value">Étudiant en Informatique</span>
                  </Col>
                  <Col md={6} className="info-item">
                    <span className="info-title">Disponibilité:</span>
                    <span className="info-value">Alternance</span>
                  </Col>
                </Row>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
