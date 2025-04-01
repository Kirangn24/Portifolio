import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          

        <p style={{ textAlign: "justify" }}>
  Hi Everyone, I am <span className="purple">Kiran G N</span> from  
  <span className="purple"> Ballari, Karnataka, India.</span>
  <br />
  <br />
  I am currently working as a <b>Software Engineer</b> at 
  <span className="purple"> Radiant Info Systems</span>, where I contribute to building scalable and efficient software solutions.
  <br />
  I have completed my <b>Bachelor of Engineering</b> at 
  <span className="purple"> Global Academy of Technology</span> in Bengaluru, specializing in software development.
  <br />
  <br />
  I have a strong passion for technology and software development, particularly in
  <i>
    <b className="purple"> Java, Spring Boot, Microservices, and SQL.</b>
  </i>
  My expertise lies in developing web applications, backend APIs, and optimizing database operations for high-performance systems.
  <br />
  <br />
  I am highly interested in 
  <b className="purple"> Full-Stack Development</b>, working with both frontend and backend technologies. 
  I enjoy learning and implementing new frameworks like 
  <b className="purple"> React.js, Hibernate, and Spring Cloud</b> to build modern and scalable applications.
  <br />
  <br />

  I am always eager to take on new challenges, improve my skills, and contribute to impactful projects. 
  Let's connect and build something amazing together! 🚀
</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kiran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
