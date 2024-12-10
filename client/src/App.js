import React from 'react';
import Nav from './components/nav/Nav';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery'
import './App.scss';

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="main-content">
        <About />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
