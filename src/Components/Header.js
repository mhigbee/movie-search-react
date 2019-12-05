import React from 'react';
import styled from "@emotion/styled";
import Constraint from './SiteStructure/Constraint';

const HeaderDiv = styled.div`
  color: hotpink;
`

const Header = (props)=> {
  return (
    <HeaderDiv className="app-header">
      <Constraint>
        <h1>{props.headingText}</h1>
      </Constraint>
    </HeaderDiv>
  );
}

export default Header;

