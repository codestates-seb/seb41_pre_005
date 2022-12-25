import React from "react";
import styled from "styled-components";
import AnswerList from "../../components/answers/AnswerList";
import Button from "../../components/common/Button";
import ContentLayout from "../../components/layout/ContentLayout";
import LeftSideLayout from "../../components/layout/LeftSideLayout";
import MainContentLayout from "../../components/layout/MainContentLayout";
import QuestionsLayout from "../../components/layout/question/QuestionsLayout";
import RightSideBarLayout from "../../components/layout/RightSideBarLayout";
import AskEditor from "../../components/questions/AskEditor";

const AnswerEditorHeader = styled.h2`
  padding-top: 2rem;
  margin-bottom: 1.9rem;
  font-weight: 400;
  font-size: 1.9rem;
`;
const ButtonContainer = styled.div`
  padding: 10px 0;
`;

const QuestionDetail = (props) => {
  return (
    <QuestionsLayout>
      <LeftSideLayout></LeftSideLayout>
      <ContentLayout>
        <MainContentLayout padding="24px 16px">
          <AnswerList />
          <AnswerEditorHeader>Your Answer</AnswerEditorHeader>
          <AskEditor />
          <ButtonContainer>
            <Button width="12rem" radius="3px">
              Post Your Answer
            </Button>
          </ButtonContainer>
        </MainContentLayout>
        <RightSideBarLayout></RightSideBarLayout>
      </ContentLayout>
    </QuestionsLayout>
  );
};

export default QuestionDetail;
