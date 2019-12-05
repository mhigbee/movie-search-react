import React from 'react';
import styled from "@emotion/styled";

const StyledConstraint = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Constraint = ({ children }) => {
  return (
    <StyledConstraint>
      { children }
    </StyledConstraint>
  )
};

export default Constraint;