import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../css/componentCss/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className={`navbar ${menuOpen ? 'show' : ''}`}>
      <div className="logo">RojgarNepal</div>
      <div className="menu-toggle" id="mobile-menu" onClick={handleMenuToggle}>
        ☰
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-item" onClick={handleLinkClick}>Home</Link>
        <Link to="/services" className="nav-item" onClick={handleLinkClick}>Services</Link>
        <Link to="/about" className="nav-item" onClick={handleLinkClick}>About</Link>
      </div>
      <div className="auth-buttons">
        <Link to="/login" className="login" onClick={handleLinkClick}>Log In</Link>
        <Link to="/signup" className="signup" onClick={handleLinkClick}>Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
