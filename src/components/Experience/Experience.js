import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Développement d'Interfaces Utilisateur pour la Plateforme SPACeL",
      company: "LIASD",
      period: "4 mai 2023 - 30 juin 2023",
      description:
        "Durant mon stage au LIASD, j'ai contribué au développement des interfaces utilisateur pour la plateforme SPACeL, en mettant l'accent sur la création d'une expérience utilisateur améliorée et la facilitation de l'interaction avec la plateforme. J'ai travaillé avec des technologies telles que React.js, Node.js et TypeScript, et j'ai été impliqué dans l'intégration des services web avec le backend.",
    },
    {
      id: 2,
      title: "Stagiaire en Développement Fullstack React.js/Node.js",
      company:
        "Laboratoire d'Intelligence Artificielle et Sémantique des Données (LIASD)",
      period: "Mars 2024 - Juillet 2024",
      description:
        "Mes principales réalisations incluent la conception et l'amélioration des interfaces d'annotation pour les nouvelles fonctionnalités de la plateforme SPACeL, le développement et l'intégration d'une API en Node.js pour tester ces interfaces, et la dockerisation complète de l'application (front-end, back-end, base de données) pour une meilleure portabilité et gestion des environnements.",
    },
    {
      id: 3,
      title: "Alternant Développeur Full Stack",
      company: "Wartner",
      period: "Novembre 2024 - Présent",
      description:
        "J'occupe le poste d'alternant développeur full-stack chez Wartner, où je contribue activement à des projets de développement web. Mes responsabilités incluent la création de fonctionnalités front-end et back-end, et la mise en œuvre des bonnes pratiques de développement. Cette expérience m'offre l'opportunité de renforcer mes compétences techniques tout en collaborant étroitement avec une équipe de professionnels.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="experience-section section-padding">
      <Container>
        <div className="section-title">
          <h2>Expérience</h2>
          <p>Mon parcours professionnel</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="experience-timeline"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="experience-item"
            >
              <Row className="align-items-center">
                <Col md={2} className="text-center mb-4 mb-md-0">
                  <div className="experience-icon">
                    <FaBriefcase />
                  </div>
                  <div className="experience-period">{exp.period}</div>
                </Col>
                <Col md={10}>
                  <div className="experience-content">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <p>{exp.description}</p>
                  </div>
                </Col>
              </Row>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
