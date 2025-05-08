// TemplePage.js - Temple page component
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { guideCards } from './Data';

const TemplePage = () => {
  const navigate = useNavigate();
  
  // Find the temple card data
  const selectedCard = guideCards.find(card => card.slug === 'temple');
  
  const handleBackClick = () => {
    navigate('/');
  };
  
  return (
    <div className="container">
      <button className="btn" onClick={handleBackClick} style={{ marginBottom: '20px' }}>
        &larr; Back to Guide
      </button>
      <div className="section-title">
        <h2>{selectedCard.title}</h2>
      </div>
      <div className="two-column">
        <div className="content-text">
          <p>{selectedCard.content}</p>
          <h3>Temple Structure</h3>
          <p>The Mahakaleshwar Temple has a unique structure with five levels. The idol of Lord Mahakaleshwar is placed on the lowest level. The temple is one of the few Jyotirlingas where the Shivalinga faces south, which is considered a rare and significant feature. The lingam at Mahakaleshwar is believed to be swayambhu (self-manifested).</p>
          
          <h3>Religious Significance</h3>
          <p>As one of the twelve Jyotirlingas, Mahakaleshwar holds immense religious significance in Hinduism. The temple is mentioned in various ancient texts including the Puranas. It is believed that offering prayers at this temple fulfills one's wishes and cleanses one's soul. The energy of the place is said to be so powerful that it can transform one's life.</p>
          
          <h3>Daily Rituals</h3>
          <p>The temple follows a strict routine of daily rituals. The day begins with the Bhasma Aarti, followed by various poojas throughout the day. The Shivalinga is adorned with different offerings at different times of the day, including milk, water, bel leaves, flowers, and sandalwood paste. The temple also observes special rituals on Mondays and during the holy month of Shravan.</p>
        </div>
        <div>
          <img src={selectedCard.image} alt={selectedCard.title} className="img-responsive" />
          <div className="temple-highlights">
            <h4>Temple Highlights</h4>
            <ul className="highlight-list">
              <li><strong>Status:</strong> One of the 12 Jyotirlingas</li>
              <li><strong>Unique Feature:</strong> South-facing Lingam</li>
              <li><strong>Main Deity:</strong> Lord Shiva as Mahakaleshwar</li>
              <li><strong>Special Ritual:</strong> Bhasma Aarti at 4:00 AM</li>
              <li><strong>Temple Timings:</strong> 4:00 AM to 11:00 PM</li>
              <li><strong>Break Time:</strong> 12:30 PM to 3:30 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplePage;