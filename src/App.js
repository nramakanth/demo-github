import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';
import Footer from './components/Footer';
import Navbar from './components/Navmenu';
import HeroSection from './components/HeroSection';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or any async operation
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Change this duration as needed
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 mb-48">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Home />
    </>
  );
};

export default App;
