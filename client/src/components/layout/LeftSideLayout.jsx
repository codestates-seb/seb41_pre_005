import React from "react";
import styled from "styled-components";
import LeftSidebar from "../common/LeftSidebar";

const LeftSideLayoutContainer = styled.div`
  width: 16.3rem;
  height: 100%;
  margin-top: 4rem;
  background-color: #ffffff;
`;
const LeftSideLayout = props => {
  return (
    <LeftSideLayoutContainer>
      <LeftSidebar></LeftSidebar>
    </LeftSideLayoutContainer>
  );
};

export default LeftSideLayout;
