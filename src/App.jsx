import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services';
import About from './pages/About';

import ClientHome from './pages/ClientHome.jsx';
import FreelancerHome from './pages/FreelancerHome.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './component/Footer.jsx';
import JobPost from './pages/JobPost.jsx';
import VerifyOtp from './pages/VerifyOtp.jsx';
import ClientDashboard from './pages/ClientDashboard.jsx';
import ProfilePhoto from './pages/ProfilePhoto.jsx';
import Recommendation from "./pages/Recommendations.jsx"
import FreelancerService from './pages/FreelancerService.jsx';
import FApplyNow from './pages/FApplyNow.jsx';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />        
        <Route path="/jobPost" element={<JobPost/>} />        


   


        <Route path="/client" element={<ClientHome />} /> 
        <Route path="/freelancer" element={<FreelancerHome/>} /> 

        <Route path="/clientDashboard" element={<ClientDashboard/>} /> 
        <Route path="/profilePhoto" element={<ProfilePhoto/>} /> 


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOtp/>} />
        <Route path="/freelancer-service" element={<FreelancerService/>} />
        <Route path="/recommendation" element={<Recommendation/>} />
        <Route path="/applynow" element={<FApplyNow/>} />
      

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
