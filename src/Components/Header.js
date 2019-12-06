import React from 'react';
import styled from "@emotion/styled";
import Constraint from './SiteStructure/Constraint';
import { siteColors, mq } from './SiteStructure/StyleVariables';
import movieRoll from './../Images/movie-roll.svg';

const HeaderDiv = styled.div`
  background-color: ${siteColors.blue3};
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  h1 {
    color: ${siteColors.white};
    margin-bottom: 0;
    font-size: 26px;

    ${mq('medium')} {
      font-size: 30px;
    }

    ${mq('large')} {
      font-size: 36px;
    }
  }
`

const Header = (props)=> {
  return (
    <HeaderDiv className="app-header">
      <Constraint>
        <TextContainer>
          <img src={movieRoll} alt="movie icon"/> 
          <h1>{props.headingText.toUpperCase()}</h1>
        </TextContainer>
      </Constraint>
    </HeaderDiv>
  );
}

export default Header;

