import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, FormControl } from 'react-bootstrap';

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  const testimonials = [
    {
      quote: "We cannot understand how we lived without the services of your company. this is the perfect solution for our house! the best construction company ruc!",
      name: "John Doe",
      title: "CEO, Company A"
    },
    {
      quote: "Highly recommend to anyone looking to improve their business.",
      name: "Jane Smith",
      title: "CTO, Company B"
    },
    {
      quote: "A game-changer for our industry, truly exceptional!",
      name: "Bob Johnson",
      title: "Founder, Startup C"
    },
  ];

  return (
    <Container className='custom-container'>
      <div className="testimonials" id='testimonials'>
      <h2 className='text-center mb-5'>What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) =>(
        <div key={index} className='testimonial-item'>
            <p>"{testimonial.quote}"</p>
            <div className="testimonial-author">
              <h5>{testimonial.name}</h5>
              <p>{testimonial.title}</p>
            </div>
        </div>
        
        ))}
      </Slider>
    </div>
    </Container>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 2, color: "#888", fontSize: "25px" }}
      onClick={onClick}
    >
      &#10094; {/* Character for left arrow */}
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "40px", zIndex: 2, color: "#888", fontSize: "25px" }}
      onClick={onClick}
    >
      &#10095; {/* Character for right arrow */}
    </div>
  );
};

export default Testimonials;
