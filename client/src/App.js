import React from 'react';
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
    <div className="app">
      <Nav />
      <div className="main-content">
        <About />
        <Gallery />
        <Newsfeed />
        <Enrollment />
        <SchedulePage />
        <Donations />
      </div>
      <Footer />
    </div>
  );
}

export default App;
