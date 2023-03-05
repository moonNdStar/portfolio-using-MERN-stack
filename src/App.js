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
        <Navbar bg="light" expand="lg" id="nav-nav">
          <Container fluid>
            <Navbar.Brand
              href="#"
              className="mona-name"
              font-aria-setsize={400}
            >
              Monisha Nagpal
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="justify-content-center flex-grow-1 pe-3 "
                style={{ maxHeight: "100px" }}
                navbarScroll
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

        <Container fluid="md">
          <Row>
            <Col className="text-center">
              <img src={github} height="30px"></img>
              <img src={fb} height="30px"></img>
              <img src={instagram} height="30px"></img>
              <img src={linkedin} height="30px"></img>
              <img src={twitter} height="30px"></img>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>Copyright &#169; 2023 by Monisha</p>
            </Col>
          </Row>
          <Row><Col className="text-center">
          <p>Made With &#10084;&#65039;</p>
        </Col></Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
