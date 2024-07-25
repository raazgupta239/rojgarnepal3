import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
// import Navbar from "./component/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services";
import About from "./pages/About";
import Circlecheck from "./pages/Circlecheck.jsx";

import AdminLogIn from "./pages/AdminLogIn.jsx"
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
import FSearchFilter from "./pages/FSearchFilter.jsx";
import CSearchFilter from "./pages/CSearchFilter.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminJobPosts from "./pages/AdminJobPosts.jsx";
import AdminBookings from "./pages/AdminBookings.jsx";
import AdminVerifyUser from "./pages/AdminVerifyUser.jsx";

import AllJobPosts from "./component/AllJobPosts.jsx";
import AdminUserStatistics from "./pages/AdminUserStatistics.jsx";





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobPost" element={<JobPost />} />

        <Route path="/client" element={<ClientHome />} />
        <Route path="/freelancer" element={<FreelancerHome />} />

   
        <Route path="/jobsearch" element={<FSearchFilter/>} />
        <Route path="/talentsearch" element={<CSearchFilter/>} />
      
       
        <Route path="/applynow" element={<FApplyNow/>} />
      


        <Route path="/clientDashboard" element={<ClientDashboard />} />
        <Route path="/profilePhoto" element={<ProfilePhoto />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/freelancer-service" element={<FreelancerService />} />
        <Route path="/recommendation" element={<Recommendation />} />



        <Route path="/adminlogin" element={<AdminLogIn />} />
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        <Route path="/admin" element={<AdminUserStatistics />} />
        <Route path="/jobPosts" element={<AdminJobPosts />} />
        <Route path="/admin-booking" element={<AdminDashboard/>} />
        {/* <Route path="/userStatistics" element={<AdminUserStatistics/>}/> */}
        <Route path="/verifyUser" element={<AdminVerifyUser/>} />
        <Route path="/circle" element={<Circlecheck />} />



        <Route path="/alljobpost" element={<AllJobPosts />} />


      </Routes>

    </BrowserRouter>
  );
};

export default App;
