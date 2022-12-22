import React from "react";
import styled from "styled-components";
import LeftSidebar from '../common/LeftSidebar';

const LeftSideLayoutContainer = styled.div`
  width: 16.3rem;
  height: 100%;
  background-color: #ffffff;
  /* margin-left: 32rem; */
`;
const LeftSideLayout = (props) => {
  return <LeftSideLayoutContainer>
    <LeftSidebar></LeftSidebar>
  </LeftSideLayoutContainer>;
};

export default LeftSideLayout;
