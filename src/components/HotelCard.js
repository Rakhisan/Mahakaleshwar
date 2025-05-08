import React from "react";
import "./HotelCard.css";
import hotel1 from "../images/hotel1.jpg";
import hotel2 from "../images/hotel2.avif";
import hotel3 from "../images/hotel3.jpeg";
import hotel4 from "../images/hotel4.jpeg";

// Hotel data
const hotels = [
    {
        id: 1,
        name: "Shri Mahakal Residency",
        image: hotel1, // Replace with your actual image path
        rating: 4.7,
        location: "Near Mahakaleshwar Temple, Ujjain",
        price: 3500,
    },

    {
        id: 2,
        name: "Divine Ujjain Resort",
        image: hotel2, // Replace with your actual image path
        rating: 4.3,
        location: "Ram Ghat Road, Ujjain",
        price: 2800,
    },
    {
        id: 3,
        name: "Hotel Rudraksh Palace",
        image: hotel3, // Replace with your actual image path
        rating: 4.5,
        location: "Hari Phatak, Ujjain",
        price: 3200,
    },
    {
        id: 4,
        name: " Hotel Ashok Palace",
        image: hotel4, // Replace with your actual image path
        rating: 4.3,
        location: "Near Mahakal Temple, Ujjain",
        price: 3000,
    },
];

// Individual Hotel Card Component
const HotelCard = ({ hotel }) => {
    const { name, image, rating, location, price } = hotel;

    // Function to display stars for ratings
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={`star-${i}`} className="star full-star">
                    ★
                </span>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <span key="half-star" className="star half-star">
                    ★
                </span>
            );
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <span key={`empty-star-${i}`} className="star empty-star">
                    ☆
                </span>
            );
        }

        return stars;
    };

    return (
        <div className="hotel-card">
            <div className="hotel-image">
                <img src={image} alt={name} />
            </div>
            <div className="hotel-info">
                <h3 className="hotel-name">{name}</h3>
                <div className="hotel-rating">
                    {renderStars(rating)}
                    <span className="rating-number">({rating})</span>
                </div>
                <div className="hotel-location">
                    <span className="location-icon">📍</span>
                    <span>{location}</span>
                </div>
                <div className="hotel-price-container">
                    <div className="hotel-price">
                        <span className="price-amount">₹{price}</span>
                        <span className="price-per-night">per night</span>
                    </div>
                    <button className="book-now-btn">Book Now</button>
                </div>
            </div>
        </div>
    );
};

// Container component that renders multiple hotel cards
const HotelCardContainer = () => {
    return (
        <div className="hotel-section">
            <h2 className="section-title">Recommended Stays in Ujjain</h2>
            <div className="hotel-container">
                {
                    hotels.map((hotel) => (
                        <HotelCard key={hotel.id} hotel={hotel} />
                    ))
                }
            </div>
        </div>
    );
};

export default HotelCardContainer;