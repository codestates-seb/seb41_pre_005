import React from "react";
import styled from "styled-components";
import ContentLayout from "../../components/layout/ContentLayout";
import LeftSideLayout from "../../components/layout/LeftSideLayout";
import MainContentLayout from "../../components/layout/MainContentLayout";
import QuestionsLayout from "../../components/layout/question/QuestionsLayout";
import RightSideBarLayout from "../../components/layout/RightSideBarLayout";
import QuestionsList from "../../components/questions/QuestionsList";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import {QuestionsHeadLine} from "../../components/common/HeadLine";

const Questions = props => {
  const QuestionsHeadLayout = styled.div`
    /* margin-top: 7rem;
    width: 100%;
    /* margin-right: -7rem; */
    margin-left: -15rem;
    margin-bottom: 1.2rem;
  `;
  const QuestionsFilter = styled.div`
    width: 100%;
    height: 4.7rem;
  `;
  return (
    <>
      <Header />
      <QuestionsLayout>
        <LeftSideLayout></LeftSideLayout>
        <ContentLayout>
          <MainContentLayout>
            <QuestionsHeadLayout>
              <QuestionsHeadLine />
              <QuestionsFilter></QuestionsFilter>
            </QuestionsHeadLayout>
            <QuestionsList />
          </MainContentLayout>
          <RightSideBarLayout></RightSideBarLayout>
        </ContentLayout>
      </QuestionsLayout>
      <Footer />
    </>
  );
};

export default Questions;
