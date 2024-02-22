import React from 'react'
import styled from 'styled-components'
import Compare_phone_screen from '../compare-phones/Compare_phone_screen'

const Compare = () => {
  return (
    <>
    <MainScreen></MainScreen>
    <Compare_phone_screen/>
    </>
  )
}

export default Compare
const MainScreen = styled.main`
  width : 100vw;
  
`;