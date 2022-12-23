import React from "react";
import styled from "styled-components";
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: blueviolet;
`;
const MainContentLayout = ({children}) => {
  return <MainContainer>{children}</MainContainer>;
};

export default MainContentLayout;
