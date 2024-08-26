import React from "react";
import img1 from "../assets/images1.jpg";
import { Container } from "react-bootstrap";

const ProjectsGallery = () => {
    return (
        <Container className="custom-container" id="project">
            <div className="projects-gallery">
            <div className="header">
            <h2>Our Projects</h2>
            <div className="filter-options">
                <a href="#" className="active">All Projects</a>
                <a href="#">Brutalism</a>
                <a href="#">Modern</a>
                <a href="#">Minimalism</a>
            </div>
            </div>
            <div className="gallery">
                <div className="gallery-item"><img src={img1} alt="Project 1" /></div>
                <div className="gallery-item"><img src={img1} alt="Project 2" /></div>
                <div className="gallery-item"><img src={img1} alt="Project 3" /></div>
                <div className="gallery-item"><img src={img1} alt="Project 4" /></div>
                <div className="gallery-item"><img src={img1} alt="Project 5" /></div>
                <div className="gallery-item"><img src={img1} alt="Project 6" /></div>
            </div>
        </div>
        </Container>
    );
};

export default ProjectsGallery;