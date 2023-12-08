import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, Button } from 'react-bootstrap';

// Replace this with your logo image URL
const logoUrl = 'https://example.com/logo.png';

const NavbarComp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock logged-in state

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <Navbar bg="success" variant="dark">
      <Navbar.Brand href="/">
        <img src={logoUrl} alt="Admin" className="navbar-logo" />
      </Navbar.Brand>
      <Nav className="ms-auto">
        {isLoggedIn && (
          <NavItem>
            <NavLink as={Button} variant="danger" onClick={handleLogout}>
              Logout
            </NavLink>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavbarComp;
