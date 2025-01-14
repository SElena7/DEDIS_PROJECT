import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/nav/Nav';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Footer from './components/footer/Footer';
import Newsfeed from './pages/newsfeed/Newsfeed';
import Enrollment from './pages/enrollment/Enrollment';
import SchedulePage from './pages/schedule/SchedulePage';
import Donations from './pages/donations/Donations';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="main-content">
          <Routes>
          <Route path="/" element={<Navigate to="/newsfeed" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/newsfeed" element={<Newsfeed />} />
            <Route path="/enrollment" element={<Enrollment />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/donations" element={<Donations />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
