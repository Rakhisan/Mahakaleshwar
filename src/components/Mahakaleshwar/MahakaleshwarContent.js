// MahakaleshwarContent.js - Main component file
import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import TemplePages from "./TemplePages";
import BhasmaAartiPage from "./BhasmaAartiPage";
import WeatherGuidePage from "./WeatherGuidePage";
// import FestivalsPage from './components/FestivalsPage';
// import HistoryPage from './components/HistoryPage';
// import ArchitecturePage from './components/ArchitecturePage';
// import HowToReachPage from './components/HowToReachPage';
// import GuidelinesPage from './components/GuidelinesPage';
// import NearbyAttractionsPage from './components/NearbyAttractionsPage';
import "./MahakaleshwarContent.css";

// Main component with proper nested routes
const MahakaleshwarContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/temple" element={<TemplePages />} />
        <Route path="/bhasma-aarti" element={<BhasmaAartiPage />} />
        <Route path="/weather" element={<WeatherGuidePage />} />

        {/* <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/how-to-reach" element={<HowToReachPage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route path="/nearby-attractions" element={<NearbyAttractionsPage />} /> */}
      </Routes>
    </div>
  );
};

export default MahakaleshwarContent;
