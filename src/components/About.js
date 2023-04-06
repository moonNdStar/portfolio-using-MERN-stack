import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import pic from "./mona-pic.jpg";
export default function About() {
  return (
    <div className="about-bg">
      <Container>
        <Row>
          <Col sm={5}>
            <div className="centering-mona">
              <img
                src={pic}
                width="50%"
                className="justify-content-end text-end"
              ></img>
            </div>
          </Col>
          <Col className="about-us" sm={7}>
            <p>
              <span className="hello-world">Hello World!</span>
              <br></br>
              <br></br>
              My name is Monisha Nagpal. I am pursuing B.Tech from SRM
              University in the field of Computer Science And Engineering with
              specialization in Cyber Security. I love combining the world of
              logic and creative design to make eye-catching, accessible, and
              user-friendly websites and applications. Along with that, I also
              practice competitive programming to enhance my problem-solving
              skills. When I am not coding, I am probably hanging out with my
              friends, doing college work, cooking, shopping or watching some
              series on Netflix. I am excited about making the leap and
              continuing refining my skills with the right company.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
