import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services';
import About from './pages/About';
// import JoinFreelancer from './pages/JoinFreelancer';
// import JoinClient from './pages/JoinClient';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './component/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/join/freelancer" element={<JoinFreelancer />} />
        <Route path="/join/client" element={<JoinClient />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
