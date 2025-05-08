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
                <TemplePages />
                <BhasmaAartiPage />
                <WeatherGuidePage />
              </>
            }
          />
          <Route path="/mahakaleshwar/temple" element={<TemplePages />} />
          <Route
            path="/mahakaleshwar/bhasma-aarti"
            element={<BhasmaAartiPage />}
          />
          <Route path="/mahakaleshwar/weather" element={<WeatherGuidePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
