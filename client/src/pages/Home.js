import React from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import HeaderLayout from "../components/layout/HeaderLayout";
import LeftSideLayout from "../components/layout/LeftSideLayout";
import MainContentLayout from "../components/layout/MainContentLayout";
import RightSideBarLayout from "../components/layout/RightSideBarLayout";

const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
`;
const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Home = (props) => {
  return (
    <HomeContainer>
      <HeaderLayout></HeaderLayout>
      <BodyContainer>
        <LeftSideLayout></LeftSideLayout>
        <ContentLayout>
          <MainContentLayout></MainContentLayout>
        </ContentLayout>
        <RightSideBarLayout></RightSideBarLayout>
      </BodyContainer>
    </HomeContainer>
  );
};

export default Home;
