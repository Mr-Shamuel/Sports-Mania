import React from 'react';
import League from '../League/League';
import './Home.css'
import { Navbar,Container,Nav } from 'react-bootstrap';


const Home = () => {
    return (
     

        <div className="container">

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Sports Mania</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/league">League</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
           



            <div className="headerimg">
                <div className="headerText">
                    <h1 >Sports Mania</h1>
                </div>
            </div>

            <div className="main bg-dark  ">
                <League></League>
            </div>


        </div>
    );
};

export default Home;