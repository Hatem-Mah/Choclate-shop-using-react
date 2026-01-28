import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Header.css'

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-choco navbar-premium" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3 brand-logo">
          <span className="logo-icon">🍫</span> ChocoMarket
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="#home" className="nav-item">Home</Nav.Link>
            <Nav.Link href="#products" className="nav-item">Our Chocolates</Nav.Link>
            <Nav.Link href="#about" className="nav-item">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-item">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}