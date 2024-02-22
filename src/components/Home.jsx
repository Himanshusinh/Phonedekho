import React from 'react'
import styled from 'styled-components';
// import Upcomming from './Upcomming';
import Companynav from '../companyphones/Companynav';

const Home = () => {
  return (
    <>
      <Homemain>
        <Companynav />
        
      </Homemain>
    </>
  )
}

export default Home;

const Homemain = styled.main`
  
  .upcoming{
    color : #fff;
    background-color: #464646;
    height : 400px;
    
    
  }


`;