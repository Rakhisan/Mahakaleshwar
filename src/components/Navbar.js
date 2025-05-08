import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showTopMenu, setShowTopMenu] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleTopMenu = () => {
    setShowTopMenu(!showTopMenu);
  };

  const toggleMainMenu = () => {
    setShowMainMenu(!showMainMenu);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="header">
      {/* Top Menu Bar */}
      <button className="mobile-menu-toggle" onClick={toggleTopMenu}>
        ☰ Top Menu
      </button>
      
      <nav className={`top-nav ${showTopMenu ? 'show' : ''}`}>
        <ul className="top-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/mahakaleshwar">Mahakaleshwar</a></li>
          <li><a href="/harsiddhi-mata">Harsiddhi Mata</a></li>
          <li><a href="/kal-bhairav">Kal Bhairav</a></li>
          <li><a href="/mangalnath-mandir">Mangalnath Mandir</a></li>
          <li><a href="/hotels">Hotels</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/b2b-registration">B2B Registration</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/booking-form">Booking Form</a></li>
          <li><a href="/pay-online">Pay Online</a></li>
         
        </ul>
      </nav>

      {/* Middle Logo and Info Section */}
      <div className="site-branding">
        <div className="site-title">
          <h1>Ujjain Mahakal</h1>
          <div className="site-subtitle">Spiritual Journey</div>
        </div>
        
        {/* <div className="tourism-badge">
          <img src="/tourism-badge.png" alt="Approved by MP Tourism" className="tourism-badge-img" />
        </div>
        
        <div className="temple-bells">
          <img src="/bells.png" alt="Temple Bells" className="bells-img" />
        </div>
         */}
        <div className="contact-info">
          <div className="call-us">
            <span>Call Us: </span>
            <a href="tel:+91XXXXXXXXXX"><img src="/whatsapp.png" alt="WhatsApp" className="whatsapp-icon" /> +91-XXXXXXXXXX</a>
          </div>
          <div className="mail-us">
            <span>Mail Us: </span>
            <a href="mailto:yatra@mahakaltour.in"><img src="/email.png" alt="Email" className="email-icon" /> yatra@mahakaltour.in</a>
          </div>
          <div className="app-download">
            <span>Android & iPhone App</span>
          </div>
        </div>
      </div>

      {/* Bottom Main Menu */}
      <button className="main-menu-toggle" onClick={toggleMainMenu}>
        ☰ Main Menu
      </button>

      <nav className={`main-nav ${showMainMenu ? 'show' : ''}`}>
        <ul className="main-menu">
          <li className="dropdown">
            <a href="#" onClick={() => toggleDropdown(0)}>
              Darshan Tours {activeDropdown === 0 ? '▲' : '▼'}
            </a>
            <ul className={`dropdown-menu ${activeDropdown === 0 ? 'show' : ''}`}>
              <li><a href="/mahakaleshwar-darshan">Mahakaleshwar Darshan</a></li>
              <li><a href="/bhasma-aarti-booking">Bhasma Aarti Booking</a></li>
              <li><a href="/special-entry-passes">Special Entry Passes</a></li>
              <li><a href="/mandir-parikrama">Mandir Parikrama</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" onClick={() => toggleDropdown(1)}>
              Ujjain Yatra {activeDropdown === 1 ? '▲' : '▼'}
            </a>
            <ul className={`dropdown-menu ${activeDropdown === 1 ? 'show' : ''}`}>
              <li><a href="/1-day-ujjain-darshan">1 Day Ujjain Darshan</a></li>
              <li><a href="/ujjain-omkareshwar-yatra">Ujjain + Omkareshwar Yatra</a></li>
              <li><a href="/ujjain-with-indore-tour">Ujjain with Indore Tour</a></li>
              <li><a href="/pilgrimage-taxi-packages">Pilgrimage Taxi Packages</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" onClick={() => toggleDropdown(2)}>
              Temple Wise Darshan {activeDropdown === 2 ? '▲' : '▼'}
            </a>
            <ul className={`dropdown-menu ${activeDropdown === 2 ? 'show' : ''}`}>
              <li><a href="/harsiddhi-mata-darshan">Harsiddhi Mata Darshan</a></li>
              <li><a href="/kal-bhairav-temple-visit">Kal Bhairav Temple Visit</a></li>
              <li><a href="/mangalnath-temple-tour">Mangalnath Temple Tour</a></li>
              <li><a href="/chintaman-ganesh-darshan">Chintaman Ganesh Darshan</a></li>
              <li><a href="/sandipani-ashram-visit">Sandipani Ashram Visit</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" onClick={() => toggleDropdown(3)}>
              Hotels Near Mandir {activeDropdown === 3 ? '▲' : '▼'}
            </a>
            <ul className={`dropdown-menu ${activeDropdown === 3 ? 'show' : ''}`}>
              <li><a href="/hotels-near-mahakal-temple">Hotels Near Mahakal Temple</a></li>
              <li><a href="/hotels-near-railway-station">Hotels Near Railway Station</a></li>
              <li><a href="/budget-deluxe-hotels">Budget & Deluxe Hotels</a></li>
              <li><a href="/dharamshala-booking">Dharamshala Booking</a></li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" onClick={() => toggleDropdown(4)}>
              Useful Links {activeDropdown === 4 ? '▲' : '▼'}
            </a>
            <ul className={`dropdown-menu ${activeDropdown === 4 ? 'show' : ''}`}>
              <li><a href="/train-timings">Train Timings</a></li>
              <li><a href="/aarti-timings">Aarti Timings</a></li>
              <li><a href="/local-transport">Local Transport</a></li>
              <li><a href="/travel-checklist">Travel Checklist</a></li>
            </ul>
          </li>

          <li>
            <a href="/travel-community">Travel Community</a>
          </li>

          <li className="dropdown">
            <a href="#" onClick={() => toggleDropdown(5)}>
              Customer Support {activeDropdown === 5 ? '▲' : '▼'}
            </a>
            <ul className={`dropdown-menu ${activeDropdown === 5 ? 'show' : ''}`}>
              <li><a href="/help-center">Help Center</a></li>
              <li><a href="/contact-form">Contact Form</a></li>
              <li><a href="/faqs">FAQs</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;