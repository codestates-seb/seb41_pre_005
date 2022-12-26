import React from "react";

import ContentLayout from "../../components/layout/ContentLayout";
import LeftSideLayout from "../../components/layout/LeftSideLayout";
import MainContentLayout from "../../components/layout/MainContentLayout";
import QuestionsLayout from "../../components/layout/question/QuestionsLayout";
import RightSideBarLayout from "../../components/layout/RightSideBarLayout";
import QuestionNav from "../../components/questions/QuestionNav";
import QuestionsList from "../../components/questions/QuestionsList";

const Questions = (props) => {
  return (
    <QuestionsLayout>
      <LeftSideLayout></LeftSideLayout>
      <ContentLayout>
        <MainContentLayout>
          <QuestionNav />
          <QuestionsList />
        </MainContentLayout>
        <RightSideBarLayout></RightSideBarLayout>
      </ContentLayout>
    </QuestionsLayout>
  );
};

export default Questions;
