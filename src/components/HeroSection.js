import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="hero-section text-center" id='home'>
      <Container>
        <h1>Building the Future with Superior Quality</h1>
        <p>We are your trusted partner in creating strong, innovative, and aesthetically pleasing structures. From design to completion, we are committed to delivering the best results using cutting-edge technology and top-quality materials.</p>
        <Button variant="primary">Get a Quote</Button>
      </Container>
    </div>
  );
};

export default HeroSection;
