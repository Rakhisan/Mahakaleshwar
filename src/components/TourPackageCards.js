import { useState } from "react";
import m3 from "../images/m3.jpg";
import m4 from "../images/m4.png";
import m5 from "../images/m5.jpg";
import m6 from "../images/m6.jpg";

export default function TourPackageCards() {
  const [activeTab, setActiveTab] = useState(0);

  const packages = [
    {
      title: "Mahakaleshwar Darshan by Helicopter",
      duration: "1 Day (Same Day Return)",
      route: "Indore → Ujjain → Indore",
      price: "55,000/-",
      originalPrice: "60,000/-",
      features: ["VIP Darshan", "Helicopter", "Hotel", "Meals", "Sightseeing"],
      image: m3,
    },
    {
      title: "Ujjain & Omkareshwar Jyotirling Darshan",
      duration: "2 Days & 1 Night",
      route: "Indore → Omkareshwar → Ujjain → Indore",
      price: "85,000/-",
      originalPrice: "90,000/-",
      features: ["VIP Darshan", "Helicopter", "Hotel", "Meals", "Sightseeing"],
      image: m4,
    },
    {
      title: "Ujjain Mahakal with Local Sightseeing",
      duration: "1 Day",
      route:
        "Ujjain → Mahakaleshwar → Kal Bhairav → Ram Ghat → Sandipani Ashram",
      price: "5,999/-",
      originalPrice: "6,999/-",
      features: ["VIP Darshan", "Hotel", "Meals", "Sightseeing"],
      image: m5,
    },
    {
      title: "Panch Jyotirling Yatra by Helicopter",
      duration: "4 Days & 3 Nights",
      route:
        "Ujjain → Omkareshwar → Bhimashankar → Trimbakeshwar → Grishneshwar",
      price: "2,20,000/-",
      originalPrice: "2,30,000/-",
      features: ["VIP Darshan", "Helicopter", "Hotel", "Meals", "Sightseeing"],
      image: m6,
    },
  ];

  return (
    <div className="tour-container">
      <h1 className="main-heading">
        Mahakaleshwar Yatra Tour Helicopter Packages
      </h1>
      <div className="divine-line"></div>
      {/* <p className="sub-heading">Get the most effective and the best Mahakaleshwar Yatra packages. <span className="read-more-link">Read More</span></p> */}

      <div className="package-cards">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${pkg.image})` }}
            >
              <div className="overlay-text">
                <h2>{pkg.title}</h2>
                <span className="highlight-text">By Helicopter</span>
                <button className="itinerary-btn">Complete Itinerary</button>
              </div>
            </div>

            <div className="package-details">
              <div className="upper-content">
                <h3 className="package-title">{pkg.title}</h3>

                <div className="detail-row">
                  <div className="icon-wrapper duration">
                    <span className="icon">🕒</span>
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="icon-wrapper route">
                    <span className="icon">📍</span>
                    <span>{pkg.route}</span>
                  </div>
                </div>
              </div>

              <div className="lower-content">
                <div className="price-row">
                  <span className="price">₹ {pkg.price}</span>
                  <span className="original-price">₹ {pkg.originalPrice}</span>
                  <span className="per-person">per person</span>
                </div>

                <div className="action-buttons">
                  <a href="#" className="btn read-more">
                    Read More »
                  </a>
                  <a href="#" className="btn enquiry-now">
                    Enquiry Now »
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tour-container {
          font-family: Arial, sans-serif;
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px;
        }

        .main-heading {
          font-size: 2.5rem;
          color: var(--text-dark);
          margin-bottom: 15px;
          font-weight: 700;
          text-align: center;
          margin-top: 10px;
        }

        .divine-line {
          height: 3px;
          width: 80px;
          margin: 0 auto;
          background: linear-gradient(
            to right,
            var(--primary-color),
            var(--secondary-color)
          );
          position: relative;
          margin-bottom: 25px;
        }

        .sub-heading {
          text-align: center;
          margin-bottom: 30px;
          color: #555;
        }

        .read-more-link {
          color: blue;
          cursor: pointer;
        }

        .package-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .package-card {
          width: 310px;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          height: 520px; /* Fixed height for all cards */
        }

        .card-image {
          height: 200px;
          background-color: #f0f0f0;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .overlay-text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          color: white;
          padding: 15px;
        }

        .overlay-text h2 {
          margin: 0 0 5px 0;
          font-size: 20px;
        }

        .highlight-text {
          color: #ff6600;
          font-weight: bold;
        }

        .itinerary-btn {
          background-color: white;
          color: #333;
          border: none;
          padding: 5px 10px;
          border-radius: 20px;
          margin-top: 10px;
          cursor: pointer;
          font-size: 12px;
        }

        .package-details {
          padding: 15px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
        }

        .upper-content {
          flex-grow: 1;
        }

        .lower-content {
          margin-top: auto;
        }

        .package-title {
          margin-top: 0;
          margin-bottom: 15px;
          color: #333;
          font-size: 18px;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .detail-row {
          display: flex;
          margin-bottom: 10px;
          color: #555;
          font-size: 14px;
        }

        .icon-wrapper {
          display: flex;
          align-items: flex-start;
          width: 100%;
        }

        .icon {
          margin-right: 8px;
          min-width: 20px;
        }

        .price-row {
          margin-bottom: 15px;
        }

        .price {
          color: #e46e0f;
          font-weight: bold;
          font-size: 18px;
        }

        .original-price {
          text-decoration: line-through;
          color: #888;
          margin-left: 5px;
          font-size: 16px;
        }

        .per-person {
          color: #555;
          font-size: 14px;
          margin-left: 5px;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
        }

        .btn {
          text-decoration: none;
          padding: 8px 15px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 14px;
          text-align: center;
          display: inline-block;
        }

        .read-more {
          background-color: #4caf50;
          color: white;
          flex: 1;
        }

        .enquiry-now {
          background-color: #e46e0f;
          color: white;
          flex: 1;
        }

        .features {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #eee;
          padding-top: 15px;
        }

        .feature {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 12px;
          color: #555;
        }

        .feature-icon {
          width: 24px;
          height: 24px;
          background-color: #f0f0f0;
          border-radius: 50%;
          margin-bottom: 5px;
        }

        .floating-chat {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 100;
        }

        .chat-button {
          background-color: #25d366;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 30px;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .chat-button:before {
          content: "";
          display: inline-block;
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          margin-right: 10px;
        }

        @media (max-width: 768px) {
          .package-cards {
            flex-direction: column;
            align-items: center;
          }

          .package-card {
            width: 100%;
            max-width: 340px;
            height: auto; /* Allow height to adjust on mobile */
          }
        }
      `}</style>
    </div>
  );
}

//iiiiiiii
