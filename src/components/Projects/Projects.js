import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const projects = [
    {
      id: 7,
      title: "Mario Party Jamboree",
      category: "Web Development",
      image: `${process.env.PUBLIC_URL}/asset/img/mario-party.png`,
      tech: "React, JavaScript",
      github: "https://github.com/ecyriaque/mario-party-jamboree",
      demo: "",
      description:
        "Application React qui sélectionne aléatoirement un plateau de jeu Mario Party et indique à l'utilisateur sur lequel jouer. Développée dans le cadre d'un cours dispensé par Alex Moulinneuf.",
      fullDescription:
        "Application React qui sélectionne aléatoirement un plateau de jeu Mario Party et indique à l'utilisateur sur lequel jouer. Contrairement à un mini-jeu, cette application sert d'outil pour les joueurs de Mario Party en leur proposant une sélection aléatoire de plateaux. Développée dans le cadre d'un cours React dispensé par Alex Moulinneuf, cette application démontre l'utilisation de React pour créer une interface utilisateur simple mais fonctionnelle.",
    },
    {
      id: 1,
      title: "Refonte d'Éditeur d'Emploi du Temps",
      category: "Web Development",
      image: `${process.env.PUBLIC_URL}/asset/img/edt.png`,
      tech: "Flask, Angular",
      github: "https://github.com/ecyriaque/Editeur-EDT.git",
      demo: "",
      description:
        "Projet de groupe pour refondre un éditeur d'emploi du temps, impliquant la conception et le développement avec Flask et Angular. Rôle actif dans les phases de conception, développement back-end et front-end, ainsi que dans le DevOps.",
      fullDescription:
        "Projet de groupe pour refondre un éditeur d'emploi du temps, impliquant la conception et le développement avec Flask et Angular. Rôle actif dans les phases de conception, développement back-end et front-end, ainsi que dans le DevOps.",
    },
    {
      id: 2,
      title: "Site de partage de recette",
      category: "Web Development",
      image: `${process.env.PUBLIC_URL}/asset/img/recette.png`,
      tech: "HTML, CSS, PHP, JavaScript, SQL",
      github: "https://github.com/DUT-Info-Montreuil/Recette5.git",
      demo: "",
      description:
        "Ce projet consiste en un site web de création et de partage de recettes culinaires où les utilisateurs peuvent publier leurs propres recettes, explorer celles d'autres passionnés, et laisser des avis ou des suggestions.",
      fullDescription:
        "Ce projet consiste en un site web de création et de partage de recettes culinaires où les utilisateurs peuvent publier leurs propres recettes, explorer celles d'autres passionnés, et laisser des avis ou des suggestions sur les recettes testées. Il offre une plateforme interactive pour les amateurs de cuisine de tous niveaux, encourageant l'échange de conseils, d'astuces et d'expériences culinaires.",
    },
    {
      id: 3,
      title: "Terraria Like en Java",
      category: "Game Development",
      image: `${process.env.PUBLIC_URL}/asset/img/survie4.png`,
      tech: "Java",
      github: "https://github.com/ecyriaque/survie4.git",
      demo: "",
      description:
        "Réalisation d'un jeu de type Terraria en Java. Le but du jeu est de farmer des ressources, construire des armes, et survivre aux vagues de zombies.",
      fullDescription:
        "Réalisation d'un jeu de type Terraria en Java. Le but du jeu est de farmer des ressources, construire des armes, et survivre aux vagues de zombies.",
    },
    {
      id: 4,
      title: "Application de Gestion de Commandes de Burgers",
      category: "Mobile Development",
      image: `${process.env.PUBLIC_URL}/asset/img/burger7.png`,
      tech: "Android, Java",
      github: "https://github.com/ecyriaque/Burger7",
      demo: "",
      description:
        "Ce projet Android a été développé pour optimiser la prise de commande et la gestion en cuisine via android studio.",
      fullDescription:
        "Ce projet Android a été développé pour optimiser la prise de commande et la gestion en cuisine via android studio. Avec une interface utilisateur intuitive, l'application permet aux utilisateurs de commander des burgers, personnaliser leurs commandes, et aux cuisiniers de suivre en temps réel les demandes des clients.",
    },
    {
      id: 5,
      title: "Pokedex en Angular",
      category: "Web Application",
      image: `${process.env.PUBLIC_URL}/asset/img/pokedex.jpeg`,
      tech: "Angular, TypeScript",
      github: "https://github.com/ecyriaque/poke8.git",
      demo: "",
      description:
        "Réalisation d'un Pokedex utilisant Angular, offrant une interface utilisateur interactive pour parcourir et afficher des informations sur divers Pokémon.",
      fullDescription:
        "Réalisation d'un Pokedex utilisant Angular, offrant une interface utilisateur interactive pour parcourir et afficher des informations sur divers Pokémon.",
    },
    {
      id: 6,
      title:
        "Optimisation et Déploiement d'une Plateforme d'Emploi du Temps Académique",
      category: "DevOps",
      image: `${process.env.PUBLIC_URL}/asset/img/Courroux.PNG`,
      tech: "Python, Angular, Docker, Jenkins, SonarQube",
      github: "https://github.com/DUT-Info-Montreuil/SAE_6.A-EDT_V0-SAPP",
      demo: "",
      description:
        "Le projet consiste à améliorer une application existante en intégrant de nouveaux services, en établissant un processus d'intégration continue.",
      fullDescription:
        "Le projet consiste à améliorer une application existante en intégrant de nouveaux services, en établissant un processus d'intégration continue avec le client final pour les tests et les retours, et en configurant l'environnement de déploiement. J'ai joué un rôle crucial dans le déploiement de l'application via Docker, en utilisant l'interface graphique de Portainer pour configurer les ports et garantir un déploiement efficace et sécurisé.",
    },
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <Container>
        <div className="section-title">
          <h2>Projets</h2>
          <p>Découvrez quelques-uns de mes projets académiques</p>
        </div>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="project-card">
                  <div className="project-img-container">
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      className="project-img"
                    />
                    <div className="project-overlay">
                      <Button
                        variant="light"
                        size="sm"
                        className="project-details-btn"
                        onClick={() => handleShow(project)}
                      >
                        Voir détails
                      </Button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="project-title">
                      {project.title}
                    </Card.Title>
                    <div className="project-category">{project.category}</div>
                    <Card.Text className="project-desc">
                      {project.description.length > 100
                        ? `${project.description.substring(0, 100)}...`
                        : project.description}
                    </Card.Text>
                    <div className="project-tech">Tech: {project.tech}</div>
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaExternalLinkAlt /> Demo
                        </a>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Project Details Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="img-fluid project-modal-img mb-4"
              />
              <h5>Description</h5>
              <p>{selectedProject.fullDescription}</p>
              <h5>Technologies utilisées</h5>
              <p>{selectedProject.tech}</p>
              <div className="project-modal-links">
                {selectedProject.github && (
                  <Button
                    variant="primary"
                    href={selectedProject.github}
                    target="_blank"
                    className="me-3"
                  >
                    <FaGithub className="me-2" /> Voir le code
                  </Button>
                )}
                {selectedProject.demo && (
                  <Button
                    variant="success"
                    href={selectedProject.demo}
                    target="_blank"
                  >
                    <FaExternalLinkAlt className="me-2" /> Démo en direct
                  </Button>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fermer
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
