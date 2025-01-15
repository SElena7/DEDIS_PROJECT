import React, {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import './Nav.scss';
import logo from '../../assets/logo_montessori.png';

function Nav() {
  
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
        await axios.post("http://localhost:8800/api/auth/logout");
        setCurrentUser(null); // Ensures that the user state is cleared
        navigate("/login"); // Redirects to the login page
    } catch (err) {
        console.error("Logout failed", err);
    }
};

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
        {currentUser ? (
                    <>
                        <li>Welcome, {currentUser.name}</li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <>
                        <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                        <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                    </>
                )}
      </ul>
    </div>
  );
}

export default Nav;
