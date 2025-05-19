import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import img1 from "../images/bg1.png";
import img2 from "../images/bg2.png";
import img3 from "../images/bg3.png";
import { ArrowLeft, ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

const HeroSection = () => {
  const slides = [
    {
      image: img1,
      title: "Ujjain Mahakaleswar",
      quote: "The abode of Shiva, where even time bows down",
      info: "One of the twelve Jyotirlingas and an ancient center of spiritual knowledge",
    },
    {
      image: img2,
      title: "Darshan of Mahakal",
      quote: "Gateway to salvation, the ocean of devotion",
      info: "Experience the divine Bhasma Aarti and seek blessings of Lord Shiva",
    },
    {
      image: img3,
      title: "Sacred City of Ujjain",
      quote: "Where faith and spirituality converge",
      info: "Visit Kumbh Mela, where millions gather for spiritual cleansing",
    },
  ];

  const [currSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>
        </div>
      ))}

      <div className="hero-content">
        <div className="hero-main-content">
          <h1>{slides[currSlide].title}</h1>
          <p className="quote">{slides[currSlide].quote}</p>
          <p className="info">{slides[currSlide].info}</p>

          <div className="action-buttons">
            <button className="primary-btn">Book Darshan</button>
            <button className="secondary-btn">Virtual Tour</button>
          </div>
        </div>

        <div className="hero-side-content">
          <div className="info-card">
            <h3>Temple Timings</h3>
            <div className="info-item">
              <Clock size={18} />
              <span>Bhasma Aarti: 4:00 AM - 5:30 AM</span>
            </div>
            <div className="info-item">
              <Clock size={18} />
              <span>Regular Darshan: 6:00 AM - 10:00 PM</span>
            </div>
            <div className="info-item">
              <MapPin size={18} />
              <span>Ujjain, Madhya Pradesh</span>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-controls">
        <button className="slide-arrow prev" onClick={prevSlide}>
          <ArrowLeft size={24} />
        </button>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>

        <button className="slide-arrow next" onClick={nextSlide}>
          <ArrowRight size={24} />
        </button>
      </div>

      <div className="floating-highlights">
        <div className="highlight-item">
          <div className="highlight-icon">🕉️</div>
          <div className="highlight-text">12 Jyotirlinga</div>
        </div>
        <div className="highlight-item">
          <div className="highlight-icon">🏺</div>
          <div className="highlight-text">Kumbh Mela</div>
        </div>
        <div className="highlight-item">
          <div className="highlight-icon">🔱</div>
          <div className="highlight-text">Bhasma Aarti</div>
        </div>
        <div className="highlight-item">
          <div className="highlight-icon">🚁</div>
          <div className="highlight-text">Helicopter Tours</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
