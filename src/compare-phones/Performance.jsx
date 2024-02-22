import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Performance = () => {
  const [appleram, setappleram ] = useState(0);
  const [appleramfillerpercentage , setappleramfillerpercentage] = useState(0);
  const [samsungram, setsamsungram ] = useState(0);
  const [samsungramfillerpercentage , setsamsungramfillerpercentage] = useState(0);

  useEffect(() => {
    const applyramapple = 4;
    setappleram (applyramapple);
  } ,[]);
  useEffect(() => {
    const percentage = (appleram / 12) * 100;
    setappleramfillerpercentage(percentage);
  } , [appleram]);


  useEffect(() => {
    const samsungramapple = 10;
    setsamsungram (samsungramapple);
  } ,[]);
  useEffect(() => {
    const percentage = (samsungram / 12) * 100;
    setsamsungramfillerpercentage(percentage);
  } , [samsungram]);

  return (


    <>
   
    <Main>
    
      <div className="maincontainer">
      <div className="phone1ram">
        <a>iphone</a>
        <div className="App">
          <div className="rectangle-container">
            <div className="rectangle" style={{width : `${appleramfillerpercentage}%`, backgroundColor : 'red'}}></div>
          </div>
          <p>{appleram}</p>

        </div>
      </div>

      <div className="phone2ram">
      <a>samsung</a>
        <div className="App">
          <div className="rectangle-container">
            <div className="rectangle" style={{width : `${samsungramfillerpercentage}%`, backgroundColor : 'red'}}></div>
          </div>
          <p>{samsungram}</p>
          
        </div>
      </div>
      </div>

    </Main>
    </>
  )
}

export default Performance

const Main = styled.main`
  width  : 500px;
  height : 250px;
  background-color : #ececec;
  border-radius: 15px;
  margin: 10px 0 0 50px;

  .rectangle-container {
  width: 700px;
  height: 12px;
  border: 1px solid black;
  margin-bottom: 10px;
  border-radius: 10px;
  
}

.rectangle{
  height: 100%;

}
.maincontainer{
  display : flex;
  flex-direction: column;
  gap : 30px;
}
.phone1ram{
  margin: 30px 0 0 15px;
}
.phone2ram{
  margin: 5px 0 0 15px;
}


`;

