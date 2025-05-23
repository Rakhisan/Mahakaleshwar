// BhasmaAartiPage.js - Bhasma Aarti page component
import React from "react";
import { useNavigate } from "react-router-dom";
import { guideCards } from "../Data";

const BhasmaAartiPage = () => {
  const navigate = useNavigate();

  // Find the Bhasma Aarti card data
  const selectedCard = guideCards.find((card) => card.slug === "bhasma-aarti");

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

          <h3>Significance of Bhasma Aarti</h3>
          <p>
            The use of bhasma (cremation ash) symbolizes the ultimate reality of
            physical existence. Lord Shiva is often depicted smeared with
            bhasma, representing his authority over death and time. During this
            aarti, the Shivalinga is decorated with various offerings including
            ash, sandalwood paste, flowers, and milk, while priests chant Vedic
            hymns.
          </p>

          <h3>Timing and Procedure</h3>
          <p>
            The Bhasma Aarti begins at 4:00 AM and lasts for approximately one
            hour. Devotees are advised to arrive by 3:00 AM to secure a place.
            The ritual begins with the awakening of Lord Shiva, followed by an
            elaborate bathing ceremony using milk, curd, honey, sugar, and
            water. The lingam is then adorned with bhasma while sacred mantras
            are chanted.
          </p>

          <h3>How to Attend</h3>
          <p>
            To attend the Bhasma Aarti, visitors need to purchase special
            tickets, which are available at the temple office or online. It's
            advisable to book these tickets in advance, especially during peak
            seasons and festivals. Photography is strictly prohibited during the
            ceremony.
          </p>

          <h3>What to Expect</h3>
          <p>
            The Bhasma Aarti is an intense spiritual experience. The temple is
            filled with the sounds of bells, drums, and Sanskrit chants. The air
            is heavy with incense, and the atmosphere is charged with devotion.
            The ritual concludes with the distribution of prasad to devotees.
          </p>
        </div>
        <div>
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            className="img-responsive"
          />
          <div className="info-box">
            <h4>Bhasma Aarti Quick Guide</h4>
            <ul>
              <li>
                <strong>Timing:</strong> 4:00 AM daily
              </li>
              <li>
                <strong>Duration:</strong> Approximately 1 hour
              </li>
              <li>
                <strong>Tickets:</strong> Special tickets required
              </li>
              <li>
                <strong>Dress Code:</strong> Traditional attire preferred
              </li>
              <li>
                <strong>Arrival:</strong> 1 hour before for good spot
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhasmaAartiPage;
