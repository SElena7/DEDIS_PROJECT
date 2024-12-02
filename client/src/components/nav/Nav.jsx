import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">Newsfeed</a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">Enrollment</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Gallery</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Schedule</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Donations</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
