import React from "react";
import styled from "styled-components";
import QuestionDetail from "../../../pages/question/QuestionDetail";
import { QuestionDetailHeadLine } from "../../common/HeadLine";

const QuestionsHeadLayout = styled.div`
  margin-left: -15rem;
  margin-bottom: 1.2rem;
`;

const QuestionDetailHeader = () => {
  return QuestionDetail(
    <QuestionsHeadLayout>
      <QuestionDetailHeadLine></QuestionDetailHeadLine>
    </QuestionsHeadLayout>
  );
};

export default QuestionDetailHeader;
