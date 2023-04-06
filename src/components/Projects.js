import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pic1 from "./project1.png";
import pic2 from "./project3.png"
import pic3 from "./project2.png"
export default function Projects() {
  return (<div>
    <div className="skill-div text-center">

      <Container>
        <Row>
          <Col className="text-center" id="btn" sm>
            <Card className="text-center card" id="card" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={pic1} />
              <Card.Body className="project-body">
                <Card.Title className="name-of-project">
                  Modular Rasoi
                </Card.Title>
                <Card.Text className="black">
                  A kitechen accessories selling website made using ReactJS.
                </Card.Text>
                <a
                  href="https://peaceful-poincare-cc1c6a.netlify.app"
                  target={"_blank"}
                >
                  {" "}
                  <Button variant="primary" className="livep1">
                    VIEW LIVE
                  </Button>
                </a>
                <br></br>
                <br></br>
                <Card.Link href="#" className="source">
                  Source Code
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <br></br>
          <br></br>
          <Col className="text-center" id="btn" sm>
            <Card className="text-center card2" id="card2" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={pic2} />
              <Card.Body className="card2">
                <Card.Title className="name-of-project">
                  D-leaf
                </Card.Title>
                <Card.Text className="black">
                  A website made using reactJS and uses Blockchain Technology that allows the resale of any event ticket by converting them to NFTs.
                </Card.Text>
                <a
                  href="https://frabjous-chaja-53419c.netlify.app/"
                  target={"_blank"}
                >
                  {" "}
                  <Button variant="primary" className="livep1">
                    VIEW LIVE
                  </Button>
                </a>
                <br></br>
                <br></br>

                <Card.Link href="https://github.com/moonNdStar/data-science-hack-2022-" target={"_blank"} className="source">
                  Source Code
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <br></br>
          <br></br>

          <Col className="text-center" id="btn" sm>
            <Card className="text-center card3" id="card3" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={pic3} />
              <Card.Body className="card2">
                <Card.Title className="name-of-project">
                  Portfolio Website
                </Card.Title>
                <Card.Text className="black">
                  A simple portfolio website made using HTML, CSS and Bootstrap.
                </Card.Text>
                <a
                  href="https://monisha-fa4ff.web.app/"
                  target={"_blank"}
                >
                  {" "}
                  <Button variant="primary" className="livep1">
                    VIEW LIVE
                  </Button>
                </a>
                <br></br>
                <br></br>
                <Card.Link href="https://github.com/moonNdStar/Learning" target={"_blank"} className="source">
                  Source Code
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr></hr>
        
      </Container>
      <div className="omen"></div>
    </div>
    <div className="omen"><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
    </div>
  );
}
