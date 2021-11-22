import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const About = () => {
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

      <div className="aboutDetails ">
        <h1 className="m-0">Our Sports: </h1>

        <p className="pt-4 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam culpa dolorem veritatis maiores unde nisi, recusandae alias nesciunt nostrum iure corrupti natus totam eius minus rerum molestiae tempora, architecto earum quidem explicabo. Voluptatem deserunt dolores laudantium ex ut earum iusto, fugiat nihil repudiandae maiores, non perferendis consectetur aut! Magnam similique eligendi cumque fuga modi nesciunt tempore ducimus mollitia reprehenderit corrupti itaque, eos, eaque voluptatem, libero nisi necessitatibus voluptatum?  </p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci molestiae repudiandae voluptatum ipsa? Porro et voluptatum quas molestiae ipsam assumenda dicta quis facilis excepturi voluptates omnis totam sint sunt, tempora illum eos saepe quia minima. Repellat, beatae iusto reiciendis autem harum deleniti! Accusamus et unde, adipisci totam quo accusantium neque repellendus facilis dolores voluptatum recusandae sed eveniet similique impedit exercitationem deserunt, nihil, incidunt quisquam esse voluptatibus quaerat. Hic totam ex odit nesciunt cupiditate molestias, iure ab harum autem optio consequuntur perferendis ipsa. Porro suscipit quidem necessitatibus sit debiti.</p>


      </div>

    </div>
  );
};

export default About;