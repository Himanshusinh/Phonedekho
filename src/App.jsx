import Home from './components/Home';
import Compare from './components/Compare';
import styled from "styled-components";
import Register from './components/Register';
import Login from './components/Login';

import { useState } from "react";


function App() {
  const [loginscreen, setloginscreen] = useState(false);
  const [registerscreen, setregisterscreen] = useState(false);

  const [activescreen, setactivescreen] = useState('home');

  const handleonclick = (content) => {
    setactivescreen(content);
  }

  return (
    <>
      <Main>

        <nav className="navigation-bar">
          <div className="logosec">
            <img src="./public/Images/Phone.png" alt="" className="logopng" />
            <a>Phone Dekho </a>
          </div>

          <div className="inputarea">
            <input type="text" placeholder="Search " />
            <img src="./public/svg/search.svg" alt="" />
          </div>

          <div className="pages">
            <a href="#" onClick={() => handleonclick('home')}>Home</a>
            <a href="#" onClick={() => handleonclick('compare')}>Compare Phones </a>
          </div>

          <div className="buttons">
            <button onClick={() => setregisterscreen(true)}>Sign in </button>
            <Register rtrigger={registerscreen} setrtrigger={setregisterscreen}>
            </Register>

            <button onClick={() => setloginscreen(true)} >Login </button>
              <Login trigger={loginscreen} setTrigger={setloginscreen} />
   
      

             
             
        
            
            
          </div>

          <div className="retailer">
            <button>Become a Seller</button>
          </div>

        </nav>

        <div className="displaySreen">
          {
            activescreen === 'home' && <Home />
          }
          {
            activescreen === 'compare' && <Compare />
          }


        </div>

      </Main>
    </>



  );

}


export default App;


const Main = styled.main`
  
  

  .navigation-bar{
    width : 100vw;
    height : 80px;
    display : flex;
  }


  /* logo-area */
  .logosec{
    display  :flex;
    height : auto;
    width : 200px;
    position : relative;
    margin : 3px 0 0 3px;
  }
  .logosec a{
   position  :absolute;
    font-size: 20px;
    align-items :center;
    right : 0;
    margin-top: 23px;
  }
  .logopng{
   width : 70px;
   height : 70px;
  }


    /* input area */
  .inputarea{
    margin-top: 20px;
    margin-left: 50px;
    height : 80px;
    display :flex;
    border: 1px solid black;
    width : 500px;
    height : 40px;
    justify-content : space-around;
    border-radius: 20px;

  }
  .inputarea input{
    width : 480px;
    height : 40px;
    outline  :none;
    border  :none;
   padding-left : 10px;
    font-size: 13px;
    border-radius: 21px;
  }
  .inputarea img{
      width  : 20px;
      padding-right: 10px;
      cursor : pointer;
  }



  /* pages  */
  .pages{
    display : flex;
    margin: 30px 0 0 60px;
    gap : 28px;
  }
  .pages a{
    font-size: 16px;
    text-decoration: none;
    color : black;
    }
  .pages a:hover{
    border-bottom: 2px solid black;
    margin-bottom: 24px;
    border-color: #586572;
  }




  /* buttons  */
  .buttons{
    display : flex;
    gap : 15px;
    margin : 24px 0 0 65px;
  }

  .buttons button{
    width : 90px;
    height : 37px;
    border: none;
    border-radius: 15px;
    background-color: #7681e6;
    color : white;
    font-size: 14px;
    cursor: pointer;
  }

  /* retiler */
  .retailer{
    margin : 24px 0 0 40px;
  }
  .retailer button{
    background-color : #586572;
    color : white;
    font-size: 14px;
    border :none;
    border-radius: 15px;
    width : 120px;
    height : 38px;
    cursor : pointer;
  }


`;








