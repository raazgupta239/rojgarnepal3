import React, { useState } from 'react';
import './../css/componentCss/CTrendingPosts.css';
import userprofile from './../images/clientprofile.png';
import userprofile1 from './../images/clientmale.jpg';
import userprofile4 from './../images/userprofile4.jpg';
import userprofile5 from './../images/userprofile5.jpg';
const CTrendingPosts = () => {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
;
  const posts = [
    {
      userprofile: userprofile,
      title: " Selroti Making Service Needed",
      time: "4 hours ago",
      description: "Looking for an experienced cook to make selroti for a family function. Requires traditional Nepali cooking skills.Event will be held in kathmandu,and ingredients will be provided.",
      location: "Koteshwor, Kathmandu",
      proposals: 20,
    },
    {
      userprofile:userprofile1 ,
      title: " Home Tution Teacher Needed",
      time: "5 hours ago",
      description: "Looking for an experienced cook to make selroti for a family function. Requires traditional Nepali cooking skills.Event will be held in kathmandu,and ingredients will be provided.",
      location: "Bagbazaar, Kathmandu",
      proposals: 50,
    },
    {
      userprofile: userprofile5,
      title: " Cleaning Service needed",
      time: "7 hours ago",
      description: "Looking for an experienced cook to make selroti for a family function. Requires traditional Nepali cooking skills.Event will be held in kathmandu,and ingredients will be provided.",
      location: "NewRoad, Kathmandu",
      proposals: 16,
    },
    {
      userprofile: userprofile4,
      title: " Electrician Required ",
      time: "11 hours ago",
      description: "Looking for an experienced cook to make selroti for a family function. Requires traditional Nepali cooking skills.Event will be held in kathmandu,and ingredients will be provided.",
      location: "Thapathali, Kathmandu",
      proposals: 9,
    }
    // Add more posts as needed
  ];

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const visiblePosts = posts.slice(startIndex, startIndex + postsPerPage);

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

  return (
    <section className="trending-posts">
   
      <section className="trending-posts-border">
        <h2>Trending Posts :</h2>
        <p>Discover the most popular job listings right now.</p>
      </section>
      <br />
      <br />
      <div className="post-cards-container">
        {visiblePosts.map((post, index) => (
          <div key={index} className="post-card">
            <div className="post-card-header">
              <section className='title'>Title:</section>
              <h3 className="titlename">{post.title}</h3> 
              <section className='time-display'>
                <span className='clock'>🕓</span><br />
                <span className='time-description'>{post.time}</span>
              </section>
            </div>
            <br />
            
            <p className="post-description">
            <img className='user-profile' src={post.userprofile} alt="User Profile"/>
            <br /><br />
              "{post.description}"</p>
              <br />
            <p className="post-meta-item"><span className='location'>Location:</span><span className='location-value'> {post.location}</span>
         <br /><span className='proposals'>Proposals:</span><span className='proposal-value'> {post.proposals}</span></p>
          
      
          </div>
        ))}
    
      
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

export default CTrendingPosts;

