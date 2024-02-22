import React, { useState } from 'react'
import styled from 'styled-components'
import All from './All'
import Apple from './Apple'
import Samsung from './Samsung'
import Oppo from './Oppo'
import Vivo from './Vivo'
import Nokia from './Nokia'
import Mi from './Mi' 
import Poco from './Poco'
import Realme from './Realme'
import Oneplus from './Oneplus'
import Asus from './Asus'

const Companynav = () => {
    const [selectedItem, setSelectedItem] = useState(0);

    const items = ['All', 'Apple', 'samsung', 'Oppo', 'Vivo', 'Nokia', 'MI', 'poco', 'Realme', 'Oneplus', 'asus'];

    const handleItemClick = (index) => {
    setSelectedItem(index);
    };

    const renderSelectedComponent = () => {
        switch (selectedItem) {
          case 0:
            return <All />;
          case 1:
            return <Apple />;
          case 2:
            return <Samsung />;
          case 3:
            return <Oppo />;
          case 4:
            return <Vivo />;
          case 5:
            return <Nokia />;
          case 6:
            return <Mi />;
          case 7:
            return <Poco />;
          case 8:
            return <Realme />;
          case 9:
            return <Oneplus />;
          case 10:
            return <Asus />;
          default:
            return null;
        }
      };

  return (
   <>
    <Navigationbar>
        <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={selectedItem === index ? 'underline underline-transition' : ''}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Navigationbar>

    <Detailstoshow>

    {renderSelectedComponent()}
    </Detailstoshow>
    </>

    
  )
}

export default Companynav
const Navigationbar  = styled.main`
    
    ul{
        display :flex;
        gap : 60px;
        list-style: none;
        margin: 4px 0 10px 0;
    }
    
    ul li{
        text-underline-offset: 7px;
        font-weight: 600;
        color : #616247FF;
        margin-left: 30px;
    }
    .underline{
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        color :#195190FF;
    } 
    .underline-transition {
    border-bottom-color: #195190FF;
        }
`;

const Detailstoshow = styled.div`
    height : 100vh;
`;