// HomePage.js - Homepage component
import React from "react";
import { Link } from "react-router-dom";
import { guideCards, hotels, packages } from "../Data";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>Mahakaleshwar Temple, Ujjain</h1>
        <p>
          Experience divine spirituality at one of the twelve Jyotirlingas of
          Lord Shiva
        </p>
        <a href="#guide" className="btn">
          Explore Now
        </a>
      </section>

      {/* Mahakaleshwar Guide Section */}
      <section id="guide" className="container">
        <div className="section-title">
          <h2>Mahakaleshwar Guide</h2>
          <p>
            Everything you need to know about visiting the sacred Mahakaleshwar
            Temple
          </p>
        </div>

        <div className="card-container">
          {guideCards.map((card) => (
            <div className="card" key={card.id}>
              <div className="card-img">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Link to={`/mahakaleshwar/${card.slug}`} className="btn">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hotels Section */}
      <section className="container">
        <div className="section-title">
          <h2>Mahakaleshwar Hotels</h2>
          <p>
            Comfortable stays near the temple for a peaceful pilgrimage
            experience
          </p>
        </div>

        <div className="card-container">
          {hotels.map((hotel) => (
            <div className="card" key={hotel.id}>
              <div className="card-img">
                <img src={hotel.image} alt={hotel.name} />
              </div>
              <div className="content">
                <h3>{hotel.name}</h3>
                <div className="detail-item">
                  <span className="label">Price Range:</span>
                  <span>{hotel.price}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Distance:</span>
                  <span>{hotel.distance}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Rating:</span>
                  <span>{hotel.rating}/5</span>
                </div>
                <button className="btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="container">
        <div className="section-title">
          <h2>Mahakaleshwar Tour Packages</h2>
          <p>Curated spiritual journeys for a complete Ujjain experience</p>
        </div>

        <div className="card-container">
          {packages.map((pkg) => (
            <div className="card" key={pkg.id}>
              <div className="card-img">
                <img src={pkg.image} alt={pkg.name} />
              </div>
              <div className="card-content">
                <h3>{pkg.name}</h3>
                <div className="detail-item">
                  <span className="label">Duration:</span>
                  <span>{pkg.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Price:</span>
                  <span>{pkg.price}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Includes:</span>
                  <span>{pkg.includes}</span>
                </div>
                <button className="btn">Book Package</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
