// WeatherGuidePage.js - Weather guide page component
import React from "react";
import { useNavigate } from "react-router-dom";
import { guideCards } from "../Data";

const WeatherGuidePage = () => {
  const navigate = useNavigate();

  // Find the Weather Guide card data
  const selectedCard = guideCards.find((card) => card.slug === "weather");

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

          <h3>Summer (March - June)</h3>
          <p>
            Summers in Ujjain are hot and dry. Temperatures often soar above
            40°C during peak summer months of April and May. Early mornings and
            evenings are relatively comfortable. If visiting during summer, it's
            advisable to carry light cotton clothes, sunscreen, hats, and stay
            hydrated. Temple visits are best scheduled early morning or evening
            to avoid the intense midday heat.
          </p>

          <h3>Monsoon (July - September)</h3>
          <p>
            The monsoon season brings moderate rainfall to Ujjain, turning the
            surroundings lush green. The temperature drops to a comfortable
            range of 25°C to 35°C. While this season offers respite from the
            summer heat, occasional heavy downpours might disrupt travel plans.
            Carry umbrellas, waterproof footwear, and light raincoats if
            visiting during this period.
          </p>

          <h3>Winter (October - February)</h3>
          <p>
            Winter is the most pleasant time to visit Mahakaleshwar Temple. Days
            are sunny with temperatures ranging from 15°C to 25°C, while nights
            can get cooler with temperatures dropping to 8°C to 12°C. Light
            woolen clothes are recommended, especially for early morning Bhasma
            Aarti. The clear skies and comfortable weather make it ideal for
            temple visits and exploring other attractions in Ujjain.
          </p>

          <h3>Best Time to Visit</h3>
          <p>
            The best time to visit Mahakaleshwar Temple is during the winter
            months (October to February) when the weather is pleasant for
            sightseeing and temple visits. The festive season of Mahashivratri
            (February/March) is special but expect larger crowds. If visiting
            during summer, early morning or evening visits are recommended.
          </p>
        </div>
        <div>
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            className="img-responsive"
          />
          <div className="weather-chart">
            <h4>Seasonal Temperature Guide</h4>
            <table className="weather-table">
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Months</th>
                  <th>Temperature Range</th>
                  <th>Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Summer</td>
                  <td>Mar - Jun</td>
                  <td>30°C - 45°C</td>
                  <td>Early morning visits</td>
                </tr>
                <tr>
                  <td>Monsoon</td>
                  <td>Jul - Sep</td>
                  <td>25°C - 35°C</td>
                  <td>Carry rain protection</td>
                </tr>
                <tr>
                  <td>Winter</td>
                  <td>Oct - Feb</td>
                  <td>8°C - 25°C</td>
                  <td>Most recommended</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherGuidePage;
