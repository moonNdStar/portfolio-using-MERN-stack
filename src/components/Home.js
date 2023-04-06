import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imageOfGirl from "./5239428.png";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import pdf from "./updated_resume.pdf"
export default function Home() {

  const onButtonClick=()=>{
    fetch('updated_resume.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'updated_resume.pdf';
          alink.click();
      })
  })
  }


  return (
    <div className="home">
      <div id="home">
        <Container className="wave">
          <Row>
            <Col sm={6} className="monisha">
              <span className="hola">HOLA!</span>
              <span className="mona"> Myself Monisha.</span>
              <br></br>
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Web Designer")

                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Web Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Competitive Programmer")
                    .start();
                }}
              />
              <br></br>
              <Col><a href={pdf} download><Button variant="primary" className="resume" size="lg" active>
              Download Resume
            </Button></a></Col>
            </Col>
            <Col sm={6}>
            <div className="centering-girl">
              <img
                src={imageOfGirl}
                width="100%"
                className="justify-content-end text-end"
                id="girl-image"
              ></img></div>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
        </Container>
      </div>
    </div>
  );
}
