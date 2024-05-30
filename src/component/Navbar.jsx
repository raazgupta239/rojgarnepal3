import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/componentCss/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'show' : ''}`}>
      <div className="logo">RojgarNepal</div>
      <div className="menu-toggle" id="mobile-menu" onClick={handleMenuToggle}>
        ☰
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/about" className="nav-item">About</Link>
        <div className="nav-item dropdown">
          <span className="dropdown-toggle">Join Network &#x25BC;</span>
          <div className="dropdown-content">
            <Link to="/join/freelancer">Become a Freelancer</Link>
            <Link to="/join/client">Join as a Client</Link>
          </div>
        </div>
      </div>
      <div className="auth-buttons">
        <Link to="/login" className="login">Log In</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
