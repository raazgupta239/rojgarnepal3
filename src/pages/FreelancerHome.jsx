import React from 'react';
import FHeader from '../component/FHeader';
import FSuggestedJobs from '../component/FSuggestedJobs';
import './../css/pageCss/FHome.css';


function FreelancerHome() {
  return (
    <div className="freelancer-home">
      <FHeader/>
      <FSuggestedJobs />
    </div>
  );
}
/*--*/
export default FreelancerHome;
