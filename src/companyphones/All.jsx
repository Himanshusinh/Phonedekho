import React from 'react'
import styled from 'styled-components'

const All = () => {
  return (
    <>
    <Upcommingmain>
        <div className="left">
        <div className="mobilename">
            <a >iphone 15 pro max</a>
        </div>
        <div className="timing">
            <a className='time'>7</a>
            <a className='days'>Days</a>
            <a className='time'>12</a>
            <a className='days'>hours</a>
            <a className='time'>35</a>
            <a className='days'>minites</a>
            <a className='time'>30</a>
            <a className='days'>seconds</a>
            
        </div>
        </div>

        <div className="right">
            <img src="./public/Images/iphone.jpg" alt="" />
        </div>
        
    </Upcommingmain>

    
    </>
  )
}

export default All

const Upcommingmain = styled.main`
    display : flex;
    
    .left{
        width : 900px;
        height : auto;
    }
    .mobilename a{
        display : flex;
        font-size: 60px;
        margin : 70px 0 0 200px;

    }
    .timing{
        margin : 30px 0 0 200px; 
    }
    .timing .time{
        font-size: 80px;
    }
    .timing .days{
        font-size: 20px;
    }
    .right{
        width : 300px;
        
    }
    .right img{
        width: 400px;
        height :400px;
    }

`;