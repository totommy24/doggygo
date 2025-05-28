import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { RistoratoreDashboard } from "./RistoratoreDashboard";
import DoggyGoRequest from "./DoggyGoRequest";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/richiesta" element={<DoggyGoRequest />} />
        <Route path="/ristorante" element={<RistoratoreDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;


