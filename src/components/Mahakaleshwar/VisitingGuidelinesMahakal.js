// VisitingGuidelinesMahakalPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { guideCards } from "../Data";

const VisitingGuidelinesMahakalPage = () => {
  const navigate = useNavigate();
  const selectedCard = guideCards.find((card) => card.slug === "guidelines");

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

          <h3>Temple Timings</h3>
          <p>
            The Mahakaleshwar Temple opens early at 4:00 AM and closes at 11:00
            PM. The temple is closed for a short cleaning break between noon and
            2:00 PM.
          </p>

          <h3>Bhasma Aarti Rules</h3>
          <ul>
            <li>
              Pre-registration is mandatory on the official website or app.
            </li>
            <li>
              Only male devotees are allowed inside the sanctum during Bhasma
              Aarti.
            </li>
            <li>Devotees must reach the temple by 3:00 AM to attend.</li>
          </ul>

          <h3>Dress Code</h3>
          <p>
            Traditional and modest clothing is recommended. Men should wear
            dhoti or pajama-kurta, and women should wear sarees or suits while
            entering the sanctum.
          </p>

          <h3>Prohibited Items</h3>
          <ul>
            <li>
              Mobile phones, leather items, tobacco, alcohol, and weapons are
              strictly prohibited.
            </li>
            <li>
              There are locker facilities available at the temple entrance for
              your belongings.
            </li>
          </ul>

          <h3>Photography & Video</h3>
          <p>
            Photography is not allowed inside the Garbhagriha (sanctum).
            Visitors are requested to respect the sanctity of the temple.
          </p>

          <h3>Darshan Queue System</h3>
          <p>
            There are separate lines for general darshan and special ticketed
            darshan. Senior citizens and differently-abled persons get priority
            assistance.
          </p>

          <h3>Tips for Devotees</h3>
          <ul>
            <li>
              Carry a water bottle, light snacks, and an umbrella during hot
              months.
            </li>
            <li>
              Do not fall prey to unauthorized guides or donation collectors.
            </li>
            <li>
              Keep temple premises clean and follow instructions of temple
              staff.
            </li>
          </ul>
        </div>

        <div>
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            className="img-responsive"
          />
          <div className="info-box">
            <h4>Quick Guidelines</h4>
            <ul>
              <li>
                <strong>Opening Time:</strong> 4:00 AM
              </li>
              <li>
                <strong>Closing Time:</strong> 11:00 PM
              </li>
              <li>
                <strong>Bhasma Aarti:</strong> Pre-booking needed
              </li>
              <li>
                <strong>Dress Code:</strong> Traditional attire
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitingGuidelinesMahakalPage;
