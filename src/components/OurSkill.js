import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import skill from '../assets/skill.png';

const OurSkill = () => {

    const ProgressBar = ({label, percentage}) => {
        return (
            <div className="progress-bar-container">
                <div className="progress-label">
                    <span>{label}</span>
                    <span>{percentage}%</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
        );
    }

    return (
        <div className="ourskill" id="skill">
            <Container className="custom-container">
                <Row>
                    <Col md={7}>
                    <h1>We Develop comprehensive solutions for each project</h1>
                    <p>Concrete, a fundamental material in construction, is being transformed for the modern era. This article delves into the creation of high-performance concrete and eco-friendly mixtures, emphasizing how innovations in material science are improving durability and reducing environmental impact.</p>
                    <ProgressBar label="Architecture" percentage={80} />
                    <ProgressBar label="Building" percentage={70} />
                    <ProgressBar label="Architecture" percentage={90} />
                    </Col>
                    <Col md={5}>
                    <img src={skill} />
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default OurSkill;