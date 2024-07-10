import React from 'react'
import Footer from '../component/Footer'
import CDProfileDescription from '../component/CDProfileDescription';

import CDJobPosting from '../component/CDJobPosting';
import Navbarclient from '../component/Navbarclient'

const ClientDashboard = () => {
  return (
    <>
  <Navbarclient/>
    <div> 
      <CDProfileDescription />
      
      <CDJobPosting />
      </div>
    <Footer/>
    </>
  )
}

export default ClientDashboard