import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../css/componentCss/SideBar.css';
import logo from './../images/LOGO.png';

const SideBar = ({ bookingsCount, jobPostsCount }) => {
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
      {/* <div className="logo">RojgarNepal</div> */}
      <div className="alogin-header">
        <img src={logo} alt="RojgarNepal Logo" className="alogo" />
      </div>
      {/* <div className="user-info">Hello Ryan,</div> */}
      <nav className="navigation">
        <ul>
          <li> USER STATISTICS</li>
          <li onClick={() => navigate('/admin')}>BOOKINGS <span className="badge">{bookingsCount}</span></li>
          <li onClick={() => navigate('/jobPosts')}>JOB POSTS <span className="badge">{jobPostsCount}</span></li>
          <li onClick={() => navigate('/verifyUser')}>VERIFY USER</li>
        </ul>
      </nav>
      <button className="logout-button" onClick={handleLogout}>LogOut</button>
    </aside>
  );
};

export default SideBar;
