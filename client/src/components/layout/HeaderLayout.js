import React from "react";
import styled from "styled-components";
const HeaderLayoutContainer = styled.div`
  width: 100%;
  height: 4.7rem;
  background-color: pink;
`;

const HeaderLayout = (props) => {
  return (
    <HeaderLayoutContainer>
      <span>logo</span>
      <span> products</span>
      <input></input>
    </HeaderLayoutContainer>
  );
};

export default HeaderLayout;
