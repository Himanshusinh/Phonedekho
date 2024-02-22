import React from 'react'
import styled from 'styled-components';


const Login = (props) => {
  return (props.trigger) ? (
    <>
    <Main>
    <div className="left">
      <div className='title' >
        <a className='hello'>Hello</a>
        <a className='welcome'>Welcome</a>
        </div>
        
        <form action="">
          <input className='email epsec' type="email" placeholder='Email' />
          <input className='password epsec' type="password" placeholder='password' />
          <button className='loginbtn'>login</button>
          <div className="signup">
            
          </div>
        </form>

    </div>



    <div className="right">
      <img src="./public/Images/loginside.png" alt="" className='sideimg'/>
      <img src="./public/svg/cross.svg" onClick={() => props.setTrigger(false)} className='cross'></img>
      </div>
    


        
       
        {props.children}
    </Main>
    
    </>
  ) : "";
}

export default Login
const Main = styled.div`
    z-index : 1;
   left :200px;
   background-color : #fff;
   position : absolute;
   width : 1100px;
   height : 700px;
   border-radius: 30px;
   box-shadow: 1px 1px 20px;
   display : flex;

  .left{
    width : 550px;
    height : auto;
  }

  .left .title{
    margin: 90px 0 0 70px;
    display : flex;
    flex-direction: column;
  }
  .left .hello{
    
    font-size: 80px;
    font-family: 'Audiowide', sans-serif;
    font-weight: 600;
  }
  .left .welcome{
    font-size: 80px;
    font-family: 'Monoton', sans-serif;
  }

  form{
    display: flex;
    flex-direction: column;
  }

  form .epsec{
    box-shadow: 1px 1px 7px;
    padding-left: 8px;
    font-size: 14px;
    outline : none;
    border : none;
    border-radius : 20px;
    margin : 20px 0 0 80px;
    width : 400px;
    height : 40px;
  }
  form .password{
    margin-top: 35px;
  }

  form .loginbtn{
    margin : 35px 0 0 80px;
    border-radius: 3px;
    background-color  :purple;
    width : 100px;
  }





  .right{
   display : flex;
   flex-wrap: wrap-reverse;
    width : 550px;
    height : 700px;
  }
  .right .sideimg{
    margin-top: 50px;
    width : 550px;
    height : 600px;
    border-bottom-right-radius: 30px;
    
    
  }
  .right .cross{
    margin-left: 500px;
    width : 25px;
    height : 25px;
  }





`;