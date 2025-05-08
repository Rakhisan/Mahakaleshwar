// HowToReachMahakalPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { guideCards } from "../Data";

const HowToReachMahakalPage = () => {
  const navigate = useNavigate();
  const selectedCard = guideCards.find((card) => card.slug === "how-to-reach");

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

          <h3>Reaching by Road</h3>
          <p>
            Ujjain is well-connected by a wide network of highways. You can
            drive from Indore (55 km), Bhopal (190 km), or even Ahmedabad. Both
            state-run and private buses operate at regular intervals. AC sleeper
            and semi-sleeper buses are available for comfort.
          </p>

          <h3>Reaching by Rail</h3>
          <p>
            Ujjain Junction is a key railway hub. It is connected to major
            Indian cities including Delhi, Mumbai, Pune, Bhopal, and Varanasi.
            The temple is just a 5–10 minute drive from the railway station.
            Auto-rickshaws, cabs, and e-rickshaws are easily available outside.
          </p>

          <h3>Reaching by Air</h3>
          <p>
            The nearest airport is Devi Ahilyabai Holkar Airport in Indore. It
            has daily flights from Delhi, Mumbai, Bangalore, and other cities.
            From the airport, you can take a prepaid cab, private taxi, or
            government bus to reach Ujjain.
          </p>

          <h3>Local Travel Options</h3>
          <p>
            Inside Ujjain, commuting is easy with the availability of
            auto-rickshaws, shared cabs, and e-bikes. For elderly visitors,
            battery-operated temple transport is also available near the
            entrance gate.
          </p>

          <h3>Tips for Devotees</h3>
          <ul>
            <li>
              Plan to reach Ujjain a day before your Darshan for a relaxed
              visit.
            </li>
            <li>
              During festivals like Mahashivratri or Sawan Mondays, pre-book
              travel and stay.
            </li>
            <li>
              If traveling in a group, consider hiring a local guide or cab for
              the day.
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
            <h4>Connectivity Summary</h4>
            <ul>
              <li>
                <strong>By Train:</strong> Ujjain Junction (2 km away)
              </li>
              <li>
                <strong>By Air:</strong> Indore Airport (55 km)
              </li>
              <li>
                <strong>By Road:</strong> Well-connected from MP & nearby states
              </li>
              <li>
                <strong>Local:</strong> Autos, cabs, buses, battery carts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToReachMahakalPage;
