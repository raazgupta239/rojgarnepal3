import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../css/componentCss/SideBar.css';
import logo from './../images/LOGO.png';

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user-related data (e.g., tokens) from local storage or state
    localStorage.removeItem('userToken'); // Example token key
    localStorage.removeItem('user'); // Example user data key

    // Navigate to the login page or a specific logout route
    navigate('/adminlogin');
  };

  return (
    <nav className="sidebar-navbar">
      <div className="sidebar-logo-header">
        <img src={logo} alt="RojgarNepal Logo" className="sidebar-logo" />
      </div>
      <div className="sidebar-navigation">
        <ul>
          <li className="sidebar-nav-item" onClick={() => navigate('/userStatistics')}>
            USER STATISTICS
          </li>
          <li className="sidebar-nav-item" onClick={() => navigate('/admin')}>
            BOOKINGS
          </li>
          <li className="sidebar-nav-item" onClick={() => navigate('/jobPosts')}>
            JOB POSTS
          </li>
          <li className="sidebar-nav-item" onClick={() => navigate('/verifyUser')}>
            VERIFY USER
          </li>
        </ul>
      </div>
      <button className="sidebar-logout-button" onClick={handleLogout}>Log Out</button>
    </nav>
  );
};

export default SideBar;
