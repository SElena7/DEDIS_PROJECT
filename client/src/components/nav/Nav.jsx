import React from 'react';
import './Nav.scss';
import logo from '../../assets/logo_montessori.png';

function Nav() {
  return (
    <div className="nav-container">
      <img src={logo} alt="Logo" className="nav-logo" />
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
