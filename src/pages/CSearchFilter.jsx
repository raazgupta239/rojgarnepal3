import React, { useState } from 'react';
import './../css/pageCss/CSearchFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar, faPaperPlane, faFilter } from '@fortawesome/free-solid-svg-icons';
import Footer from '../component/Footer';
import kishorthapa from '../images/kishorthapa.jpg';
import nirmalhamal from '../images/nirmalhamal.jpg';
import rajendraadhikari from '../images/rajendraadhikari.jpg';
import ritakhadka from '../images/ritakhadka.jpg';
import santoshadhikari from '../images/santoshadhikari.jpg';
import sitamagar from '../images/sitamagar.jpg';
import akashmanandar from '../images/profile_electrician.png';
import rubyshrestha from '../images/babysitter.png';
import dipeshranjit from '../images/dipeshranjit.jpg';
import minalama from '../images/minalama.jpg';

import Navbarclient from '../component/Navbarclient';
//searched talent
const searchedTalent= "";
const freelancers = [
    {
      id: 1,
      name: "Nirmal Hamal",
      profile: nirmalhamal,
      title: "Tuition Teacher",
      rating: 2.3,
      location: "Balkumari, Lalitpur",
      price: 3000,
      description: "I am an experienced tutor and a dedicated bachelor's student, committed to helping students excel through personalized and engaging lessons. My patient and tailored approach ensures each student reaches their full potential.",
    },
    
    {
      id: 2,
      name: "Rita Khadka",
      profile: ritakhadka,
      title: "CareTaker",
      rating: 3.6,
      location: "Kupondole, Lalitpur",
      price: 6000,
      description: "With over 5 years of experience, I provide compassionate care for elderly and children, ensuring their safety and well-being in a home environment. Skilled in managing daily routines and medical needs.",
    },
    
   
    {
      id: 3,
      name: "Santosh Adhikari",
      profile: santoshadhikari,
      title: "Cleaner",
      rating: 1.3,
      location: "Maharajgunj, Biratnagar",
      price: 4000,
      description: "Professional cleaner with a keen eye for detail. Provides thorough cleaning services for homes and offices, ensuring spaces are spotless and sanitized.",
    },
    {
      id: 4,
      name: "Rajendra Adhikari",
      profile: rajendraadhikari,
      title: "Technician",
      rating: 4.6,
      location: "Pulchowk, Lalitpur",
      price: 7000,
      description: "Experienced technician specializing in electronic repairs and maintenance. Skilled in diagnosing and fixing issues with a variety of household and office electronic devices.",
    },
   
    {
      id: 5,
      name: "Kishor Thapa",
      profile: kishorthapa,
      title: "Plumber",
      rating: 3.8,
      location: "Bhaktapur",
      price: 5500,
      description: "Licensed plumber with over 10 years of experience in residential and commercial plumbing. Offers services including installation, repair, and maintenance of plumbing systems.",
    },
    {
        id: 6,
        name: "Ruby Shrestha",
        profile: rubyshrestha,
        title: "Babysitter",
        rating: 4.8,
        location: "Mahendranagar,Pokhara",
        price: 15000,
        description: "Licensed plumber with over 6 years of experience in babysitting.I also have degree certificate on Human Pshycology.",
      },
      {
        id: 5,
        name: "Aakash Manandar",
        profile: akashmanandar,
        title: "Electrician",
        rating: 4.3,
        location: "Bharatpur,Chitwan",
        price: 8500,
        description: "Licensed electrician with over 8 years of experience in residential and commercial works. Offers services including installation, repair, and maintenance of plumbing systems.",
      },
    {
      id: 8,
      name: "Sita Magar",
      profile: sitamagar,
      title: "Cleaner",
      rating: 3.2,
      location: "Boudha, Kathmandu",
      price: 20000,
      description: "Detail-oriented cleaner with experience in maintaining cleanliness in homes and offices. Reliable and efficient, with a focus on creating a clean and healthy environment.",
    },
    
    {
      id: 9,
      name: "Suman Dhakal",
      profile: kishorthapa,
      title: "CareTaker",
      rating: 4.7,
      location: "Dillibazar, Kathmandu",
      price: 5000,
      description: "Compassionate caretaker with experience in providing excellent care to the elderly and children. Ensures safety, well-being, and companionship, with a focus on enhancing the quality of life.",
    },
    {
      id: 10,
      name: "Mina Lama",
      profile: minalama,
      title: "Gardener",
      rating: 4.3,
      location: "Sundarijal, Kathmandu",
      price: 4800,
      description: "Dedicated gardener with a love for plants and landscaping. Provides comprehensive gardening services, including planting, pruning, and garden maintenance.",
    },
    {
      id: 11,
      name: "Dipesh Ranjit",
      profile: dipeshranjit,
      title: "Pandit",
      rating: 5.0,
      location: "Banepa,Lalitpur",
      price: 12000,
      description: "Highly respected Pandit known for conducting religious ceremonies with precision and devotion. Specializes in various Hindu rituals, ensuring spiritual satisfaction.",
    },
  ];
  

const CSearchFilter = () => {
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedRatings, setSelectedRatings] = useState(0);
    const [selectedBudget, setSelectedBudget] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const freelancersPerPage = 6;
  
    const handleLocationChange = (event) => {
      const value = event.target.value;
      setSelectedLocations((prev) =>
        prev.includes(value) ? prev.filter((loc) => loc !== value) : [...prev, value]
      );
    };
  
    const handleRatingChange = (rating) => {
      setSelectedRatings(rating);
    };
  
    const handleBudgetChange = (event) => {
      setSelectedBudget(event.target.value);
    };
  
    const filteredFreelancers = freelancers.filter((freelancer) => {
      const matchSearch = freelancer.title.toLowerCase().includes(searchedTalent.toLowerCase());
      const matchName = freelancer.name.toLowerCase().includes(searchedTalent.toLowerCase());
      const matchLocation = selectedLocations.length === 0 || selectedLocations.some((loc) => freelancer.location.includes(loc));
      

      const matchRating = !selectedRatings||(selectedRatings === 1 && freelancer.price >= 1 && freelancer.price <=2) ||
      (selectedRatings === 2 && freelancer.rating >= 2 && freelancer.rating <=3) ||
      (selectedRatings === 3 && freelancer.rating >= 3 && freelancer.rating <=4 )||
      (selectedRatings === 4 && freelancer.rating >= 4 && freelancer.rating <=5 )||
      (selectedRatings === 5 && freelancer.rating == 5) ;
;
 
      const matchBudget = !selectedBudget || (selectedBudget === '0-5' && freelancer.price < 5000) ||
      (selectedBudget === '5-10' && freelancer.price >= 5000 && freelancer.price <=10000) ||
      (selectedBudget === '10-20' && freelancer.price >= 10000 && freelancer.price <=20000) ||
      (selectedBudget === '20+' && freelancer.price >= 20000 )||
      (selectedBudget === '0+' && freelancer.price >= 0) ;

      //Client can search either by the freelancer's name or by JobTitle.
  
      return (matchSearch||matchName) && matchLocation && matchRating && matchBudget;
    });


  const indexOfLastFreelancer = currentPage * freelancersPerPage;
  const indexOfFirstFreelancer = indexOfLastFreelancer - freelancersPerPage;
  const currentFreelancers = filteredFreelancers.slice(indexOfFirstFreelancer, indexOfLastFreelancer);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredFreelancers.length / freelancersPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbarclient />
      <div className="search-filter-page">
        <div className="filters-section">
          <h3>Filters <FontAwesomeIcon icon={faFilter} /></h3>

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
            <h4>Ratings</h4>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={faStar}
                  className={selectedRatings >= star ? 'selected' : ''}
                  onClick={() => handleRatingChange(star)}
                />
              ))}
              <p>{selectedRatings} Stars</p>
            </div>
          </div>

          <div className="filter-group">
  <h4>Budget</h4>
  <ul>
    <li>
      <input
        type="radio"
        id="budget1"
        name="budget"
        value="0-5"
        checked={selectedBudget === '0-5'}
        onChange={handleBudgetChange}
      />
      <label htmlFor="budget1">Low Range &#40;Under 5000&#41;</label>
    </li>
    <li>
      <input
        type="radio"
        id="budget2"
        name="budget"
        value="5-10"
        checked={selectedBudget === '5-10'}
        onChange={handleBudgetChange}
      />
      <label htmlFor="budget2">Low-Mid-Range &#40;5k-10k&#41; </label>
    </li>
    <li>
      <input
        type="radio"
        id="budget3"
        name="budget"
        value="10-20"
        checked={selectedBudget === '10-20'}
        onChange={handleBudgetChange}
      />
      <label htmlFor="budget3">High-Mid-Range &#40;10k-20k&#41;</label>
    </li>
    <li>
      <input
        type="radio"
        id="budget4"
        name="budget"
        value="20+"
        checked={selectedBudget === '20+'}
        onChange={handleBudgetChange}
      />
      <label htmlFor="budget4">High-Range &#40;Beyond 20k&#41; </label>
    </li>
    <li>
      <input
        type="radio"
        id="budget5"
        name="budget"
        value="0+"
        checked={selectedBudget === "0+"}
        onChange={handleBudgetChange}
      />
      <label htmlFor="budget5">All Ranges</label>
    </li>
  </ul>
</div>
</div>
        <div className="results-section">
          <h2>Results for <span className='searchedTalent'>"{searchedTalent}"</span></h2>
          <div className="freelancers">
            {currentFreelancers.map((freelancer) => (
              <div className="freelancer-card" key={freelancer.id}>
                <div className='freelancer-card-head' >
                <img className='freelancerprofile'  src={freelancer.profile} alt="Profile" />
                <div>
                <h3>{freelancer.name}</h3>
                <p className="rating"> <span className='star-icon'><FontAwesomeIcon icon={faStar}/> </span>{freelancer.rating} / 5</p>
                </div>
               </div>
                
                <p className="description">"{freelancer.description}"</p>
                <div className='location-and-budget'>
                <p className="price">From Nrs. {freelancer.price}</p>
                <p className="location"><FontAwesomeIcon icon={faLocationDot} /> {freelancer.location}</p>
                </div>
                
                <button className="offer-request-btn">
                  Offer Request <FontAwesomeIcon icon={faPaperPlane} />
                </button>
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
      <Footer />
    </>
  );
};

export default CSearchFilter;
