import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './../css/pageCss/JobPost.css';

const JobPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    pay: '',
    startDate: '',
    endDate: '',
    coordinates: { lat: 27.7172, lng: 85.3240 }, // Default to Kathmandu
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
        console.log('selected cordinates:',e.latlng);
      },
    });
    return formData.coordinates ? (
      <Marker position={formData.coordinates} />
    ) : null;
  };

  return (
    <div className="job-post-form">
      <h2>Let's Get <span>Started</span> with Your Job Posting</h2>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Job Title <span>*</span>:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="description">Job Description <span>*</span>:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="location">Location of Site <span>*</span>:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="map-container">
          <MapContainer center={[27.7172, 85.3240]} zoom={13} style={{ height: '300px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationMarker />
          </MapContainer>
        </div>
        <div>
          <label htmlFor="pay">Pay Amount <span>*</span>:</label>
          <input type="text" id="pay" name="pay" value={formData.pay} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="startDate">Duration <span>*</span>:</label>
          <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} required />
          <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} required />
        </div>
        <button type="submit">Find Freelancers</button>
      </form>
    </div>
  );
};

export default JobPost;
