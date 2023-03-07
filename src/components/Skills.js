import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Skills() {
  return (
    <div>
      <div className="about-bg">
        <Container>
          <Row>
            <Col sm={6}>
              <div class="containers">
                <h1 className="skills-heading">Soft Skills</h1>
                <div class="bar learning" data-skill="TDD"></div>
                <div class="bar back basic" data-skill="Python"></div>
                <div class="bar back intermediate" data-skill="C#"></div>
                <div class="bar front advanced" data-skill="CSS3"></div>
                <div class="bar front expert" data-skill="HTML5"></div>
              </div>
            </Col>
            <Col className="skill" sm={6}>
              <div class="containers">
                <h1 className="skills-heading">Hard Skills</h1>
                <div class="bar learning" data-skill="TDD"></div>
                <div class="bar back basic" data-skill="Python"></div>
                <div class="bar back intermediate" data-skill="C#"></div>
                <div class="bar front advanced" data-skill="CSS3"></div>
                <div class="bar front expert" data-skill="HTML5"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
