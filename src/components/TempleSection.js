import React from "react";
import "./TempleSection.css";
import m1 from "../images/m1.webp";
import m2 from "../images/m2.jpg";
import m3 from "../images/m3.jpg";
import m4 from "../images/m4.png";
import m5 from "../images/m5.jpg";
import m6 from "../images/m6.jpg";
import m7 from "../images/m7.jpg";
import m8 from "../images/m8.jpg";

function TempleSection() {
    const temples = [
        {
            id: 1,
            name: "Shri Mahakaleshwar Jyotirling Mandir",
            description:
                "12 Jyotirlingon mein se ek, ye mandir Shiv bhakton ke liye atyant pavitra sthal hai. Yahan ka Bhasma Aarti vishesh roop se mashhoor hai.",
            image: m1,
            location: "Ujjain city center",
        },
        {
            id: 2,
            name: "Shri Kal Bhairav Mandir",
            description:
                "Kal Bhairav Shiv ji ka roop hai. Yahan bhakton dwara sharab chadhai jaati hai, jo is mandir ko alag banata hai. Bhakton ka maanna hai ki Kal Bhairav is prasad ko swayam grahan karte hain.",
            image: m2,
            location: "2 km from Mahakal Temple",
        },
        {
            id: 3,
            name: "Harsiddhi Mandir",
            description:
                "Devi Harsiddhi ko samarpit mandir, Shaktipeethon mein se ek. Yahan ka deep stambh raat mein prakash se roshan hota hai, jo drishya bahut manmohak lagta hai.",
            image: m3,
            location: "1.5 km from Mahakal Temple",
        },
        {
            id: 4,
            name: "Mangalnath Mandir",
            description:
                "Jyotish shastra ke hisab se yeh Mangal grah ka janmsthan maana jata hai, jo ise atyant vishesh banata hai. Astrologers yahan niyamit roop se puja karwate hain Mangal dosh ke nivaran ke liye.",
            image: m4,
            location: "2.5 km from Mahakal Temple",
        },
        {
            id: 5,
            name: "Chintaman Ganesh Mandir",
            description:
                "Bahut purana Ganesh mandir, jahan log apni chintayein door karne aate hain. Mandir ka maha-prasad aur shaanti bhari jagah logon ko behad pasand aati hai.",
            image: m5,
            location: "3 km from Mahakal Temple",
        },
        {
            id: 6,
            name: "Ram Ghat (Shipra Nadi ke kinare)",
            description:
                "Mahakal mandir ke paas hi hai, yahan Snan aur evening aarti hoti hai. Kumbh Mela ke dauraan yahaan vishesh bheed hoti hai.",
            image: m6,
            location: "1 km from Mahakal Temple",
        },
        {
            id: 7,
            name: "Shri Vikrant Bhairav Mandir",
            description:
                "Vikrant Bhairav Mandir Ujjain ke rahasyamayi aur shaktishaali mandiron mein se ek hai. Yahan log raksha aur shakti prapt karne ke liye aate hain.",
            image: m7,
            location: "4 km from Mahakal Temple",
        },
        {
            id: 8,
            name: "Shri Gopal Mandir",
            description:
                "Gopal Mandir Shri Krishna ko samarpit hai, jahan bhakton ka gehra aastha hai. Yeh mandir Ujjain ke sabse bade aur adbhut shilp-kala se yukt dharmik sthal mein gina jata hai.",
            image: m8,
            location: "In Ujjain city, near Mahakal Mandir",
        },
    ];

    return (
        <section className="temples-section" id="temples">
            <div className="container">
                <h2 className="section-title">Divine Spots Near Mahakal</h2>
                <p className="section-subtitle">
                    Here are some prominent temples you can visit in Ujjain.
                </p>

                <div className="temple-grid">
                    {temples.map((temple) => (
                        <div className="temple-card" key={temple.id}>
                            <div className="temple-image">
                                <img src={temple.image} alt={temple.name} />
                            </div>
                            <div className="temple-info">
                                <h3 className="temple-name">{temple.name}</h3>
                                <p className="temple-location">📍 {temple.location}</p>
                                <p className="temple-description">{temple.description}</p>
                                <div className="temple-actions">
                                    <button className="temple-btn view-btn">Details</button>
                                    <button className="temple-btn book-btn">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TempleSection;