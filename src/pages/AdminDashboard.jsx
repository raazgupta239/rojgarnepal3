
// import React, { useState, useEffect } from 'react';
// import SideBar from '../component/SideBar';
// import TopSearchBar from '../component/TopSearchBar';
// import './../css/pageCss/AdminDashboard.css'
// import Circlecheck from './Circlecheck';
// const AdminDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://your-api-endpoint.com/bookings')
//       .then(response => response.json())
//       .then(data => {
//         setBookings(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       <SideBar bookingsCount={bookings.length} />
//       <main className="content">
//         <TopSearchBar />
//         <header className="header">
//           <h1>Total Bookings:</h1>
//       <Circlecheck/>
//           {/* <div className="booking-count">{bookings.length}</div> */}
//         </header>
//         <div className="filter">
//           <label>From:</label>
//           <input type="date" />
//           <label>To:</label>
//           <input type="date" />
//           <button className="filter-button">Filter</button>
//         </div>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <table className="booking-table">
//             <thead>
//               <tr>
//                 <th>SN</th>
//                 <th>Client</th>
//                 <th>Client's Email</th>
//                 <th>Freelancer</th>
//                 <th>Freelancer's Email</th>
//                 <th>Booked Date</th>
//                 <th>Project Title</th>
//                 <th>Project Status</th>
//                 <th>Payment Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking, index) => (
//                 <tr key={booking.id}>
//                   <td>{index + 1}</td>
//                   <td>{booking.clientName}</td>
//                   <td>{booking.clientEmail}</td>
//                   <td>{booking.freelancerName}</td>
//                   <td>{booking.freelancerEmail}</td>
//                   <td>{new Date(booking.bookedDate).toLocaleDateString()}</td>
//                   <td>{booking.projectTitle}</td>
//                   <td className={booking.projectStatus === 'Active' ? 'status-active' : 'status-completed'}>
//                     {booking.projectStatus}
//                   </td>
//                   <td className={booking.paymentStatus === 'Done' ? 'status-done' : 'status-not-done'}>
//                     {booking.paymentStatus}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import SideBar from '../component/SideBar';
import TopSearchBar from '../component/TopSearchBar';
import './../css/pageCss/AdminDashboard.css';
import Circlecheck from './Circlecheck';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call with dummy data
    const dummyData = [
      {
        id: 1,
        clientName: 'John Doe',
        clientEmail: 'john.doe@example.com',
        freelancerName: 'Jane Smith',
        freelancerEmail: 'jane.smith@example.com',
        bookedDate: '2023-07-01',
        projectTitle: 'Website Development',
        projectStatus: 'Active',
        paymentStatus: 'Done'
      },
      {
        id: 2,
        clientName: 'Alice Johnson',
        clientEmail: 'alice.johnson@example.com',
        freelancerName: 'Bob Brown',
        freelancerEmail: 'bob.brown@example.com',
        bookedDate: '2023-07-05',
        projectTitle: 'Mobile App Design',
        projectStatus: 'Completed',
        paymentStatus: 'Not Done'
      },
      // Add more dummy data as needed
    ];

    setBookings(dummyData);
    setLoading(false);
  }, []);

  return (
    <div className="admin-dashboard">
      <SideBar bookingsCount={bookings.length} />
      <main className="content">
        <TopSearchBar />
        <header className="header">
          <h1>Total Bookings:</h1>
          <Circlecheck />
          {/* <div className="booking-count">{bookings.length}</div> */}
        </header>
        <div className="filter">
          <label>From:</label>
          <input type="date" />
          <label>To:</label>
          <input type="date" />
          <button className="filter-button">Filter</button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="booking-table">
            <thead>
              <tr>
                <th>SN</th>
                <th>Client</th>
                <th>Client's Email</th>
                <th>Freelancer</th>
                <th>Freelancer's Email</th>
                <th>Booked Date</th>
                <th>Project Title</th>
                <th>Project Status</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.clientName}</td>
                  <td>{booking.clientEmail}</td>
                  <td>{booking.freelancerName}</td>
                  <td>{booking.freelancerEmail}</td>
                  <td>{new Date(booking.bookedDate).toLocaleDateString()}</td>
                  <td>{booking.projectTitle}</td>
                  <td className={booking.projectStatus === 'Active' ? 'status-active' : 'status-completed'}>
                    {booking.projectStatus}
                  </td>
                  <td className={booking.paymentStatus === 'Done' ? 'status-done' : 'status-not-done'}>
                    {booking.paymentStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
 