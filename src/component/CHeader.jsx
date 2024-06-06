import React from 'react';

import './../css/componentCss/CHeaderClient.css';
const clientname="Aayusha";
const CHeader = () => {
  return (
    <header className="header">
      <div className="greeting-section">
        <div className="greeting">
          <h1>Hello <span className="client-name">{clientname}</span>! 👋</h1>
          <p className="motive">Let's kick start your project by posting a job now.</p>
          <p className="stats">Your Active Projects: 2</p>
          <a href="/clientDashboard" className="new-action">View Status</a>
        </div>
        <button className="post-job-button"><a href="/jobPost">+ Post a Job</a></button>
        {/* <button className="post-job-button"><a href="./../pages/jobpost">+ Post a Job</a></button> */}
      </div>
    </header>
  );
};

export default CHeader;
