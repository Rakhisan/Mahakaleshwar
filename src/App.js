import logo from "./logo.svg";
import "./App.css";
import "./global.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import HotelCardContainer from "./components/HotelCard";
import MahakalTourPackages from "./components/MahakalTourPackages";
import TempleSection from "./components/TempleSection";
import TourPackageCards from "./components/TourPackageCards";
// import HeroComponent from './components/HeroComponent';
import Navbar from "./components/Navbar";
import MahakaleshwarContent from "./components/Mahakaleshwar/MahakaleshwarContent";
import TemplePages from "./components/Mahakaleshwar/TemplePages";
import BhasmaAartiPage from "./components/Mahakaleshwar/BhasmaAartiPage";
import WeatherGuidePage from "./components/Mahakaleshwar/WeatherGuidePage";
import FestivalMahakal from "./components/Mahakaleshwar/FestivalMahakal";
import HistoryMahakal from "./components/Mahakaleshwar/HistoryMahakal";
import ArchitectureMahakal from "./components/Mahakaleshwar/ArchitectureMahakal";
import HowToReachMahakal from "./components/Mahakaleshwar/HowToReachMahakal";
import NearbyAttractionsMahakal from "./components/Mahakaleshwar/NearbyAttractionsMahakal";
import VisitingGuidelinesMahakal from "./components/Mahakaleshwar/VisitingGuidelinesMahakal";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <TourPackageCards />
                <MahakalTourPackages />
                <TempleSection />
                <HotelCardContainer />
                {/* <Footer /> */}
              </>
            }
          />

          <Route
            path="/mahakaleshwar"
            element={
              <>
                <MahakaleshwarContent />
              </>
            }
          />
          <Route path="/mahakaleshwar/temple" element={<TemplePages />} />
          <Route
            path="/mahakaleshwar/bhasma-aarti"
            element={<BhasmaAartiPage />}
          />
          <Route path="/mahakaleshwar/weather" element={<WeatherGuidePage />} />
          <Route
            path="/mahakaleshwar/festivals"
            element={<FestivalMahakal />}
          />
          <Route path="/mahakaleshwar/history" element={<HistoryMahakal />} />
          <Route
            path="/mahakaleshwar/architecture"
            element={<ArchitectureMahakal />}
          />
          <Route
            path="/mahakaleshwar/how-to-reach"
            element={<HowToReachMahakal />}
          />
          <Route
            path="/mahakaleshwar/guidelines"
            element={<VisitingGuidelinesMahakal />}
          />
          <Route
            path="/mahakaleshwar/nearby-attractions"
            element={<NearbyAttractionsMahakal />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
