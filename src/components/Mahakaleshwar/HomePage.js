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

      {/* Contact Form Section */}
      <section className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>
            Get in touch for customized travel plans and temple visit assistance
          </p>
        </div>

        <div className="two-column">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>Mahakaleshwar Temple Road, Ujjain, Madhya Pradesh 456006</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 1234567890</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@mahakaleshwartemple.com</p>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.498157883766!2d75.76646307532979!3d23.182887979088906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963746c6687e8a5%3A0xf834069f6fea0209!2sMahakaleshwar%20Jyotirlinga!5e0!3m2!1sen!2sin!4v1681215421437!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahakaleshwar Temple Map"
              ></iframe>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
