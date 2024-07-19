import React, { useState } from 'react';
import './../css/pageCss/FSearchFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMoneyBill, faClock, faPaperPlane,faFilter } from '@fortawesome/free-solid-svg-icons';
import Footer from '../component/Footer';
import Navbarclient from '../component/Navbarclient';
 // --------------take value from inputfield of search---------------------
 const searchedJob = "ElecTRi"; 
 // --------------take value from inputfield of search---------------------
const jobs = [
  {
    id: 1,
    title: "Electrician Required For Repairs",
    clientName: "John Doe",
    time: "4 hours ago",
    jobDescription: "We are looking for a skilled electrician to help with various electrical repairs in our home. The tasks include fixing faulty wiring, replacing damaged switches and outlets, and ensuring all electrical systems are up to safety standards.",
    proposals: 10,
    payment: 8000,
    date: "2024/08/26",
    estimatedHours: 5,
    location: "Balkumari, Lalitpur"
  },
{
      id: 2,
      clientName: 'Ravi',
      title: 'Plumber Required For Repairs.',
      location: 'Sorakhutte,Kathmandu',
      time: '4 hours ago',
      payment: 10000,
      jobDescription: 'The ideal candidate will have a thorough knowledge of plumbing systems, tools, and equipment. Responsibilities include installing, repairing, and maintaining pipes, fixtures, and other plumbing systems in residential, commercial, and industrial structures.',
      proposals: '10',
      date: '2024/08/18',
      estimatedHours: 8
    },
    {
      id: 3,
      clientName: 'Kritik',
      title: 'Electrician Required For Repairs.',
      location: 'NewBaneswor,Kathmandu',
      time: '6 hours ago',
      payment: 1200,
      jobDescription: 'The ideal candidate will have a thorough knowledge of plumbing systems, tools, and equipment. Responsibilities include installing, repairing, and maintaining pipes, fixtures, and other plumbing systems in residential, commercial, and industrial structures.',
      proposals: '10',
      date: '2024/06/25',
      estimatedHours: 2
    },
    {
      id: 4,
      clientName: 'Prashansa',
      title: 'Electrician Required For Repairs.',
      location: 'Thapathali,Kathmandu',
      time: '8 hours ago',
      payment: 6000,
      jobDescription: 'The ideal candidate will have a thorough knowledge of plumbing systems, tools, and equipment. Responsibilities include installing, repairing, and maintaining pipes, fixtures, and other plumbing systems in residential, commercial, and industrial structures.',
      proposals: '10',
      date: '2024/08/18',
      estimatedHours: 5
    },
    {
      id: 5,
      clientName: 'Yogesh',
      title: 'Electrician Required For Repairs.',
      location: 'Tripureshwor,Kathmandu',
      time: '8 hours ago',
      payment: 8000,
      jobDescription: 'The ideal candidate will have a thorough knowledge of plumbing systems, tools, and equipment. Responsibilities include installing, repairing, and maintaining pipes, fixtures, and other plumbing systems in residential, commercial, and industrial structures.',
      proposals: '40',
      date: '2024/08/18',
      estimatedHours: 9
    },
    {
      id: 6,
      clientName: 'Manita',
      title: 'Selroti Makers Required for MahaPuja.',
      location: 'Tripureshwor,Kathmandu',
      time: '3 hours ago',
      payment: 8000,
      jobDescription: 'The ideal candidate will have a thorough knowledge of plumbing systems, tools, and equipment. Responsibilities include installing, repairing, and maintaining pipes, fixtures, and other plumbing systems in residential, commercial, and industrial structures.',
      proposals: '20',
      date: '2024/08/18',
      estimatedHours:4
    },
    {
      id: 7,
      clientName: 'Anita',
      title: 'Pandits Required For Marriage Ceremony.',
      location: 'Tindhara,Kathmandu',
      time: '2 hours ago',
      payment: 16000,
      jobDescription: 'The ideal candidate will have a thorough knowledge of plumbing systems, tools, and equipment. Responsibilities include installing, repairing, and maintaining pipes, fixtures, and other plumbing systems in residential, commercial, and industrial structures.',
      proposals: '40',
      date: '2024/05/20',
      estimatedHours: 10
    },
    {
      id: 8,
      clientName: 'Yogesh',
      title: 'Tution Teacher for 5th graders needed.',
      location: 'Bharatpur,Chitwan',
      time: '1 hours ago',
      payment: 18000,
      jobDescription: 'The ideal candidate will have a thorough knowledge of plumbing systems, tools, and equipment. Responsibilities include installing, repairing, and maintaining pipes, fixtures, and other plumbing systems in residential, commercial, and industrial structures.',
      proposals: '60',
      date: '2024/08/18',
      estimatedHours: 360
    },
    {
      id: 9,
      clientName: 'Himal',
      title: 'Electrician Required For Repairs.',
      location: 'Mitrapark,Biratnagar',
      time: '12 hours ago',
      payment: 7000,
      jobDescription: 'The ideal candidate will have a thorough knowledge of plumbing systems, tools, and equipment. Responsibilities include installing, repairing, and maintaining pipes, fixtures, and other plumbing systems in residential, commercial, and industrial structures.',
      proposals: '50',
      date: '2024/07/18',
      estimatedHours:14
    }
  
];

// -----for estimated hours in the job card -------------
function convertHours(hours) {
  if (hours > 8760) { // greater than a year
    return `${Math.floor(hours / 8760)} year`;
  } else if (hours > 720) { // greater than a month
    return `${Math.floor(hours / 720)} month`;
  } else if (hours > 24) { // greater than a day
    return `${Math.floor(hours / 24)} days`;
  } else {
    return `${hours} hours`;
  }
}
//-----------------------------------------------------

function FSearchFilter() {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(5000);
  const [selectedHours, setSelectedHours] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setSelectedLocations((prev) =>
    
      prev.includes(value) ? prev.filter((loc) => loc !== value) : [...prev, value]
    );
  };

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleHoursChange = (event) => {
    setSelectedHours(event.target.value);
  };
 


  const filteredJobs = jobs.filter((job) => {
   
    const matchJobTitle = job.title.toLowerCase().includes(searchedJob.toLowerCase());

   
    const matchLocation = selectedLocations.length === 0 || selectedLocations.some((loc) => job.location.includes(loc));
    const matchPayment = job.payment <= selectedPayment;
    const matchHours = !selectedHours || (selectedHours === '3' && job.estimatedHours < 3) ||
      (selectedHours === '3-5' && job.estimatedHours >= 3 && job.estimatedHours <= 5) ||
      (selectedHours === '6-8' && job.estimatedHours >= 6 && job.estimatedHours <= 8) ||
      (selectedHours === '8+' && job.estimatedHours > 8)|| (selectedHours === '0+' && job.estimatedHours >0);

    return matchJobTitle && matchLocation && matchPayment && matchHours;
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredJobs.length / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <Navbarclient/>
    <div className="search-filter-page">
      <div className="filters-section">
        <h3>Filters &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <FontAwesomeIcon icon={faFilter} /></h3> 
        
        <div className="filter-group">
          <h4>Location</h4>
          <ul>
            {['Chitwan', 'Lalitpur', 'Kathmandu', 'Pokhara', 'Nepalgunj', 'Biratnagar'].map((location) => (
              <li key={location}>
                <input
                  type="checkbox"
                  value={location}
                  checked={selectedLocations.includes(location)}
                  onChange={handleLocationChange}
                />
                <label>{location}</label>
              </li>
            ))}
          </ul>
        </div>
       
        <div className="filter-group">
          <h4>Proposed Payment</h4>
          <input type="range" min="0" max="20000" value={selectedPayment} onChange={handlePaymentChange} />
          <button className="go-button">Nrs. 0 - {selectedPayment}</button>
        </div>
        <div className="filter-group"> 
          <h4>Estimated Time</h4>
          <ul>
            <li>
              <input
                type="radio"
                value="3"
                checked={selectedHours === '3'}
                onChange={handleHoursChange}
              />
              <label>Less than 3 Hours</label>
            </li>
            <li>
              <input
                type="radio"
                value="3-5"
                checked={selectedHours === '3-5'}
                onChange={handleHoursChange}
              />
              <label>3-5 Hours</label>
            </li>
            <li>
              <input
                type="radio"
                value="6-8"
                checked={selectedHours === '6-8'}
                onChange={handleHoursChange}
              />
              <label>6-8 Hours</label>
            </li>
            <li>
              <input
                type="radio"
                value="8+"
                checked={selectedHours === '8+'}
                onChange={handleHoursChange}
              />
              <label>More than 8 Hours</label>
            </li>
            <li>
              <input
                type="radio"
                value="0+"
                checked={selectedHours === '0+'}
                onChange={handleHoursChange}
              />
              <label>All</label>
            </li>
          </ul>
        </div>
      </div>

      <div className="results-section">
        <h2>Results for "{searchedJob}"</h2>
        <div className="jobs">
          {currentJobs.map((job) => (
            <div className="job-card" key={job.id}>
              <span className='client-initials'>{job.clientName.charAt(0)}</span>
              <button className="apply-btn">Apply Now <FontAwesomeIcon icon={faPaperPlane} /></button>
              <div className="jobpost-details">
                <h3 className='jobpost-title'>{job.title}</h3>
                <span className="time"><FontAwesomeIcon icon={faClock} /> {job.time}</span>
                <p className="job-description">"{job.jobDescription}"</p>
                <p className="proposals"><span className='proposal-label'>Proposals:</span> <span className='proposal-no'>{job.proposals}</span></p>
                <div className='pdel'>
                  <p className="payment"><FontAwesomeIcon icon={faMoneyBill} />&nbsp; Nrs. {job.payment}</p>
                  <p className="date">Date: {job.date}</p>
                  <p className="estimated-hours">Estimated Time:{convertHours(job.estimatedHours)}</p>
                  <p className="location"><FontAwesomeIcon icon={faLocationDot} /> {job.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>{"<"}</button>
          {pageNumbers.map((number) => (
            <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
              {number}
            </button>
          ))}
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>{">"}</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
  
}

export default FSearchFilter;
