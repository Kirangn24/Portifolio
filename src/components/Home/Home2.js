import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I love programming, and over the years, I have explored, learned, and built various projects that strengthened my understanding of software development. 
  <br />
  <br />I am proficient in classics like
  <i>
    <b className="purple"> Java, MySQL, and Web Technologies, </b>
  </i>
  and I continuously strive to expand my expertise in modern frameworks and tools.
  <br />
  <br />
  My field of interest lies in designing and developing scalable &nbsp;
  <i>
    <b className="purple">Web Technologies and Products, </b>
  </i>
  with a strong inclination toward 
  <b className="purple"> Microservices Architecture, Cloud Computing, and Distributed Systems. </b>
  <br />
  <br />
  I am particularly passionate about building robust backend systems using
  <b className="purple"> Spring Boot, Hibernate, and RESTful APIs, </b>
  ensuring high performance and efficiency. 
  Additionally, I enjoy exploring modern frontend technologies like
  <i>
    <b className="purple"> React.js </b>
  </i>
  to create dynamic and responsive user interfaces.


  <br />
  <br />
  I strongly believe in writing clean, maintainable, and efficient code, and I actively follow best practices in software development.  
  Exploring new technologies, contributing to open-source projects, and solving real-world problems through code are what drive my passion for programming!
</p>




          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kirangn24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kiran-g-n-1771a1220/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kiran__g__n"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
