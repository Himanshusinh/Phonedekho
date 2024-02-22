import React from 'react'
import styled from 'styled-components'


const Features_compare = () => {
  return (
    <>
    <FeaturesMain>
        <div className="left">
            <div className="title">Iphone-14 pro max</div>
            <table className='tableborder'>
                <tr>
                    <th>OS</th>
                    <th>IOS APP</th>
                </tr>
                <tr>
                    <th>OS</th>
                    <th>hajrthjksdfhgjkh4jksjdf asdkfhj sdfh e sdjfhejs dfkjwlasf hkjehj sjdfh </th>
                </tr>
                <tr>
                    <th>OS</th>
                    <th>IOS APP</th>
                </tr>
                <tr>
                    <th>OS</th>
                    <th>IOS APP</th>
                </tr>
                <tr>
                    <th>OS</th>
                    <th>IOS APP</th>
                </tr>
                
            </table>
        </div>
        <div className="right">
            <div className="title">Samsung-s24-ultra</div>
                <table className='tableborder'>
                <tr>
                    <th>Android </th>
                    <th>APK system</th>
                </tr>
                <tr>
                    <th>Android </th>
                    <th>APK system</th>
                </tr>
                <tr>
                    <th>Android </th>
                    <th>APK system</th>
                </tr>
                <tr>
                    <th>Android </th>
                    <th>APK system</th>
                </tr>
                <tr>
                    <th>Android </th>
                    <th>APK system</th>
                </tr>
                </table>
        </div>
    </FeaturesMain>
        
    </>
  )
}

export default Features_compare

const FeaturesMain = styled.main`
    display :flex;
    margin: 10px 0px 0px 240px;
    gap : 70px;

    .left{
        width : 500px;
        height : auto;
        background-color: #ececec;
        
    }
    .right{
        width : 500px;
        height : auto;
        background-color: #ececec;
    }
    .tableborder{
        border : 1px solid black;
        width : 480px;
        height : auto;
        margin-left: 10px;
        background-color : #fff;
       
    }
    tr{
        display : flex;
        justify-content : left;
        gap :100px;
        border-bottom: 1px solid black;
        
       
    }
    th{
        display : flex; 
    }
    
    
    
`;