import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="premium-footer">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="footer-section">
            <h5 className="footer-title">🍫 ChocoMarket</h5>
            <p className="footer-text">Bringing the finest chocolates to your doorstep since 2026. Premium quality, handcrafted excellence.</p>
            <div className="social-icons">
              <a href="#" className="social-link">f</a>
              <a href="#" className="social-link">t</a>
              <a href="#" className="social-link">i</a>
            </div>
          </Col>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#products">Our Chocolates</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">
              📧 info@chocomarket.com<br/>
              📞 +1 (555) 123-4567<br/>
              📍 123 Chocolate Lane, Sweet City
            </p>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center">
            <p className="copyright">&copy; 2026 ChocoMarket. All rights reserved. Made with <span className="heart">❤️</span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}