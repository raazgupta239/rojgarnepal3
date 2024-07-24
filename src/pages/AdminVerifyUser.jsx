// src/page/AdminVerifyUser.js
import React, { useState, useEffect } from 'react';
import SideBar from '../component/SideBar';
import TopSearchBar from '../component/TopSearchBar';
import Header from '../component/Header';
import Filter from '../component/Filter';
import BookingTable from '../component/BookingTable';
import './../css/pageCss/AdminVerifyUser.css';

const AdminVerifyUser = () => {
  const [bookings, setBookings] = useState([]);
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    // Simulating API calls with dummy data
    const dummyBookings = [
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
      // Add more dummy data as needed
    ];

   

    setBookings(dummyBookings);
    
  }, []);

  return (
    <div className='admin-verify-user'>
      <SideBar />
      <main className="content">
        <TopSearchBar />
        <Header bookings={bookings} />
        <Filter />
        <BookingTable bookings={bookings} />
      </main>
    </div>
  );
}

export default AdminVerifyUser;
