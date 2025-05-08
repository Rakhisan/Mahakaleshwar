// HistoryPage.js - History info page component
import React from "react";
import { useNavigate } from "react-router-dom";
import { guideCards } from "../Data";

const HistoryPage = () => {
  const navigate = useNavigate();

  // Find the History card data
  const selectedCard = guideCards.find((card) => card.slug === "history");

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

          <h3>Historical Significance</h3>
          <p>
            The history of the Mahakaleshwar Temple dates back to ancient times.
            The temple is considered one of the holiest pilgrimage sites for
            followers of Lord Shiva. Its existence is mentioned in various
            ancient scriptures and texts, and it has been a key religious
            landmark for centuries.
          </p>

          <h3>Legends and Myths</h3>
          <p>
            Several legends surround the Mahakaleshwar Temple. One of the most
            popular myths states that the temple was built by the gods
            themselves. Another myth suggests that it was established by Lord
            Shiva’s devotee, King Chandrasena, after receiving divine blessings.
          </p>

          <h3>Historical Architecture</h3>
          <p>
            The temple’s architecture reflects the splendor of ancient times,
            with a mix of traditional Hindu temple designs and intricate
            carvings that tell the story of the temple’s rich past. The
            architectural style has evolved over centuries, incorporating
            elements from various dynasties.
          </p>
        </div>

        <div>
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            className="img-responsive"
          />
          <div className="info-box">
            <h4>History Quick Info</h4>
            <ul>
              <li>
                <strong>Location:</strong> Ujjain, Madhya Pradesh
              </li>
              <li>
                <strong>First Mentioned:</strong> Ancient scriptures
              </li>
              <li>
                <strong>Key Figures:</strong> King Chandrasena, Lord Shiva
              </li>
              <li>
                <strong>Historical Importance:</strong> One of the 12
                Jyotirlingas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
