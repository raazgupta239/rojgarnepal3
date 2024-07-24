// src/component/Header.jsx
import React from 'react';
import Circlecheck from '../pages/Circlecheck';
import './../css/pageCss/AdminDashboard.css';

const Header = ({ bookings }) => {
  return (
    <header className="header">
      <h1>Total Bookings:</h1>
      <Circlecheck data={bookings.length} />
    </header>
  );
};

export default Header;
