import React from 'react'

const VerificationRequest = () => {
  return (
    <div> <div className="verification-requests">
    <h2>Verification Requests:</h2>
    {requests.map((user, index) => (
     <div key={user.id} className="verification-card">
      <img src={user.profile} alt={`${user.name}'s profile`} className="profile-pic" />
      <div className='divfornameanddocuments'>
       <div className="user-info">
        <h3>{user.name}</h3>
        <p className='useremail'>{user.mail}</p>
        <div>
         <button onClick={() => handleAccept(user.id)} className="accept-button">Accept</button>
         <button onClick={() => handleDecline(user.id)} className="decline-button">Decline</button>
        </div>
       </div>
       <div className="documents">
      <div className="document-section">
         <h4>Identity Documents</h4>
         <a href={user.documents.nid} target="_blank" rel="noopener noreferrer">View CD/NID</a>
        </div>
        <div className="document-section">
         <h4>Training Certificates</h4>
         {user.documents.trainingCertificates.map((doc, idx) => (
          <a key={idx} href={doc} target="_blank" rel="noopener noreferrer">View Certificate {idx + 1}</a>
         ))}
        </div>
       </div>
      </div>
      <div className='adminindex'>{index + 1}</div>
      {declineInfo.userId === user.id && (
       <div className="decline-reason">
        <textarea
         placeholder="Enter the reason to decline"
         value={declineInfo.reason}
         onChange={(e) => setDeclineInfo(prev => ({ ...prev, reason: e.target.value }))}
        />
        <button onClick={confirmDecline} className="confirm-decline-button">Confirm Decline</button>
        <button onClick={cancelDecline} className="cancel-decline-button">Cancel</button>
       </div>
      )}
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
   </div></div>
  )
}

export default VerificationRequest