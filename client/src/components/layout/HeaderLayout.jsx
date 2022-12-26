import React from "react";
import styled from "styled-components";
const HeaderLayoutContainer = styled.div`
  width: 100%;
  height: 5rem;
`;

const HeaderLayout = ({ children }) => {
  return <HeaderLayoutContainer>{children}</HeaderLayoutContainer>;
};

export default HeaderLayout;
