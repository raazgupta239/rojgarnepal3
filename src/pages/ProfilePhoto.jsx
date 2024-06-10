import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios
import './../css/pageCss/ProfilePhoto.css';

const ProfilePhoto = () => {
  const location = useLocation();
  const { message, userType } = location.state || {};
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!profilePhoto) {
      setErrorMessage('Please select a profile photo.');
      return;
    }

    const formData = new FormData();
    formData.append('profilePhoto', profilePhoto);

    try {
      // Send POST request to your API endpoint using Axios
      const response = await axios.post('https://yourapiendpoint.com/upload-photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle successful photo upload
      const { userType } = response.data;
      if (userType === 'Client') {
        navigate('/client');
      } else if (userType === 'Freelancer') {
        navigate('/service');
      }
    } catch (error) {
      // Handle error and set the error message
      setErrorMessage('Error uploading photo: ' + (error.response?.data?.message || error.message));
      console.error('Error uploading photo:', error.message);
    }
  };

  return (
    <div className="profile-photo-container">
      <form onSubmit={handleSubmit} className="profile-photo-form">
        <h2>Upload <span>Profile</span> Photo</h2>
        {message && <div className="success-message">{message}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <br />
        <div className="form-group">
          <label htmlFor="profilePhoto">Profile Photo</label>
          <input
            type="file"
            id="profilePhoto"
            name="profilePhoto"
            onChange={handlePhotoChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Upload Photo</button>
      </form>
    </div>
  );
};

export default ProfilePhoto;
