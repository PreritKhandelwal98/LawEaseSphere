import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>LawEaseSphere</h1>
              </div>
              <p>Provide comprehensive corporate governance solutions, including compliance, advisory, and secretarial services, ensuring legal and regulatory adherence for businesses' sustained success.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Blogs</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Services</h2>
              <ul>
                <li>Incorporation </li>
                <li>Registrations </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>Malviya Nagar, Jaipur, Rajasthan </li>
                <li>Email: csgarimakhandelwal.com</li>
                <li>Phone: +91 9521 423 185</li>
              </ul>
            </Col>
          </Row>
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
  Follow Us: 
  <div>
    <a className='text-reset fw-bold me-3' href='https://www.linkedin.com/in/garima-khandelwal-01614a156/'>
      <FaLinkedin />
    </a>
    <a className='text-reset fw-bold me-3' href='https://www.instagram.com/your_instagram_handle/'>
      <FaInstagram />
    </a>
    <a className='text-reset fw-bold me-3' href='https://www.youtube.com/your_youtube_channel'>
      <FaYoutube />
    </a>
    <a className='text-reset fw-bold me-3' href='https://twitter.com/your_twitter_handle'>
      <FaTwitter />
    </a>
  </div>
</div>
        </Container>
        
    </footer>
  )
}

export default Footer