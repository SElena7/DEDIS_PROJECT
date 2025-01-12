import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import logo from '../../assets/logo_montessori.png';

function Nav() {
  return (
    <div className="nav-container">
      <img src={logo} alt="Logo" className="nav-logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/newsfeed" className="nav-link">Newsfeed</Link>
        </li>
        <li className="nav-item">
          <Link to="/enrollment" className="nav-link">Enrollment</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-link">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/schedule" className="nav-link">Schedule</Link>
        </li>
        <li className="nav-item">
          <Link to="/donations" className="nav-link">Donations</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
