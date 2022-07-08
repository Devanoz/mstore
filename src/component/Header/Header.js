import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Logo from '../../images/Logo.png'

export class Header extends Component {
  render() {
    return (

      <Navbar collapseOnSelect expand="lg" className='shadow-lg shadow navbar' >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              className="d-inline-block align-top nav-logo-image"
              alt="Mstore"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" id='home' className='navtext'>Home</Nav.Link>
              <NavDropdown title="Product" id="collasible-nav-dropdown" className='navtext'>
                <NavDropdown.Item href="#action/3.1"><img src={Logo} width='100'></img></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"><img src={Logo} width='100'></img></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><img src={Logo} width='100'></img></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing" className='navtext'>About</Nav.Link>
              <Nav.Link href="#contact" className='navtext'>Contact</Nav.Link>


            </Nav>
            <Nav>
              <Nav.Link href="#deets">Cart</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header