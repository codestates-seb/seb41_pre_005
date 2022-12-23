import React from "react";
import styled from "styled-components";
import RightSidebar from "../common/RightSidebar";

const SideBarContainer = styled.div`
  width: 29.8rem;
  height: 100%;
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
