import React, { useEffect } from "react";
import styled from "styled-components";
import ContentLayout from "../components/layout/ContentLayout";
import LeftSideLayout from "../components/layout/LeftSideLayout";
import MainContentLayout from "../components/layout/MainContentLayout";
import RightSideBarLayout from "../components/layout/RightSideBarLayout";
import { HomeHeadLine } from "../components/common/HeadLine";
import Footer from "../components/common/Footer";
import QuestionsList from "../components/questions/QuestionsList";
import { getTopQuestions } from "../api/questionAPI";
import { useDispatch } from "react-redux";
import { storeQuestions } from "../redux/questionsReducer";

const HomeContainer = styled.div`
  /* height: 100vh;
  width: 100%; */
  height: auto;
  min-height: 100%;
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
  const dispatch = useDispatch();
  useEffect(() => {
    async function readTopQuestions() {
      const res = await getTopQuestions();
      dispatch(storeQuestions(res));
    }
    readTopQuestions();
  }, []);
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
