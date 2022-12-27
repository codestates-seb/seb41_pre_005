import React from "react";
import styled from "styled-components";
import RightSidebar from "../common/RightSidebar";
const SideBarContainer = styled.div`
  width: 29.8rem;
  height: 100%;
  margin-left: 2rem;
  margin-top: 2.5rem;
  background-color: #ffffff;
`;
const RightSideBarLayout = (props) => {
  return (
    <SideBarContainer>
      <RightSidebar></RightSidebar>
    </SideBarContainer>
  );
};

export default RightSideBarLayout;
