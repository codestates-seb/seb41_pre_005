import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import LeftSidebar from "../common/LeftSidebar";
=======
import LeftSidebar from "../common/LeftSidebar"
>>>>>>> 572274c42b7eb7ce103f1441af14070b93008c10

const LeftSideLayoutContainer = styled.div`
  width: 16.3rem;
  height: 100%;
  position: fixed;
  background-color: #ffffff;
`;
const LeftSideLayout = (props) => {
  return (
    <LeftSideLayoutContainer>
      <LeftSidebar></LeftSidebar>
    </LeftSideLayoutContainer>
  );
};

export default LeftSideLayout;