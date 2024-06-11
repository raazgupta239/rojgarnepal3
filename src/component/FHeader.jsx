import React from 'react';
import './../css/componentCss/FHeader.css';




const freelancername="Aayusha";
const activeproject=4;
const completedproject=2;
const FHeader = () => {
  return (
    <header className="Fheader">
      <div className="greeting-section">
        <div className="greeting">
          <h1>Hello <span className="freelancer-name">{freelancername}</span>! 👋</h1>
          <p className="motive">Ready to find your next opportunity and showcase your skills?</p>
          <p className="stats">Your Active Projects:{activeproject}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='completedprojects'>Completed Projects:{completedproject}</span></p>
          <a href="./../pages/freelancerdashboard" className="new-action">View Status</a>
        </div>
        <button className="post-job-button"><a href='../freelancerdashboard'>+ Complete Profile</a></button>
      </div>
    </header>
  );
};

export default FHeader;



