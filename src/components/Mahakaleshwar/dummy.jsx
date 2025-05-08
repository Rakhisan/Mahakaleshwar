// TempleArchitecturePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { guideCards } from "../Data";

const TempleArchitecturePage = () => {
    const navigate = useNavigate();
    const selectedCard = guideCards.find((card) => card.slug === "architecture");

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

                    <h3>Historical Background</h3>
                    <p>
                        The Mahakaleshwar temple is believed to have been originally
                        constructed by King Chandrasena and later renovated by several
                        rulers over centuries, especially during the Maratha period. The
                        temple holds immense historical and spiritual value as one of the 12
                        sacred Jyotirlingas in India.
                    </p>

                    <h3>Design & Layout</h3>
                    <p>
                        The temple follows a multi-level structure with the sanctum located
                        underground, an upper section for regular worship, and a Sabha
                        Mandap (assembly hall) adorned with finely carved pillars. The
                        central spire (Shikhara) rises elegantly above the sanctum,
                        capturing the essence of ancient Indian temple architecture.
                    </p>

                    <h3>Symbolism & Craftsmanship</h3>
                    <p>
                        Each element of the temple's design reflects spiritual symbolism.
                        The motifs, sculptures of deities, and carvings of mythological
                        tales not only showcase the artistic excellence of the era but also
                        convey religious and cultural messages. The temple has been crafted
                        using black stone, which adds to its timeless elegance.
                    </p>

                    <h3>Modern Restoration Efforts</h3>
                    <p>
                        In recent years, conservation efforts have been initiated to
                        preserve the temple's structure and surroundings. These include
                        stone polishing, wall stabilization, and improved drainage systems
                        to protect the ancient foundation from water damage.
                    </p>

                    <h3>Interesting Facts</h3>
                    <ul>
                        <li>
                            The temple is south-facing, which is rare and symbolically
                            powerful in Shaivism.
                        </li>
                        <li>
                            The Jyotirlinga is Swayambhu — self-manifested, not installed by
                            humans.
                        </li>
                        <li>
                            The temple has multiple shrines dedicated to various deities
                            within the same complex.
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
                        <h4>Quick Facts</h4>
                        <ul>
                            <li>
                                <strong>Architectural Style:</strong> Bhumija and Maratha
                            </li>
                            <li>
                                <strong>Sanctum:</strong> Underground Garbhagriha
                            </li>
                            <li>
                                <strong>Main Materials:</strong> Black Stone, Sandstone
                            </li>
                            <li>
                                <strong>Special Feature:</strong> South-facing Lingam
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TempleArchitecturePage;