import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './../css/pageCss/JobPost.css';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const JobPost = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    description: '',
    date: '',
    time: '',
    serviceType: '',
    location: '',
    coordinates: { lat: 27.7172, lng: 85.3240 }, // Default to Kathmandu
    proposedPayAmount: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.example.com/job-post', formData);
      if (response.status === 200) {
        setMessage('Job Details Submitted Successfully!');
      }
    } catch (error) {
      setMessage('Error submitting job details: ' + (error.response?.data?.message || error.message));
    }
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setFormData({ ...formData, coordinates: e.latlng });
        console.log('selected cordinates:', e.latlng);
      },
    });
    return formData.coordinates ? <Marker position={formData.coordinates} /> : null;
  };

  return (
    <>
    <Navbar/>
    <div className="job-post-form">
      <h2>Let's Get <span>Started</span> with Your Job Posting</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="jobTitle">Job Title <span>*</span>:</label>
          <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="description">Job Description <span>*</span>:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="date">Date <span>*</span>:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="time">Time <span>*</span>:</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="serviceType">Service Type <span>*</span>:</label>
          <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} required>
            <option value="">Select Service Type</option>
            <option value="Eletrician">Electrician</option>
            <option value="Plumber">Plumber</option>
            <option value="Painter">Painter</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Dish Washer">Dish Washer</option>
            <option value="Laundry">Laundry</option>
            <option value="Carpenter">Carpenter</option>
            <option value="Technician">Technician</option>
            <option value="Selroti Maker">Selroti Maker</option>
            <option value="Tuition Teacher">Tuition Teacher</option>
            <option value="Sweeper">Sweeper</option>
            <option value="Repair-man">Repair-man</option>
            <option value="Gardener">Gardener</option>
            <option value="Pandit">Pandit</option>
            <option value="Care Taker">Care Taker</option>
          </select>
        </div>
        <div>
          <label htmlFor="location">Location of Site <span>*</span>:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="map-container">
          <MapContainer center={[27.7172, 85.3240]} zoom={13} style={{ height: '90%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationMarker />
          </MapContainer>
        </div>
        <div>
          <label htmlFor="proposedPayAmount">Proposed Pay Amount <span>*</span>:</label>
          <input type="number" id="proposedPayAmount" name="proposedPayAmount" value={formData.proposedPayAmount} onChange={handleChange} required />
        </div>
        <button type="submit">Find Freelancers</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default JobPost;
