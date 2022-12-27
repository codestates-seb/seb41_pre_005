import React from "react";
import styled from "styled-components";
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${(props) => props.padding || "24px"};
`;
const MainContentLayout = ({ children, padding }) => {
  return <MainContainer padding={padding}>{children}</MainContainer>;
};

export default MainContentLayout;
