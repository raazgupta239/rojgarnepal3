// src/component/Header.jsx
import React from 'react';
import Circlecheck from '../pages/Circlecheck';
import './../css/componentCss/Header.css';

const Header = ({ bookings,pagename }) => {
  return (
    <header className="header">
      <h1>Total {pagename}:</h1>
      <Circlecheck data={bookings.length} />
    </header>
  );
};

export default Header;
