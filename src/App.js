
import './App.css';
import React from 'react';
import NavigationBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AdvancedFeatures from './components/Features';
import OurSkill from './components/OurSkill';
import ProjectsGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <AdvancedFeatures />
      <OurSkill />
      <ProjectsGallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

  export default App;
