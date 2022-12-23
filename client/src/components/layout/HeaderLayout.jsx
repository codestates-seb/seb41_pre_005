import React from "react";
import styled from "styled-components";
const HeaderLayoutContainer = styled.div`
  width: 100%;
  height: 4.7rem;
  background-color: pink;
`;

const HeaderLayout = ({children}) => {
  return <HeaderLayoutContainer>{children}</HeaderLayoutContainer>;
};

export default HeaderLayout;
