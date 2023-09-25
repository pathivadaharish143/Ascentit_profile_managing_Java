import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'; // Import the Button component
import logo from './images/logo.jfif'; // Import your logo image
import { useAuth } from './Security/AuthContext';

function Header() {
  const authContext=useAuth()
  return (
    <header>
      <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#fd7e14" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="Company Logo"
              style={{ height: '30px', width: 'auto', marginRight: '10px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link href="/dashboard" style={{ color: 'white' }}>Dashboard</Nav.Link>
              
              <Nav.Link href="/submission" style={{ color: 'white' }}>Submittion</Nav.Link>
              <Nav.Link href="/profile" style={{ color: 'white' }}>Contact</Nav.Link>
              <NavDropdown
                title={
                  <Button variant="dark" style={{ borderRadius: '50%', padding: '5px 10px' }}>
                    <i className="fas fa-user" style={{ fontSize: '16px', marginRight: '5px' }}></i>
                  </Button>
                }
                id="basic-nav-dropdown"
                alignRight

              >
                                                  <NavDropdown.Item href="login" style={{ color: 'black' }}>LogIn</NavDropdown.Item>
                                                  <NavDropdown.Item href="login" style={{ color: 'black' }}>Logout</NavDropdown.Item>


                {/* {!authContext.isAuthenicated ?  <NavDropdown.Item href="login" style={{ color: 'black' }}>Login</NavDropdown.Item>:(
                                  <NavDropdown.Item href="login" style={{ color: 'black' }}>Logout</NavDropdown.Item>

                )} */}

             
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
