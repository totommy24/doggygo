
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { RistoratoreDashboard } from "./RistoratoreDashboard";
import DoggyGoRequest from "./DoggyGoRequest";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/richiesta" element={<DoggyGoRequest />} />
        <Route path="/ristorante" element={<RistoratoreDashboard />} />
      </Routes>
    </Router>
  );
}
