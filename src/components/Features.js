import React from 'react';
import f1 from '../assets/f1.jpg';
import {Container} from 'react-bootstrap';

const AdvancedFeatures = () => {
 const features = [
    {
      title: "Full Project Managing",
      description: "This construction company offers comprehensive services with a skilled team of builders and designers, specializing in residential, commercial, hospitality, and agricultural projects.",
      image: f1,
    },
    {
      title: "General Contract",
      description: "Since its founding in 2000, this construction company has played a key role in some of the most esteemed projects across Australia.This is a detailed description of Feature Two. It provides information about the feature's benefits.",
      image: f1,
    },
  ];

  return (
    <Container className='custom-container'>
      <div className="advanced-features" id='features'>
        <div className='title-feature'>
          <h1>For luxury homes and commercial construction, we provide expert guidance and support.</h1>
        </div>
      {features.map((feature, index) => (
        <div className={`feature ${index % 2 === 0 ? '' : 'feature-reverse'}`} key={index}>
          <div className="feature-image">
            <img src={feature.image} alt={feature.title} />
          </div>
          <div className="feature-text">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      ))}
    </div>
    </Container>
  );
};

export default AdvancedFeatures;
