import React from "react";
import styled from "styled-components";

const LeftSideLayoutContainer = styled.div`
  width: 16.3rem;
  height: 100%;
  background-color: aliceblue;
`;
const LeftSideLayout = (props) => {
  return (
    <LeftSideLayoutContainer>
      <LeftSidebar></LeftSidebar>
    </LeftSideLayoutContainer>
  );
};

export default LeftSideLayout;
