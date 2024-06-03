import './../css/pageCss/Signup.css'; // Import the CSS file
import React, { useState } from 'react';
import axios from 'axios'; // Don't forget to import axios
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNo: '',
    location: 'Kathmandu',
    userType: '',
  });

  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  // const errorMessage ='hello world'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const navigate= useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset the error message before submission

    try {
      // Send POST request to your API endpoint using Axios
      const response = await axios.post('https://rojgarnepal.loca.lt/user/signup', formData);
        
      // Handle successful form submission
      console.log('Form data submitted successfully', response.data);

      // Navigate to the VerifyOtp page upon successful signup
      navigate('/verify-otp');
    } catch (error) {
      // Handle error and set the error message
      setErrorMessage('Error submitting form data: ' + (error.response?.data?.message || error.message));
      console.error('Error submitting form data:', error.message);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Get <span>Started</span> with RojgarNepal</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNo">Phone No. *</label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Location *</label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="Kathmandu">Kathmandu</option>
              <option value="Pokhara">Pokhara</option>
              <option value="Lalitpur">Lalitpur</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="userType">User Type *</label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="">Select User Type</option>
              <option value="client">Client</option>
              <option value="freelancer">Freelancer</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="submit-btn">Create Account</button>
        <p className="login-link">Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default SignupForm;
