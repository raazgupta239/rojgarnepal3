import React, { useState, useEffect } from 'react';
import SideBar from '../component/SideBar';
import TopSearchBar from '../component/TopSearchBar';

import './../css/pageCss/AdminDashboard.css';

import AllJobPosts from '../component/AllJobPosts';
import './../css/pageCss/AdminJobPosts.css';

const AdminJobPosts = () => {
  
    

    

  return (
    <div className="admin-job-posts">
      <SideBar/>
      <main className="content">
        <TopSearchBar />
        <AllJobPosts/>
      </main>
    </div>
  );
}

export default AdminJobPosts;
