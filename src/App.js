import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Vidhi from "./components/Vidhi";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import AboutUs from "./components/About";

import "./animations.css";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const isVidhiPage = location.pathname === "/vidhi";

  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/vidhi" element={<Vidhi />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!isVidhiPage && <Footer />}
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
