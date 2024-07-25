// src/component/BookingTable.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './../css/componentCss/BookingTable.css';

const BookingTable = ({ bookings = [] }) => {
  if (!Array.isArray(bookings)) {
    console.error('Bookings prop is not an array');
    return null;
  }

  return (
    <table className="booking-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Client Name</th>
          <th>Client Email</th>
          <th>Freelancer Name</th>
          <th>Freelancer Email</th>
          <th>Booked Date</th>
          <th>Project Title</th>
          <th>Project Status</th>
          <th>Payment Status</th>
        </tr>
      </thead>
      <tbody>
        {bookings.length === 0 ? (
          <tr>
            <td colSpan="9">No bookings available</td>
          </tr>
        ) : (
          bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.clientName}</td>
              <td>{booking.clientEmail}</td>
              <td>{booking.freelancerName}</td>
              <td>{booking.freelancerEmail}</td>
              <td>{booking.bookedDate}</td>
              <td>{booking.projectTitle}</td>
              <td>{booking.projectStatus}</td>
              <td>{booking.paymentStatus}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

BookingTable.propTypes = {
  bookings: PropTypes.array.isRequired,
};

export default BookingTable;
