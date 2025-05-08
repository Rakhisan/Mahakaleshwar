// TemplePage.js - Temple info page component
import React from "react";
import { useNavigate } from "react-router-dom";
import { guideCards } from "../Data";

const TemplePage = () => {
  const navigate = useNavigate();

  // Find the Mahakaleshwar Temple card data
  const selectedCard = guideCards.find((card) => card.slug === "temple");

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <button
        className="btn"
        onClick={handleBackClick}
        style={{ marginBottom: "20px" }}
      >
        &larr; Back to Guide
      </button>

      <div className="section-title">
        <h2>{selectedCard.title}</h2>
      </div>

      <div className="two-column">
        <div className="content-text">
          <p>{selectedCard.content}</p>

          <h3>Temple Significance</h3>
          <p>
            Mahakaleshwar Jyotirlinga is one of the twelve Jyotirlingas,
            considered the most sacred abodes of Lord Shiva. The temple is
            located beside the holy Kshipra river and holds great spiritual
            importance.
          </p>

          <h3>Architecture</h3>
          <p>
            The temple displays a blend of Rajput and Maratha architectural
            styles, with a towering shikhara (spire), intricate carvings, and
            grand entrances. The sanctum houses the Jyotirlinga facing south — a
            unique feature among the 12 Jyotirlingas.
          </p>

          <h3>Daily Rituals</h3>
          <p>
            Various rituals such as Bhasma Aarti, Rudrabhishek, and Shringar
            Puja are performed daily. Devotees can witness these rituals by
            booking slots in advance. Each ritual enhances the temple’s
            spiritual aura.
          </p>

          <h3>Festivals Celebrated</h3>
          <p>
            Major festivals like Maha Shivratri, Navratri, and Shravan Month see
            huge footfall at the temple. Special aartis, processions, and
            cultural events are organized during these periods.
          </p>
        </div>

        <div>
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            className="img-responsive"
          />
          <div className="info-box">
            <h4>Temple Quick Info</h4>
            <ul>
              <li>
                <strong>Location:</strong> Ujjain, Madhya Pradesh
              </li>
              <li>
                <strong>Deity:</strong> Lord Shiva (Mahakaleshwar)
              </li>
              <li>
                <strong>Speciality:</strong> South-facing Jyotirlinga
              </li>
              <li>
                <strong>Opening Hours:</strong> 4:00 AM – 11:00 PM
              </li>
              <li>
                <strong>Dress Code:</strong> Traditional attire preferred
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplePage;
