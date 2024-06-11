import React from 'react';
import './../css/pageCss/Recommendations.css';
import profileImage from "../images/userprofile5.jpg";
import Footer from '../component/Footer';
import Navbarclient from '../component/Navbarclient';

const Recommendation = () => {
  localStorage.setItem("jobTitle", `Need freelancers web devs urgently`);
  localStorage.setItem("jobDescription", `Need freelancers web devs urgently Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione vitae reprehenderit, quasi expedita rerum, dolorum quos maxime eum, saepe accusantium suscipit quaerat nisi in aperiam pariatur assumenda ex? Incidunt consequatur quos eos, corrupti odio quis, rerum in numquam, hic aliquid repellendus amet possimus pariatur quas dolorem minus? Optio, vitae.`);
  localStorage.setItem("paymentOffered", "500");
  localStorage.setItem("date", "2081/01/01");
  localStorage.setItem("time", "6:00:00");
  localStorage.setItem("serviceType", "IT");
  localStorage.setItem("location", "Kathmandu");

  const jobTitle = localStorage.getItem("jobTitle");
  const jobDescription = localStorage.getItem("jobDescription");
  const paymentOffered = localStorage.getItem("paymentOffered");
  const date = localStorage.getItem("date");
  const time = localStorage.getItem("time");
  const serviceType = localStorage.getItem("serviceType");
  const location = localStorage.getItem("location");

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
  <Navbarclient/>
    <div className="main-container">
      <div className="heading-div">
        <h1>Best <span className="highlight">Matches</span> for your job</h1>
        <p>Here are the top freelancers suited for your project based on your requirements</p>
      </div>

      <div className="recommendation-container">
        <div className="job-summary">
          <h2>Job Summary</h2>
          <p>Job Title: <br /> <span className='title'>{jobTitle}</span> </p>
          <p>Description:<br /> {jobDescription}</p>
          <p>Payment Offered: {paymentOffered}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Service Type: {serviceType}</p>
          <p>Location: {location}</p>
        </div>

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
