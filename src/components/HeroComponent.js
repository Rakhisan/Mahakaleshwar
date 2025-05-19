import { useState, useEffect } from 'react';
import './HeroComponent.css'; // We'll create this CSS file separately
import ujjainVideo from "../images/vid1.mov"; 

export default function HeroComponent() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="hero-container">
      {/* Background Video */}
      <div className="video-background">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
        >
         
          <source src={ujjainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay with gradient */}
        <div className="overlay"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">Ujjain</span> - The City of Temples
        </h1>
        <p className="hero-subtitle">
          Discover the spiritual heritage and ancient culture of one of India's holiest cities
        </p>
        <div className="hero-buttons">
          <button className="primary-button">
            Explore Ujjain
          </button>
          <button className="secondary-button">
            Plan Your Visit
          </button>
        </div>
      </div>
    </div>
  );
}