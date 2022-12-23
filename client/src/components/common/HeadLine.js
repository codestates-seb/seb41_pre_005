import styled from "styled-components";
import {ButtonBlue} from "./Header";

const PageHeaderHeadline = styled.div`
  padding: 24px;
  height: 100%;
  width: 100%;
`;

const FirstLine = styled.div`
  font-size: 2.8rem;
  flex: 1 auto;
  margin-bottom: 20px;

  &.mb12 {
    margin-bottom: 1.2rem;
  }
  &.mr12 {
    margin-right: 1.2rem;
  }
  &.mb0 {
    margin-bottom: 0;
  }
  .div {
    margin-top: 2rem;
  }
`;
const SecondLine = styled.div`
  font-size: 1.7rem;
`;

const ThirdLine = styled.div`
  margin-top: 20px;
  font-size: 13px;
  color: #2b72c5;
  cursor: pointer;
`;

export const TagsHeadline = () => {
  return (
    <PageHeaderHeadline>
      <FirstLine>Tags</FirstLine>
      <SecondLine>
        A tag is a keyword or label that categorizes your question with other,
        similar questions.
      </SecondLine>
      <SecondLine>
        Using the right tags makes it easier for others to find and answer your
        question.
      </SecondLine>
      <ThirdLine>Show all tag synonyms</ThirdLine>
    </PageHeaderHeadline>
  );
};

const AskQuestionBtn = styled(ButtonBlue)`
  margin-left: 20px;
`;
const AskQuestionHead = styled.div`
  margin-top: 10rem;
  margin-left: 10rem;
  display: flex;
`;
const AskQuestionWord = styled.div`
  font-size: 3rem;
  margin-right: 55rem;
`;

export const HomeHeadLine = () => {
  return (
    <AskQuestionHead>
      <AskQuestionWord>Top Questions</AskQuestionWord>
      <AskQuestionBtn>Ask question</AskQuestionBtn>
    </AskQuestionHead>
  );
};

export const QuestionsHeadLine = () => {
  return (
    <AskQuestionHead>
      <AskQuestionWord>All Questions</AskQuestionWord>
      <AskQuestionBtn>Ask question</AskQuestionBtn>
    </AskQuestionHead>
  );
};

// const HeadLine = {QuestionsHeadLine, HomeHeadLine, TagsHeadline};
