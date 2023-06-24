import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import React from "react";
import Homepage from "./components/homepage/homepage";
import FAQ from "./components/FAQ/faq";
import Location from "./components/Location/location";
import Catergories from "./components/Categories/categories";
import Team from "./components/Team/team";

export default function Hackathon() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Catergories" element={<Catergories />} />
        <Route path="/Team" element={<Team />}/> 
      </Routes>
    </Router>
  );
}
