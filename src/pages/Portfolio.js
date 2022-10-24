import React from 'react';
import ImgMediaCard1 from '../components/card1';
import ImgMediaCard2 from '../components/card2';
import ImgMediaCard3 from '../components/card3';
import Card from '@mui/material/Card';
import styled from 'styled-components'

const CardStyle = styled(Card) `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 50px;
    margin-bottom: 150px;
`

const Portfolio = () => {
  return (
    <CardStyle>
        <ImgMediaCard1/>
        <ImgMediaCard2/> 
        <ImgMediaCard3/>
    </CardStyle>
  )
};

export default Portfolio




