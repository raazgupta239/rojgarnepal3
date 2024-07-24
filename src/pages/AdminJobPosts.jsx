import React, { useState, useEffect } from 'react';
import SideBar from '../component/SideBar';
import TopSearchBar from '../component/TopSearchBar';
import BookingTable from '../component/BookingTable';
import Header from '../component/Header';
import Filter from '../component/Filter';
import './../css/pageCss/AdminJobPosts.css';

const AdminJobPosts = () => {
  const [bookings, setBookings] = useState([]);
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    // Simulating an API call with dummy data for bookings
    const dummyBookingsData = [
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
      // Add more dummy bookings data as needed
    ];

    // Simulating an API call with dummy data for job posts
    const dummyJobPostsData = [
      {
        id: 1,
        title: 'Frontend Developer',
        description: 'Looking for an experienced frontend developer.',
        status: 'Open'
      },
      {
        id: 2,
        title: 'Backend Developer',
        description: 'Backend developer needed for a project.',
        status: 'Closed'
      }
      // Add more dummy job posts data as needed
    ];

    setBookings(dummyBookingsData);
    setJobPosts(dummyJobPostsData);
  }, []);

  return (
    <div className="admin-job-posts">
      <SideBar/>
      <main className="content">
        <TopSearchBar />
        <Header bookings={bookings} />
        <Filter />
        <BookingTable bookings={bookings} />
      </main>
    </div>
  );
}

export default AdminJobPosts;
