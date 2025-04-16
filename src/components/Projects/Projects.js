import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.jpg";
import database from "../../Assets/Projects/database.png";
import chaloyaar from "../../Assets/Projects/chaloyaar.jpg";
import subwaysurface from "../../Assets/Projects/subway.jpg";
import Spotify_Clone from "../../Assets/Projects/Spotify_Clone.jpg";
import banking from "../../Assets/Projects/banking.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={subwaysurface}
              isBlog={false}
              title="AI-Powered Gesture-Based Subway Surfer Controller"
              description=" Enables hand-disabled users to play using head gestures via webcam. Built with Python, OpenCV, MediaPipe, and PyAutoGUI to simulate arrow keys — no extra hardware needed.
               Features: Real-time head tracking, hands-free control, accessibility-focused"
              ghLink="https://github.com/Kirangn24/AI-SUBWAY-CONTROLL"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chaloyaar}
              isBlog={false}
              title="Chaloyaar"
              description=" Chaloyaar is an online bus booking application that streamlines ticket reservations for passengers. We developed it using Java, Spring Boot, MySQL, and frontend technologies to provide a seamless booking experience. The system includes features like real-time seat availability, route management, and secure payments."
              ghLink=""
              demoLink="https://www.chaloyaar.com/Chaloyaar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banking}
              isBlog={false}
              title="Interactive Banking Application"
              description=" I developed an interactive banking application using JDBC and MySQL to manage customer transactions efficiently. The system supports account creation, fund transfers, balance inquiries, and transaction history tracking, ensuring secure and seamless banking operations."
              ghLink=" https://github.com/Kirangn24/BANKING-APPLICATION"
              demoLink="   "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={database}
              isBlog={false}
              title="Restaurant Management Using MySql"
              description=" This project implements a relational database schema for a restaurant management system, leveraging entity relationships to manage customer bookings and delivery addresses efficiently. It employs foreign key constraints to enforce referential integrity between Customers, Bookings, and DeliveryAddress tables. The system also integrates a structured data model for managing course details, optimizing data retrieval and consistency."
              ghLink="https://github.com/Kirangn24/MySql_Project"
              demoLink="    "              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="I developed a simple calculator using HTML, CSS, and JavaScript that performs basic arithmetic operations. It features a responsive design with a user-friendly interface for quick calculations."
              ghLink="https://github.com/Kirangn24/Calculator"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spotify_Clone}
              isBlog={false}
              title="Spotify_Clone"
              description=" I developed a Spotify Clone using HTML, CSS, and JavaScript, replicating the core functionalities of the music streaming platform. The application features a responsive UI, dynamic audio playback, and interactive controls for play, pause, and song navigation, enhancing the user experience."
              ghLink=" https://github.com/Kirangn24/Spotify"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
