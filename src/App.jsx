import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Crop from "./Crop";
import View from "./View";
import Modern from "./Modern";
import About from "./about";
import Contact from "./contact";
import Marketing from "./marketing";

function App() {
  return (
    <Router basename="/agriculture">   {/* ✅ Add this line */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Crop" element={<Crop />} />
        <Route path="/Modern" element={<Modern />} />
        <Route path="/View" element={<View />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </Router>
  );
}

export default App;
