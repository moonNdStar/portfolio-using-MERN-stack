import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imageOfGirl from './5239428.png'
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div id='home'>
    <Container className='wave'>
    <Row>
      <Col className='monisha'>HOLA! Myself Monisha.<br></br><Typewriter
        options={{
            loop: true,
        }}
      onInit={(typewriter)=> {
       
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
    </Col>
      <Col>
      <img src={imageOfGirl} height="600px" className='justify-content-end'></img></Col>
    </Row>
    
  </Container>
    </div>
  )
}
