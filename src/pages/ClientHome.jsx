import React from "react";
import CHeader from "../component/CHeader";
import CTrendingPosts from "../component/CTrendingPosts";
import CAdvantages from "../component/CAdvantages";
// import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Navbarclient from "../component/Navbarclient";
const ClientHome = () => {
    return (
        <>
        <Navbarclient/>
    <CHeader/>
    <CTrendingPosts/>
    <br /><br />
   <CAdvantages/>
   <Footer/>
</>
    )
  }
  
  export default ClientHome;