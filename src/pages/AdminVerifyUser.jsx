import React, { useState, useEffect } from 'react';
import SideBar from '../component/SideBar';
import TopSearchBar from '../component/TopSearchBar';
import Header from '../component/Header';
import './../css/pageCss/AdminVerifyUser.css';

// Sample freelancer data with documents
const freelancers = [
  {
    id: 1,
    name: "Nirmal Hamal",
    profile: 'path_to_nirmalhamal_image',
    documents: {
      nid: 'path_to_nirmalhamal_nid.pdf',
      trainingCertificates: ['path_to_nirmalhamal_cert1.pdf', 'path_to_nirmalhamal_cert2.pdf'],
    },
  },
  {
    id: 2,
    name: "Rita Khadka",
    profile: 'path_to_ritakhadka_image',
    documents: {
      nid: 'path_to_ritakhadka_nid.pdf',
      trainingCertificates: ['path_to_ritakhadka_cert1.pdf', 'path_to_ritakhadka_cert2.pdf'],
    },
  },
  // Add additional freelancers as needed
];

const AdminVerifyUser = () => {
  const [requests, setRequests] = useState(freelancers); // Users waiting for verification
  const [bookings, setBookings] = useState([]); // Verified users

  useEffect(() => {
    // Optionally fetch initial data or counts from a backend or local storage
  }, []);

  const handleAccept = async (userId) => {
    try {
      console.log(`User ${userId} accepted`);

      // Find the user being accepted
      const userToAccept = requests.find(user => user.id === userId);

      if (userToAccept) {
        // Add the user to verified bookings
        setBookings(prevBookings => [...prevBookings, userToAccept]);

        // Remove the user from requests
        setRequests(prevRequests => prevRequests.filter(user => user.id !== userId));

        // Send a verification email
        await fetch(`/api/sendVerificationEmail/${userId}`, { method: 'POST' });
      }

    } catch (error) {
      console.error('Error accepting user:', error);
    }
  };

  const handleDecline = async (userId) => {
    const reason = prompt('Please enter the reason for decline:');
    if (!reason) return; // Abort if no reason is provided

    try {
      console.log(`User ${userId} declined`);

      // Remove the user from requests
      setRequests(prevRequests => prevRequests.filter(user => user.id !== userId));

      // Send a decline reason email
      await fetch(`/api/sendDeclineEmail/${userId}`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason })
      });

    } catch (error) {
      console.error('Error declining user:', error);
    }
  };

  return (
    <div className='admin-verify-user'>
      <SideBar />
      <main className="content">
        <TopSearchBar />
        <Header bookings={bookings} pagename='Verified Users' />
        <div className="verification-requests">
          <h2>Verification Requests:</h2>
          {requests.map((user, index) => (
            <div key={user.id} className="verification-card">
              <img src={user.profile} alt={`${user.name}'s profile`} className="profile-pic" />
              <div className="user-info">
                <h3>{user.name}</h3>
                <div className="documents">
                  <div className="document-section">
                    <h4>CD/NID</h4>
                    <a href={user.documents.nid} target="_blank" rel="noopener noreferrer">myfile.pdf</a>
                  </div>
                  <div className="document-section">
                    <h4>Training Certificates</h4>
                    {user.documents.trainingCertificates.map((doc, idx) => (
                      <a key={idx} href={doc} target="_blank" rel="noopener noreferrer">mytrfile.pdf</a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <button onClick={() => handleAccept(user.id)} className="accept-button">Accept</button>
                <button onClick={() => handleDecline(user.id)} className="decline-button">Decline</button>
                <div>{index + 1}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="verified-users">
          <h2>Verified Users:</h2>
          {bookings.map((user) => (
            <div key={user.id} className="verification-card">
              <img src={user.profile} alt={`${user.name}'s profile`} className="profile-pic" />
              <h3>{user.name}</h3>
              <div className="user-info">
               
                <div className="documents">
                  <div className="document-section">
                    <h4>CD/NID</h4>
                    <a href={user.documents.nid} target="_blank" rel="noopener noreferrer">myfile.pdf</a>
                  </div>
                  <div className="document-section">
                    <h4>Training Certificates</h4>
                    {user.documents.trainingCertificates.map((doc, idx) => (
                      <a key={idx} href={doc} target="_blank" rel="noopener noreferrer">mytrfile.pdf</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminVerifyUser;

