import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../css/pageCss/VerifyOtp.css';
import axios from 'axios';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      // Send POST request to your API endpoint using Axios
      const response = await axios.post('https://rojgarnepal.loca.lt/user/verify-otp', { emailOtp: otp });

      // Handle successful verification
      console.log('OTP verified successfully', response.data);

      // Save data to localStorage
      const { email, fullName, token, userId, userType } = response.data;
      localStorage.setItem('email', email);
      localStorage.setItem('fullName', fullName);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
      localStorage.setItem('userType', userType);

      // Redirect to ProfilePhoto page
      navigate('/profilePhoto', { state: { message: response.data.message, userType: response.data.userType } });
    } catch (error) {
      // Handle error and set the error message
      setErrorMessage('Error verifying OTP: ' + (error.response?.data?.message || error.message));
      console.error('Error verifying OTP:', error.message);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="verify-otp-container">
      <form onSubmit={handleSubmit} className="verify-otp-form">
        <h2>Verify <span>OTP</span></h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <br />
        <div className="form-group">
          <label htmlFor="otp">Enter OTP sent to your Email</label>
          <input
            type="text"
            id="otp"
            name="emailOtp"
            value={otp}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Verify OTP</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default VerifyOtp;
