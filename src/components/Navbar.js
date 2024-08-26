import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {

  const [navbarStyle, setNavbarStyle] = useState ({
    backgroundColor: 'transparent',
    color: 'white',
    boxShadow: 'none',
    toggleIconColor: 'white'
  });
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setNavbarStyle({
        backgroundColor: 'white',
        color: '#555',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        toggleIconColor: '#555'
      });
    }else{
      setNavbarStyle({
        backgroundColor: 'transparent',
        color: 'white',
        boxShadow: 'none',
        toggleIconColor: 'white'
      })
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed='top'
      className={navbarStyle.backgroundColor === 'white' ? 'navbar scrolled' : ''}
      style={{
        backgroundColor: navbarStyle.backgroundColor,
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: navbarStyle.boxShadow,
      }}>
      <Container className='custom-container'>
        <Navbar.Brand href="#home" style={{color: navbarStyle.color}}>BrandName</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
          borderColor: 'transparent',
          color: navbarStyle.toggleIconColor
        }}
          className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" style={{color: navbarStyle.color}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{color: navbarStyle.color}}>Features</Nav.Link>
            <Nav.Link href="#project" style={{color: navbarStyle.color}}>Project</Nav.Link>
            <Nav.Link href="#testimonials" style={{color: navbarStyle.color}}>Testimonials</Nav.Link>
            <Nav.Link href="#contact" style={{color: navbarStyle.color}}>Contact</Nav.Link>
          </Nav>
          <Button className="ml-auto" id='custom-btn'>Contact Us</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
