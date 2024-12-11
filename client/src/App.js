import React from 'react';
import Nav from './components/nav/Nav';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Footer from './components/footer/Footer';
import Newsfeed from './pages/newsfeed/Newsfeed';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="main-content">
        <About />
        <Gallery />
        <Newsfeed />
      </div>
      <Footer />
    </div>
  );
}

export default App;
