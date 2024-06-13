import React, { useState } from 'react';
import './../css/pageCss/FApplyNow.css';
import electricianprofile from './../images/profile_electrician.png';

function FApplyNow() {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  

  const handleSend = async () => {
  
    if (!message) {
      setError('Message cannot be empty.');
      return;
    }

  
    setError('');

    try {
    
      const response = await fetch('https://api.example.com/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

     
      const data = await response.json();
      console.log('Message sent successfully:', data);
      setSuccess(true);
      setMessage(''); 
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="apply-now">
      <h1 className="apply-title">Apply- <span className='apply-title-orange'> Get Selected</span>-Work-<span className='apply-title-orange'>Earn</span></h1>
      {success && <div className="success-message">Message sent successfully.</div>}
      {error && <div className="error-message">{error}</div>}
      <div className="apply-card">
        <div className="user-info">
          <img src={electricianprofile} alt="Profile" className="user-image" />
          <h2 className="user-name">Aakash Manandar</h2>
        </div>
        <textarea
          className="message-box"
          placeholder="Your message/Proposal..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send-button" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default FApplyNow;
