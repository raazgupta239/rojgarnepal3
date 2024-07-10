import React, { useState } from 'react';
import './../css/componentCss/CDProfileDescription.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faFilePen, faStar, faMessage, faPhone, faCoins, faPencil } from '@fortawesome/free-solid-svg-icons';
import freelancerprofile from '../images/babysitter.png';
import clientprofile from '../images/clientprofile.png';

const profile = {
  name: 'Samikshya Khatiwada',
  email: 'samikshya9625@gmail.com',
  description:
    'Dedicated to finding the best professionals for my home projects. Seeking reliable, skilled freelancers for quality work and timely completion.',
  location: 'Balkumari, Lalitpur',
  profilePicture: ''
};

const CDProfileDescription = () => {
  const [isEditing, setIsEditing] = useState(false); // State to manage editing mode
  const [editedProfile, setEditedProfile] = useState({
    name: profile.name,
    email: profile.email,
    description: profile.description,
    location: profile.location
  });

  /* MyProject Section */
  const project = {
    title: 'Experienced Babysitter Needed',
    freelancer: { name: 'Ruby Shrestha', email: 'rubyshrestha5689@example.com', rating: 4.8, phoneno: 9845741258 },
    status: {
      dealConfirmed: true,
      statusCompleted: true,
      paymentDone: false,
    },
  };

  // Task completed
  const completedTasksCount = [
    project.status.dealConfirmed,
    project.status.statusCompleted,
    project.status.paymentDone
  ].filter(Boolean).length;
  // Task completed

  // Edit status
  const [isEditingStatus, setIsEditingStatus] = useState(false);
  const [projectStatus, setProjectStatus] = useState(completedTasksCount === 3 ? 'Completed' : 'Active');
  //--

  // Side bar - edit profile handling
  const handleEditProfile = () => {
    setIsEditing(true); // Set editing mode to true
  };

  const handleSubmit = () => {
    console.log('Profile updated:', editedProfile);
    setIsEditing(false); // Exit editing mode after submit
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  // Edit status
  const handleEditStatus = () => {
    setIsEditingStatus(true);
  };

  const handleStatusChange = (e) => {
    setProjectStatus(e.target.value);
  };

  const handleStatusSubmit = () => {
    console.log('Project status updated:', projectStatus);
    setIsEditingStatus(false);
  };
  //--

  // Review section
  const [review, setReview] = useState('');
  const [reviewMessage, setReviewMessage] = useState('');
  const [rating, setRating] = useState(() => {
    const savedRating = localStorage.getItem('freelancerRating');
    return savedRating ? parseInt(savedRating, 10) : 0;
  });

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = () => {
    if (review.trim() === '') {
      setReviewMessage('Error: Empty review cannot be submitted.');
    } else {
      setReviewMessage('Review sent successfully.');
      setReview('');
    }
  };

  const handleStarClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    localStorage.setItem('freelancerRating', newRating);
  };

  return (
    <>
      <div className="d-cover-img"> </div>
      <div className='sidebar-and-MyProjects'>
        <div className="side-bar-container">
          <img className="d-profile-photo" src={clientprofile} alt="Profile" />
          <br />
          {isEditing ? (
            <>
              <label className='label'>Name:</label>
              <input
                type="text"
                name="name"
                value={editedProfile.name}
                onChange={handleChange}
                className="edit-input"
              />
              <label className='label'>Email ID:</label>
              <input
                type="text"
                name="email"
                value={editedProfile.email}
                onChange={handleChange}
                className="edit-input"
              />
              <label className='label'>Bio:</label>
              <textarea
                name="description"
                value={editedProfile.description}
                onChange={handleChange}
                className="edit-input"
              ></textarea>
              <label className='label'>Location:</label>
              <input
                type="text"
                name="location"
                value={editedProfile.location}
                onChange={handleChange}
                className="edit-input"
              />
            </>
          ) : (
            <>
              <h2 className="d-client-name">{profile.name}</h2>
              <p className="d-email">
                Email ID: <span className="d-email-content">{profile.email}</span>
              </p>
              <p className="d-bio">"{profile.description}"</p>
              <p className="d-location">
                <FontAwesomeIcon className="fa-location-dot" icon={faLocationDot} />
                &nbsp;{profile.location}
              </p>
            </>
          )}
          <button className="edit-profile" onClick={isEditing ? handleSubmit : handleEditProfile}>
            {isEditing ? 'Save Profile' : 'Edit Profile'} &nbsp;
            <FontAwesomeIcon className="fa-file-pen" icon={faFilePen} />
          </button>
        </div>
        {/*---------------- My Projects Section-----------------*/}
        <div className='My-Project-Section'>
          <div className="my-projects">
            <h2 className='my-projects-head'>My Projects:</h2>
            <div className="project-card">
              <h3 className='project-title'>{project.title}</h3>
              <div className="progress-bar">
                <div className={`progress ${project.status.dealConfirmed ? 'green' : ''}`}></div>
                <div className={`progress ${project.status.statusCompleted ? 'green' : ''}`}></div>
                <div className={`progress ${project.status.paymentDone ? 'green' : ''}`}></div>
              </div>

              <div className="project-details">
                <div className="status-section">
                  <div className="status-item">
                    <span className='deal-confirmed'>1.Deal Confirmed</span>
                  </div>
                  <div className="status-item">
                    <span className='task-completed'>2.Status Completed</span>
                  </div>
                  <div className="status-item">
                    <span className='payment-done'>3.Payment Done</span>
                  </div>
                </div>
                <div className='tasks'><p className='no-of-tasks-completed'> [{completedTasksCount}/3] Tasks Completed</p></div>

                <div className="freelancer-info">
                  <img src={freelancerprofile} alt="Ruby Shrestha" className="freelancer-photo" />
                  <div className='freelancer-contact-flex'>
                    <div className="freelancer-details">
                      <p className='freelancer-name'>{project.freelancer.name}</p>
                      <p className="freelancer-email">{project.freelancer.email}</p>
                      <p className="freelancer-rating"> <FontAwesomeIcon className="fa-star" icon={faStar} />{project.freelancer.rating}/5</p>
                    </div>
                    <div className="contact-info">
                      <a href='/messages'><button className="chat-now" title='Chat Now'><FontAwesomeIcon className="fa-message" icon={faMessage} /></button></a>
                      <p className="phone-number">  <FontAwesomeIcon className="fa-phone" icon={faPhone} /> {project.freelancer.phoneno}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*--status line*/}
              <div className="project-status">
                {isEditingStatus ? (
                  <>
                    <select value={projectStatus} className='status-dropdown' onChange={handleStatusChange}>
                      <option value="Active">Active</option>
                      <option value="Completed">Completed</option>
                    </select>
                    <button onClick={handleStatusSubmit} className='save-status-button'>Save Status</button>
                  </>
                ) : (
                  <p className='status-details'>Project Status: {projectStatus}  <button className="edit-status-button" title='Edit Status' onClick={handleEditStatus}><FontAwesomeIcon className="fa-pencil" icon={faPencil} /></button></p>
                )}
              </div>
              {/*--status line*/}
              <button className="pay-now"><FontAwesomeIcon className="fa-money" icon={faCoins} /> Pay Now</button>
            </div>

            {/* ------RATING-SECTION--------*/}
            <div className='rating-section'>
              <h4>Rate Freelancer:</h4>
              <div className="rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    onClick={() => handleStarClick(index)}
                    className={index < rating ? 'selected' : 'star'}
                    style={{ color: index < rating ? 'gold' : 'grey', cursor: 'pointer'}}
                  >★</span>
                ))}
              </div>
            </div>
            {/* ------RATING-SECTION ENDS--------*/}

            {/* ------REVIEW-SECTION--------*/}
            <div className="review-section">
              <h4 className='your-review'>Your Review:</h4>
              <p className={reviewMessage.includes('Error') ? 'error-Message' : 'success-Message'}>{reviewMessage}</p>
              <textarea
                rows="4"
                placeholder="Write your review here..."
                value={review}
                onChange={handleReviewChange}
              ></textarea>
              <button className="submit-review" onClick={handleReviewSubmit}>Submit</button>
            </div>
            {/* ------Review-SECTION ENDS--------*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default CDProfileDescription;
