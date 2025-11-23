import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from './images/logo.jfif'; // Import your logo image

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1f2937',
    position: '', // Fixed position
    bottom: '0',       // Stick to the bottom of the viewport
    width: '100%',     // Full width
    zIndex: '999',     // Ensure it's on top of other content
    
  };
  return (
    <footer style={footerStyle} className="text-light">
      <Container>
        <Row>
          <Col md={3} className="">
            <Image
              src={logo}
              alt="Company Logo"
              style={{ height: '40px', width: 'auto', marginRight: '400px' }}
            />
          </Col>
          <Col md={6} className="">
            <h5>Contact Us</h5>
            <p>Email: harish.p@dsafetech.in</p>
            <p>Phone: +91 8985196314</p>
          </Col>
            <Col md={3} className="">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#3b5998' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#55acee' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#dd4b39' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#ac2bac' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#0082ca' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: '#333333' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;