import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home from "./components/Home";
import github from "./github-logo.png";
import fb from "./facebook.png";
import twitter from "./twitter-sign.png";
import linkedin from "./linkedin.png";
import instagram from "./instagram.png";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" expand="lg" id="nav-nav" variant="dark">
          <Container fluid>
            <Navbar.Brand
              href="#"
              className="mona-name"
              font-aria-setsize={400}
            >
              Monisha Nagpal
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className="justify-content-center flex-grow-1 pe-3 "
                style={{ maxHeight: "300px" }}
                
              >
                <Nav.Link className="Link1" as={Link} to="/">
                  HOME
                </Nav.Link>
                <Nav.Link className="Link2" as={Link} to="/about">
                  ABOUT
                </Nav.Link>
                <Nav.Link className="Link3" as={Link} to="/skill">
                  SKILLS
                </Nav.Link>
                <Nav.Link className="Link4" as={Link} to="/project">
                  PROJECTS
                </Nav.Link>
                <Nav.Link className="Link4" as={Link} to="/experience">
                  EXPERIENCE
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button variant="outline-success">CONTACT ME</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div className="footer" id="lol">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
         
          <br></br>
          <Container fluid="md" className="footer">
            <Row>
              <Col className="text-center" id="socio-img">
                <a
                  href="https://github.com/moonNdStar/"
                  target={"_blank"}
                  className="icon1"
                >
                  {" "}
                  <img src={github} height="30px"></img>
                </a>
                <a
                  href="https://www.facebook.com/monisha.nagpal.3"
                  target={"_blank"}
                  className="icon2"
                >
                  <img src={fb} height="30px"></img>
                </a>
                <a
                  href="https://www.instagram.com/mooonishaa/?hl=en"
                  target={"_blank"}
                  className="icon3"
                >
                  <img src={instagram} height="30px"></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/monisha-nagpal-832b351b4/"
                  target={"_blank"}
                  className="icon4"
                >
                  <img src={linkedin} height="30px"></img>
                </a>
                <a
                  href="https://twitter.com/monisha_nagpal"
                  target={"_blank"}
                  className="icon5"
                >
                  <img src={twitter} height="30px"></img>
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <p className="copyright">Copyright &#169; 2023 by Monisha</p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <p className="love">Made With &#10084;&#65039;</p>
              </Col>
            </Row>
            
          </Container>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
