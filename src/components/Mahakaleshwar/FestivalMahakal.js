// FestivalPage.js - Festival info page component
import React from "react";
import { useNavigate } from "react-router-dom";
import { guideCards } from "../Data";

const FestivalPage = () => {
  const navigate = useNavigate();

  // Find the Festival card data
  const selectedCard = guideCards.find((card) => card.slug === "festivals");

  const handleBackClick = () => {
    navigate("/"); // Go back to the Guide page
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

          <h3>Major Festivals</h3>
          <p>
            The Mahakaleshwar Temple is known for its grand celebrations of
            various Hindu festivals. Major festivals like Maha Shivratri,
            Navratri, and Shravan Month draw thousands of devotees each year.
          </p>

          <h3>Maha Shivratri</h3>
          <p>
            Maha Shivratri is one of the most important festivals celebrated at
            the temple. During this festival, devotees gather for night-long
            prayers and offer special rituals to Lord Shiva. The temple is
            adorned with flowers, lights, and grand decorations during this
            festival.
          </p>

          <h3>Navratri</h3>
          <p>
            Navratri, the festival dedicated to the worship of Goddess Durga, is
            celebrated with much enthusiasm at the Mahakaleshwar Temple. The
            temple holds special pujas and aartis during these nine nights, and
            devotees participate in various cultural programs and processions.
          </p>

          <h3>Shravan Month</h3>
          <p>
            The Shravan Month, considered sacred for Lord Shiva devotees, sees a
            massive influx of pilgrims. During this time, devotees offer water
            and milk to the Jyotirlinga as part of their spiritual rituals.
          </p>
        </div>

        <div>
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            className="img-responsive"
          />
          <div className="info-box">
            <h4>Festival Quick Info</h4>
            <ul>
              <li>
                <strong>Major Festivals:</strong> Maha Shivratri, Navratri,
                Shravan Month
              </li>
              <li>
                <strong>Festival Highlights:</strong> Special Aartis,
                Processions, Cultural Events
              </li>
              <li>
                <strong>Peak Festival Time:</strong> Maha Shivratri, Shravan
                Month
              </li>
              <li>
                <strong>Festival Atmosphere:</strong> Devotional, Colorful,
                Cultural
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalPage;
