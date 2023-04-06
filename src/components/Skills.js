import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Skills() {
  return (
    <div>
      <div className="about-bg-1">
        <Container>
          <Row>
            <Col sm={6}>
              <div class="containers">
                <h1 className="skills-heading">Front-end</h1>
                <div class="bar advanced" data-skill="HTML5"></div>
                <div class="bar advanced" data-skill="CSS3"></div>
                <div class="bar advanced" data-skill="Bootstrap5"></div>
                <div class="bar intermediate" data-skill="ReactJS"></div>
              </div>
            </Col>
            <Col className="skill" sm={6}>
              <div class="containers">
                <h1 className="skills-heading">Back-end</h1>
                <div class="bar learning" data-skill="MongoDB"></div>
                <div class="bar intermediate" data-skill="SQL"></div>
                <div class="bar learning" data-skill="Django"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-bg-1">
        <Container>
          <Row>
            <Col sm={6}>
              <div class="containers">
                <h1 className="skills-heading">Software Development</h1>
                <div class="bar advanced" data-skill="C"></div>
                <div class="bar advanced" data-skill="C++"></div>
                <div class="bar intermediate" data-skill="Python"></div>
              </div>
            </Col>
            <Col className="skill" sm={6}>
              <div class="containers">
                <h1 className="skills-heading">Designing</h1>
                <div class="bar advanced" data-skill="Adobe Xd"></div>
                <div class="bar advanced" data-skill="Figma"></div>
                <div class="bar intermediate" data-skill="Adobe Illustrator"></div>
                <div class="bar intermediate" data-skill="Adobe Photoshop"></div>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about-bg">
        <Container>
          <Row>
            <Col sm={6}>
              <div class="containers">
                <h1 className="skills-heading">Microsoft Office</h1>
                <div class="bar advanced" data-skill="Microsoft Word"></div>
                <div class="bar intermediate" data-skill="Microsoft Powerpoint"></div>
                <div class="bar intermediate" data-skill="Microsoft Excel"></div>
              </div>
            </Col>
            <Col className="skill" sm={6}>
              <div class="containers">
                <h1 className="skills-heading">Soft SKills</h1>
                <div class="bar intermediate" data-skill="Problem Solving"></div>
                <div class="bar advanced" data-skill="Communication"></div>
                <div class="bar intermediate" data-skill="Teamwork"></div>
                <div class="bar advanced" data-skill="Time Management"></div>
                <div class="bar advanced" data-skill="Patience"></div>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
