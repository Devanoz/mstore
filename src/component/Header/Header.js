import React, { Component } from 'react'
import {Navbar,NavDropdown, Nav, Container } from "react-bootstrap";
import Logo from '../../images/Logo.png'

export class Header extends Component {
  render() {
    return (
      
<Navbar collapseOnSelect expand="lg" bg="primary" variant="light" className='shadow-lg shadow' >
  <Container>
  <Navbar.Brand href="#home">
  <img
        src={Logo}
        width="100"
        height=""
        className="d-inline-block align-top"
        alt="Mstore"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home" id='home'>Home</Nav.Link>
      <NavDropdown title="Product" id="collasible-nav-dropdown">
        <NavDropdown.Item  href="#action/3.1"><img src={Logo} width='100'></img></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><img src={Logo} width='100'></img></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><img src={Logo} width='100'></img></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>

      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
  }
}

export default Header