import React from 'react'
import './../css/pageCss/AdminDashboard.css';

const Filter = () => {
  return (
    <div className="filter">
    <label>From:</label>
    <input type="date" />
    <label>To:</label>
    <input type="date" />
    <button className="filter-button">Filter</button>
  </div>
  )
}

export default Filter