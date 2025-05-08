// NearbyAttractionsMahakalPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { guideCards } from "../Data";

const NearbyAttractionsMahakalPage = () => {
  const navigate = useNavigate();
  const selectedCard = guideCards.find(
    (card) => card.slug === "nearby-attractions"
  );

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

          <h3>Top Nearby Attractions</h3>

          <h4>1. Ram Ghat</h4>
          <p>
            Located on the banks of River Shipra, Ram Ghat is a sacred bathing
            place especially crowded during the Kumbh Mela. Evening aarti here
            is a beautiful sight.
          </p>

          <h4>2. Kal Bhairav Temple</h4>
          <p>
            A fierce form of Lord Shiva, Kal Bhairav is worshipped with liquor
            as an offering. It’s one of the most unique temples of Ujjain, just
            4 km from Mahakal temple.
          </p>

          <h4>3. Harsiddhi Temple</h4>
          <p>
            This Shakti Peeth is located close to the Mahakaleshwar Temple. The
            temple has beautiful oil lamps and a divine ambiance.
          </p>

          <h4>4. Sandipani Ashram</h4>
          <p>
            Believed to be the place where Lord Krishna, Balarama, and Sudama
            studied under Guru Sandipani. It has a sacred tank and serene
            surroundings.
          </p>

          <h4>5. Vedha Shala (Observatory)</h4>
          <p>
            Built by Maharaja Jai Singh, this is an ancient observatory with
            astronomical instruments still used for calculations and
            predictions.
          </p>

          <h4>6. ISKCON Temple</h4>
          <p>
            A modern, peaceful temple dedicated to Lord Krishna. Great for
            spiritual seekers looking for quiet devotion.
          </p>

          <h4>7. Gopal Mandir</h4>
          <p>
            A 19th-century temple built in marble, dedicated to Lord Krishna.
            The silver-plated doors are said to have once belonged to the
            Somnath temple.
          </p>
        </div>

        <div>
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            className="img-responsive"
          />
          <div className="info-box">
            <h4>Attractions Within 5 km</h4>
            <ul>
              <li>Ram Ghat</li>
              <li>Kal Bhairav Temple</li>
              <li>Harsiddhi Temple</li>
              <li>Sandipani Ashram</li>
              <li>Vedha Shala (Observatory)</li>
              <li>Gopal Mandir</li>
              <li>ISKCON Ujjain</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyAttractionsMahakalPage;
