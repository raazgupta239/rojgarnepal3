import React from 'react';
import JobPost from '../pages/JobPost';
import './../css/componentCss/CHeaderClient.css';
const clientname="Aayusha";
const CHeader = () => {
  return (
    <header className="Cheader">
      <div className="greeting-section">
        <div className="greeting">
          <h1>Hello <span className="client-name">{clientname}</span>! 👋</h1>
          <p className="motive">Let's kick start your project by posting a job now.</p>
          <p className="stats">Your Active Projects: 2</p>
          <a href="./../pages/clientdashboard" className="new-action">View Status</a>
        </div>
        <button className="post-job-button"><a href='../JobPost'>+ Post a Job</a></button>
      </div>
    </header>
  );
};

export default CHeader;
