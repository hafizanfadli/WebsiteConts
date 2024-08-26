import React from "react";
import imgcontact from "../assets/contact.jpg";
import { Container } from "react-bootstrap";

const ContactForm = () => {
    return (
        <div className="contactform">
            <Container className="custom-container">
             <div className="contact-section">
                <div className="contact-form-container">
                <div className="contact-form-content">
                    <h2>Have an upcoming work?</h2>
                    <p>We value your feedback and are committed to providing timely and helpful responses to ensure a seamless and positive experience.</p>
                    <form>
                        <div className="form-group">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                        <input type="text" placeholder="Phone Number" />
                        <input type="text" placeholder="Your Website" />
                        </div>
                        <div className="form-group">
                        <textarea placeholder="Message"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Submit Now <span>&rarr;</span></button>
                    </form>
                </div>
            </div>
            <div className="contact-image-container">
                <img src={imgcontact} alt="Contact Us" />
            </div>
        </div>
        </Container>
        </div>
    );
};

export default ContactForm;