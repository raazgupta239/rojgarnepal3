import React, { useState, useEffect } from 'react';
import SideBar from '../component/SideBar';
import TopSearchBar from '../component/TopSearchBar';

import './../css/pageCss/AdminDashboard.css';
import Filter from '../component/Filter';
import AllJobPosts from '../component/AllJobPosts';
import './../css/pageCss/AdminJobPosts.css';

const AdminJobPosts = () => {
  
    

    

  return (
    <div className="admin-job-posts">
      <SideBar/>
      <main className="content">
        <TopSearchBar />
       
        <Filter />
        <AllJobPosts/>
        
      </main>
    </div>
  );
}

export default AdminJobPosts;
