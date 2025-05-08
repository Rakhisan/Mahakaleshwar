import React, { useState } from 'react';
import './MahakalTourPackages.css';

const MahakalTourPackages = () => {
  const [activePackage, setActivePackage] = useState(null);

  const packages = [
    {
      id: 1,
      icon: "🕉️",
      title: "Mahakaleshwar Darshan Express",
      subtitle: "1 Day Trip",
      duration: "1 Day",
      includes: ["VIP Darshan Pass", "Rudrabhishek Puja", "Mandir Prasad", "Local Guide"],
      price: "₹999",
      description: "Experience the divine energy of Mahakaleshwar with a same-day darshan package. Skip the lines with VIP access and perform Rudrabhishek under the guidance of our experienced priests."
    },
    {
      id: 2,
      icon: "🔱",
      title: "Mahakal Weekend Retreat Express",
      subtitle: "2 Days / 1 Night",
      duration: "2 Days / 1 Night",
      includes: ["3-star Hotel Stay", "VIP Darshan", "Evening Aarti Experience", "Complimentary Breakfast"],
      price: "₹2,499",
      description: "Perfect for weekend travellers, this package lets you soak in the spiritual vibe of Mahakaleshwar Mandir and spend a peaceful night in Ujjain with all amenities arranged."
    },
    {
      id: 3,
      icon: "🧘‍♂️",
      title: "Mahakal + Omkareshwar Jyotirling Yatra",
      subtitle: "3 Days / 2 Nights",
      duration: "3 Days / 2 Nights",
      includes: ["AC Cab Travel", "Hotel Stay (Ujjain + Omkareshwar)", "VIP Darshan at both Jyotirlingas", "Puja Kit"],
      price: "₹5,999",
      description: "Cover two sacred Jyotirlingas in one divine journey. Start at Mahakaleshwar and complete your yatra with Omkareshwar Darshan. Cab, hotels, and darshan – all taken care of."
    },
    {
      id: 4,
      icon: "🚩",
      title: "Ujjain Spiritual Trail",
      subtitle: "5 Days Pilgrimage Tour",
      duration: "5 Days / 4 Nights",
      includes: ["Mahakaleshwar, Omkareshwar, Kal Bhairav, Mangalnath, Ram Ghat visit", "Daily puja and spiritual session", "Guide for each temple", "Comfortable stay & meals"],
      price: "₹9,999",
      description: "An immersive spiritual journey across Ujjain's most divine spots. Get deeper into the heart of India's spiritual capital with personalized rituals and expert guides."
    },
    // {
    //   id: 5,
    //   icon: "💫",
    //   title: "Custom Mahakal Group Tour",
    //   subtitle: "On Request",
    //   duration: "Custom",
    //   includes: ["Custom itinerary", "Hotel + Cab + Food + Darshan"],
    //   price: "₹7,500",
    //   priceNote: "for 2 people",
    //   description: "Travelling in a group or planning a family visit? We offer fully customizable Mahakal tour plans tailored to your timing and budget. Just drop your requirements and let us plan your spiritual trip."
    // },
    // {
    //     id: 6,
    //     icon: "🔥",
    //     title: "Mahakal Sunrise Aarti & Wellness Retreat",
    //     subtitle: "2 Days / 1 Night",
    //     duration: "2 Days / 1 Night",
    //     includes: [
    //         "Bhasma Aarti VIP Entry",
    //         "Morning Meditation at Ram Ghat",
    //         "Ayurvedic Massage Session",
    //         "Stay at Heritage Ashram"
    //     ],
    //     price: "₹3,499",
    //     description: "Awaken your soul with the sacred Bhasma Aarti at dawn followed by a rejuvenating wellness retreat. Ideal for seekers wanting a peaceful escape with spiritual and wellness balance."
    // }
    
  ];

  const handlePackageClick = (id) => {
    setActivePackage(activePackage === id ? null : id);
  };

  return (
    <div className="mahakal-tour-container">
      <div className="mahakal-header">
        <h1 className="mahakal-tour-title">Suggested Mahakal Tour Packages</h1>
        <div className="divine-line"></div>
      </div>
      
      <div className="mahakal-packages-grid">
        {packages.map(pkg => (
          <div 
            key={pkg.id} 
            className={`mahakal-package-card ${activePackage === pkg.id ? 'active' : ''}`}
            onClick={() => handlePackageClick(pkg.id)}
          >
            <div className="card-accent-top"></div>
            
            <div className="package-icon-wrapper">
              <span className="package-icon">{pkg.icon}</span>
            </div>
            
            <div className="package-header">
              <h2 className="package-title">{pkg.title}</h2>
              <h3 className="package-subtitle">{pkg.subtitle}</h3>
            </div>
            
            <div className="package-price">
              <span className="price-value">{pkg.price}</span>
              {pkg.priceNote && <span className="price-note">{pkg.priceNote}</span>}
              <span className="per-person">per person</span>
            </div>
            
            <div className="feature-divider"></div>
            
            <div className="package-details">
              <div className="package-duration">
                <span className="detail-label">Duration:&nbsp;&nbsp;</span>
                <span className="detail-value">{pkg.duration}</span>
              </div>
              
              <div className="package-includes">
                <span className="detail-label">Includes:</span>
                <ul>
                  {pkg.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="package-description">
              <p style={{color:"black"}}>{pkg.description}</p>
            </div>
            
            <button className="book-now-btn">
              Book Now
              <span className="btn-icon">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MahakalTourPackages;