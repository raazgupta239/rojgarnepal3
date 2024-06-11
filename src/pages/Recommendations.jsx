import React, { useEffect, useState } from 'react';
import './../css/pageCss/Recommendations.css';
import profileImage from "../images/userprofile5.jpg";
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Recommendation = () => {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('jobPostData');
    if (savedData) {
      setJobData(JSON.parse(savedData));
    }
  }, []);

  const freelancers = [
    {
      profileImage: profileImage,
      fullName: "Sandesh Khatiwada",
      rating: "4.5",
      serviceDescription: "I offer web dev service",
      location: "Kathmandu",
      status: "Available",
      projects: "5",
      rate: "500"
    },
    {
      profileImage: profileImage,
      fullName: "Sandesh Khatiwada",
      rating: "4.5",
      serviceDescription: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita voluptatibus doloribus, itaque provident odit, vel a ullam ea debitis animi, dicta aut? Ea reiciendis commodi nobis. Voluptatibus eaque sapiente, distinctio excepturi impedit dolores ex, expedita doloribus, soluta qui amet veritatis dicta iure rem. Id eaque fuga assumenda est, nisi veritatis?`,
      location: "Kathmandu",
      status: "Available",
      projects: "5",
      rate: "500"
    },
    {
      profileImage: profileImage,
      fullName: "Sandesh Khatiwada",
      rating: "4.5",
      serviceDescription: "I offer web dev service",
      location: "Kathmandu",
      status: "Available",
      projects: "5",
      rate: "500"
    },
    {
      profileImage: profileImage,
      fullName: "Sandesh Khatiwada",
      rating: "4.5",
      serviceDescription: "I offer web dev service",
      location: "Kathmandu",
      status: "Available",
      projects: "5",
      rate: "500"
    }
  ];

  return (
    <>
  <Navbar/>
    <div className="main-container">
      <div className="heading-div">
        <h1>Best <span className="highlight">Matches</span> for your job</h1>
        <p>Here are the top freelancers suited for your project based on your requirements</p>
      </div>

      <div className="recommendation-container">
        {jobData ? (
          <div className="job-summary">
            <h2>Job Summary</h2>
            <p>Job Title: <br /> <span className='title'>{jobData.jobTitle}</span> </p>
            <p>Description:<br /> {jobData.description}</p>
            <p>Payment Offered: {jobData.proposedPayAmount}</p>
            <p>Date: {jobData.date}</p>
            <p>Time: {jobData.time}</p>
            <p>Service Type: {jobData.serviceType}</p>
            <p>Location: {jobData.location}</p>
          </div>
        ) : (
          <p>No job data found.</p>
        )}

        <div className="freelancers-list">
          {freelancers.map((freelancer, index) => (
            <div key={index} className="freelancer-item">
              <div className="profile-info">
                <div className="image">
                  <img src={freelancer.profileImage} alt="Profile" />
                </div>
                <div className="description">
                  <div className="name">
                    <p>{freelancer.fullName}</p>
                  </div>
                  <div className="rating">
                    <p>Rating: {freelancer.rating}</p>
                  </div>
                </div>
              </div>
              <div className="additional-info">
                <p>Location: {freelancer.location}</p>
                <div className="status-projects">
                  <p className="status">Status: {freelancer.status}</p>
                  <p className="projects">Projects: {freelancer.projects}</p>
                </div>
                <p>Rate: {freelancer.rate}</p>
              </div>
              <div className="service-description">{freelancer.serviceDescription}</div>
              <button>Invite Now</button>
            </div>
          ))}
        </div>

        <div className="job-post-options">
          <button>Make a Job Post</button>
          <a href="#">Skip for Now</a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Recommendation;
