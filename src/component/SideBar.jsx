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
    <aside className="sidebar">
      <div className="logo-header">
        <img src={logo} alt="RojgarNepal Logo" className="logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li className="section-title">USER STATISTICS</li>
          <li onClick={() => navigate('/admin')} className="nav-item">
            BOOKINGS 
          </li>
          <li onClick={() => navigate('/jobPosts')} className="nav-item">
            JOB POSTS 
          </li>
          <li onClick={() => navigate('/verifyUser')} className="nav-item">
            VERIFY USER
          </li>
        </ul>
      </nav>
      <button className="logout-button" onClick={handleLogout}>Log Out</button>
    </aside>
  );
};

export default SideBar;