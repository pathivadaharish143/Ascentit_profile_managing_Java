import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.jfif';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, getCurrentUser, logout } from '../utils/auth';
import { toast } from 'react-toastify';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check authentication status on component mount and navigation
  useEffect(() => {
    const checkAuth = () => {
      const auth = isAuthenticated();
      const user = getCurrentUser();
      setAuthenticated(auth);
      setCurrentUser(user);
      console.log('Header - Auth status:', auth, 'User:', user);
    };

    checkAuth();
    
    // Listen for authentication events from other components
    const handleAuthLogin = (event) => {
      console.log('Header - Login event received:', event.detail);
      setAuthenticated(true);
      setCurrentUser(event.detail);
    };
    
    const handleAuthLogout = () => {
      console.log('Header - Logout event received');
      setAuthenticated(false);
      setCurrentUser(null);
    };
    
    const handleFocus = () => checkAuth();
    
    // Add event listeners
    window.addEventListener('focus', handleFocus);
    window.addEventListener('auth-login', handleAuthLogin);
    window.addEventListener('auth-logout', handleAuthLogout);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('auth-login', handleAuthLogin);
      window.removeEventListener('auth-logout', handleAuthLogout);
    };
  }, []);

  // Logout handler
  const handleLogout = () => {
    console.log('Header - Logout button clicked');
    const success = logout();
    if (success) {
      // Force immediate state update
      setAuthenticated(false);
      setCurrentUser(null);
      console.log('Header - Logout successful, state updated');
      
      toast.success('Logged out successfully! 👋', {
        position: 'top-center',
        autoClose: 2000,
        theme: 'colored'
      });
      navigate('/login');
    } else {
      toast.error('Error during logout', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored'
      });
    }
  };
  
  return (
    <header className="professional-header">
      <Navbar expand="lg" fixed="top" className="premium-navbar">
        <Container className="nav-container">
          <Navbar.Brand href="#home" className="brand-section">
            <div className="logo-wrapper">
              <img
                src={logo}
                alt="AscentIT LLC"
                className="brand-logo"
              />
            </div>
            <div className="brand-info">
              <span className="brand-name">AscentIT</span>
              <span className="brand-tagline">Professional Solutions</span>
            </div>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
            <span className="toggler-line"></span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navigation-links">
              {/* Public Links - Always visible */}
              <Nav.Link href="/" className="nav-item-pro">
                <i className="nav-icon fas fa-home"></i>
                <span className="nav-text">Home</span>
              </Nav.Link>
              <Nav.Link href="/contact" className="nav-item-pro">
                <i className="nav-icon fas fa-envelope"></i>
                <span className="nav-text">Contact</span>
              </Nav.Link>
              
              {/* Protected Links - Only show when authenticated */}
              {authenticated && (
                <>
                  <Nav.Link href="/dashboard" className="nav-item-pro">
                    <i className="nav-icon fas fa-chart-bar"></i>
                    <span className="nav-text">Dashboard</span>
                  </Nav.Link>
                  <Nav.Link href="/requirements" className="nav-item-pro">
                    <i className="nav-icon fas fa-briefcase"></i>
                    <span className="nav-text">Requirements</span>
                  </Nav.Link>
                  <Nav.Link href="/submission" className="nav-item-pro">
                    <i className="nav-icon fas fa-paper-plane"></i>
                    <span className="nav-text">Submission</span>
                  </Nav.Link>
                </>
              )}
              
              <NavDropdown
                title={
                  <div className="profile-trigger-vertical">
                    <i className="fas fa-user-circle profile-icon"></i>
                    {authenticated && currentUser && (
                      <span className="user-name-tag-below">{currentUser.name}</span>
                    )}
                  </div>
                }
                id="profile-dropdown"
                className="profile-dropdown"
                align="end"
              >
                {!authenticated ? (
                  // Show login options when not authenticated
                  <>
                    <NavDropdown.Item href="/login" className="dropdown-item-pro">
                      <i className="fas fa-sign-in-alt"></i>
                      <span>Login</span>
                    </NavDropdown.Item>
                  </>
                ) : (
                  // Show user options when authenticated
                  <>
                    <NavDropdown.Header className="dropdown-header-pro">
                      <i className="fas fa-user me-2"></i>
                      Welcome, {currentUser?.name || 'User'}!
                    </NavDropdown.Header>
                    <NavDropdown.Divider className="dropdown-divider-pro" />
                    <NavDropdown.Item href="/profiles" className="dropdown-item-pro">
                      <i className="fas fa-users"></i>
                      <span>View Profiles</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" className="dropdown-item-pro">
                      <i className="fas fa-cog"></i>
                      <span>Settings</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider className="dropdown-divider-pro" />
                    <NavDropdown.Item 
                      onClick={handleLogout} 
                      className="dropdown-item-pro logout-item"
                      style={{ cursor: 'pointer' }}
                    >
                      <i className="fas fa-sign-out-alt"></i>
                      <span>Logout</span>
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
