import React from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import LeftSideLayout from "../components/layout/LeftSideLayout";
import MainContentLayout from "../components/layout/MainContentLayout";
import RightSideBarLayout from "../components/layout/RightSideBarLayout";
import { HomeHeadLine } from "../components/common/HeadLine";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import QuestionsList from "../components/questions/QuestionsList";

const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  /* padding-bottom: 322px; */
`;
const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const HomeHeadContainer = styled.div`
  margin-bottom: 1.2rem;
`;
const HomeFilter = styled.div`
  width: 100%;
  height: 38.59px;
  padding-left: 24px;
  margin-bottom: 16px;
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <BodyContainer>
          <LeftSideLayout></LeftSideLayout>
          <ContentLayout>
            <MainContentLayout>
              <HomeHeadContainer>
                <HomeHeadLine />
              </HomeHeadContainer>
              <HomeFilter></HomeFilter>
              <QuestionsList />
            </MainContentLayout>
            <RightSideBarLayout />
          </ContentLayout>
        </BodyContainer>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
