// MahakaleshwarContent.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactForm from "./ContactForm";
// import other pages as needed
import "./MahakaleshwarContent.css";

const MahakaleshwarContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here */}
      </Routes>

      <ContactForm />
    </div>
  );
};

export default MahakaleshwarContent;
