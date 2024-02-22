import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Features_compare from './Features_compare';
import Performance from './Performance';


const Compare_phone_screen = () => {

  const [apple , setapple] = useState(0);
  const [samsung, setsamsung] = useState(0);
  const [applefilledPercentage, setappleFilledPercentage] = useState(0);
  const [samsungfilledPercentage, setsamsungFilledPercentage] = useState(0);
  

  useEffect(() => {
    const applyapple = 10;

    setapple(applyapple);
  }, []);
  useEffect(() => {
    const percentage = (apple / 10) * 100;
    setappleFilledPercentage(percentage);
  }, [apple]);

  useEffect(() => {
    const applysamsung = 9.3;

    setsamsung(applysamsung);
  }, []);
  useEffect(() => {
    const percentage = (samsung / 10) * 100;
    setsamsungFilledPercentage(percentage);
  }, [samsung]);
  
  




  return (
    <>
      <Compare_screen>
        <div className="search-phones-area">
          <div className="searchPhone1">
            <input type="text" placeholder='Search phone 1' />
            <img src="public/svg/search.svg" />
          </div>
          <div className="searchPhone1">
            <input type="text" placeholder='Search phone 2' />
            <img src="public/svg/search.svg" />
          </div>
        </div>


        <div className="show-phone-images">
          <div className="rectangle">

          </div>
          <div className="phone-1">
            <img src="public/Images/iphone.jpg" />
          </div>
          <a> Vs </a>
          <div className="phone-2">
            <img src="public/Images/iphone.jpg" />
          </div>
        </div>


        <div className="overall-rating">
          <a className='heading'>Overall rating </a>
          <div className="phone1-overallReting">
            <a> Apple iphone 14 pro max</a>
            <div className="App">
             
              <div className="rectangle-container">
                <div
                  className="rectangle"
                  style={{ width: `${applefilledPercentage}%`, backgroundColor: 'red' }}
                >
                </div>
                
              </div>
              
              <p>{apple} / 10</p>
            </div>

          </div>
          <div className="phone1-overallReting">
            <a> Samsung Galaxy 24 ultra</a>
            <div className="App">
  
              <div className="rectangle-container">
                <div
                  className="rectangle"
                  style={{ width: `${samsungfilledPercentage}%`, backgroundColor: 'blue' }}
                ></div>
              </div>
              <p>{samsung} / 10</p>
            </div>
          </div>
        </div>


        <Features_compare />
        <a className='headingperformance'> Performance</a>
        <div className="performance">
          
        <Performance />
        <Performance />
        <Performance />
        <Performance />
        </div>








      </Compare_screen>
    </>
  );
}


export default Compare_phone_screen

const Compare_screen = styled.main`
  width : 100%;
  height : auto;
  display : flex;
  flex-direction: column;

  .rectangle-container {
  width: 700px;
  height: 12px;
  border: 1px solid black;
  margin-bottom: 10px;
  border-radius: 10px;
  
}

.rectangle {
  height: 100%;

}


  .search-phones-area{
    display : flex;
    width : 100vw;
    height : 80px;
    
  }
  .searchPhone1{
    display : flex;
    height : 40px;
    border-radius: 5px;
    border-bottom: 1px solid blue;
    gap : 20px;
    margin-left : 230px;
    margin-top: 20px;
    outline : none;
   
    
  }
  .searchPhone1 input{
    width : 350px;
    height : 40px;
    outline : none;
    border : none;
    font-size: 15px;
    padding-left: 10px;

  }
  .searchPhone1 img{
    width : 20px;
    padding-right: 10px;
  }


  .show-phone-images{
    display :flex;
    gap : 50px;
    background-color: #ececec;

  }
  .show-phone-images .rectangle{
    position : absolute ;
    right : 0;
    width :180px;
    height : 180px;
    background:  linear-gradient(to top right, rgba(44, 192, 230,0), rgba(44, 192, 230,1) );
    box-shadow: 60px -60px 60px #ececec inset;
    outline : nome;
    border: none;
    
  }

  .show-phone-images a{
    font-size: 30px;
    margin: 180px 0 0 65px ;
  }


  .phone-1{
    margin-top: 30px;
    margin-left: 250px;
    padding-bottom: 50px;
  }
  .phone-1 img{
    width  :350px;
    height : 350px;
  }

  .phone-2{
    margin-top: 30px;
    margin-left: 100px;
  }
  .phone-2 img{
    width  :350px;
    height : 350px;
  }


  .overall-rating{
    display : flex;
    flex-direction: column;
    width : auto;
    height  :230px;
    margin : 10px 50px 0 50px;
    border-radius: 10px;
    background-color: #ececec;
    box-shadow: 1px 1px 6px;
  }

  .overall-rating .heading{
    display :flex;
    font-size: 25px;
    margin : 30px 0 0 30px;
  }

  .phone1-overallReting{
    display :flex;
    margin: 40px 0 20px 100px;
    gap : 30px;
    
  }
  .App{
    display: flex;
    gap : 20px;
  }

  .performance{
   
    width : 1300px;
    height : auto;
    display : flex;
    flex-wrap: wrap;
    justify-content :center;
    align-items : center;
    margin : 10px 0 0 60px;

  }
  .headingperformance{
    font-size: 30px;
    font-weight: 800;
    margin: 10px 0 0 30px;

  }




  

  
  
`;