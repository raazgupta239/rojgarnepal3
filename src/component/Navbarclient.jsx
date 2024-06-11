import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignOutAlt, faComments, faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Added faAngleDown
import { Link } from 'react-router-dom';
import './../css/componentCss/Navbarclient.css'; // Ensure this path is correct
import profile from './../images/profile.png';

const Navbarclient = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // New state for services dropdown

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  const handleServicesToggle = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'show' : ''}`}>
      <div className="logo">RojgarNepal</div>
      <div className="menu-toggle" id="mobile-menu" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li>
          <div className="service-toggle" onClick={handleServicesToggle}>
            Services <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <ul className={`dropdown ${servicesOpen ? 'show' : ''}`}>
            <li><Link to="/service1" onClick={handleLinkClick}>Service1</Link></li>
            <br></br>
            <li><Link to="/service2" onClick={handleLinkClick}>Service2</Link></li>
          </ul>
        </li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search Talents..." />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="navbar-icons">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faComments} className="icon" />
          <div className="notification-bubble">3</div>
        </div>
        <div className="profile-icon">
          <img src={profile} alt="Profile" />
        </div>
        <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
      </div>
    </nav>
  );
};

export default Navbarclient;
