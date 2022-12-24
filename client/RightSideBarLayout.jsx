import React from "react";
import styled from "styled-components";
const SideBarContainer = styled.div`
  width: 29.8rem;
  height: 100%;
  background-color: green;
`;
const RightSideBarLayout = (props) => {
  return (
    <SideBarContainer>
      <RightSidebar></RightSidebar>
    </SideBarContainer>
  );
};

export default RightSideBarLayout;
