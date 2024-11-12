import React from 'react'
import "./header.css"
import { Container,Navbar,Nav } from 'react-bootstrap'
import logo from "../../assets/logo.png"

const Header = () => {
  
 



  return (
    

    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo}></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link  href="#link">Menu</Nav.Link>
          <Nav.Link  href="#link">Events</Nav.Link>
          <Nav.Link  href="#link">Gallery</Nav.Link>
          <Nav.Link  href="#link">About</Nav.Link>
          <Nav.Link  href="#link">Contact</Nav.Link>
        </Nav>
        <a className='button'>Book a Table</a>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  




  )
}

export default Header