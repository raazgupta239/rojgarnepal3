import React from 'react';
import './../css/componentCss/UserStatistics.css';

const UserStatistics = ({ userStatistics = [] }) => {
    return (
      <div className="user-statistics">
        <table className="user-statistics-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {userStatistics.length > 0 ? (
              userStatistics.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td><img src={`https://i.pravatar.cc/50?img=${user.id.slice(1)}`} alt="Profile" /></td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className={user.status === 'Verified' ? 'status-verified' : 'status-unverified'}>{user.status}</td>
                  <td><button className="edit-btn">✏️</button></td>
                  <td><button className="delete-btn">🗑️</button></td>
                  <td>
                    {user.status === 'Verified' ? null : <button className="link-btn">Request to verify</button>}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No user data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default UserStatistics;