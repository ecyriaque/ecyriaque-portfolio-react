import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobile,
  FaCogs,
  FaTools,
} from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Développement Web",
      icon: <FaCode />,
      skills: ["HTML5/CSS3", "JavaScript", "React.js", "Angular", "symfony"],
    },
    {
      id: 2,
      title: "Développement Back-End",
      icon: <FaServer />,
      skills: ["Node.js", "Flask (Python)", "PHP (Symfony)", "Java (Spring)"],
    },
    {
      id: 3,
      title: "Bases de données",
      icon: <FaDatabase />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
    },
    {
      id: 4,
      title: "Développement Mobile",
      icon: <FaMobile />,
      skills: ["Android (Java)"],
    },
    {
      id: 5,
      title: "DevOps & Outils",
      icon: <FaCogs />,
      skills: ["Git/GitHub", "Docker", "Jenkins", "SonarQube"],
    },
    {
      id: 6,
      title: "Autres",
      icon: <FaTools />,
      skills: ["UML/Méthodes agiles", "Linux", "AWS"],
    },
  ];

  return (
    <section id="skills" className="skills-section section-padding">
      <Container>
        <div className="section-title">
          <h2>Compétences</h2>
          <p>Technologies que je maîtrise</p>
        </div>

        <Row>
          {skillCategories.map((category, index) => (
            <Col lg={6} key={category.id} className="mb-4">
              <motion.div
                className="skill-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-header">
                  <div className="skill-icon">{category.icon}</div>
                  <h3 className="skill-title">{category.title}</h3>
                </div>
                <div className="skill-content">
                  <ul className="skill-list">
                    {category.skills.map((skill) => (
                      <li key={skill} className="skill-list-item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <motion.div
              className="skill-additional-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4">Compétences techniques et transversales</h3>
              <p>
                Au-delà des langages de programmation et des technologies
                spécifiques, je possède également des compétences solides en
                résolution de problèmes, travail d'équipe, et gestion de projet.
                Je suis engagé dans un processus d'apprentissage continu pour
                rester à jour avec les dernières tendances et technologies du
                domaine informatique.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
