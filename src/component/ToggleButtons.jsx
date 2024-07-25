// ToggleButtons.jsx
import React from 'react';
import './../css/componentCss/ToggleButtons.css'; // Import your CSS file

const ToggleButtons = ({ selected, onSelect }) => {
  return (
    <div className="toggle-buttons">
      <button
        className={`toggle-btn ${selected === 'client' ? 'active' : ''}`}
        onClick={() => onSelect('client')}
      >
        Client
      </button>
      <button
        className={`toggle-btn ${selected === 'freelancer' ? 'active' : ''}`}
        onClick={() => onSelect('freelancer')}
      >
        Freelancer
      </button>
    </div>
  );
};

export default ToggleButtons;
