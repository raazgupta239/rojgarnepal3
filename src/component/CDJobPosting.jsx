import React, { useState } from 'react';
import './../css/componentCss/CDJobPosting.css';

const CDJobPosting = () => {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const jobPosts = [
    {
      id: 1,
      title: 'Home Tuition Teacher Needed',
      date: '2 days ago',
      description: 'Looking for a home tutor for my child.',
      location: 'Bharatpur, Chitwan',
      budget: 'Nrs. 4500',
      applications: 78
    },
    {
      id: 2,
      title: 'Selroti Maker Needed',
      date: '8 days ago',
      description: 'Looking for an experienced cook to make Selroti for a family function.',
      location: 'Kathmandu',
      budget: 'Nrs. 5000',
      applications: 45
    },
    {
      id: 3,
      title: 'Electric Needed For Repairs',
      date: '1 month ago',
      description: 'Need an electrician for home repairs.',
      location: 'Lalitpur',
      budget: 'Nrs. 3000',
      applications: 32
    },
    {
      id: 4,
      title: 'Electrici Needed For Repairs',
      date: '1 month ago',
      description: 'Need an electrician for home repairs.',
      location: 'Lalitpur',
      budget: 'Nrs. 3000',
      applications: 32
    },
    {
      id: 5,
      title: 'Electrician Needed For Repairs',
      date: '1 month ago',
      description: 'Need an electrician for home repairs.',
      location: 'Lalitpur',
      budget: 'Nrs. 3000',
      applications: 32
    },
    {
      id: 6,
      title: 'Electricia Needed For Repairs',
      date: '1 month ago',
      description: 'Need an electrician for home repairs.',
      location: 'Lalitpur',
      budget: 'Nrs. 3000',
      applications: 32
    }
    
  ];

  const totalPages = Math.ceil(jobPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const visiblePosts = jobPosts.slice(startIndex, startIndex + postsPerPage);

  const handleViewMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleViewPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDelete = (id) => {
    // Function to delete a job posting
    // Here we simulate deletion by filtering the job posts array
    setPosts(jobPosts.filter(job => job.id !== id));
  };

  return (
    
    <section className="job-postings-section">
      <h2>My Job Postings</h2>
      <div className="post-cards-container">
        {visiblePosts.map((job) => (
          <div key={job.id} className="job-posting-card">
            <div className="job-posting-header">
              <h3 className="job-posting-title">{job.title}</h3>
              <button className="delete-button" onClick={() => handleDelete(job.id)}>
                Delete
              </button>
            </div>
            <p className="job-posting-date">{job.date}</p>
            <p className="job-posting-description">{job.description}</p>
            <p className="job-posting-location"><i className="fa fa-map-marker"></i> {job.location}</p>
            <p className="job-posting-budget">{job.budget}</p>
            <p className="job-posting-applications">{job.applications} applications</p>
          </div>
        ))}
      </div>
      <div className="pagination-buttons">
        {currentPage > 1 && (
          <button className="view-previous-btn" onClick={handleViewPrevious} title="View Previous">⟵</button>
        )}
        {currentPage < totalPages && (
          <button className="view-more-btn" onClick={handleViewMore} title="View More"> ⟶</button>
        )}
      </div>
    </section>
  );
};

export default CDJobPosting;
