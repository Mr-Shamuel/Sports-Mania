import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Sports Mania</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/league">League</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
            <h1>This is about</h1>
        </div>
    );
};

export default About;