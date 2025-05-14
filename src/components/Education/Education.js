import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "Baccalauréat STI2D",
      institution: "Lycée Condorcet, Montreuil",
      year: "2021",
      description:
        "Obtenu avec mention Assez Bien, ce diplôme a posé les fondations de mes compétences techniques et théoriques.",
    },
    {
      id: 2,
      degree: "Bachelor Universitaire de Technologie en Informatique",
      institution: "IUT de Montreuil",
      year: "2024",
      description:
        "Ce parcours m'a permis de développer des compétences solides en développement logiciel, conception de systèmes d'information et gestion de projets.",
    },
    {
      id: 3,
      degree: "Mastère Lead Developer Full Stack",
      institution: "ENSITECH de Cergy",
      year: "En cours",
      description:
        "Je me spécialise dans le développement d'applications web et mobiles, tout en approfondissant mes compétences en architecture logicielle et gestion d'équipe technique.",
    },
  ];

  return (
    <section id="education" className="education-section section-padding">
      <Container>
        <div className="section-title">
          <h2>Formation</h2>
          <p>Mon parcours académique</p>
        </div>

        <Row>
          {educations.map((edu, index) => (
            <Col md={4} key={edu.id} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="education-card">
                  <Card.Body>
                    <div className="education-icon">
                      <FaGraduationCap />
                    </div>
                    <Card.Title className="edu-degree">{edu.degree}</Card.Title>
                    <div className="edu-info">
                      <p className="edu-school">{edu.institution}</p>
                      <p className="edu-year">{edu.year}</p>
                    </div>
                    <Card.Text className="edu-description">
                      {edu.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
