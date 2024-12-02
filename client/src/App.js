import React from 'react';
import Nav from './components/nav/Nav';
import About from './pages/about/About';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="main-content">
        <About />
      </div>
    </div>
  );
}

export default App;
