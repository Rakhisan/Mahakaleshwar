import React from "react";
import "./TemplePage.css";

const TemplePages = () => {
  return (
    <div className="temple-container">
      <header className="temple-header">
        <h1>Mahakaleshwar Temple</h1>
        <p>One of the 12 Jyotirlingas in India</p>
      </header>

      <section className="temple-image-section">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Mahakaleshwar_Jyotirlinga_Ujjain.jpg"
          alt="Mahakaleshwar Temple"
          className="temple-image"
        />
      </section>

      <section className="temple-content">
        <h2>About Mahakaleshwar Temple</h2>
        <p>
          Mahakaleshwar Jyotirlinga is located in Ujjain, Madhya Pradesh. It is
          one of the most sacred abodes of Lord Shiva. The temple is situated on
          the side of the holy river Shipra and is among the twelve
          Jyotirlingams, which are considered the most sacred of Shiva temples.
        </p>

        <h3>Significance</h3>
        <p>
          The presiding deity, Shiva in the lingam form, is believed to be
          Swayambhu (self-manifested), deriving currents of power (Shakti) from
          within itself as against the other images and lingams which are
          ritually established and invested with mantra-shakti.
        </p>

        <h3>How to Reach</h3>
        <ul>
          <li>
            <strong>Nearest Railway Station:</strong> Ujjain Junction
          </li>
          <li>
            <strong>Nearest Airport:</strong> Indore Airport (55 km)
          </li>
          <li>
            <strong>Road:</strong> Well connected by buses and taxis
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TemplePages;
