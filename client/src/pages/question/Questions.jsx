import React from "react";
import styled from "styled-components";
import ContentLayout from "../../components/layout/ContentLayout";
import LeftSideLayout from "../../components/layout/LeftSideLayout";
import MainContentLayout from "../../components/layout/MainContentLayout";
import QuestionsLayout from "../../components/layout/question/QuestionsLayout";
import RightSideBarLayout from "../../components/layout/RightSideBarLayout";
import QuestionNav from "../../components/questions/QuestionNav";
import QuestionsList from "../../components/questions/QuestionsList";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { QuestionsHeadLine } from "../../components/common/HeadLine";

const QuestionsHeadLayout = styled.div`
  /* margin-top: 7rem;
width: 100%;
/* margin-right: -7rem; */
  margin-left: -15rem;
  margin-bottom: 1.2rem;
`;

const Questions = (props) => {
  return (
    <>
      <QuestionsLayout>
        <LeftSideLayout></LeftSideLayout>
        <ContentLayout>
          <MainContentLayout>
            <QuestionsHeadLayout>
              <QuestionsHeadLine />
            </QuestionsHeadLayout>
            <QuestionNav />
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
