// BhasmaAartiPage.js - Bhasma Aarti page component
import React from "react";
import { useNavigate } from "react-router-dom";
import { guideCards } from "../Data";

const BhasmaAartiPage = () => {
  const navigate = useNavigate();

  // Find the Bhasma Aarti card data
  const selectedCard = guideCards.find((card) => card.slug === "bhasma-aarti");

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

          <h3>Significance of Bhasma Aarti</h3>
          <p>
            The use of bhasma (cremation ash) symbolizes the ultimate reality of
            physical existence. Lord Shiva is often depicted smeared with
            bhasma, representing his authority over death and time. During this
            aarti, the Shivalinga is decorated with various offerings including
            ash, sandalwood paste, flowers, and milk, while priests chant Vedic
            hymns.
          </p>

          <h3>Timing and Procedure</h3>
          <p>
            The Bhasma Aarti begins at 4:00 AM and lasts for approximately one
            hour. Devotees are advised to arrive by 3:00 AM to secure a place.
            The ritual begins with the awakening of Lord Shiva, followed by an
            elaborate bathing ceremony using milk, curd, honey, sugar, and
            water. The lingam is then adorned with bhasma while sacred mantras
            are chanted.
          </p>

          <h3>How to Attend</h3>
          <p>
            To attend the Bhasma Aarti, visitors need to purchase special
            tickets, which are available at the temple office or online. It's
            advisable to book these tickets in advance, especially during peak
            seasons and festivals. Photography is strictly prohibited during the
            ceremony.
          </p>

          <h3>What to Expect</h3>
          <p>
            The Bhasma Aarti is an intense spiritual experience. The temple is
            filled with the sounds of bells, drums, and Sanskrit chants. The air
            is heavy with incense, and the atmosphere is charged with devotion.
            The ritual concludes with the distribution of prasad to devotees.
          </p>
        </div>
        <div>
          <img
            src={selectedCard.image}
            alt={selectedCard.title}
            className="img-responsive"
          />
          <div className="info-box">
            <h4>Bhasma Aarti Quick Guide</h4>
            <ul>
              <li>
                <strong>Timing:</strong> 4:00 AM daily
              </li>
              <li>
                <strong>Duration:</strong> Approximately 1 hour
              </li>
              <li>
                <strong>Tickets:</strong> Special tickets required
              </li>
              <li>
                <strong>Dress Code:</strong> Traditional attire preferred
              </li>
              <li>
                <strong>Arrival:</strong> 1 hour before for good spot
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhasmaAartiPage;

//

// BhasmaAartiPage.js
// import React from "react";
// import "./BhasmaAartiPage.css";

// const BhasmaAartiPage = () => {
//   return (
//     <div className="temple-container">
//       <div className="temple-image-container">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Mahakaleshwar_Ujjain.jpg/800px-Mahakaleshwar_Ujjain.jpg"
//           alt="Bhasma Aarti"
//           className="temple-image"
//         />
//       </div>

//       <div className="temple-content">
//         <h2 className="temple-title">Bhasma Aarti</h2>
//         <p>
//           Bhasma Aarti is one of the most spiritually powerful rituals performed
//           daily at the Mahakaleshwar temple. This unique aarti involves sacred
//           ash (bhasma) and is conducted in the early hours of the morning.
//         </p>

//         <h3>Significance</h3>
//         <p>
//           Lord Shiva is smeared with cremation ash, symbolizing destruction and
//           renewal. The ritual shows his dominance over time, death, and rebirth.
//         </p>

//         <h3>Timing</h3>
//         <p>
//           The aarti starts at 4:00 AM. Devotees must arrive by 3:00 AM to gain
//           entry and secure a seat. Special passes or booking may be required.
//         </p>

//         <h3>Procedure</h3>
//         <p>
//           The Shivalinga is bathed with panchamrit (milk, honey, curd, ghee,
//           sugar) and then decorated with bhasma, flowers, and sandal paste while
//           mantras are chanted.
//         </p>

//         <h3>Things to Remember</h3>
//         <ul>
//           <li>Photography and videos are strictly prohibited.</li>
//           <li>Only men are allowed inside the sanctum during the aarti.</li>
//           <li>Wear traditional clothing (dhoti for men).</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BhasmaAartiPage;
