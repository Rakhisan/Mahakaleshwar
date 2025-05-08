// MahakaleshwarContent.js - Main component file
import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
// import TemplePages from "./TemplePages";
// import BhasmaAartiPage from "./BhasmaAartiPage";
// import WeatherGuidePage from "./WeatherGuidePage";
// import FestivalMahakal from "./components/FestivalMahakal";
// import HistoryMahakal from "./components/HistoryMahakal";
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
        {/* <Route path="/temple" element={<TemplePages />} />
        <Route path="/bhasma-aarti" element={<BhasmaAartiPage />} />
        <Route path="/weather" element={<WeatherGuidePage />} /> */}
        {/*
        <Route path="/festivals" element={<FestivalMahakal />} />
        <Route path="/history" element={<HistoryMahakal />} /> */}
        {/* <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/how-to-reach" element={<HowToReachPage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route path="/nearby-attractions" element={<NearbyAttractionsPage />} /> */}
      </Routes>
    </div>
  );
};

export default MahakaleshwarContent;
