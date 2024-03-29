import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonBlue } from "./Headers/HeaderBtn";

const PageHeaderHeadline = styled.div`
  padding-left: 2.4rem;
  height: 100%;
  width: 100%;
`;

const FirstLine = styled.div`
  font-size: 2.7rem;
  flex: 1 auto;
  margin-bottom: 2rem;
  font-weight: 400;

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
  margin: 2rem 0 2rem 0;
  font-size: 1.3rem;
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

const AskQuestionBtn = styled(ButtonBlue)``;
const AskQuestionHead = styled.div`
  margin-top: 0.2rem;
  margin-bottom: 2rem;
  display: flex;
`;
const AskQuestionWord = styled.div`
  font-size: 2.7rem;
  text-align: left;
  flex: 1 auto;
`;
const SearchResultsHead = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  width: 100%;
  height: 3.78rem;
  margin-bottom: 2.4rem;
  display: flex;
`;
const SearchResultsWord = styled.div`
  width: 80rem;
  height: 100%;
  font-size: 2.7rem;
`;
const AdvancedWord = styled.div`
  width: 19rem;
  height: 100%;
  font-size: 1.3rem;
  color: #0074cc;
  display: flex;
  align-items: center;
`;
const TextBox = styled.div`
  width: 100%;
  height: 3.2rem;
`;
const Text = styled.div`
  width: 100%;
  height: 1.2rem;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  color: #6a737c;
`;

export const HomeHeadLine = () => {
  return (
    <AskQuestionHead>
      <AskQuestionWord>Top Questions</AskQuestionWord>
      <Link to="/questions/ask">
        <AskQuestionBtn fontWeight="550" fontSize="13px">
          Ask Question
        </AskQuestionBtn>
      </Link>
    </AskQuestionHead>
  );
};

export const QuestionsHeadLine = () => {
  return (
    <AskQuestionHead>
      <AskQuestionWord>All Questions</AskQuestionWord>
      <Link to="/questions/ask">
        <AskQuestionBtn fontWeight="550" fontSize="13px">
          Ask Question
        </AskQuestionBtn>
      </Link>
    </AskQuestionHead>
  );
};
export const QuestionDetailHeadLine = () => {
  return (
    <SearchResultsHead>
      <Top>
        <SearchResultsWord>Search Results</SearchResultsWord>
        <AdvancedWord>Advanced Search Tips</AdvancedWord>
        <AskQuestionBtn fontWeight="550" fontSize="13px">
          Ask Question
        </AskQuestionBtn>
      </Top>
      <TextBox>
        <Text>Results for react</Text>
        <Text>Search options not deleted</Text>
      </TextBox>
    </SearchResultsHead>
  );
};
export const SearchResultsHeadLine = () => {
  return (
    <SearchResultsHead>
      <Top>
        <SearchResultsWord>Search Results</SearchResultsWord>
        <AdvancedWord>Advanced Search Tips</AdvancedWord>
        <AskQuestionBtn fontWeight="550" fontSize="13px">
          Ask Question
        </AskQuestionBtn>
      </Top>
      <TextBox>
        <Text>Results for react</Text>
        <Text>Search options not deleted</Text>
      </TextBox>
    </SearchResultsHead>
  );
};
